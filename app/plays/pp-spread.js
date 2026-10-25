/* Spread (2-1-2) power play: PL and PR on the points, S in the middle of the slot, LL and LR low near the posts.
   Matchup notes in ../hockeyenvy-research/matchups.md (sections 10-12) are marked inference, so captions stay modest.
   Timing note: a step with no puck movement (say, move without sync, lag) does not reset the clock, so the
   step after it uses a longer wait to leave reading time. */
PLAYBOOK['pp-spread|pk-box']=[
  {id:'spr-box-middle',name:'S is free inside the box',win:'pp',intro:'The box has four killers for the four corners. Watch S in the middle.',
    steps:[
    {do:'carry',to:[34,7],wait:0.8,say:'PL walks to the middle of the blue line. The two box forwards spread out to cover both points.'},
    {do:'pass',to:'S',wait:0.4,say:'That opens a gap between them. PL puts it into S. Nobody in the box is assigned to S.'},
    {do:'move',who:'dl',to:[74,0],sync:'dl',wait:0.3,say:'The left box D steps up to stop S from shooting. That leaves LL alone at the post.'},
    {do:'pass',to:'LL',wait:0.6,say:'S slides it past the box D to LL.'},
    {do:'shot',res:'goal',wait:0.2,say:'LL taps it in. When a killer steps up to S, his own man is open.'}]},
  {id:'spr-box-dtod',name:'D-to-D, step-in shot',win:'pp',intro:'The box forwards have to guard S and the points at the same time.',steps:[
    {do:'carry',to:[34,9],wait:0.8,say:'PL walks toward the middle. The right box forward cheats in to take away the pass to S.'},
    {do:'move',who:'fr',to:[61,-1],wait:0},
    {do:'pass',to:'PR',wait:1.0,say:'PL goes D-to-D to PR. The right box forward is still guarding S.'},
    {do:'carry',to:[37,-12],wait:0.1,say:'PR steps into the open ice. Nobody is in his shooting lane.'},
    {do:'move',moves:[['LL',[86,10]],['LR',[86,-10]]],wait:0},
    {do:'shot',res:'save',wait:0.3,say:'PR shoots low. LL and LR are at the posts.'},
    {do:'free',who:'fr',wait:0},
    {do:'rebound',to:'LR',wait:0.2,say:'The goalie can’t hold it. The rebound pops out to LR.'},
    {do:'shot',res:'goal',wait:0.1,say:'LR buries it. Low shots from the point make rebounds for the two low guys.'}]},
  {id:'spr-box-perimeter',name:'Box gives up the point shot',win:'pk',intro:'The box stays in shape and lets the power play shoot from far away.',
    override:{fl:{PT_L:[55,5]}},steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The box slides over. The box forwards guard the passes into S, not the points.'},
    {do:'pass',to:'PL',wait:0.8,say:'Back to PL. The box slides back. Nobody chases.'},
    {do:'move',moves:[['LL',[85,12]],['LR',[85,-11]]],wait:0.6,say:'LL and LR go to the net. The box D stay right on them, sticks on sticks. No screen, no tips.'},
    {do:'shot',res:'save',wait:2.2,say:'PL shoots from way out. The goalie sees it the whole way.'},
    {do:'rebound',to:'dl',wait:0.3,say:'The left box D wins the race to the rebound.'},
    {do:'clear',wait:0.3,say:'He fires it out of the zone. A shot from the blue line is one the box can live with.'}]},
  {id:'spr-box-block',name:'Shrink and block',win:'pk',intro:'The box gets small and dares the points to shoot through it.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The right box forward steps into the shooting lane, not at PR’s body.'},
    {do:'move',who:'fr',to:[44,-13],sync:'fr',wait:0.1},
    {do:'move',moves:[['LL',[85,12]],['LR',[85,-11]]],wait:0.3,say:'The other box forward guards S. LL and LR go to the net, and the box D tie up their sticks.'},
    {do:'block',by:'fr',wait:1.6,say:'PR’s one-timer hits the box forward’s shin pads.'},
    {do:'clear',wait:0.3,say:'He chips it past PR and out. Block it, then clear it.'}]}
];
PLAYBOOK['pp-spread|pk-box-aggressive']=[
  {id:'spr-agg-jump',name:'Jump the slow D-to-D',win:'pk',intro:'The aggressive box attacks the puck. It waits for a slow pass.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The right box forward attacks PR right away.'},
    {do:'pass',to:'PL',wait:0.6,say:'PR moves it back. Now the left box forward attacks PL.'},
    {do:'move',who:'fr',to:[31.5,3],sync:'fr',wait:0.3,say:'The right box forward reads it. He sneaks up into the lane between the two points.'},
    {do:'steal',by:'fr',wait:0.3,say:'PL’s pass across is slow. The box forward picks it off.'},
    {do:'carryout',wait:0.2,say:'He’s gone the other way. A slow D-to-D pass is what the aggressive box waits for.'}]},
  {id:'spr-agg-chase',name:'Make them chase, then hit S',win:'pp',intro:'When a killer chases the puck up high, there is one less killer in front of the net.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The right box forward jumps out at PR.'},
    {do:'lag',who:['fr'],f:0.3,wait:0},
    {do:'pass',to:'LR',wait:0.3,say:'PR bumps it down to LR before he gets there. Now the box forward is stuck up high.'},
    {do:'carry',to:[84,-19],wait:0.1},
    {do:'pass',to:'S',wait:0.2,say:'Only three killers are back. LR finds S in the middle.'},
    {do:'shot',res:'goal',wait:0.2,say:'S shoots before anyone closes. Quick passes beat pressure.'}]}
];
PLAYBOOK['pp-spread|pk-diamond']=[
  {id:'spr-dia-dtod',name:'One top killer, two points',win:'pp',intro:'The diamond has one top killer for two points, and one low D for two low guys.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The top killer can’t cover both points. The right side killer has to climb from the slot.'},
    {do:'carry',to:[37,-9],wait:0.1,say:'PR walks into the middle before he gets there.'},
    {do:'move',moves:[['LL',[86,10]],['LR',[86,-10]],['low',[84,-6.5]]],wait:0},
    {do:'shot',res:'save',wait:0.1,until:'LR',say:'LL and LR both go to the net. The low D takes LR. PR shoots low.'},
    {do:'rebound',to:'LL',wait:0.2,say:'The rebound goes to the far post. The low D can’t get to both posts.'},
    {do:'shot',res:'goal',wait:0.1,say:'LL taps it in. One low D can’t cover two low guys.'}]},
  {id:'spr-dia-slot',name:'Side killer climbs, middle opens',win:'pp',intro:'To cover a point, a side killer has to leave the slot.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The right side killer climbs out of the slot toward PR.'},
    {do:'lag',who:['side_r'],f:0.35,wait:0.4,until:'side_r'},
    {do:'pass',to:'S',wait:1.0,say:'That leaves a hole in the middle. PR puts it into S. The side killer is too far away to get back.'},
    {do:'move',who:'low',to:[76,-1],sync:'low',wait:0.1,say:'The low D has to step up to S. Now LR is alone.'},
    {do:'pass',to:'LR',wait:0.3,say:'S slides it to LR.'},
    {do:'shot',res:'goal',wait:0.2,say:'LR scores. Two points and two low guys is too many for the diamond to cover.'}]},
  {id:'spr-dia-switch',name:'Read it and switch to a box',win:'pk',intro:'Two points and two low? Smart killers change shape.',
    override:{side_l:{PT_L:[49,12],PT:[56,6],PT_R:[58,1]},top:{PT_L:[58,-1],PT:[56,-6],PT_R:[44,-13]},low:{PT_L:[81,8],PT:[82,6],PT_R:[82,3]},side_r:{PT_L:[82,-3],PT:[82,-6],PT_R:[81,-8]}},
    steps:[
    {do:'say',wait:0.4,say:'The killers yell "box!" The left side killer and top killer go high. The right side killer and low D go low.'},
    {do:'pass',to:'PR',wait:2.4,say:'PL to PR. The top killer slides across into PR’s shooting lane.'},
    {do:'block',by:'top',wait:0.6,until:'top',say:'PR’s shot hits him. Behind him, the two low killers have the net covered.'},
    {do:'clear',wait:0.3,say:'He clears it. Read the power play first, then pick your shape.'}]}
];
PLAYBOOK['pp-spread|pk-wedge-plus-one']=[
  {id:'spr-wdg-low',name:'Wedge matches the three inside',win:'pk',intro:'Three killers in front for three power-play guys in front. The +1 bugs the points.',
    override:{dr:{GL_R:[81,-7],CORNER_R:[82,-8]},dl:{GL_R:[83,5],CORNER_R:[83,5]}},steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The +1 chases up top. The slot forward stays on S, and each wedge D has a low guy.'},
    {do:'pass',to:'LR',wait:0.6,say:'PR puts it down to LR.'},
    {do:'move',who:'LL',to:[84,10],wait:0},
    {do:'carry',to:[85,-12],wait:0.2,say:'LR walks out toward the net. The right wedge D closes him from the inside.'},
    {do:'say',wait:0.3,say:'The left wedge D has LL at the back post. The slot forward drops in front. The +1 takes S.'},
    {do:'steal',by:'top',wait:2.0,say:'LR tries to pass across. The slot forward gets his stick on it.'},
    {do:'clear',wait:0.3,say:'He clears it. Three in front against three inside: every pass in tight is covered.'}]},
  {id:'spr-wdg-point',name:'Point shot, two low crash',win:'pp',intro:'The wedge shuts the inside, so the spread shoots from the point.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The +1 chases over. The wedge matches S, LL and LR.'},
    {do:'move',moves:[['LR',[83,1.5]],['LL',[87,11]]],wait:0},
    {do:'pass',to:'PL',wait:0.4,say:'PR goes right back across. The +1 can’t get to both points. LL and LR head for the net.'},
    {do:'shot',res:'save',wait:0.05,say:'PL one-times it low. LR is in the goalie’s eyes.'},
    {do:'rebound',to:'LL',wait:0.2,say:'The rebound kicks out. LL is at the post.'},
    {do:'shot',res:'goal',wait:0.1,say:'Goal. Against the wedge, shoot from the point and send two guys to the net.'}]},
  {id:'spr-wdg-jump',name:'+1 jumps the slow pass',win:'pk',intro:'The +1 only has to make the two points hurry.',steps:[
    {do:'pass',to:'PR',wait:0.8,say:'PL to PR. The +1 angles PR and keeps his stick in the lane between the points.'},
    {do:'pass',to:'PL',wait:0.8,say:'Back to PL. The +1 follows.'},
    {do:'move',who:'press',to:[31.5,4],sync:'press',wait:0.3,say:'PL holds it too long. The +1 cheats into the passing lane.'},
    {do:'steal',by:'press',wait:0.3,say:'The slow pass across hits his stick.'},
    {do:'carryout',wait:0.2,say:'He takes it out the other way. The +1’s job: make the points hurry.'}]}
];
