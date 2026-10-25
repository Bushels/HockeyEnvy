# Writing plays for HockeyEnvy special teams

Files: `plays/<pp-id>.js`, one per power play. Each file assigns `PLAYBOOK['<pp-id>|<pk-id>']=[ ...plays ]` for the four kills:
`pk-box`, `pk-box-aggressive`, `pk-diamond`, `pk-wedge-plus-one`. Don't edit `special-teams.src.html` (the engine) or other agents' files.

## How the engine works
- Every skater's spot comes from the rulebook (`../data/rulebook.json`, also live in the page as `__he.SYS[id].react[ZONE][role].s`), blended by where the puck is. Passing the puck moves everyone automatically. Most plays are just a pass sequence plus a few `move`/`lag`/`override` touches.
- Coordinates (feet): x toward the net (blue line 25, top of circles ~54, dots 69, goal line 89, crease radius 6 around (89,0)); y from the middle, **+y = the power play's LEFT** (LF side). Puck zones: PT, PT_L/R, WALL_L/R, DOT_L/R, GL_L/R, CORNER_L/R, BEHIND, BUMPER, NET.
- Role ids per system: umbrella P LF RF N L; 1-3-1 P LF RF B N; overload P H L N W (left-side overload); spread PL PR S LL LR.
  Kills: box fl fr dl dr; box-aggressive fl fr dl dr; diamond top side_l side_r low; wedge+1 press top dl dr. Goalie is G.

## A play
```js
{id:'131-dia-bumper', name:'Bumper one-timer', win:'pp'|'pk'|'demo', override:{role:{ZONE:[x,y]}}, steps:[ ... ]}
```
Steps run in order; each starts after the previous one finishes (pass landed / skater arrived) plus `wait` seconds (default 0.5). Optional `until:'role'` waits until that player reaches his spot. Every step can have `say` (the caption: plain words for 13-14-year-olds, under ~25 words).
- `{do:'pass',to:'LF'}` - carrier passes; receiver holds his spot until it lands.
- `{do:'carry',to:[x,y]}` - carrier skates with the puck to a spot (and stays there).
- `{do:'move',who:'N',to:[x,y]}` or `{do:'move',moves:[['N',[62,0]],['low',[80,2]]]}` - pin players to spots for the rest of the play; `sync:'N'` waits for him to arrive.
- `{do:'free',who:'N'}` - back to the rulebook.
- `{do:'lag',who:['side_r'],f:0.6}` - that killer skates at 60% speed (he's late / beaten).
- `{do:'shot',res:'goal'|'save'|'blocked'}` - forced outcome. A `goal` must have an open lane (checker verifies).
- `{do:'rebound',to:'N'}` - after a save, the puck pops to that player (any team).
- `{do:'steal',by:'side_r'}` / `{do:'block',by:'top'}` - a killer takes the puck (intercept / shot block). Must be close (<14 ft).
- `{do:'clear'}` (optional `to:[x,y]`) - killer clears it out (shorthanded icing is legal in Hockey Canada; never over the glass).
- `{do:'carryout'}` - killer skates it out over the blue line.
- `override:{side_r:{GL_L:[66,-9]}}` - bend one rule for the whole play (a mistake).
- A play with `win:'demo'` replaces the automatic "How it works" demo for that matchup.

## What every matchup needs
- At least one **power-play** play (`win:'pp'`) showing that PP's real strength against that kill and ending in a goal (directly or save -> rebound -> goal).
- At least one **penalty-kill** play (`win:'pk'`) showing that kill's real strength (block, pick-off, pressure turnover) ending in `clear` or `carryout`.
- More where the matchup has more than one clear lesson (umbrella vs diamond: at least 2 each).
- Base them on `../research/matchups.md` (and pp-/pk-systems.md). Plays must be physically believable: passes don't go through players, nobody skates through the net, killers that win the puck were near it.

## Tools
- Build your own copy: `python3 build.py _<tag>` -> `_test_<tag>.html` (use a unique tag, e.g. `_131`).
- Check: `python3 checkplays.py <pp-id> _<tag>` - runs every play headless: pass lanes (<3 ft from a killer = flagged), steals/blocks from far away, forced goals through blocked lanes, overlapping players, wrong endings. Get every play to OK.
- Look: `python3 shotplay.py _<tag> <pp-id> <pk-id> <play-id> 1 3 5` -> screenshots in `shots_<tag>/`. Look at the key frames of every play at least once.
