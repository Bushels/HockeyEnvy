# HockeyEnvy plays review (independent)

Scope: 50 animated plays + the custom "How it works" demos, 16 matchups (umbrella, 1-3-1, overload, spread x box, aggressive box, diamond, wedge+1). No play file was edited. Every "tested" fix below was applied to a sandbox copy (`/tmp/claude-0/-home-claude/93015028-df09-591f-9b3d-a909dd43b713/scratchpad/rev/fix/plays/`) and re-run at 60 fps with the real engine, so the new captions and waits are known to work. Anything marked "untested" was not run.

How I checked: deterministic 60 fps stepping of every play (positions, puck flight, shot judging), minimum distance from each pass/shot line to every killer, shooter location, caption dwell time, plus a read of every caption against the animation.

## What is clean (no action)

- Coverage: every one of the 16 matchups has at least one PP-win play ending in a goal and at least one PK-win play ending in a clear, steal-and-carry-out or block-and-clear that shows that kill's real strength (box low-battle / perimeter, aggressive trap / jump, diamond turns into a box, wedge matches the slot and clears).
- Left/right: LF/L/H/PL/LL are all on the +y side and every caption that says "left" refers to the power play's left. No mix-ups found.
- Hockey content: no killer chasing out of structure, no illegal play, no shots over the glass, no diving blocks (blocks are stick/shin-pad plays), no hits or hooks. Shorthanded icing is described correctly for Hockey Canada (131-box-squeeze). Every clear goes to a legal spot inside the boards.
- Strengths line up with the research verdicts (aggressive box: trap on the wall, jump the slow pass; diamond: switch to a box when the puck goes low; wedge: slot stays packed, +1 only makes the points hurry; spread: killers can't cover S and the low guys at once).

---

## MUST-FIX

### M1. `ovl-wdg-point` (overload vs wedge+1): the shot goes through the +1's body

Problem: P walks into the middle (38,6) and shoots from (37,7) with the +1 standing 4.0 ft away, and the shot line passes 0.6 ft from him. The shot outcomes are forced (`save`, then `goal`), so the engine never re-judges them, and the animation shows the puck passing within a stick length of a killer. The caption "One +1 can't cover H and P at the same time" is also not what is on screen: the +1 is on P, not on H. A coach watching this will say "that's blocked" and, worse, the lesson ("the +1 can't cover both") is not shown.

Fix (tested; shot then leaves from (33,11) with the nearest killer 24 ft away, the play still ends in a goal, 7.7 s long). Replace these three steps:

```
    {do:'pass',to:'P',wait:0.2,say:'H up to P. One +1 can’t cover H and P at the same time.'},
    {do:'free',who:'H',wait:0},
    {do:'carry',to:[38,6],wait:0.1,say:'P walks into the middle for a clean shooting lane.'},
```

with:

```
    {do:'lag',who:['press'],f:0.3,wait:0},
    {do:'pass',to:'P',wait:0.2,say:'H up to P. The +1 is down low with H, so P has time.'},
    {do:'free',who:'H',wait:0},
```

(that is: add the `lag` for `press` before the pass, change the caption, and delete the `carry` step). Keep the following `shot save`, `rebound to N`, `shot goal` steps as they are.

---

## SHOULD-FIX

### S1. `umb-box-point` and `ovl-box-lowhigh`: a point shot from 55-57 ft goes straight in

Problem: P scores directly from (32,5) (57 ft) and (34,4) (55 ft). The research notes say U15 players are rarely a shooting threat at 55 ft, and the box's whole plan is to concede that shot. Teaching 13-year-olds "shoot from the blue line and it goes in" is the bad habit; the real payoff is the screen and the rebound. In `umb-box-point` the caption also says "He never sees it", which a goalie coach will not like.

Fix (tested for both, each still ends in a goal): make the point shot a save with a rebound to N, then N scores.

`umb-box-point` - replace the last step with:

```
    {do:'shot',res:'save',wait:0.1,say:'P one-times it low before the box shifts. N is in the goalie’s eyes.'},
    {do:'rebound',to:'N',wait:0.2,say:'The goalie can’t see it clean. The rebound drops to N.'},
    {do:'shot',res:'goal',wait:0.2,say:'N shoots it in. Shoot from the point and send bodies to the net.'}]},
```

`ovl-box-lowhigh` - replace the last step with:

```
    {do:'shot',res:'save',wait:0.2,say:'The box forward is late getting back out. P shoots low and N is in the goalie’s eyes.'},
    {do:'rebound',to:'N',wait:0.2,say:'The goalie can’t see it clean. The rebound drops to N.'},
    {do:'shot',res:'goal',wait:0.2,say:'N shoots it in. Goal.'}]},
```

`ovl-wdg-point` already follows this pattern once M1 is applied. `ovl-box-lowhigh` caption "Low to high" is correct hockey.

### S2. `umb-wdg-rover` (umbrella vs wedge+1): the +1 is within 3.5-4.4 ft of three passes and the final shot

Problem: the +1 stands 3.5, 4.3, 3.9 ft from P-to-LF, LF-to-P and P-to-RF, and 4.4 ft from RF when he shoots. The caption says "The +1 has to turn and chase" and "Once the +1 picks a side, the other shooters are open", but on screen he is right there. It reads as a shot with a killer at his elbow, not an open shooter.

Fix (tested): add one step before the `P to RF` pass so the +1 is behind the play:

```
    {do:'lag',who:['press'],f:0.35,wait:0},
    {do:'pass',to:'RF',wait:0.1,say:'P to RF. One +1 can’t get to all three shooters.'},
```

(the `lag` line is new; the pass line is unchanged).

### S3. `131-box-bump` (1-3-1 vs box): RF catches the bump pass standing still on the wall

Problem: the caption sells a one-timer from the off-wing with "the lane is wide open", but RF is sitting at about (62,-27) when B's pass arrives, so the one-timer comes from a stationary player and the shot reads as slow.

Fix (tested; still a goal, shot from (66,-24), nearest killer 22 ft): add a step just before `B bumps it right away to RF`:

```
    {do:'move',who:'RF',to:[67,-24],wait:0},
    {do:'pass',to:'RF',wait:0.5,say:'B bumps it right away to RF.'},
```

(the `move` line is new).

### S4. `131-boxa-low` (1-3-1 vs aggressive box): too slow to be believable as "before the trap closes"

Problem: waits of 0.8-1.4 s between B's slide, N's slide and RF's chip let the trap close in real time, so the captions "RF chips it to B before the trap closes" and "N taps it in before the box can recover" contradict the clock. Tested waits make the whole thing a quick 7.2 s sequence that ends in a goal with the nearest killer 6.3 ft away.

Fix (tested): change these waits only.
- `move B ... sync:'B'` wait 0.8 -> 0.3
- `move N ... sync:'N'` wait 1.4 -> 0.3
- `pass to B` wait 1.2 -> 0.2

### S5. Captions that flash by (dwell under 0.5 s) - 10 plays where the caption is never readable

Problem: a `say`, `lag` or un-synced `move` step does not reset the play clock, so the step after it uses its own `wait` from the same starting point and fires almost immediately. Eleven captions were on screen for 0.02-0.08 s (so the player never sees them), and about 35 more for 0.2-0.5 s. A 13-year-old reads about 4 words per second, so a 17-word caption needs at least 2 s.

Fix (tested; these raise each flashed caption to 2.0-2.9 s). Raise the `wait` of the step AFTER the flashed caption:

| play | step to change | old wait | new wait |
|---|---|---|---|
| `umb-box-low` | `steal by dl` | 0.6 | 2.6 |
| `umb-agg-trap` | `steal by fr` | 0.3 | 2.8 |
| `umb-dia-rebound` | `pass to LF` (right after the first `move L`) | 0.4 | 2.0 |
| `umb-dia-backdoor-pk` | `steal by side_l` | 0.9 | 3.4 |
| `ovl-box-lowhigh` | `pass to P` | 0.2 | 2.6 |
| `ovl-box-close` | `steal by fl` | 0.4 | 3.0 |
| `ovl-agg-trap` | `steal by dl` | 0.4 | 2.8 |
| `ovl-agg-corner` | `steal by dl` | 0.4 | 3.4 |
| `ovl-dia-box` | `steal by top` | 0.3 | 3.4 |
| `ovl-wdg-swing` | `pass to P` (after the `lag`) | 0.1 | 2.6 |
| `ovl-wdg-givego` | `steal by dl` | 0.2 | 2.6 |

Related short-dwell captions (0.2-0.5 s) that follow a steal, rebound or short pass: raise the NEXT step's wait to about 0.9-1.0 (tested on `umb-dia-rebound` final goal 0.1 -> 0.8, `umb-agg-trap` clear 0.3 -> 1.0, `ovl-agg-corner` bump pass 0.1 -> 0.9 and clear 0.1 -> 0.9, `ovl-wdg-givego` chip pass 0.1 -> 0.9). The same pattern applies to the 0.3-0.5 s captions in `131-box-middle`, `131-wdg-swing`, `131-wdg-giveandgo`, `ovl-dia-walk`, `spr-box-dtod`, `spr-wdg-point` and `spr-wdg-jump`.

Note: the speed buttons (1/4x, 1/2x, 1x) exist, so a coach can slow a play down, but the default 1x should still be readable.

### S6. `ovl-box-backdoor` (overload vs box): the first pass goes through the near box D's stick

Problem: H-to-L passes 2.4 ft from `dl` (the near box D), because the override parks him at (86,11-12) right at L's skates. A pass through a killer's stick in a "PP wins" play is the opposite of the point. Also the later L-to-W pass crosses the crease with the killer close.

Fix (tested; play still ends in a goal, passes now 3.7 ft and 4.3 ft from `dl`): change the override
`dl:{GL_L:[86,12],NET:[86,11]}` to `dl:{GL_L:[87,10],NET:[87,10]}`. Captions are unchanged and still true.

### S7. `ovl-dia-twolow` (overload vs diamond): two captions don't match the picture

Problem: (a) "N pops out to the slot. He is alone." The nearest killer (`side_l`) is 5.9 ft away, so "alone" is not quite right. (b) The final caption "One low killer can't cover two low attackers" is said after N shoots from the slot at (75,6), 15 ft out, not from low.

Fix (untested, text only):
- step with `move N`: say `N pops out to the slot and is open. The far side killer is too slow to get there.`
- final shot: say `Quick shot from the slot. Goal. The low D had to go out to L, so N was open.`

### S8. `131-dia-sag` (1-3-1 vs diamond): "pushes N" plus a wrong distance

Problem: the caption says "The low D pushes N off to the side, so the goalie sees it." Pushing or moving a player out of the crease is a penalty and is not what a coach wants a 13-year-old to take from a PK video. The shot is from 57 ft, not "60 feet".

Fix (text only): `P shoots from the blue line. The low D ties up N’s stick so he can’t screen, and the goalie sees it all the way.`

### S9. Engine-generated "How it works" captions are 30-52 words and last 1.3-1.8 s

Problem: the default demo for every matchup that has no custom demo (`demoPlay`/`autoSay` in `special-teams.src.html`, lines ~219-232 and ~228) builds captions like `Puck to Left flank: Have the puck. Face the middle with your shoulders square, look low first, ...` Typical length is 40-50 words (limit 25), and each pass waits only 0.9 s. They are unreadable at 1x. They also use lowercase "pp's left side" and "low d".

Fix (engine, not a play file): make `autoSay` return only `Puck to ${label}. ` plus the first sentence of the rule, or the closest-killer line, whichever is shorter than about 22 words, and raise the demo pass `wait` from 0.9 to about 2.4. Also capitalize "PP's" and "low D" in the text.

### S10. `ovl-agg-corner` caption over the limit

Problem: 26 words, the only play caption over 25. Fix: `All four go at once. Box D on L, box forward up the wall, the other two take the net and the middle.` (20 words).

---

## NITPICK

### N1. `spr-box-middle`: S-to-LL pass 2.9 ft from the left box D

The pass is close to `dl` (the killer who "steps up to S"). A tested move of LL to (86,6) made the pass go 1.4 ft from `dl`, so do not do that. Leave the animation and change the pass caption to: `S slides it past the box D to LL.`

### N2. `umb-box-low`: clear passes within 2.1 ft of `fl`

The `clear` path in `umb-box-low` goes 2.1 ft from the box forward `fl` (own teammate). Harmless, but a coach will notice a clear going through his own teammate. Optional: add `to:[24,-20]` to that `clear` step (untested).

### N3. `131-dia-sag`: clear path 1.2 ft from `side_r`

Same issue (own teammate). Optional: `clear` with `to:[24,-32]` (untested).

### N4. Jargon a 13-year-old may not know

- `131-boxa-trap`: "the box forward seals the top" -> `cuts off the top`.
- `ovl-agg-corner`: "H rims it into the corner" -> `H chips it hard around the boards into the corner`.
- `umb-wdg-rover` title "Rover pulled, weak flank fires" -> `+1 pulled to one side, far flank fires`.
- `ovl-dia-walk`: "H steps under his stick and walks down toward the dot" is fine; "gets a pad on it" is fine.

### N5. `ovl-box-backdoor` first two captions are on screen only 0.8-1.1 s

Covered by S5's rule; if you apply only one extra change, raise `move W` wait 0.1 -> 0.6.

---

## Summary table of tested changes

| id | change | result in sandbox |
|---|---|---|
| ovl-wdg-point | lag `press`, new caption, delete `carry` | goal, shot lane 24 ft from nearest killer |
| umb-wdg-rover | lag `press` f 0.35 before P-to-RF | goal, +1 no longer on the lanes |
| 131-box-bump | RF move to (67,-24) before the bump | goal, shooter 22 ft from nearest killer |
| 131-boxa-low | waits 0.3 / 0.3 / 0.2 | goal in 7.2 s |
| umb-box-point, ovl-box-lowhigh | save -> rebound to N -> goal | goal both |
| ovl-box-backdoor | `dl` override (87,10) | goal, pass lanes 3.7 / 4.3 ft |
| S5 table (11 plays) | longer waits after flashed captions | flashed captions now 1.0-2.9 s |
