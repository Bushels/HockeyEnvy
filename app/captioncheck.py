"""Flag captions that aren't on screen long enough to read (needs ~0.12 s per word + 0.4 s)."""
import asyncio,os
from playwright.async_api import async_playwright
D=os.path.dirname(os.path.abspath(__file__))
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch();pg=await b.new_page(viewport={'width':1180,'height':820})
        await pg.goto('file://'+D+'/_test.html');await pg.wait_for_timeout(500)
        res=await pg.evaluate("""()=>{const out=[];const orig=window.setCaption;let log=null,clock=0;
          window.setCaption=(w,t)=>{if(log)log.push([clock,t]);orig(w,t);};
          for(const a of Object.values(__he.SYS).filter(x=>x.side==='PP'))for(const k of Object.values(__he.SYS).filter(x=>x.side==='PK')){
            __he.setPair(a.id,k.id);
            for(const pl of __he.playsFor()){log=[];__he.runPlay(pl);let t=0;const dt=1/60;
              while(__he.S.play&&t<70){clock=t;window.tickPlay(dt);window.step(dt);t+=dt;}
              const caps=log.filter(x=>x[1]&&x[1]!=='Watch the setup.');
              for(let i=0;i<caps.length;i++){const end=i+1<caps.length?caps[i+1][0]:t;const dw=end-caps[i][0];const words=caps[i][1].split(/\\s+/).length;
                if(dw<words*0.12+0.4)out.push(`${a.id}|${k.id} ${pl.id}: ${dw.toFixed(1)}s for ${words} words (step ${i}): ${caps[i][1].slice(0,70)}`);}
              log=null;}}
          window.setCaption=orig;__he.resetAll();return out;}""")
        print(len(res),'short captions');print('\n'.join(res))
        await b.close()
asyncio.run(main())
