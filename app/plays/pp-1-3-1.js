/* 1-3-1 power play: P at the point, LF and RF on the half-walls (off-wing), B the bumper in the high slot, N at the net. */
PLAYBOOK['pp-1-3-1|pk-box']=[
  {id:'131-box-bump',name:'Bumper bump to the one-timer',win:'pp',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P moves it to LF on the half-wall. The left box forward comes out to him.'},
    {do:'move',who:'B',to:[66,10],sync:'B',wait:1.3,say:'B slides toward the puck, into the hole between the box forwards and the box D.'},
    {do:'pass',to:'B',wait:1.4,say:'LF hits B in the middle of the box.'},
    {do:'move',moves:[['fr',[59,4]],['dr',[73,-3]]],sync:'dr',wait:0.1,say:'Two killers jump B: the right box forward and the right box D. Nobody is left on RF.'},
    {do:'move',who:'N',to:[83,1],wait:0},
    {do:'move',who:'RF',to:[67,-24],wait:0},
    {do:'pass',to:'RF',wait:0.5,say:'B bumps it right away to RF.'},
    {do:'shot',res:'goal',wait:0.15,say:'RF one-timer from his off-wing. The lane is wide open. Goal.'}]},
  {id:'131-box-middle',name:'Straight down the middle',win:'pp',override:{fl:{PT:[53,12]},fr:{PT:[53,-12]}},steps:[
    {do:'say',wait:1.0,say:'Both box forwards lean out to guard LF and RF. Look at the gap between them.'},
    {do:'lag',who:['fl','fr'],f:0.5,wait:3.2},
    {do:'move',who:'N',to:[82,0],wait:0},
    {do:'pass',to:'B',wait:0.2,say:'P passes straight through the gap to B.'},
    {do:'shot',res:'save',wait:0.4,say:'B shoots right away. N is in the goalie’s eyes.'},
    {do:'rebound',to:'N',wait:0.3,say:'The box D were watching B. The rebound pops to N.'},
    {do:'shot',res:'goal',wait:0.3,say:'N buries the rebound. Goal.'}]},
  {id:'131-box-squeeze',name:'Box squeezes the bumper',win:'pk',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P to LF. The left box forward takes him from the inside, stick in the lane to B.'},
    {do:'move',moves:[['fr',[60,2]],['dl',[74,16]]],sync:'fr',wait:1.4,say:'The right box forward drops onto B. The left box D steps up to take away LF’s shot.'},
    {do:'pass',to:'P',wait:1.6,say:'LF has nothing inside, so he goes back to P.'},
    {do:'free',who:'dl',wait:0},
    {do:'move',who:'fr',to:[41,3],sync:'fr',wait:0.05,say:'The right box forward reads it and jumps out at P.'},
    {do:'block',by:'fr',wait:0.3,say:'P rushes his shot. The box forward blocks it with his shin pads.'},
    {do:'clear',wait:0.8,say:'He clears it down the ice. In Hockey Canada, a team that is shorthanded can ice it.'}]}
];

PLAYBOOK['pp-1-3-1|pk-box-aggressive']=[
  {id:'131-boxa-demo',name:'How it works',win:'demo',steps:[
    {do:'say',wait:0.3,say:'1-3-1 against an aggressive box. Watch how hard the box attacks whoever has the puck.'},
    {do:'pass',to:'RF',wait:1.4,say:'Puck to RF. The right box forward and box D both jump him on the wall.'},
    {do:'pass',to:'B',wait:0.9,say:'RF bumps it to B in the middle. The box shrinks around him.'},
    {do:'pass',to:'LF',wait:0.9,say:'B bumps it to LF. Now the left side attacks.'},
    {do:'pass',to:'B',wait:0.9,say:'Back to B. The forwards squeeze the middle again.'},
    {do:'pass',to:'RF',wait:0.9,say:'Out to RF. Every pass brings pressure. Move it fast.'}]},
  {id:'131-boxa-low',name:'Beat the trap, finish low',win:'pp',steps:[
    {do:'pass',to:'RF',wait:1.0,say:'P to RF. The box attacks: the right box forward and the right box D trap him on the wall.'},
    {do:'move',who:'B',to:[63,-13],sync:'B',wait:0.3,say:'B slides over for a short pass. That is his job when a teammate is pressured.'},
    {do:'move',who:'N',to:[84,-8],sync:'N',wait:0.3,say:'The right box D left the net. N slides into the empty spot by the post.'},
    {do:'pass',to:'B',wait:0.2,say:'RF chips it to B before the trap closes.'},
    {do:'lag',who:['fr','dr'],f:0.3,wait:0},
    {do:'pass',to:'N',wait:0.4,say:'B one-touches it to N.'},
    {do:'shot',res:'goal',wait:0.15,say:'N taps it in before the box can recover. Goal.'}]},
  {id:'131-boxa-trap',name:'Trap on the wall',win:'pk',steps:[
    {do:'pass',to:'RF',wait:1.0,say:'P to RF. RF turns his back to the middle. That is the trigger.'},
    {do:'move',moves:[['fr',[53,-26]],['dr',[64,-32]]],sync:'dr',wait:1.3,say:'One goes, all go: the box forward cuts off the top, the box D comes up the wall.'},
    {do:'steal',by:'fr',wait:1.0,say:'RF tries to throw it back to P. The box forward’s stick is right in the lane.'},
    {do:'carryout',wait:0.6,say:'The 1-3-1 has only P back. The box forward carries it out with speed.'}]}
];

