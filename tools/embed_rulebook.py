"""Copy data/rulebook.json into the app source (the page carries the rulebook inline as `const DATA=`)."""
import json,os
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')
rb=json.load(open(os.path.join(R,'data','rulebook.json')))
data=json.dumps({'pp':rb['pp'],'pk':rb['pk'],'mu':rb['matchups']},ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
f=os.path.join(R,'app','special-teams.src.html');s=open(f).read()
i=s.index('const DATA=')+len('const DATA=');j=s.index(';\nconst CHIP=',i)
open(f,'w').write(s[:i]+data+s[j:]);print('embedded rulebook into',f)
