/* Umbrella power play: P at the point, LF and RF on the half-walls, N net front, L low on the goal line. */
PLAYBOOK['pp-umbrella|pk-diamond']=[
  {id:'umb-dia-around',name:'Diamond takes away the point shot',win:'pk',steps:[
    {do:'pass',to:'RF',wait:0.6,say:'P moves it to RF. Only the near side killer steps out.'},
    {do:'pass',to:'P',wait:0.6,say:'Back to P. The side killer drops back into the diamond.'},
    {do:'pass',to:'LF',wait:0.6,say:'Over to LF. The other side killer steps out. Every killer moves a few feet.'},
    {do:'pass',to:'P',wait:0.6,say:'Back up top. The top killer takes away the middle.'},
    {do:'block',by:'top',wait:0.6,say:'P tries to shoot from the point. The top killer is standing in the lane. Blocked.'},
    {do:'clear',wait:0.3,say:'He chips it past P and out of the zone. Every shooter had a killer on him.'}]},
  {id:'umb-dia-backdoor',name:'L walks out: 2-on-1 down low',win:'pp',steps:[
    {do:'pass',to:'LF',wait:0.6,say:'P to LF. The side killer steps out on LF.'},
    {do:'lag',who:['side_l'],f:0.3,wait:0},
    {do:'pass',to:'L',wait:0.6,say:'LF to L. The side killer stays up high a second too long. Now it’s L and N against the low D.'},
    {do:'move',who:'N',to:[85,-1],wait:0},
    {do:'carry',to:[80,10],wait:0.1,say:'L walks out off the goal line toward the net.'},
    {do:'move',who:'low',to:[79,5],sync:'low',wait:0,say:'The low D has to step up to L or L shoots. That leaves N alone at the crease.'},
    {do:'pass',to:'N',wait:0.2,say:'L slides it to N.'},
    {do:'shot',res:'goal',wait:0.1,say:'Quick shot from the crease. Make the low D choose, then pass to the guy he didn’t take.'}]},
  {id:'umb-dia-backdoor-pk',name:'Diamond high, box low',win:'pk',steps:[
    {do:'pass',to:'LF',wait:0.6,say:'P to LF. L sets up low on LF’s side.'},
    {do:'pass',to:'L',wait:0.8,say:'LF puts it down to L. Puck below the dots: the diamond turns into a box.'},
    {do:'say',wait:0.6,until:'side_r',say:'Near side killer takes L. Low D stays on N. Far side killer covers the back door. Top killer drops to the slot.'},
    {do:'steal',by:'side_l',wait:3.4,say:'N and the back door are both covered. Before L can look up, the side killer jumps him and wins the puck.'},
    {do:'clear',wait:0.4,say:'He fires it up the wall and out.'}]},
  {id:'umb-dia-rebound',name:'Shoot for the 2-on-1 rebound',win:'pp',steps:[
    {do:'move',who:'L',to:[85,10],wait:0.4,say:'L sets up at the far post. N stands on the goalie.'},
    {do:'pass',to:'LF',wait:2.0,say:'P to LF. The side killer steps out.'},
    {do:'pass',to:'P',wait:0.3,say:'LF moves it right back. One-touch passes make all four killers move.'},
    {do:'pass',to:'RF',wait:0.1,say:'P snaps it over to RF before the far side killer gets out. N is in the goalie’s eyes.'},
    {do:'shot',res:'save',wait:0.2,say:'RF one-timer. The goalie kicks it out.'},
    {do:'rebound',to:'L',wait:0.1,say:'The low D is busy with N, so the rebound goes to L.'},
    {do:'shot',res:'goal',wait:0.8,say:'Goal. Down low it’s 2 against 1, so shoot and have two guys at the net.'}]}
];
PLAYBOOK['pp-umbrella|pk-box']=[
  {id:'umb-box-point',name:'Point shot through the screen',win:'pp',steps:[
    {do:'pass',to:'LF',wait:1.0,say:'P to LF. The box forward on that side steps out to him.'},
    {do:'move',who:'L',to:[85,9],wait:0,say:''},
    {do:'pass',to:'P',wait:0.3,say:'Back to P. Three of us up top, only two box forwards, and they are still sliding.'},
    {do:'shot',res:'save',wait:0.1,say:'P one-times it low before the box shifts. N is in the goalie’s eyes.'},
    {do:'rebound',to:'N',wait:0.2,say:'The goalie can’t see it clean. The rebound drops to N.'},
    {do:'shot',res:'goal',wait:0.2,say:'N shoots it in. Shoot from the point and send bodies to the net.'}]},
  {id:'umb-box-low',name:'Box wins the low battle',win:'pk',steps:[
    {do:'pass',to:'LF',wait:0.6,say:'P to LF. The box shifts to that side.'},
    {do:'pass',to:'L',wait:0.8,say:'LF to L on the goal line. The box D closes L from the net side.'},
    {do:'say',wait:0.6,say:'The other box D holds N. The box forward drops to take the pass back to LF.'},
    {do:'steal',by:'dl',wait:2.6,say:'L tries to jam it in front. The box D’s stick is in the lane. Puck won.'},
    {do:'clear',wait:0.4,say:'He fires it off the boards and out. When the puck goes low, the box has 3 on 2.'}]}
];
PLAYBOOK['pp-umbrella|pk-box-aggressive']=[
  {id:'umb-agg-demo',name:'How it works',win:'demo',steps:[
    {do:'say',wait:0.3,say:'Umbrella against the aggressive box. This box attacks. One box forward is already on P.'},
    {do:'pass',to:'RF',wait:1.6,say:'P to RF. The box forward and box D on that side both jump him. The other two guard the net.'},
    {do:'pass',to:'P',wait:0.1,say:'RF gets it back to P right away, before the trap closes.'},
    {do:'pass',to:'RF',wait:0.9,say:'Every pass, two killers race to the puck. The box forward has to skate hard to get back out.'},
    {do:'pass',to:'P',wait:0.1,say:'Quick passes beat the pressure. Hold it too long and you get trapped on the wall.'}]},
  {id:'umb-agg-swing',name:'Beat the pressure, swing it',win:'pp',steps:[
    {do:'pass',to:'RF',wait:1.4,say:'P to RF. The aggressive box attacks: the box forward and the box D both jump RF.'},
    {do:'pass',to:'P',wait:0.1,say:'RF moves it before the trap closes. Right back to P.'},
    {do:'lag',who:['fl'],f:0.35,wait:0,say:''},
    {do:'pass',to:'LF',wait:0.1,say:'The other box forward jumps P. P snaps it past him to LF, who has time and space.'},
    {do:'carry',to:[62,22],wait:0.1,say:'LF steps down into the circle. The box forward is caught up top.'},
    {do:'shot',res:'goal',wait:0.1,say:'Shot with N in the goalie’s eyes. Pressure always leaves someone open: find him fast.'}]},
  {id:'umb-agg-trap',name:'Wall trap',win:'pk',steps:[
    {do:'pass',to:'RF',wait:1.4,say:'P’s pass is in RF’s skates. He turns his back to the play to dig it out. That’s the trigger.'},
    {do:'say',wait:0.2,until:'fr',say:'The box forward attacks him. The box D jumps up the wall. Two on one around the puck.'},
    {do:'steal',by:'fr',wait:2.8,say:'RF is trapped on the wall. The box forward wins the puck.'},
    {do:'clear',wait:1.0,say:'Chip it off the boards and out. The other two killers stayed home in front.'}]}
];
PLAYBOOK['pp-umbrella|pk-wedge-plus-one']=[
  {id:'umb-wdg-demo',name:'How it works',win:'demo',steps:[
    {do:'say',wait:0.3,say:'Umbrella against the wedge + 1. Three killers pack the slot. Only the +1 goes out high.'},
    {do:'pass',to:'LF',wait:1.6,say:'P to LF. The +1 chases out to LF. He stands in the pass back to P.'},
    {do:'pass',to:'L',wait:1.2,say:'LF to L. The wedge D on that side takes L. The other wedge D and the slot forward guard N.'},
    {do:'pass',to:'LF',wait:1.0,say:'Back up to LF. Three killers never leave the house.'},
    {do:'say',wait:1.0,say:'The umbrella can get shots from outside. The wedge makes them go through bodies.'}]},
  {id:'umb-wdg-rover',name:'+1 pulled to one side, far flank fires',win:'pp',steps:[
    {do:'pass',to:'LF',wait:0.6,say:'P to LF. The +1 is the only killer up high, and he chases LF.'},
    {do:'pass',to:'P',wait:0.1,say:'LF goes right back to P. The +1 has to turn and chase.'},
    {do:'lag',who:['press'],f:0.35,wait:0},
    {do:'pass',to:'RF',wait:0.1,say:'P to RF. One +1 can’t get to all three shooters.'},
    {do:'carry',to:[62,-18],wait:0.1,say:'RF steps into the top of the circle. The slot forward is stuck guarding the middle.'},
    {do:'shot',res:'goal',wait:0.1,say:'RF shoots through N’s screen. Goal. Once the +1 picks a side, the other shooters are open.'}]},
  {id:'umb-wdg-block',name:'Shoot through bodies',win:'pk',steps:[
    {do:'pass',to:'LF',wait:0.6,say:'P to LF. The +1 angles him to the wall.'},
    {do:'carry',to:[62,24],wait:0.2,say:'LF walks in to shoot.'},
    {do:'move',who:'top',to:[69,17],wait:0,sync:'top',say:'The slot forward slides into the shooting lane. The wedge D tie up N’s stick.'},
    {do:'block',by:'top',wait:0.1,say:'LF’s shot hits the slot forward’s shin pads.'},
    {do:'clear',to:[24,-22],wait:0.3,say:'He fires it down the ice. Let them shoot from outside, but through a body.'}]}
];
