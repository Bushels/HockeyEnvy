"""Screenshot a play at given seconds (real-time playback). Usage:
   python3 shotplay.py <tag> <pp-id> <pk-id> <play-id> <t1> [t2 ...]   -> shots_<tag>/<play-id>_<t>.png"""
import asyncio,sys,os
from playwright.async_api import async_playwright
D=os.path.dirname(os.path.abspath(__file__))
tag,pp,pk,pid=sys.argv[1:5];times=[float(x) for x in sys.argv[5:]]
out=os.path.join(D,f'shots{tag}');os.makedirs(out,exist_ok=True)
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch();pg=await b.new_page(viewport={'width':1180,'height':820})
        await pg.goto('file://'+D+f'/_test{tag}.html');await pg.wait_for_timeout(500)
        await pg.evaluate("([a,k,id])=>{__he.setPair(a,k);__he.runPlay(__he.playsFor().find(p=>p.id===id));}",[pp,pk,pid])
        t0=0
        for t in sorted(times):
            await pg.wait_for_timeout(int((t-t0)*1000));t0=t
            path=os.path.join(out,f'{pid}_{t:g}.png');await pg.locator('.rinkcol').screenshot(path=path);print(path)
        await b.close()
asyncio.run(main())
