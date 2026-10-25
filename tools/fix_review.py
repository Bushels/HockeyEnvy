"""Apply the independent review's must-fix and should-fix items to the research data (raw.json -> rulebook.json)."""
import json,re,copy
import os
B=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','data')+os.sep
raw=json.load(open(B+'raw.json'));log=[]
S={s['id']:s for s in raw['pp']+raw['pk']}
R=lambda sid:{r['id']:r for r in S[sid]['roles']}
def M(pp,pk):return next(m for m in raw['matchups'] if m['pp']==pp and m['pk']==pk)
TWO_D=(' Youth caution (USA Hockey, Guentzel): developing teams should mostly keep the 5-on-5 shape on the power play, two D and three forwards, rather than specialising a one-D, four-forward unit. '
       'This system puts one D at the point, so at U15 either put your second D on a flank or rotate D through the point. USA Hockey also advises keeping special-teams instruction short until 14U, so teach a few rules, not the whole playbook.')
# M1
u=S['pp-umbrella']
u['u15_note']=('Teachable at U15 if kept to a few rules. USA Hockey says 14U players should work the puck low (half-wall and goal line) quickly for back-door and seam chances, '
  'because kids are rarely a shooting threat from 55 ft. Get the puck to your skilled players and create 2-on-1s.'+TWO_D)
for s in u['sources']:
    if '567732' in s['url']:s['supports']='Pros run umbrella / overload / 1-3-1 looks; for youth, keep two D and three forwards rather than a one-D unit; avoid the 1-3-1 with younger players.'
u['sources']=[s for s in u['sources'] if 'lgsports' not in s['url']];log.append('M1 umbrella u15 + sources')
for sid in ['pp-1-3-1','pp-overload']:S[sid]['u15_note']+=TWO_D
# M2
m=M('pp-umbrella','pk-diamond');m['edge']='PK';m['evidence']='mixed'
m['edge_why']=('Slight edge to the kill by default: the diamond is the classic counter to the umbrella. The power play wins it by going low (2-on-1 below the dots) and into the soft middle. '+m['edge_why'])
m['sources']=[s for s in m['sources'] if 'lbxhockey' not in s['url'] and 'reddit' not in s['url']];log.append('M2')
# M3
d=S['pk-diamond']
d['weaknesses'].insert(0,{'where':'BUMPER / inside the diamond','why':'Nobody is assigned to the middle; the four killers sit on the outline of the shape.','how_exploited':'A player (N, B, or a flank) slides inside; any killer who steps to him frees his man (Han; Tocchet; BenchIQ; The Coaches Site).'})
d['best_against']=[b for b in d['best_against'] if not b.startswith('1-3-1')]
d['weak_against'].insert(0,'1-3-1 and anything with a bumper: the middle is soft (disputed: some sources call the diamond the usual counter to the 1-3-1).');log.append('M3')
# M4
M('pp-1-3-1','pk-diamond')['evidence']='mixed';log.append('M4')
# M5 + generic: right-side option text must name the right flank
for sys in raw['pp']:
    for r in sys['roles']:
        for z,x in r['reactions'].items():
            if not z.endswith('_R'):continue
            for o in x.get('options',[]) or []:
                to=o['to'] if isinstance(o['to'],list) else [o['to']]
                if 'RF' in to and 'LF' not in to:
                    for k in ['play','why']:
                        if 'LF' in o[k] and 'RF' not in o[k]:o[k]=o[k].replace('LF','RF');log.append(f'M5 {sys["id"]}.{r["id"]}.{z}.{k}')
# M7 umbrella reactions for BUMPER and the dots
UR=R('pp-umbrella')
add={'N':{'BUMPER':([62,0],'Has the puck in the soft middle. Shoot or slide it to the open flank.','Every killer has to turn to find you.'),
          'DOT_L':([83,3],'Screen and look for the tip.','A shot from the dot is a tip waiting to happen.'),'DOT_R':([83,-3],'Screen and look for the tip.','A shot from the dot is a tip waiting to happen.')},
     'LF':{'BUMPER':([60,26],'Drop toward the dot, stick loaded.','N in the middle can hit you for a one-timer.'),
           'DOT_L':([69,22],'Has the puck at the dot. Shoot or find the back door.','Closest high-danger shot on your side.'),'DOT_R':([60,24],'Far dot, stick loaded.','The cross-seam pass beats a goalie moving across.')},
     'RF':{'BUMPER':([60,-26],'Drop toward the dot, stick loaded.','N in the middle can hit you for a one-timer.'),
           'DOT_L':([60,-24],'Far dot, stick loaded.','The cross-seam pass beats a goalie moving across.'),'DOT_R':([69,-22],'Has the puck at the dot. Shoot or find the back door.','Closest high-danger shot on your side.')},
     'P':{'BUMPER':([34,0],'Stay high in the middle.','Safety valve if the middle play is stopped.'),'DOT_L':([34,4],'Slide toward the puck.','Pass back up for a shot through traffic.'),'DOT_R':([34,-4],'Slide toward the puck.','Pass back up for a shot through traffic.')},
     'L':{'BUMPER':([86,10],'Hold the goal line for the rebound.','Shots from the middle come off to the side.'),'DOT_L':([86,14],'Low option on the puck side.','If the dot shot is blocked, the puck comes to you.'),'DOT_R':([86,-14],'Low option on the puck side.','If the dot shot is blocked, the puck comes to you.')}}
