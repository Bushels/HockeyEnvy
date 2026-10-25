"""Build special-teams.html from special-teams.src.html + plays/*.js (one file per power play)."""
import glob,os,sys
D=os.path.dirname(os.path.abspath(__file__))
src=open(os.path.join(D,'special-teams.src.html')).read()
plays='\n'.join(open(f).read() for f in sorted(glob.glob(os.path.join(D,'plays','*.js'))))
out=src.replace('/*@@PLAYS@@*/',plays)
tag=sys.argv[1] if len(sys.argv)>1 else ''
if not tag:open(os.path.join(D,'special-teams.html'),'w').write(out)
open(os.path.join(D,f'_test{tag}.html'),'w').write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>[hidden]{display:none!important}body{margin:0}</style></head><body>'+out+'</body></html>')
print('built',len(out))
