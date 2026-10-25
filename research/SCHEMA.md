# HockeyEnvy rulebook schema (special teams)

Every system and every matchup is written in this format so the app can run on it directly.

## Rink coordinates (feet, attacking half only)

- x = distance from the centre red line toward the net being attacked.
  Blue line x=25, top of the faceoff circles x≈54, faceoff dots x=69, goal line x=89, end boards x=100.
- y = distance from the middle of the ice. **+y = the power play's LEFT side** (as the PP players look at the net from the point).
  Boards at y=±42.5. Faceoff dots at y=±22. Net posts at y=±3.
- Example spots: point middle (30,0); left half-wall flank (54,31); right half-wall flank (54,-31);
  high slot / bumper (62,0); net front (82,0); left goal line beside the net (86,15); behind the net (95,0).

## Puck zones (shared vocabulary — every reaction is keyed by these)

| Zone | Where | Approx. centre |
|---|---|---|
| PT | Point, middle of the blue line | (30, 0) |
| PT_L / PT_R | Left / right point | (30, ±16) |
| WALL_L / WALL_R | Half-wall / flank, top of the circle near the boards | (54, ±31) |
| CORNER_L / CORNER_R | Low corner, near goal-line extended by the boards | (86, ±30) |
| GL_L / GL_R | Goal line beside the net ("L" spot / below the dots) | (86, ±14) |
| BEHIND | Behind the net | (95, 0) |
| BUMPER | High slot | (62, 0) |
| NET | Net front / crease top | (82, 0) |
| DOT_L / DOT_R | Faceoff dot area (bumper-flank seam, one-timer spot) | (69, ±22) |

Left/right always from the power play's view.

## System record

```json
{
  "id": "pk-diamond",
  "side": "PK",
  "name": "Diamond",
  "aliases": ["1-2-1"],
  "summary": "one or two sentences",
  "best_against": ["..."], "weak_against": ["..."],
  "u15_note": "is it teachable / common at U15, what to simplify",
  "roles": [
    {
      "id": "top",
      "label": "Top forward",
      "player": "F",
      "base": [38, 0],
      "core_job": "one sentence",
      "why": "why this spot exists — what it takes away",
      "reactions": {
        "WALL_R": {"spot": [44, -8], "job": "take away the pass back to the point", "why": "..."},
        "PT":     {"spot": [36, 0],  "job": "...", "why": "..."}
      }
    }
  ],
  "triggers": [
    {"cue": "bobbled puck / back to the play / pass rimmed to the wall", "who": "role ids", "action": "pressure / collapse / rotate", "why": "..."}
  ],
  "weaknesses": [{"where": "zone or seam", "why": "...", "how_exploited": "..."}],
  "sources": [{"title": "...", "url": "...", "supports": "which claims"}]
}
```

Rules:
- Give a reaction for EVERY puck zone that matters for that system (at minimum PT, WALL_L, WALL_R, GL_L, GL_R, BEHIND, BUMPER/NET if the PP uses it).
- `spot` = approximate coordinates in the convention above. Approximate is fine; label uncertain ones.
- `why` is the teaching content: plain language a 14-year-old can follow.
- For PP systems, roles also include `options` per zone: who the puck carrier should look for first, second, third.

## Matchup record (PP system vs PK system)

```json
{
  "pp": "pp-umbrella", "pk": "pk-diamond",
  "edge": "PP | PK | even", "edge_why": "...",
  "pp_targets": ["the seams/players the PP should attack and why"],
  "pk_answers": ["the kill's adjustments"],
  "key_battles": ["e.g. low D vs net-front"],
  "plays": [
    {"name": "L comes around, back door", "winner": "PP",
     "steps": ["P to LF", "L goes behind the net to LF's side", "LF to L", "N spins back door", "cross-crease tap-in"],
     "teaching_point": "..."}
  ],
  "sources": [...]
}
```