for rid,zs in add.items():
    for z,(sp,j,w) in zs.items():UR[rid]['reactions'].setdefault(z,{'spot':sp,'job':j,'why':w})
log.append('M7 umbrella BUMPER/DOT')
# S2, S3, S5, S6 diamond side killers
DR=R('pk-diamond')
for side,sg in [('side_l',1),('side_r',-1)]:
    rr=DR[side]['reactions']
    rr['PT']['job']='Protect the middle. Step out only when the pass goes to your flank.';rr['PT']['why']='The top forward owns the lane from the point to the flanks; you own the inside.'
    z='DOT_L' if sg>0 else 'DOT_R';rr[z]['spot']=[73,17*sg]
    z='PT_L' if sg>0 else 'PT_R';rr[z]['spot']=[50,14*sg];rr[z]['job']='Show at the shooter, but stay below the top of the circles.';rr[z]['why']='Caught higher than the circles, you leave a 2-on-1 behind you.'
    z='GL_L' if sg>0 else 'GL_R';rr[z]['spot']=[85,9*sg];rr[z]['job']='On the puck from the inside, between L and the slot. Stick on the pass across the crease.';rr[z]['why']='You followed it down; take away the slot first so the low D can stay on the net-front player.'
log.append('S2/S3/S5/S6 diamond sides')
# S4 crease
for sid,rid,z,sp in [('pk-diamond','low','BEHIND',[82,0]),('pk-box','dl','BEHIND',[86,7]),('pk-box','dr','BEHIND',[86,-7]),('pk-wedge-plus-one','dl','BEHIND',[86,7]),('pk-wedge-plus-one','dr','BEHIND',[86,-7]),('pk-box-aggressive','dr','BEHIND',[82,-2])]:
    R(sid)[rid]['reactions'][z]['spot']=sp
log.append('S4 crease')
# S1 spread vs box
m=M('pp-spread','pk-box');m['edge']='even';m['edge_why']='Even, and disputed. '+m['edge_why'].replace('Inference; slight edge. ','')+' The Coaches Site rates a passive box as good against a static spread, so treat the free middle man as the lever, not a sure thing.'
log.append('S1')
# S8 matchup #7 attribution, S11 handedness
m=M('pp-overload','pk-box');m['u15_note']=m['u15_note'].replace(' (Hockey Canada-style course material recommends starting here)','')
for r in S['pp-overload']['roles']:
    if 'Ovechkin' in r.get('handedness',''):r['handedness']=re.sub(r'\s*\(e\.g\.[^)]*Ovechkin[^)]*\)','',r['handedness'])
# S9 clears stay in play
def walk(o):
    if isinstance(o,dict):return{k:walk(v) for k,v in o.items()}
    if isinstance(o,list):return[walk(v) for v in o]
    if isinstance(o,str):return re.sub(r'off the glass(?! \(in play\))','off the glass (in play)',o)
    return o
raw=walk(raw);S={s['id']:s for s in raw['pp']+raw['pk']}
# M6 one id for the wedge; plain words for role and zone codes in matchup text
for m in raw['matchups']:
    if m['pk']=='pk-triangle1':m['pk']='pk-wedge-plus-one'
ZW={'PT_L':'the left point','PT_R':'the right point','WALL_L':'the left half-wall','WALL_R':'the right half-wall','DOT_L':'the left dot','DOT_R':'the right dot',
    'GL_L':'the left goal line','GL_R':'the right goal line','CORNER_L':'the left corner','CORNER_R':'the right corner','BEHIND':'behind the net','BUMPER':'the high slot','NET':'the net front','PT':'the point'}
RW={'pk-box':{'F_L':'the left box forward','F_R':'the right box forward','D_L':'the left D','D_R':'the right D'},
    'pk-diamond':{'TOP':'the top killer','S_L':'the left side killer','S_R':'the right side killer','LOW':'the low D'},
    'pk-wedge-plus-one':{'PLUS1':'the +1','SLOT':'the slot forward','D_L':'the left D','D_R':'the right D'},
    'pp-overload':{'SP':'P','Q':'H','WS':'W'},'pp-spread':{}}
def words(t,m):
    mp={**RW.get(m['pk'],{}),**RW.get(m['pp'],{})}
    for k in sorted(mp,key=len,reverse=True):t=re.sub(r'(?<![A-Za-z_])'+re.escape(k)+r'(?![A-Za-z_])',mp[k],t)
    for k in sorted(ZW,key=len,reverse=True):t=re.sub(r'(?<![A-Za-z_])(at |to |from |on |in |into )?'+re.escape(k)+r'(?![A-Za-z_])',lambda g:(g.group(1) or '')+ZW[k],t)
    t=re.sub(r'\s*\(\d+(\.\d+)?, ?-?\d+(\.\d+)?\)','',t)  # drop raw coordinates from prose
    return t
for m in raw['matchups']:
    for k in ['edge_why','pp_targets','pk_answers','key_battles','u15_note']:
        if isinstance(m.get(k),str):m[k]=words(m[k],m)
        elif isinstance(m.get(k),list):m[k]=[words(x,m) for x in m[k]]
    for p in m['plays']:p['steps']=[words(x,m) for x in p['steps']];p['teaching_point']=words(p['teaching_point'],m)
log.append('M6 ids + plain words')
json.dump(raw,open(B+'rulebook.json','w'),ensure_ascii=False,indent=1)
print('\n'.join(log))
