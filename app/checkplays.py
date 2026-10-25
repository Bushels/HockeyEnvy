"""Run every play headless and report problems. Usage: python3 checkplays.py [pp-id-prefix]"""
import asyncio,json,sys,os
from playwright.async_api import async_playwright
D=os.path.dirname(os.path.abspath(__file__))
only=sys.argv[1] if len(sys.argv)>1 else ''
tag=sys.argv[2] if len(sys.argv)>2 else ''
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch();pg=await b.new_page(viewport={'width':1180,'height':820});errs=[]
        pg.on('pageerror',lambda e: errs.append(str(e)))
        await pg.goto('file://'+D+f'/_test{tag}.html');await pg.wait_for_timeout(500)
        keys=await pg.evaluate("()=>{const out=[];for(const a of Object.values(__he.SYS).filter(x=>x.side==='PP'))for(const k of Object.values(__he.SYS).filter(x=>x.side==='PK'))out.push(a.id+'|'+k.id);return out}")
        for key in keys:
            if only and not key.startswith(only):continue
            a,k=key.split('|')
            rep=await pg.evaluate("""([a,k])=>{__he.setPair(a,k);const L=__he.playsFor();return L.map(pl=>{const r=__he.simPlay(pl);__he.resetAll();return {id:pl.id,win:pl.win,...r}})}""",[a,k])
            n=len(rep)-1
            print(f'== {key}  ({n} plays)')
            for r in rep:
                probs=[]
                for f in r['flights']:
                    if f['kind'] in('pass','rebound') and f['min']<3.0:probs.append(f"{f['kind']} {f['from']}->{f['to']} passes {f['near']} at {f['min']} ft")
                    if f['kind']=='clear' and f['min']<2.5:probs.append(f"clear passes {f['near']} at {f['min']} ft")
                    if f['kind'] in('steal','block') and f['min']<2.5:probs.append(f"{f['kind']} to {f['to']} passes {f['near']} at {f['min']} ft")
                for d in r['diag']:
                    if d['k']=='shot' and d['res']=='goal' and d['judged']=='blocked':probs.append(f"forced goal by {d['by']} but the lane is blocked")
                    if d['k']=='shot' and d['res']=='save' and d['judged']=='blocked':probs.append(f"forced save by {d['by']} but {d.get('blocker')} is in the lane")
                    if d['k']=='shot' and d['res']=='blocked' and d['judged']!='blocked':probs.append(f"forced block on {d['by']} but no killer in the lane")
                    if d['k'] in('steal','block') and d['dist']>14:probs.append(f"{d['k']} by {d['by']} from {d['dist']:.0f} ft away")
                if r['minPair'][0]<2.8:probs.append(f"players overlap {r['minPair']}")
                if r['win']=='pp' and r['end']['result'] not in('goal',):probs.append(f"PP play ends with {r['end']['result']}")
                if r['win']=='pk' and r['end']['result'] not in('cleared','carried','turnover','blocked'):probs.append(f"PK play ends with {r['end']['result']}")
                if r['t']>=69:probs.append('play never finished')
                print(f"  {r['id']:28s} {r['t']:5.1f}s end={r['end']['result']}  "+('OK' if not probs else '; '.join(probs)))
        print('page errors',errs);await b.close()
asyncio.run(main())