PLAYBOOK['pp-1-3-1|pk-diamond']=[
  {id:'131-dia-softspot',name:'Bumper in the soft spot',win:'pp',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P to LF. The left side killer comes out to him.'},
    {do:'move',moves:[['RF',[80,-18]],['side_r',[76,-13]]],sync:'RF',wait:1.2,say:'RF drops toward the far post. The right side killer follows him down.'},
    {do:'move',moves:[['B',[67,-6]],['low',[84,5]],['N',[85,8]]],sync:'B',wait:1.0,say:'That empties the middle of the diamond. B slides into the soft spot.'},
    {do:'carry',to:[64,27],wait:1.0,say:'LF walks down the wall. The side killer has to go with him.'},
    {do:'move',who:'side_l',to:[71,19],sync:'side_l',wait:0},
    {do:'pass',to:'B',wait:0.5,say:'LF passes into the middle to B.'},
    {do:'shot',res:'goal',wait:0.15,say:'B shoots off the pass. N ties up the low D. Goal.'}]},
  {id:'131-dia-decoy',name:'Bumper decoy, far-side one-timer',win:'pp',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P to LF. LF stares at B.'},
    {do:'move',who:'side_r',to:[64,-6],sync:'side_r',wait:1.2,say:'The right side killer pinches in to cover B. He has left RF.'},
    {do:'lag',who:['top'],f:0.4,wait:0},
    {do:'move',moves:[['RF',[67,-21]],['N',[84,3]]],wait:0},
    {do:'pass',to:'P',wait:1.0,say:'LF goes back to P. The top killer sagged off, so P has time.'},
    {do:'pass',to:'RF',wait:0.05,until:'RF',say:'P one-touches it to RF stepping into the circle.'},
    {do:'shot',res:'goal',wait:0.1,say:'The side killer is stuck in the middle. RF one-timer. Goal.'}]},
  {id:'131-dia-sag',name:'Top killer sags onto the bumper',win:'pk',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P to LF. The left side killer pressures, stick in the lane to the middle.'},
    {do:'move',who:'top',to:[59,1],sync:'top',wait:1.2,say:'The top killer drops into the slot, right on B’s stick.'},
    {do:'pass',to:'P',wait:1.4,say:'Nothing open inside, so LF goes back to P.'},
    {do:'carry',to:[33,9],wait:0.3,say:'P walks along the line to get a lane around the top killer.'},
    {do:'move',moves:[['N',[84,-5]],['low',[81,-2]]],wait:0},
    {do:'shot',res:'save',wait:0.8,say:'P shoots from the blue line. The low D ties up N’s stick so he can’t screen, and the goalie sees it all the way.'},
    {do:'rebound',to:'low',wait:0.4,say:'Easy save. The low D gets to the rebound first.'},
    {do:'clear',wait:0.7,say:'He fires it off the boards and out.'}]},
  {id:'131-dia-lane',name:'Side killer’s stick in the lane',win:'pk',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P to LF. The left side killer comes out, stick on the ice toward the middle.'},
    {do:'say',wait:1.4,say:'B is inside the diamond. The top killer and the far side killer squeeze in on him.'},
    {do:'move',who:'side_l',to:[58,21],wait:0},
    {do:'steal',by:'side_l',wait:3.0,say:'LF forces a pass to B anyway. It hits the side killer’s stick.'},
    {do:'clear',wait:0.7,say:'He clears it off the boards and out.'}]}
];

