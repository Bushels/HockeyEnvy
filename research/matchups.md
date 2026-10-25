# HockeyEnvy: power play vs penalty kill matchups (12 cells)

Coordinates, puck zones and record format follow `SCHEMA.md`. **+y = the PP's LEFT side.** Left and right are always from the PP's view.

## Summary grid

| PP \ PK | **Box (2-2)** | **Diamond (1-2-1)** | **Triangle + 1 / Wedge + 1 (1-1-2)** |
|---|---|---|---|
| **Umbrella** (P, 2 flanks, N, L) | **PP**: 3 high shooters vs 2 high killers, so a point or flank shot is always open through N's screen. *[mixed]* | **even**: The diamond matches the 3 high shooters man-for-man (it is the textbook counter). The umbrella has to win its 2-on-1 below the dots (N + L vs the low killer). *[well-sourced]* | **even**: The triangle concedes the 3 high shooters and owns the slot 3-on-2. The PP gets volume from outside; the kill gets the house. *[mixed]* |
| **1-3-1** (P, 2 flanks, bumper, N) | **PP**: The bumper sits inside the box between its two layers, so every box player faces a 2-option choice. *[well-sourced]* | **PP**: Every player is man-for-man except the bumper, who is free inside the diamond. *[well-sourced]* | **even**: The slot forward takes the bumper and the D own the net. The PP lives on flank one-timers if it beats the forwards' switch. *[well-sourced]* |
| **Overload** (strong-side triangle + N + weak-side shooter) | **even**: The box is the classic answer. It shifts to the puck and gives up the perimeter. The PP's chances come from low-to-high and the weak-side one-timer or back door when the box over-shifts. *[mixed]* | **PP**: One low killer can't cover L and N, and the diamond's balanced shape wastes a man on the empty weak side. *[inference]* | **even**: The +1 is alone against the strong-side triangle, but the slot is packed. The weak-side shooter is the PP's best look. *[mixed]* |
| **Spread / 2-1-2 / box+1** (2 points, slot, 2 low) | **PP (slight)**: The box mirrors the 2-2, leaving the middle man (S) free inside it. Any killer who steps to S frees someone. *[inference]* | **PP**: 2 points vs 1 top killer and 2 low vs 1 low killer, so the diamond is the wrong shape. *[inference]* | **PK (slight)**: The triangle matches S + 2 low 3-on-3, and the +1 only has to slow the 2 points (low-danger shots). *[inference]* |

Evidence tags: **well-sourced** = a coaching or tactical source discusses this exact pairing. **mixed** = a source covers one side's strengths or weaknesses and I applied it to the pairing. **inference** = worked out from the geometry, labelled as such in the record.

## Role legend (used in every `plays[].steps`)

The role IDs below are this file's own. If the per-system records use different IDs, map them 1-to-1. Base spots are approximate, in (x, y) feet.

**Power plays** (default strong side = LEFT; mirror for right)
- **Umbrella** `pp-umbrella`: **P** point (32,0) · **LF** left flank (54,31) · **RF** right flank (54,-31) · **N** net front (82,0) · **L** low/goal-line player (86,14) = GL_L.
- **1-3-1** `pp-1-3-1`: **P** (32,0) · **LF** (54,31) · **RF** (54,-31) · **B** bumper (62,0) · **N** (82,0).
- **Overload** `pp-overload`: **SP** strong point (30,16) = PT_L · **Q** half-wall quarterback (54,31) = WALL_L · **L** low/goal line (86,18) GL_L→CORNER_L · **N** (82,0) · **WS** weak-side shooter (52,-24), drifts to DOT_R (69,-22) for one-timers. Some teams keep WS at the weak point (30,-16).
- **Spread / 2-1-2** `pp-spread`: **PL** left point (30,16) · **PR** right point (30,-16) · **S** middle/slot (64,0) · **LL** left low (84,12) · **LR** right low (84,-12).

