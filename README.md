# HockeyEnvy

Interactive special-teams teaching tool for minor hockey, built for an iPad at the bench and for sharing as a link.

Pick a power play and a penalty kill. The app runs **How it works** first, then the matchup's plays: power-play
strength plays that end in a goal, and penalty-kill strength plays that end in a clear or carry-out. Coaches can also
drag the puck carrier, tap to pass, tap the net to shoot, and drag any player out of position to see what opens.

- Power plays: Umbrella, 1-3-1, Overload, Spread / 2-1-2
- Penalty kills: Box (passive), Box (aggressive), Diamond, Wedge + 1 / Triangle + 1
- 16 matchups, 50 plays, plus a demo for each

## Layout
| Path | What |
|---|---|
| `app/special-teams.src.html` | The app (engine, UI, rulebook inline). Edit this, not the built file. |
| `app/plays/<pp-id>.js` | Plays, one file per power play. Format in `app/PLAYS_README.md`. |
| `app/special-teams.html` | Built page (src + plays). This is what gets published. |
| `data/rulebook.json` | Every role's spot, job and why for each puck zone, passing looks, triggers, weak spots, sources, and the 12 matchup records. |
| `data/raw.json` | The research output before the accuracy-review fixes. |
| `research/` | Research write-ups (`pp-systems.md`, `pk-systems.md`, `matchups.md`), the schema, and both independent reviews. |
| `tools/fix_review.py` | Applies the review fixes: `raw.json` -> `rulebook.json`. |
| `tools/embed_rulebook.py` | Copies `rulebook.json` into the app source. |

## Build and check
```bash
cd app
python3 build.py              # writes special-teams.html and _test.html
python3 checkplays.py pp      # runs every play headless: pass lanes, steals, forced goals/saves, spacing, endings
python3 captioncheck.py       # flags captions that change too fast to read at 1x
python3 shotplay.py "" pp-umbrella pk-diamond umb-dia-backdoor 1 3 5   # screenshots of a play
```
Checks need Python 3 with Playwright and Chromium.

## Conventions
Coordinates are feet in the attacking half: x toward the net (blue line 25, dots 69, goal line 89), y from the middle,
**+y = the power play's left**. Rules context: Hockey Canada allows shorthanded icing (Rule 6.7); shooting the puck
out of play on purpose is delay of game (Rule 10.1).