PLAYBOOK['pp-1-3-1|pk-wedge-plus-one']=[
  {id:'131-wdg-demo',name:'How it works',win:'demo',override:{P:{WALL_L:[33,-16],WALL_R:[33,17]}},steps:[
    {do:'say',wait:0.3,say:'1-3-1 against the wedge + 1. The +1 chases the puck. The slot forward sits on B. The two wedge D guard the net.'},
    {do:'carry',to:[31,6],wait:2.8,say:'P walks the line. The +1 stays in his face, so P can’t shoot.'},
    {do:'pass',to:'LF',wait:1.2,say:'Puck to LF. The +1 goes out to him. The slot forward stays on B.'},
    {do:'free',who:'P',wait:0},
    {do:'say',wait:0.6,say:'The +1 takes away the pass straight back. P slides across so LF can still find him.'},
    {do:'pass',to:'P',wait:2.2,until:'P',say:'LF to P. The +1 races back up top.'},
    {do:'pass',to:'RF',wait:0.9,say:'P to RF. The +1 follows the puck across. B is still covered.'},
    {do:'say',wait:1.4,say:'P slides the other way to get open again.'},
    {do:'pass',to:'P',wait:2.6,until:'P',say:'RF back to P. The wedge stays tight around the net the whole time.'}]},
  {id:'131-wdg-swing',name:'Swing beats the +1',win:'pp',override:{P:{WALL_L:[33,-15]}},steps:[
    {do:'pass',to:'LF',wait:0.8,say:'P to LF. The +1 chases LF and blocks the pass straight back.'},
    {do:'say',wait:1.4,say:'P slides across the line to get out of the +1’s shadow.'},
    {do:'move',moves:[['N',[83,-4]],['dr',[81,1]]],wait:0},
    {do:'pass',to:'P',wait:2.6,say:'LF finds P. The +1 is now behind the play.'},
    {do:'pass',to:'RF',wait:0.05,say:'P one-touches it to RF. The slot forward is stuck on B.'},
    {do:'shot',res:'save',wait:0.1,say:'RF one-timer before the +1 gets across. N screens the goalie, and the wedge D is busy with him.'},
    {do:'rebound',to:'N',wait:0.3,say:'The goalie can’t see it cleanly. The rebound drops to N.'},
    {do:'shot',res:'goal',wait:0.3,say:'N buries it. Goal.'}]},
  {id:'131-wdg-walk',name:'Empty the bumper, flank walks in',win:'pp',steps:[
    {do:'pass',to:'RF',wait:0.8,say:'P to RF. The +1 goes out to him.'},
    {do:'move',who:'B',to:[66,14],wait:1.2,say:'B drifts away from the puck. The slot forward follows him.'},
    {do:'move',who:'top',to:[64,8],wait:0.4},
    {do:'carry',to:[71,-25],wait:2.4,say:'The middle is empty. RF walks down into the circle.'},
    {do:'move',who:'dr',to:[72,-16],sync:'dr',wait:0,say:'The right wedge D leaves the net to stop him.'},
    {do:'move',who:'N',to:[85,-6],wait:0},
    {do:'pass',to:'N',wait:0.4,say:'RF slips it to N at the post.'},
    {do:'shot',res:'goal',wait:0.1,say:'N is alone. Goal.'}]},
  {id:'131-wdg-slot',name:'Slot forward eats the bumper',win:'pk',steps:[
    {do:'pass',to:'LF',wait:0.8,say:'P to LF. The +1 pressures. The slot forward stays tight to B.'},
    {do:'pass',to:'B',wait:1.4,say:'LF forces it into the middle anyway.'},
    {do:'steal',by:'top',wait:0.5,say:'The slot forward is right on B’s back. He lifts the stick and takes it.'},
    {do:'clear',wait:0.8,say:'He clears it down the ice.'}]},
  {id:'131-wdg-giveandgo',name:'Wedge D kills the give-and-go',win:'pk',steps:[
    {do:'pass',to:'LF',wait:0.8,say:'P to LF. The +1 goes out to him.'},
    {do:'pass',to:'B',wait:1.0,say:'LF gives it to B and cuts down the wall for a return pass.'},
    {do:'move',moves:[['LF',[69,24]],['dl',[70,13]]],sync:'dl',wait:0,say:'The left wedge D comes straight out from the post into LF’s path.'},
    {do:'steal',by:'dl',wait:0.4,say:'B’s return pass hits the wedge D’s stick. The other wedge D stays home on N.'},
    {do:'clear',wait:0.8,say:'He clears it off the boards and out.'}]}
];