**Penalty kills** (L/R = which side of the PP's view they defend)
- **Box** `pk-box`: **F_L** (48,10) · **F_R** (48,-10) · **D_L** (76,9) · **D_R** (76,-9). Passive = hold shape, sticks in lanes. Aggressive = the nearest corner attacks on triggers.
- **Diamond** `pk-diamond`: **TOP** forward (44,0) · **S_L** side (58,16) · **S_R** side (58,-16) · **LOW** D (80,0). Usually one side is the other F and one is a D.
- **Triangle + 1** `pk-triangle1`: **PLUS1** top forward/rover (42,0) · **SLOT** bottom forward (64,0) · **D_L** (79,8) · **D_R** (79,-8). The Wedge + 1 has the same three-in-front plus a chaser. The "expanded" version lets the weak-side man jump D-to-D passes.

**Rules note for the app:** Hockey Canada (Alberta) does not call icing on the shorthanded team, so "clear the zone" plays are legal. USA Hockey calls icing on shorthanded teams at 14U and younger (per Wikipedia). Please verify both against the current rulebooks before the app states it as fact. None of the plays below rely on body checking.

---

## 1. Umbrella vs Box

```json
{
  "pp": "pp-umbrella", "pk": "pk-box",
  "edge": "PP",
  "edge_why": "Up top it is 3 (P, LF, RF) against 2 high box forwards, so one shooter is always uncovered if the puck moves quickly. Down low it is 2 (N, L) against 2 D, a stalemate, so the PP's goals come from shots out high through N's screen and from L/N rebounds. A box gives up the outside by design and has few ways to pressure the perimeter.",
  "evidence": "mixed",
  "pp_targets": [
    "The uncovered high shooter. With the puck at a flank, the weak-side box forward has to choose between the point and the weak flank, and whichever he leaves gets the shot.",
    "Point shot through a screen. N stands on the goalie's eyes and L attacks the rebound from GL_L. A box doesn't take away the point, it only blocks lanes.",
    "The weak-side flank one-timer at DOT_R after a quick P-to-RF swing. The weak-side box forward is still in the middle when it arrives.",
    "The seam between the box's forward layer and D layer (the high slot) if N slides up out of the crease (inference)."
  ],
  "pk_answers": [
    "Passive box: shrink to the slot, keep sticks in the P-to-flank lanes, block shots, and let the D box out N and tie up L's stick. Give up the low-danger point shot, never the one-timer from the dot.",
    "Strong-side forward pressures the puck from the inside out. The weak-side forward slides to the middle to take the pass back to P and shades toward the weak flank.",
    "Aggressive box on triggers only (bobble, back turned, puck rimmed to the wall): the nearest corner attacks and a second killer closes the escape pass, making a 3-on-1 around the puck.",
    "Many coaches switch the box to a diamond as soon as the PP sets up an umbrella, because the box is outnumbered up top."
  ],
  "key_battles": [
    "Weak-side box forward vs P + RF (a 1-on-2 he has to manage with stick and body angle)",
    "Box D vs N on screens and tips (box out without taking a penalty)",
    "Strong-side D vs L on the goal line (stick on stick, deny the pass to N)"
  ],
  "plays": [
    {"name": "Point shot through the screen", "winner": "PP",
     "steps": ["LF holds the puck at WALL_L; F_L steps toward him", "LF to P at PT", "F_R is late sliding across; P walks two strides toward PT_R to open a new lane", "N plants at NET on the goalie's eyes while D_R tries to move him", "P shoots low to the far pad", "L jumps from GL_L to the crease for the rebound"],
     "teaching_point": "Three high against two means the shot is there if the puck moves before the forwards shift. Shoot low and have bodies arriving."},
    {"name": "Swing to the weak-side flank", "winner": "PP",
     "steps": ["LF at WALL_L passes to P at PT", "F_L and F_R both pinch toward P", "P one-touches to RF stepping into DOT_R", "F_R can't recover from the middle", "RF one-timer while N screens and L crashes the back post"],
     "teaching_point": "Make the weak-side forward pick one: if he takes the point, the flank is open."},
    {"name": "Bobble at the point, aggressive box pounces", "winner": "PK",
     "steps": ["RF to P at PT; the pass rolls and P bobbles it", "F_R attacks P hard, stick to puck", "F_L closes the P-to-LF lane", "D_L and D_R stay home on N and L", "F_R chips the puck past P into the neutral zone and races for it", "Clear, or a shorthanded chance while P chases"],
     "teaching_point": "Attack on a trigger (bobble or back turned), not on every pass. One goes, a second closes the escape, and the D stay home."},
    {"name": "Box wins the low battle", "winner": "PK",
     "steps": ["LF to L at GL_L", "D_L closes L from the net side, stick in the lane to NET", "D_R holds N in front", "F_L drops to the strong-side dot to take L's pass back to LF", "L's pass to N hits D_R's stick", "D_L pins L on the wall; F_L picks up the loose puck and fires it down the ice"],
     "teaching_point": "When the puck goes low, two D plus a dropping forward outnumber the umbrella's two low players."}
  ],
  "u15_note": "The box is the easiest kill to teach and the most common at U15. Against an umbrella it bleeds point shots, so teach shot-blocking technique (on one knee only if the PK's coach allows it) and sticks in lanes. Teach the umbrella to shoot fast, not pass forever.",
  "sources": [
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "umbrella outnumbers the PK high, point shots with low screeners and rebounds"},
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "passive box gives little perimeter pressure and is prone to seams between the F and D layers"},
    {"title": "How to Play Hockey Module 5: Special Teams (course index)", "url": "https://lgsports.ca/?p=8784", "supports": "PK switches from box to diamond when the PP sets up an umbrella or carries to the middle"},
    {"title": "Penn State discusses the art of the kill (Daily Collegian)", "url": "https://www.psucollegian.com/sports/men_hockey/penn-state-discusses-the-art-of-the-kill/article_e5280fe2-476f-11e3-8cd7-001a4bcf6878.html", "supports": "aggressive box: converge 3-on-1 when the carrier's back is turned; risk of being outnumbered"},
    {"title": "Weiss Tech Hockey: umbrella tag / Winnipeg Jets PK", "url": "https://weisstechhockey.com/tag/umbrella/", "supports": "the umbrella needs a more complex PK structure than the simple box"}
  ]
}
```

## 2. Umbrella vs Diamond (v1, deepest record)

```json
{
  "pp": "pp-umbrella", "pk": "pk-diamond",
  "edge": "even",
  "edge_why": "The diamond was built for this: TOP takes P, S_L takes LF, S_R takes RF, so the umbrella's three high shooters are matched 3-on-3 and the point shot is taken away. The price is below the dots: N and L against one LOW killer is 2-on-1, and the middle of the diamond (between the sides and LOW) is empty. If the umbrella stays high and passes around the outside, the kill wins. If it uses L and N low and lets N pop into the soft middle, the PP wins.",
  "evidence": "well-sourced",
  "pp_targets": [
    "2-on-1 below the dots. L at GL_L plus N against LOW: whoever LOW doesn't take is open (L walking out, N at the back post).",
    "The empty middle of the diamond. N (or a flank) slides into the high slot or bumper area inside the four killers. LOW won't leave the crease to follow and the sides are on the outside.",
    "The flank walking downhill. If S_L pressures high, LF walks under him toward DOT_L and forces LOW or S_L to choose.",
    "Weak-side flank one-timer and back door. The weak-side side killer (S_R) has to cover both RF and the seam, and he can't do both against quick puck movement.",
    "The diamond moves three players on every pass, so fast one-touch passing opens seams during the rotation."
  ],
  "pk_answers": [
    "Set the diamond as soon as the puck reaches P. TOP stays in the shooting lane and doesn't chase side to side (TOP often alternates with a linemate because chasing is exhausting).",
    "Puck at a flank: the strong-side killer pressures from the inside with his stick in the lane to the middle. TOP sags to take the return pass to P. The weak-side killer pinches into the seam/middle. LOW owns N.",
    "Puck goes low (L at GL_L or behind): collapse into a box. The strong-side killer drops to L's side, LOW stays on N, the weak-side killer drops to the back post, and TOP drops into the high slot ('diamond high, box low').",
    "Pressure triggers: P bobbles (TOP attacks); puck rimmed to a flank with his back turned (strong-side killer attacks while TOP closes the pass back to P); loose puck below the goal line (strong-side killer and LOW go 2-on-1, the weak side protects the slot).",
    "The side players must not get caught too high. Pressuring past the top of the circle leaves 2-on-1s in the low slot."
  ],
  "key_battles": [
    "LOW vs N + L (the whole matchup turns on this 1-on-2)",
    "TOP vs P (take the shooting lane and keep P from walking the middle without getting dragged side to side)",
    "S_L vs LF (stick in the lane to the middle, don't let him walk downhill)",
    "S_R vs RF and the back door (has to read the weak side and the seam at once)"
  ],
  "plays": [
    {"name": "L comes out, back door", "winner": "PP",
     "steps": ["P to LF at WALL_L; S_L steps out to pressure", "LF to L at GL_L", "L takes two strides out from the goal line toward the post; LOW has to step to him", "N slides off the crease to the back post (84,-5)", "S_R is late collapsing from the weak side", "L slides the puck across the crease to N for the tap-in"],
     "teaching_point": "Below the dots it is 2-on-1. Make LOW choose, then pass to whoever he didn't take."},
    {"name": "N pops into the soft middle", "winner": "PP",
     "steps": ["P to LF at WALL_L; S_L pressures, TOP shades the pass back to P", "N slides up from NET into BUMPER, inside the diamond; LOW holds the crease and won't follow", "LF hits N in the middle", "S_R pinches to N, which leaves RF", "N one-touches to RF at DOT_R", "RF one-timer while L crashes the far post for a rebound"],
     "teaching_point": "The four killers stand on the outline of the diamond, so the inside is empty. One player there makes two killers choose."},
    {"name": "Flank walks downhill", "winner": "PP",
     "steps": ["P to LF at WALL_L", "S_L comes out high to pressure", "LF steps under S_L's stick and walks downhill toward DOT_L", "LOW leaves the crease a step to take away the shot", "LF slips the puck to N at NET (or L at GL_L) for a quick shot", "S_R collapses too late"],
     "teaching_point": "When a side killer comes out high, attack the space behind him. The diamond has only one man low to help."},
    {"name": "Diamond takes away the top", "winner": "PK",
     "steps": ["P to LF at WALL_L", "S_L pressures from inside with his stick in the lane to N and the middle", "TOP drops into the LF-to-P lane", "LF forces a cross-ice pass toward RF", "S_R is already in the lane and gets a stick on it", "Loose puck; S_R or TOP fires it down the ice"],
     "teaching_point": "Every high shooter has a killer on him. Sticks in lanes turn the umbrella's favourite pass into a clear."},
    {"name": "Diamond high, box low", "winner": "PK",
     "steps": ["LF to L at GL_L", "S_L drops down onto L, staying between L and the net", "LOW stays on N; S_R drops to the back post; TOP drops into BUMPER", "L looks to N (blocked by LOW), back door (blocked by S_R) and up to LF (TOP's lane)", "L forces a pass up the wall; S_L wins the puck", "Clear off the glass"],
     "teaching_point": "When the puck goes low the diamond becomes a box, so the 2-on-1 down low becomes 3-on-2 for the kill."},
    {"name": "Trap the rim", "winner": "PK",
     "steps": ["P rims the puck along the boards to LF at WALL_L", "LF has to turn his back to receive it (trigger)", "S_L attacks immediately and pins the puck on the wall", "TOP closes the pass back to P", "S_R slides to the middle, LOW holds N", "The loose puck pops out; TOP clears it to the neutral zone"],
     "teaching_point": "A rimmed puck with the receiver's back turned is the diamond's signal to attack. Two killers go, two stay home."}
  ],
  "u15_note": "The diamond needs constant rotation, which is hard for 13-14 year olds. Teach it with one rule per player (TOP: shooting lane; sides: stick in the middle lane; LOW: never leave N) plus one switch rule (puck below the goal line, become a box). For the PP side, the single most teachable weapon is L: get the puck low and make LOW choose.",
  "sources": [
    {"title": "Tactical Formations: Penalty Kill (Silver Seven)", "url": "https://silversevensens.com/tactical-formations-penalty-kill", "supports": "diamond is most effective against the umbrella; players step out on nearby puck carriers and others rotate"},
    {"title": "r/hockey wiki: On-ice strategies (mirror)", "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies", "supports": "the diamond is what the umbrella usually faces; the diamond can collapse to the slot or press the three high shooters; seams at the top of the circles and in the low slot"},
    {"title": "NHLers discuss the evolution of power plays and penalty killing (Globe and Mail)", "url": "https://theglobeandmail.com/sports/hockey/article-nhlers-discuss-the-evolution-of-power-plays-and-penalty-killing", "supports": "the diamond is designed to take away the PP quarterback and the forwards on the boards"},
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "diamond roles; three players move on every pass, opening seams; weak against a middle player"},
    {"title": "Senators remain loyal to struggling penalty kill formation (The Hockey News)", "url": "https://thehockeynews.com/ottawa-senators/latest-news/senators-remain-loyal-to-struggling-penalty-kill-formation", "supports": "outside killers caught too high leave 2-on-1s in the low slot; the diamond concedes distance shots"},
    {"title": "Power Play: Manipulating the PK diamond (The Coaches Site, preview)", "url": "https://members.thecoachessite.com/article/power-play-manipulating-the-pk-diamond", "supports": "a player sliding into the unchecked soft spot inside the diamond; pulling a killer low opens the seam"},
    {"title": "Panthers' diamond PK vs Bruins' 1-3-1 (IceHockeySystems)", "url": "https://icehockeysystems.com/coaching-clip/panthers-diamond-penalty-kill-vs-bruins-1-3-1-power-play", "supports": "set the diamond when the puck is at the top; edges collapse to the middle when the puck goes low"},
    {"title": "1-1-2 Penalty Kill is the Worst Set-up in Hockey (LBX Hockey)", "url": "https://lbxhockey.substack.com/p/1-1-2-penalty-kill-is-the-worst-set", "supports": "teams play the diamond when the puck is high and the box when it is low"},
    {"title": "The 1-3-1 power play (Pension Plan Puppets)", "url": "https://pensionplanpuppets.com/the-1-3-1-power-play-leafs-analysis", "supports": "the high diamond forward alternates with a linemate because chasing is tiring"},
    {"title": "HockeyShare: Penalty Kill - Diamond (Aggressive)", "url": "https://www.hockeyshare.com/drills/print/95316", "supports": "middle points stay parallel to the puck; collapse when the puck gets inside"}
  ]
}
```

## 3. Umbrella vs Triangle + 1

```json
{
  "pp": "pp-umbrella", "pk": "pk-triangle1",
  "edge": "even",
  "edge_why": "The triangle + 1 gives the umbrella what it is built for: one rover (PLUS1) against three high shooters. But the triangle (SLOT, D_L, D_R) is 3-on-2 against N and L in front, so most of the PP's looks are from outside the dots through traffic. The PP has the edge if its flanks one-time quickly with N screening. The kill has the edge if the PP circles the perimeter without shooting. Sources disagree on which way it leans: Han calls the triangle + 1 the best high-danger protection, while Weiss says an umbrella needs a more complex kill than a basic wedge + 1.",
  "evidence": "mixed",
  "pp_targets": [
    "Shot volume from P and the flanks. PLUS1 can't cover three shooters, so shoot quickly before SLOT gets into the lane.",
    "The weak-side flank one-timer at DOT_R when PLUS1 has committed to the strong side and SLOT is guarding the middle.",
    "A second net-front body. L moves from GL_L to beside N, putting two bodies at the crease against the two D, which forces the wedge to give up a lane or a screen.",
    "Rebounds. The triangle blocks a lot of shots, so L and N must win second pucks."
  ],
  "pk_answers": [
    "PLUS1 angles P toward one side (from the middle out) and lives in the P-to-flank lanes rather than chasing the puck.",
    "SLOT takes the weak-side flank's shooting lane and the middle. He and PLUS1 swap if the puck swings point-to-flank-to-flank, and the swap timing is the hard part.",
    "The two D box out N and L and tie up sticks. In the Wedge + 1, the corner nearest the puck challenges the carrier and the other three stay in front.",
    "Trigger to hunt: P bobbles, or a flank receives with his back turned. PLUS1 attacks and SLOT jumps the next lane (the 'expanded' version).",
    "If the umbrella stacks two at the net, the coach either switches kills or accepts that one passing lane will be open."
  ],
  "key_battles": [
    "PLUS1 vs P (angle him, deny the walk to the middle)",
    "SLOT vs the weak-side flank (be in the lane before the puck arrives)",
    "D vs N and L screens and rebounds"
  ],
  "plays": [
    {"name": "Rover pulled, weak flank fires", "winner": "PP",
     "steps": ["P to LF at WALL_L", "PLUS1 chases out to LF", "LF straight back to P at PT (now open)", "P one-touches to RF stepping into DOT_R", "SLOT is in the middle guarding N and is late to RF's lane", "RF one-timer through N's screen; L attacks the rebound"],
     "teaching_point": "Once the rover commits to one flank, the other two high players are 2-on-1 against SLOT."},
    {"name": "Two at the net, point shot", "winner": "PP",
     "steps": ["RF to P at PT", "L slides from GL_L up beside N at NET (two bodies at the crease)", "D_L and D_R are both busy with a body", "P walks laterally to shift PLUS1 off the lane", "P shoots low; N or L tips it or scores the rebound"],
     "teaching_point": "A second body at the net uses up both D, and the wedge has no one left for the rebound."},
    {"name": "Make them shoot through bodies", "winner": "PK",
     "steps": ["PLUS1 angles P from the middle toward PT_L", "P passes to LF at WALL_L", "SLOT slides into LF's shooting lane; D_L ties up N's stick", "LF's one-timer hits SLOT's shin pads", "PLUS1 is first to the loose puck and fires it the length of the ice"],
     "teaching_point": "Let them shoot from outside, but through a body, with the D tying up sticks in front."},
    {"name": "Rover hunts the bobble", "winner": "PK",
     "steps": ["RF to P with a wobbling pass; P bobbles it", "PLUS1 attacks P at full speed", "SLOT jumps up into the P-to-LF lane", "The puck squirts past P toward the neutral zone", "PLUS1 wins the race: clear or shorthanded breakaway"],
     "teaching_point": "The rover only hunts on a trigger. When he goes, SLOT takes the next pass."}
  ],
  "u15_note": "Triangle + 1 needs smart, fast forwards and a lot of reps to time the forward swap. A simpler U15 version: PLUS1 only angles (never chases), SLOT never leaves the high slot, and the D own the crease. For the umbrella, the lesson is 'shoot with traffic'.",
  "sources": [
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "triangle+1 setup; +1 covers the three lowest-percentage threats; 3-on-2 slot overload; swap timing; early swap opens the weak-side one-timer; hard to coach"},
    {"title": "Weiss Tech Hockey: Penalty Kill Wedge +1", "url": "https://weisstechhockey.com/penalty-kill-wedge-1/", "supports": "closest corner challenges, three stay in front; force vs contain; weak side watches the back door"},
    {"title": "Weiss Tech Hockey: PK tag (Expanded Wedge +1)", "url": "https://weisstechhockey.com/tag/pk", "supports": "a second net-front body forces the wedge to switch systems or give up a passing lane"},
    {"title": "Weiss Tech Hockey: umbrella tag", "url": "https://weisstechhockey.com/tag/umbrella/", "supports": "the umbrella needs a more complex PK than the simple box or wedge+1"},
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "umbrella built for hard point shots with low screens and rebounds"}
  ]
}
```

## 4. 1-3-1 vs Box

```json
{
  "pp": "pp-1-3-1", "pk": "pk-box",
  "edge": "PP",
  "edge_why": "The box puts two forwards high against one point (one of them is wasted) and leaves the bumper standing inside the box, between the forward layer and the D layer. The flanks sit outside the box's corners. Every box player is in a triangle (P-flank-bumper or flank-bumper-N) and can only take one option. Coaching sources call the 1-3-1 very effective against the box, and Han says a passive box fails against a well-run 1-3-1.",
  "evidence": "well-sourced",
  "pp_targets": [
    "The bumper (B) inside the box. Pass to him through the gap between the two high forwards, or from a flank into the high slot.",
    "Bumper bump to the weak-side flank one-timer once the weak-side box forward pinches to B.",
    "The seam between the box's forward layer and D layer at the dots.",
    "N on rebounds and tips; the box D are busy deciding whether to step up to B."
  ],
  "pk_answers": [
    "Turn the box into a diamond: one forward takes P and the other drops onto B. Han notes the diamond is also weak against a bumper, so this only shifts the problem.",
    "Shade the box to the puck side and keep sticks in the flank-to-B lane rather than on the flank's body.",
    "Strong-side D steps up only when the flank walks downhill into the dot. The weak-side D holds N.",
    "Attack the lone point on triggers. The 1-3-1 has only P back, so a turnover there is a shorthanded breakaway."
  ],
  "key_battles": [
    "Weak-side box forward vs B and the weak flank (the critical 1-on-2)",
    "F nearest P vs P (pressure the only man back on a bobble)",
    "D vs N (rebounds and screens)"
  ],
  "plays": [
    {"name": "Bumper bump to the one-timer", "winner": "PP",
     "steps": ["P to LF at WALL_L; F_L steps out to LF", "B slides a step toward the puck in the high slot between the box layers", "LF to B", "F_R pinches in on B", "B one-touches to RF at DOT_R", "RF one-timer; N screens and hunts the rebound"],
     "teaching_point": "The bumper makes a box player choose. Bump it to whoever he left."},
    {"name": "Straight down the middle", "winner": "PP",
     "steps": ["P carries to PT; F_L and F_R both widen toward the flank lanes", "P passes straight through the gap between them to B at BUMPER", "D_L and D_R hesitate to leave N", "B turns and shoots, or slips the puck to N for a tip"],
     "teaching_point": "When the box forwards guard the flanks, the lane between them leads straight to the slot."},
    {"name": "Box squeezes the bumper, flank forced wide", "winner": "PK",
     "steps": ["P to LF at WALL_L", "F_L takes LF from inside, stick in the lane to B", "F_R drops onto B (the box becomes a diamond)", "D_L steps a stride toward the dot to take LF's shot lane", "LF has to go back to P; F_R reads it and jumps out", "P's rushed shot is blocked and cleared"],
     "teaching_point": "Take away the bumper first and make them go around the outside."},
    {"name": "Lone point, breakaway", "winner": "PK",
     "steps": ["RF to P at PT; the pass is behind P and he has to reach", "F_R attacks immediately (trigger: bobble at the line)", "The puck squeezes past P at the blue line", "F_R is alone with no PP player back", "Shorthanded breakaway"],
     "teaching_point": "The 1-3-1 has one player back. A bobble at the point is the box's best chance to score."}
  ],
  "u15_note": "The box is the default U15 kill, so a well-run 1-3-1 is a real weapon at this age. Reinforce the bumper's job (move to an open lane, shoot or one-touch quickly) and the point's job (safe passes, no blind cross-ice passes at the line).",
  "sources": [
    {"title": "r/hockey wiki: On-ice strategies (mirror)", "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies", "supports": "1-3-1 is strong against the box; four passing triangles; the last man is exposed"},
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "box is vulnerable to the middle bumper and seams between the F and D layers; falls short against a well-run 1-3-1"},
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "1-3-1 forces killers to the middle; exposed to blue-line turnovers"},
    {"title": "The 1-3-1 power play (Pension Plan Puppets)", "url": "https://pensionplanpuppets.com/the-1-3-1-power-play-leafs-analysis", "supports": "four triangles; risk of a breakaway off an aggressive poke at the lone point"},
    {"title": "Flyers bumper power play explained (Philadelphia Inquirer)", "url": "https://www.inquirer.com/flyers/flyers-bumper-power-play-explained-owen-tippett-20251028.html", "supports": "bumper role: tap passes, shoot from the high-danger spot, draw defenders"}
  ]
}
```

## 5. 1-3-1 vs Diamond

```json
{
  "pp": "pp-1-3-1", "pk": "pk-diamond",
  "edge": "PP",
  "edge_why": "TOP-P, S_L-LF, S_R-RF and LOW-N are matched man-for-man, and the bumper is the free fifth player standing inside the diamond. Someone has to leave his man to take B. If TOP sags, P gets a shot. If a side pinches, his flank is open. If LOW steps up, N is open at the crease. Han calls the diamond a poor geometric answer to a 1-3-1, and Flyers coach Tocchet calls the bumper the way to beat it. A well-drilled diamond can still hold up (Panthers clip).",
  "evidence": "well-sourced",
  "pp_targets": [
    "B in the soft spot between the dots, inside the diamond.",
    "Pull a side killer low: the weak-side flank drops toward the post, his killer follows, and B slides into the space he left.",
    "'Emptying the bumper': B drifts out of the slot to drag a killer, then someone else fills the hole.",
    "Weak-side flank one-timer when S_R pinches onto B."
  ],
  "pk_answers": [
    "TOP sags to the bumper whenever the puck is on a flank and concedes the point shot from distance.",
    "Strong-side side killer pressures the flank's forehand with his stick in the lane to B. The weak-side side killer guards the seam/B and gets back out to his flank on a swing.",
    "LOW never leaves N, and the goalie has to handle the point shot.",
    "Edges collapse to the middle when the puck goes low.",
    "Attack the lone P on a bobble, because the 1-3-1 has only one man back."
  ],
  "key_battles": [
    "TOP vs P + B (whom he sags to decides the play)",
    "S_R vs RF and the seam",
    "LOW vs N (screens and tips on point shots)"
  ],
  "plays": [
    {"name": "Pull the side down, bumper in the soft spot", "winner": "PP",
     "steps": ["Puck with LF at WALL_L; S_L pressures", "RF drops from WALL_R toward the weak-side post, and S_R follows him low", "B slides from BUMPER into the soft spot toward DOT_R, inside the diamond", "LF passes into the middle to B", "B catch-and-shoot from the slot while N screens"],
     "teaching_point": "Moving one player can empty a spot. The diamond's middle is soft once a side killer is pulled low."},
    {"name": "Bumper decoy, weak-side one-timer", "winner": "PP",
     "steps": ["LF at WALL_L looks at B; S_R pinches in toward B", "LF to P at PT; TOP is sagged off and doesn't pressure", "P one-touches to RF at DOT_R", "S_R can't get back out from the middle", "RF one-timer with N on the goalie's eyes"],
     "teaching_point": "The bumper doesn't have to touch the puck to create the goal; his presence moves a killer."},
    {"name": "Top sags, take the bumper away", "winner": "PK",
     "steps": ["P to LF at WALL_L", "TOP drops into the high slot onto B's stick", "S_L pressures LF with his stick in the middle lane; S_R guards the seam", "LF's only option is back to P, who shoots from distance", "LOW boxes out N; the goalie sees the shot and smothers it"],
     "teaching_point": "Give up the point shot from 60 feet, never the bumper from 25."},
    {"name": "One man back", "winner": "PK",
     "steps": ["RF to P at PT; it's a hard pass and P bobbles", "TOP attacks immediately", "The puck squirts past P into the neutral zone", "TOP leads; S_L follows for a 2-on-0 or clears"],
     "teaching_point": "The 1-3-1 puts only one player at the line. Make him pay for every bobble."}
  ],
  "u15_note": "Plenty of U15 kills run a diamond against anything. Teaching the bumper to find the soft spot inside it is the highest-value 1-3-1 lesson at this age.",
  "sources": [
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "diamond weak against a middle bumper, especially against a 1-3-1; three move on every pass"},
    {"title": "Flyers bumper power play explained (Philadelphia Inquirer)", "url": "https://www.inquirer.com/flyers/flyers-bumper-power-play-explained-owen-tippett-20251028.html", "supports": "the diamond leaves the bumper largely unguarded; 'emptying the bumper'; the bumper draws two defenders"},
    {"title": "Power Play: Manipulating the PK diamond (The Coaches Site, preview)", "url": "https://members.thecoachessite.com/article/power-play-manipulating-the-pk-diamond", "supports": "weak-side flank drops to the post pulling a killer low; bumper slides into the soft spot inside the diamond"},
    {"title": "Panthers' diamond PK vs Bruins' 1-3-1 (IceHockeySystems)", "url": "https://icehockeysystems.com/coaching-clip/panthers-diamond-penalty-kill-vs-bruins-1-3-1-power-play", "supports": "well-executed diamond: set at the top, edges take lanes, collapse to the middle"},
    {"title": "The 1-3-1 power play (Pension Plan Puppets)", "url": "https://pensionplanpuppets.com/the-1-3-1-power-play-leafs-analysis", "supports": "the diamond is the usual counter to the 1-3-1; lone point breakaway risk"},
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "1-3-1 exposed to blue-line turnovers"}
  ]
}
```

## 6. 1-3-1 vs Triangle + 1

```json
{
  "pp": "pp-1-3-1", "pk": "pk-triangle1",
  "edge": "even",
  "edge_why": "This is the modern NHL pairing. SLOT takes B, and the two D handle N and the low slot, so the middle is 3-on-2 for the kill and the bumper is shut off. PLUS1 is alone against P and both flanks, which is fine for the kill because those are the lower-percentage shots. The PP's way through is speed: move the puck flank-P-flank faster than the two forwards can swap, and the weak-side flank gets a one-timer from the dot. A late swap gives the PP control, and an early swap opens the bumper and weak-side one-timer.",
  "evidence": "well-sourced",
  "pp_targets": [
    "Weak-side flank one-timer at DOT_R after a quick swing through P, before SLOT and PLUS1 swap.",
    "Flanks walking downhill from WALL into DOT, because only the strong-side D can step out.",
    "Emptying the bumper: B drifts to pull SLOT, and a flank or N fills the middle.",
    "Over-shift: when all four killers lean to the puck, the far flank is open."
  ],
  "pk_answers": [
    "SLOT owns B and shades the weak-side flank lane. PLUS1 takes P-to-flank lanes and angles P.",
    "Swap on time: when the puck swings via P, the forward nearer the new puck side takes it and the other drops to the slot.",
    "Strong-side D comes straight out from the post to challenge a flank who walks downhill or tries a give-and-go through the seam.",
    "Don't over-shift. The weak-side D and SLOT must keep the far flank in view.",
    "PLUS1 hunts the lone P on triggers."
  ],
  "key_battles": [
    "PLUS1 + SLOT swap vs P's quick one-touch passes",
    "SLOT vs B",
    "Strong-side D vs the flank walking downhill",
    "Weak-side D vs N and the back door"
  ],
  "plays": [
    {"name": "Swing beats the swap", "winner": "PP",
     "steps": ["LF at WALL_L; PLUS1 pressures him", "LF to P at PT (PLUS1 is now behind the play)", "P one-touches to RF stepping into DOT_R", "SLOT is on B and can't close RF's lane in time", "RF one-timer with N screening"],
     "teaching_point": "One-touch passes are faster than the two forwards can swap."},
    {"name": "Empty the bumper, flank walks in", "winner": "PP",
     "steps": ["Puck with RF at WALL_R", "B drifts from BUMPER toward DOT_L (away from the puck); SLOT follows a stride", "The middle is vacated; RF walks downhill toward DOT_R", "D_R hesitates between RF and N", "RF shoots from the dot, or slips the puck to N if D_R steps out"],
     "teaching_point": "Move the bumper to drag the slot forward away, then attack the space he left."},
    {"name": "Strong-side D kills the give-and-go", "winner": "PK",
     "steps": ["LF to B at BUMPER", "LF cuts downhill through the seam toward DOT_L looking for the return", "D_L comes straight out from the left post into LF's path, stick on the lane", "B's return pass is cut off; SLOT pressures B from behind", "D_R holds N; PLUS1 picks up the loose puck and clears"],
     "teaching_point": "When a flank cuts through the seam, the strong-side D steps out from the post and the other two stay home."},
    {"name": "Rover traps the lone point", "winner": "PK",
     "steps": ["RF to P with a bouncing pass at PT", "PLUS1 attacks P from the middle, forcing him toward the boards at PT_R", "SLOT slides up to take P-to-B", "P throws the puck back down the right wall; D_R and SLOT win it", "Clear down the ice"],
     "teaching_point": "Trap the only man back against the boards and the 1-3-1 has to restart from its own end."}
  ],
  "u15_note": "Few U15 teams run a true triangle + 1 well. If the kill can't time the swap, simplify: SLOT stays on B no matter what and PLUS1 never chases below the tops of the circles.",
  "sources": [
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "triangle+1 is the structure of choice for most NHL teams; swap timing opens the bumper or weak-side one-timer; 3-on-2 in the slot"},
    {"title": "1-1-2 Penalty Kill is the Worst Set-up in Hockey (LBX Hockey)", "url": "https://lbxhockey.substack.com/p/1-1-2-penalty-kill-is-the-worst-set", "supports": "1-1-2 leaves the flanks open; quick movement pulls the two high killers; over-shift gives the far-side one-timer"},
    {"title": "Weiss Tech Hockey: Penalty Kill Wedge +1", "url": "https://weisstechhockey.com/penalty-kill-wedge-1/", "supports": "strong-side D comes straight out from the post to challenge a give-and-go through the seam"},
    {"title": "Flyers bumper power play explained (Philadelphia Inquirer)", "url": "https://www.inquirer.com/flyers/flyers-bumper-power-play-explained-owen-tippett-20251028.html", "supports": "emptying the bumper to pull a killer out"}
  ]
}
```

## 7. Overload vs Box

```json
{
  "pp": "pp-overload", "pk": "pk-box",
  "edge": "even",
  "edge_why": "The overload stacks three players (SP, Q, L) on one side to make a 3-on-2 triangle against the strong-side box forward and D. The box is the textbook answer: it shifts to the puck, protects the middle, and concedes perimeter shots. Neither side is favoured by the shapes. The PP scores on low-to-high plays or by swinging the puck to the weak side once all four killers have leaned over. The kill wins by not over-shifting and by clearing to the empty weak side.",
  "evidence": "mixed",
  "pp_targets": [
    "Strong-side 3-on-2: Q to L to SP low-to-high, pulling the strong-side forward down, then shooting from the point.",
    "Weak-side shooter one-timer once all four killers have shifted to the strong side.",
    "Back door: WS sneaks from the weak side to the far post while L walks out from the goal line.",
    "Give-and-go between Q and L along the wall."
  ],
  "pk_answers": [
    "Shift the box to the strong side but keep the weak-side D on N and the weak-side forward high enough to see WS.",
    "If SP walks to the middle, the strong-side forward shadows him in the shooting lane.",
    "Pass back to Q: the strong-side D attacks the half wall if he reads it early. Pass down low: the weak-side D closes the low man and the weak-side forward drops to the most dangerous slot player.",
    "Pass to the weak side: the weak-side forward attacks the top of the circle (body in the shot lane, stick in the pass lane) and the strong-side D drops back to the slot to watch the back door.",
    "When you win the puck, clear it to the weak side. The overload has almost nobody there."
  ],
  "key_battles": [
    "Strong-side D vs L (corner and goal line)",
    "Strong-side forward vs Q + SP (2-on-1 up the wall)",
    "Weak-side forward vs WS (stay connected through the swing)"
  ],
  "plays": [
    {"name": "Low-to-high", "winner": "PP",
     "steps": ["Q at WALL_L passes down to L at GL_L", "D_L closes L; F_L sags toward the dot to take L's pass back to Q", "L passes up to SP at PT_L, behind F_L", "F_L has to sprint back out, and he's late", "SP shoots low through N's screen; L and Q crash for the rebound"],
     "teaching_point": "A pass down pulls the high forward down, and the pass back up beats him to the space he left."},
    {"name": "Swing to the weak-side shooter", "winner": "PP",
     "steps": ["Q, L and SP move the puck around the strong-side triangle twice", "All four box players have leaned left; F_R is in the middle of the slot", "SP walks to PT and draws F_R up", "SP passes to WS stepping into DOT_R", "WS one-timer while N screens"],
     "teaching_point": "Overload one side until the kill leans, then attack the side they left."},
    {"name": "Back door", "winner": "PP",
     "steps": ["Q to L at GL_L", "L walks out from the goal line toward the near post; D_L follows him", "D_R steps to N in front", "WS sneaks from DOT_R to the back post behind F_R", "L passes across the crease to WS for the tap-in"],
     "teaching_point": "A cross-crease pass through the box to the far post is the classic back-door goal."},
    {"name": "Box closes the triangle and clears weak side", "winner": "PK",
     "steps": ["Q to L at CORNER_L", "D_L closes L tight from the net side; F_L drops to take L-to-Q", "D_R holds N; F_R slides to the middle watching WS", "L forces a pass up the wall into F_L's skates", "F_L fires the puck to the empty weak side and down the ice"],
     "teaching_point": "Close the strong-side triangle, then clear where the overload has nobody."}
  ],
  "u15_note": "The overload is the simplest PP to teach (Hockey Canada-style course material recommends starting here), and the box is the simplest kill, so this will be the most common U15 matchup. Teach box killers 'shift, but keep an eye on the far side'.",
  "sources": [
    {"title": "r/hockey wiki: On-ice strategies (mirror)", "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies", "supports": "the box is most often used against the overload; it gives up the perimeter and protects the middle; the far post is the biggest threat"},
    {"title": "HockeyShare: PK D-zone defending the overload when D walks to the middle", "url": "https://www.hockeyshare.com/free-drills/print/288979", "supports": "box rotations against the overload: shadow the walking D, the strong-side D attacks the half wall, the weak-side F rotates to the slot or attacks the top of the circle"},
    {"title": "Detroit Red Wings: strengthening the anemic power play (The Hockey Writers)", "url": "https://thehockeywriters.com/detroit-red-wings-stengthening-the-anemic-power-play/", "supports": "overload roles; pass until all four killers shift, freeing the weak-side shooter; goal-line passer cross-ice feeds"},
    {"title": "Tactical Formations: Powerplay (Silver Seven)", "url": "https://silversevensens.com/tactical-formations-powerplay", "supports": "overload pulls killers to one side; weakness: easy clears to the weak side"},
    {"title": "Advanced Hockey Concepts 601 (The Hockey Writers)", "url": "https://thehockeywriters.com/advanced-hockey-concepts-601/", "supports": "back-door goal: cross-ice pass through the four-man box to the far post"},
    {"title": "How to Play Hockey Module 5: Special Teams (course index)", "url": "https://lgsports.ca/?p=8784", "supports": "overload is the most basic structure and the place to start teaching a PP"}
  ]
}
```

## 8. Overload vs Diamond

```json
{
  "pp": "pp-overload", "pk": "pk-diamond",
  "edge": "PP",
  "edge_why": "Inference. The diamond is balanced (one top, two sides, one low), but the overload is not. On the strong side, S_L and TOP face SP, Q and L, and LOW has to cover both L and N. On the weak side, S_R guards only WS. One low killer against two low attackers, plus a strong-side 3-on-2, is the diamond's worst case. That is why kills that open in a diamond typically fall into a box when the puck goes low or to the wall.",
  "evidence": "inference",
  "pp_targets": [
    "L and N against LOW: get the puck to L and make LOW choose.",
    "Q walking downhill under S_L toward DOT_L.",
    "SP or WS point shots, because TOP can only take one point."
  ],
  "pk_answers": [
    "Convert to a box when the puck is on the half wall or low: S_L takes L or Q, LOW takes N, S_R drops to the weak-side slot, TOP drops to cover the Q-to-SP lane.",
    "Keep the diamond only when the puck is at the points.",
    "Pressure Q on a rim with his back turned (S_L attacks, TOP takes the pass to SP)."
  ],
  "key_battles": [
    "LOW vs L + N (1-on-2)",
    "S_L vs Q",
    "S_R vs WS (alone on the weak side)"
  ],
  "plays": [
    {"name": "Two low beat one", "winner": "PP",
     "steps": ["Q at WALL_L to L at GL_L", "LOW steps toward L to stop him walking out", "N is left alone at the top of the crease; S_R is collapsing late", "L passes into the slot to N", "N's quick shot or tip"],
     "teaching_point": "The diamond has one killer low. Two attackers low means one is always open."},
    {"name": "Q walks under the side killer", "winner": "PP",
     "steps": ["SP to Q at WALL_L; S_L comes out high to pressure", "Q steps under S_L's stick toward DOT_L", "LOW is torn between Q's shot and N", "Q shoots far side, or passes to L at GL_L if LOW steps out", "WS slides to the back post for the rebound"],
     "teaching_point": "When the side killer pressures high, attack the space beneath him."},
    {"name": "Diamond falls into a box", "winner": "PK",
     "steps": ["Q to L at GL_L", "S_L drops onto L from the net side; LOW stays on N", "S_R slides into the weak-side slot; TOP drops to the strong-side dot to take L-to-Q and L-to-SP", "L throws the puck up the wall into traffic", "S_L or TOP wins it and clears it to the empty weak side"],
     "teaching_point": "Against an overload, the diamond only survives by becoming a box when the puck goes low."}
  ],
  "u15_note": "Against an overload, a U15 team should usually just play the box. If the coach likes the diamond, give one rule: 'puck below the dots, we're a box'.",
  "sources": [
    {"title": "1-1-2 Penalty Kill is the Worst Set-up in Hockey (LBX Hockey)", "url": "https://lbxhockey.substack.com/p/1-1-2-penalty-kill-is-the-worst-set", "supports": "teams play the box when the puck is low and the diamond when it is high"},
    {"title": "Senators remain loyal to struggling penalty kill formation (The Hockey News)", "url": "https://thehockeynews.com/ottawa-senators/latest-news/senators-remain-loyal-to-struggling-penalty-kill-formation", "supports": "the diamond's main problem is chances down low"},
    {"title": "r/hockey wiki: On-ice strategies (mirror)", "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies", "supports": "overload is three on one side; the box (not the diamond) is the standard answer"},
    {"title": "How to Play Hockey Module 5: Special Teams (course index)", "url": "https://lgsports.ca/?p=8784", "supports": "the PP formation decides whether the kill plays box or diamond"}
  ]
}
```

## 9. Overload vs Triangle + 1

```json
{
  "pp": "pp-overload", "pk": "pk-triangle1",
  "edge": "even",
  "edge_why": "PLUS1 is alone against the strong-side triangle's high players (SP and Q), so the PP controls the perimeter. The kill's triangle (SLOT plus two D) covers N, L and the slot, so the strong side gets few clean inside looks. The weak-side shooter is the swing factor: if the triangle and PLUS1 shift too far toward the strong side, WS gets a one-timer from the dot (the classic failure of a 1-1-2).",
  "evidence": "mixed",
  "pp_targets": [
    "WS one-timer at DOT_R after the kill shifts to the strong side.",
    "SP point shot (PLUS1 can't cover both SP and Q) with N screening.",
    "L-to-N plays only if the strong-side D gets pulled to the corner."
  ],
  "pk_answers": [
    "PLUS1 lives between Q and SP and angles Q toward the corner.",
    "Strong-side D takes L when the puck is below the goal line; the weak-side D holds N; SLOT stays in the middle with his eyes on WS.",
    "Strong-side D steps out from the post on a Q give-and-go through the seam.",
    "Don't follow the puck with all four. SLOT is the one who must not over-shift."
  ],
  "key_battles": [
    "SLOT vs WS (the over-shift test)",
    "PLUS1 vs Q + SP",
    "Strong-side D vs L"
  ],
  "plays": [
    {"name": "Over-shift, weak-side one-timer", "winner": "PP",
     "steps": ["Q to L at GL_L; D_L goes with L", "L back to Q; Q to SP at PT_L, and PLUS1 chases each pass", "SLOT leans toward the strong side to protect against Q", "SP passes across the top to WS stepping into DOT_R", "WS one-timer; N screens"],
     "teaching_point": "Move the puck around the strong side until the slot forward leans, then hit the weak side."},
    {"name": "Point shot, two-on-one up top", "winner": "PP",
     "steps": ["Q has the puck at WALL_L; PLUS1 angles him", "Q to SP at PT_L (PLUS1 can't take both)", "SP walks toward PT for a clean lane", "SP shoots low; N tips it and L hunts the rebound"],
     "teaching_point": "One rover can't cover two players up top. Take the open shot with traffic."},
    {"name": "Give-and-go shut down", "winner": "PK",
     "steps": ["Q to L at GL_L", "Q cuts from WALL_L toward the slot looking for the return pass", "D_L comes straight off the left post into Q's lane", "SLOT takes the pass into the slot; D_R holds N", "L's return pass is blocked; PLUS1 recovers and clears"],
     "teaching_point": "The strong-side D challenges the cutter. Everyone else stays in the triangle."}
  ],
  "u15_note": "Teach SLOT one cue: 'if I can't see the weak-side shooter, I've shifted too far.'",
  "sources": [
    {"title": "1-1-2 Penalty Kill is the Worst Set-up in Hockey (LBX Hockey)", "url": "https://lbxhockey.substack.com/p/1-1-2-penalty-kill-is-the-worst-set", "supports": "1-1-2 vulnerable on the flanks; over-shifting opens the one-timer on the far side"},
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "triangle+1 concedes the lowest-percentage threats and overloads the slot 3-on-2"},
    {"title": "Weiss Tech Hockey: Penalty Kill Wedge +1", "url": "https://weisstechhockey.com/penalty-kill-wedge-1/", "supports": "strong-side D challenges the give-and-go; weak side protects the back door"},
    {"title": "Detroit Red Wings: strengthening the anemic power play (The Hockey Writers)", "url": "https://thehockeywriters.com/detroit-red-wings-stengthening-the-anemic-power-play/", "supports": "overload with an exaggerated weak-side shooter; pass until the killers shift"}
  ]
}
```

## 10. Spread (2-1-2 / box+1) vs Box

```json
{
  "pp": "pp-spread", "pk": "pk-box",
  "edge": "PP",
  "edge_why": "Inference; slight edge. The spread's two points and two low players line up with the box's four corners (2-on-2 high, 2-on-2 low), so the middle player S stands inside the box with nobody assigned to him, the same problem a 1-3-1 bumper creates. Any killer who steps to S frees his own man: a high forward frees a point for a one-timer, and a D frees a low player at the back door. The slight rather than strong edge is because the spread has no flanks at the half wall, so its shots come from the points or in tight. A box that shrinks can live with point shots.",
  "evidence": "inference",
  "pp_targets": [
    "S in the middle of the box.",
    "Point one-timers when a high box forward sags to S.",
    "Back door by the low player whose D stepped up to S.",
    "D-to-D passes to make the high forwards skate side to side."
  ],
  "pk_answers": [
    "Shrink the box around S. Accept point shots from distance and block them.",
    "High forwards guard the passes into S rather than the points, then step out only on a bobble.",
    "The D never step up to S. They own LL and LR (box out, sticks on sticks).",
    "Aggressive variant: one forward chases a walking point while the other sags onto S."
  ],
  "key_battles": [
    "High box forwards vs the points + S",
    "Box D vs LL and LR (back door)"
  ],
  "plays": [
    {"name": "D-to-D, step-in one-timer", "winner": "PP",
     "steps": ["PL walks toward PT; F_L follows, F_R pinches to take the pass into S", "PL passes across to PR at PT_R", "F_R can't get back out in time", "PR steps in and one-times it low", "LL and LR are already at the posts for tips and rebounds"],
     "teaching_point": "If the box forward guards the middle, the point is open. Shoot low so the low players can tip it."},
    {"name": "S draws the D, back door", "winner": "PP",
     "steps": ["PR to S at BUMPER", "D_R steps up to stop S shooting", "LR slips from GL_R to the back post behind D_R", "S slides the puck under D_R's stick to LR", "LR taps it in"],
     "teaching_point": "Every box player who steps to the middle leaves somebody. Find who he left."},
    {"name": "Shrink and block", "winner": "PK",
     "steps": ["PL to PR at PT_R", "F_R steps into the lane, not the body", "D_L and D_R tie up LL and LR sticks; F_L guards S", "PR's one-timer hits F_R", "F_R chips the puck past PR and clears"],
     "teaching_point": "Against the spread, the box gives up the point and protects the inside. Block it and clear."}
  ],
  "u15_note": "A 5-on-4 spread works best with big, strong low forwards. At U15, the low forwards' job is simple: go to the posts and stick on the ice.",
  "sources": [
    {"title": "r/hockey wiki: On-ice strategies (mirror)", "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies", "supports": "spread is a wide 2-1-2 with two below the dots and one in the mid slot; the mid-slot player forces killers to overcommit, opening the weak point or the slot"},
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "spread floods the slot low; defensemen step in for one-timers; a killer moving to the point opens the back door; mainly a 5-on-3 or power-forward 5-on-4 tool"},
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "box is vulnerable to a middle player between its layers"}
  ]
}
```

## 11. Spread (2-1-2 / box+1) vs Diamond

```json
{
  "pp": "pp-spread", "pk": "pk-diamond",
  "edge": "PP",
  "edge_why": "Inference. The diamond's shape is wrong for a 2-1-2. One TOP killer faces two points, so the D-to-D pass is always open. One LOW killer faces two low players. The side killers sit at the circles where the spread has nobody. To cover a point a side killer has to climb, which opens the low slot. To cover a low player LOW has to choose, which opens the other post. Kills that see a spread should switch to a box.",
  "evidence": "inference",
  "pp_targets": [
    "D-to-D one-timer (TOP can't cover both points).",
    "LL + LR vs LOW: cross-crease pass to the back post.",
    "S in the middle when the side killers climb to the points."
  ],
  "pk_answers": [
    "Switch to a box: TOP and one side killer become the high pair, and the other side killer and LOW become the low pair.",
    "If they stay in the diamond, the side killers guard lanes into the slot and give up point shots from distance; LOW plays the post on the puck side; the weak-side killer collapses to the back post on any low pass."
  ],
  "key_battles": [
    "TOP vs PL + PR",
    "LOW vs LL + LR"
  ],
  "plays": [
    {"name": "D-to-D one-timer", "winner": "PP",
     "steps": ["PL has the puck at PT_L; TOP pressures", "PL to PR at PT_R", "S_R climbs to PR, but late", "PR one-times it low; LL and LR crash the posts"],
     "teaching_point": "One killer can't cover two points. Move it before he gets there."},
    {"name": "Two low, cross-crease", "winner": "PP",
     "steps": ["PR to LR at GL_R (S_R climbed and the lane is open)", "LOW steps to LR", "LL holds the back post at the left side of the crease", "S_L collapses late from the circle", "LR passes across the crease to LL for the tap-in"],
     "teaching_point": "Two low attackers against one low killer: draw him, pass to the other."},
    {"name": "Recognise and switch to a box", "winner": "PK",
     "steps": ["The PP sets up with two points; TOP and S_L slide into the high pair, S_R and LOW into the low pair", "PL to PR; S_L (now high) slides across to the lane", "D-pair box players tie up LL and LR", "PR's shot is blocked by the high killer", "Clear down the ice"],
     "teaching_point": "Read the PP's shape: two points means play a box."}
  ],
  "u15_note": "Good teaching cell for 'read their formation first'. Have killers call 'box' or 'diamond' out loud as the PP sets up.",
  "sources": [
    {"title": "r/hockey wiki: On-ice strategies (mirror)", "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies", "supports": "spread structure and how the mid-slot player forces overcommits"},
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "spread outnumbers the kill low; back door opens when a killer goes to the point"},
    {"title": "Senators remain loyal to struggling penalty kill formation (The Hockey News)", "url": "https://thehockeynews.com/ottawa-senators/latest-news/senators-remain-loyal-to-struggling-penalty-kill-formation", "supports": "diamond outside killers caught high create 2-on-1s in the low slot"},
    {"title": "How to Play Hockey Module 5: Special Teams (course index)", "url": "https://lgsports.ca/?p=8784", "supports": "the PP's formation determines box vs diamond; the diamond is a box rotated"}
  ]
}
```

## 12. Spread (2-1-2 / box+1) vs Triangle + 1

```json
{
  "pp": "pp-spread", "pk": "pk-triangle1",
  "edge": "PK",
  "edge_why": "Inference; slight edge. The triangle matches the spread's dangerous players 3-on-3 (SLOT on S, D_L on LL, D_R on LR), and PLUS1 only has to slow down two points whose shots come from the lowest-danger area on the ice. The spread has no flanks to stretch the triangle sideways. It needs either point shots through traffic or a point walking down the boards into the empty half wall to pull a D out.",
  "evidence": "inference",
  "pp_targets": [
    "A point walking downhill into the empty half wall/dot area to pull a D out of the triangle.",
    "D-to-D one-timers while PLUS1 is on the far point.",
    "Point shots for tips and rebounds by LL and LR."
  ],
  "pk_answers": [
    "PLUS1 angles the puck-side point and lives in the D-to-D lane.",
    "Triangle stays matched: SLOT on S, D on LL and LR.",
    "Only the D on the puck side steps out to a point walking downhill; SLOT drops to cover his low man.",
    "Expanded version: the weak-side forward jumps a slow D-to-D pass for a shorthanded chance."
  ],
  "key_battles": [
    "PLUS1 vs the two points",
    "D vs low forwards (sticks, screens)"
  ],
  "plays": [
    {"name": "Point walks the wall", "winner": "PP",
     "steps": ["PL to PR at PT_R while PLUS1 is still on the left", "PR walks down the right side into WALL_R, then toward DOT_R", "D_R has to step out of the triangle to stop the shot", "PR slips the puck to LR at GL_R, now uncovered", "LR shoots short side, or passes across to LL"],
     "teaching_point": "When nobody guards the half wall, skate into it and make a D come out."},
    {"name": "Rover jumps D-to-D", "winner": "PK",
     "steps": ["PL to PR with a slow pass along the line", "PLUS1 reads it and jumps the lane at PT", "He knocks the puck past PR into the neutral zone", "Shorthanded breakaway, or a clean clear"],
     "teaching_point": "Slow D-to-D passes are the triangle + 1's turnover chance."},
    {"name": "Triangle eats the low play", "winner": "PK",
     "steps": ["PR to LR at GL_R", "D_R closes LR from the net side", "SLOT stays on S; D_L takes LL's stick at the back post", "LR's cross-crease pass hits D_L's stick", "SLOT picks it up and clears"],
     "teaching_point": "With three in front against the spread's three inside players, every pass in tight is contested."}
  ],
  "u15_note": "A spread at 5-on-4 against an organised triangle produces a lot of point shots. At U15, those still score through traffic, so the PP should value shots from the point, not passes.",
  "sources": [
    {"title": "Jack Han, PK Structures: Diamonds Aren't Forever?", "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever", "supports": "triangle+1 concedes the lowest-percentage threats and protects the slot"},
    {"title": "Weiss Tech Hockey: Penalty Kill Wedge +1", "url": "https://weisstechhockey.com/penalty-kill-wedge-1/", "supports": "expanded version: the weak-side man anticipates D-to-D passes; the closest corner challenges"},
    {"title": "Complete Idiot's Guide to Hockey Systems: Special Teams (Blue Seat Blogs)", "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams", "supports": "spread built for point one-timers and low-slot presence"}
  ]
}
```

---

## Notes for the build

- **Strong side.** Every play assumes the PP's strong side is LEFT (+y). Mirror y and swap _L/_R to get the right-side version.
- **Plays.** The plays are ordered steps keyed to puck zones and suit animations of about 1 to 1.5 s per step. Passes stay within realistic distances (no blue-line-to-crease saucers through four bodies).
- **Edges.** Each verdict is a tendency, not a law. Every cell has plays for both sides because execution decides most special-teams battles.
- **Extra fields.** Each record adds `evidence` and `u15_note` beyond the base schema. Drop them if the parser is strict.
- **Paywalled sources.** The Coaches Site PP/PK articles were only partly readable (paywalled previews). Coach-tube lesson pages had descriptions only. No paywall was bypassed.
