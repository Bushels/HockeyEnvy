# Independent review: HockeyEnvy special-teams research (PP + PK + 12 matchups)

Reviewer notes, 2026-10-25. Research files were not edited. Scripts used are in `.../scratchpad/rev/` (`load.py`, `scan.py`, `mirror.py`); downloaded rule pages are in `.../scratchpad/rev/dl/`.

Severity key: **MUST** = would embarrass the app in front of a scrutinising coach, or breaks the app's data contract. **SHOULD** = real error or inconsistency, fix before sharing. **NIT** = polish.

---

## 0. What held up

- The rink constants are right. Hockey Canada Rules 1.3, 1.5 and 1.8 give: blue line 64 ft from the goal line (x=25), crease a 6 ft radius semicircle on the goal-line midpoint, dots 20 ft off the goal line and 22 ft off centre, circles 15 ft radius (top of circle x=54).
- Left/right is internally consistent. A mirror script over every symmetric role pair (LF/RF, fl/fr, dl/dr, side_l/side_r, PL/PR, LL/LR) found no sign errors in `base` or `spot` coordinates. The only asymmetries are deliberate (the aggressive box's presser, the spread's walking point). A text-vs-coordinate scan ("far/weak-side/back door" vs "puck-side/near") found no real contradictions.
- Nobody is out of the rink or inside the net. There are no zero-distance overlaps (<3.5 ft) between teammates in any zone.
- Both shorthanded-icing claims check out against the primary sources (section 4).
- Most "well-sourced" claims held when I opened the pages (section 4).

---

## 1. Ranked findings

### MUST-FIX

**M1. `pp-umbrella.u15_note` and `pp-umbrella.sources[usahockey 567732].supports` misstate the USA Hockey article, and the research leaves out its real youth advice.**
- *Claimed:* "USA Hockey's special-teams guidance recommends an umbrella/overload-type look with skilled players on the strong side for younger teams."
- *Source says* (usahockey.com/news_article/show/567732, Guentzel interview, text read directly): "I think there are a lot of teams that have some kind of an umbrella overload, a 1-3-1 situation. They have a strong side with two good players on one side." That describes what teams do, in answer to "where should your one great player be?", not a youth recommendation.
- The article's actual answer to "Is there a setup for a less skilled or less experienced roster?" is: "It kind of goes back to the regular setup, 5-on-5, which is two defensemen on the blue line and three forwards... In youth hockey, I don't think you want to specialize to say, 'We're going to run one D and four forwards.'" It adds: "You should probably spend more time with two defensemen, three forwards..."
- Why this matters: every PP model except the spread (umbrella, 1-3-1, overload) puts exactly one D at the point. For the team's v1 umbrella, a USA Hockey source cited by the research recommends against that structure for developing teams.
- *Fix:*
  - Rewrite the sentence to what the article supports: "At 14U work low (half-wall, goal line) because kids may not be a shooting threat at 55 ft; get the puck to skilled players and create 2-on-1s; avoid the 1-3-1 with younger players."
  - Add the 2D+3F / "don't specialise a one-D unit" caution to the u15 notes of umbrella, 1-3-1 and overload.
  - Offer a 2-D umbrella variant (second D on a flank), or at least state that rotating D through the point is the development-friendly default.
  - Add the editor's note: "USA Hockey strongly recommends refraining from detailed and lengthy instructing on special teams tactics/systems until the 14U age classification at the earliest." U15 is exactly that age, so keep instruction to a few rules.

**M2. Umbrella vs Diamond headline verdict contradicts the system records, and the evidence tag is overstated.** Record: `matchups.md` #2 `pp-umbrella|pk-diamond` (`edge`, `evidence`, `edge_why`) and the summary grid cell.
- It says `edge: "even"`, `evidence: "well-sourced"`.
- `pp-umbrella.weak_against[0]` says the diamond "is the standard answer to the umbrella". `pk-diamond.best_against[0]` lists the umbrella first.
- Every source I opened agrees on that direction:
  - Nielsen: the diamond "is mainly used against the umbrella" and the box "doesn't handle that formation very well".
  - Blue Seat: the diamond is the PK the Rangers "normally see" against the umbrella.
  - Silver Seven: the diamond is "most effective when defending against an umbrella power play".
  - LG Sports: when the PP goes umbrella "the PK must adjust into a diamond".
- No source says the matchup is even. "Even" is the author's editorial blend (diamond wins the top, umbrella wins low if it plays low), which is fair, but that is inference.
- *Fix:* either set `edge: "PK"` with wording like "PK by default; PP wins by going low and into the soft middle", or keep `even` and set `evidence: "mixed/inference"`. Use one story in all three places: the pp-umbrella weakness, the pk-diamond strength and the matchup. As it stands, a coach reading the umbrella page (weak vs diamond) and then the matchup (even) sees a contradiction.
- Note the independence problem: the r/hockey wiki mirror is a copy of the Blue Seat 2011 text, so "r/hockey wiki + Blue Seat" is one source, not two. Nielsen is from 2010. Newer NHL coverage (Tocchet, Han) concerns the 1-3-1. Say "classic coaching view" rather than "well-sourced".

**M3. `pk-diamond` omits its best-documented weakness and wrongly lists 1-3-1 as a strength.** Records: `pk-diamond.weaknesses`, `pk-diamond.weak_against`, `pk-diamond.best_against[1]`.
- The soft middle (bumper) is the most-cited diamond weakness:
  - Han: "Minimal coverage against a middle bumper threat (1-3-1 PP)", and three players move on every pass.
  - Tocchet (Inquirer): killers focus on the diamond "leaving the bumper virtually alone", and "Most teams play a diamond PK".
  - BenchIQ: "the diamond's middle is soft"; it is beaten by "the bumper in the middle and the low goal-line play".
  - TCS preview title "Manipulating the PK diamond" (slide a player into the unchecked soft spot).
- It is also the basis of the research's own best Umbrella-vs-Diamond play ("N pops into the soft middle"). Yet `pk-diamond.weaknesses` has four entries (low 2-vs-1, under the top forward, far half-wall seam, goal line) and none is the middle or bumper.
- `best_against[1]` says "1-3-1: the two sides squeeze the bumper, so it's the only common shape that starts with an answer to the middle". That contradicts Han and Tocchet, `pp-1-3-1.weak_against[0]` (which calls it contested), and matchup #5 (PP edge).
- *Fix:*
  - Add `{"where":"BUMPER / inside the diamond","why":"Nobody is assigned to the middle; the four killers sit on the outline of the shape.","how_exploited":"A player (N, B, or a flank) slides inside; any killer who steps to him frees his man (Han; Tocchet; BenchIQ; TCS)."}`.
  - Move 1-3-1 out of `best_against`, or mark it "disputed: TSN/Globe/PPP/Panthers clip say diamond is the usual counter; Han/Tocchet say it concedes the bumper".

**M4. Matchup #5 `pp-1-3-1|pk-diamond`: `edge: "PP"`, `evidence: "well-sourced"` is not supported by the research's own record.**
- `pp-systems.md` says "Diamond is disputed" and `pp-1-3-1.weak_against[0]` says "This is contested".
- Sources split: Pension Plan Puppets ("The counter-strategy to the 1-3-1 is typically some variation of the diamond penalty kill", verified), the TSN/Globe article and the Panthers clip say the diamond is the counter. Han and Tocchet say it leaves the bumper open.
- *Fix:* `evidence: "mixed"`; `edge: "PP (slight)"` or `"even"`; keep the bumper plays as the PP's lever.

**M5. Mirroring bug: displayed play text names the wrong player on the right-hand side of the v1 umbrella and the 1-3-1.** The `to` field was swapped by the mirror script but the `play` and `why` strings were not.

| Record and field | `to` | text says | should say |
|---|---|---|---|
| `pp-umbrella` L / GL_R / options[2].play | RF | "Pass back to LF stepping into the seam." | "...to RF..." (and `why`: "LF gets a shot" becomes "RF gets a shot") |
| `pp-umbrella` L / CORNER_R / options[0].play | RF | "Pass up the wall to LF." | "...to RF." |
| `pp-1-3-1` N / GL_R / options[1].play | RF | "Pass back up to LF, or to LF in the seam." | "...to RF, or to RF in the seam." (and `why`: "gives LF a shot" becomes "RF") |
| `pp-1-3-1` N / CORNER_R / options[0].play | RF | "Pass up the wall to LF." | "...to RF." |

The generic mirror is fine for coordinates but not for prose. Re-run it with a LF<->RF, L<->R text swap, or write role-neutral text ("the puck-side flank"). Also grep for any other literal "LF"/"RF" in `play`/`why` text of right-side reactions; my scan found only these four.

**M6. Role IDs, system IDs and base spots do not match between `matchups.md` and the system records.** This breaks "the app can run on it directly".
- PK system ID: `pk-wedge-plus-one` in `pk-systems.md`; `pk-triangle1` in all matchup records.
- Role IDs differ in case and meaning:
  - Box: `fl/fr/dl/dr` vs `F_L/F_R/D_L/D_R`.
  - Diamond: `top/side_l/side_r/low` vs `TOP/S_L/S_R/LOW`.
  - Wedge: `press/top/dl/dr` vs `PLUS1/SLOT/D_L/D_R`.
  - `top` means the apex forward in `pk-diamond` but the second forward (matchup `SLOT`) in `pk-wedge-plus-one`. Keyed by ID, those collide.
- Overload roles: system `P/H/L/N/W` vs matchup `SP/Q/L/N/WS`.
- Base spots differ (system vs matchup legend):

| Role | System record | Matchup legend |
|---|---|---|
| Box forward | (60, ±11) | (48, ±10) |
| Box D | (81, ±7) | (76, ±9) |
| Diamond top | (52, 0) | (44, 0) |
| Diamond sides | (65, ±13) | (58, ±16) |
| Diamond low | (82, 0) | (80, 0) |
| Wedge D | (83, ±6) | (79, ±8) |
| Wedge +1 | (44, 0) | (42, 0) |
| Wedge slot | (65, 0) | (64, 0) |
| Overload weak-side shooter | (62, -24) | (52, -24) |
| Overload strong point | (32, 14) | (30, 16) |
| Overload half-wall | (56, 33) | (54, 31) |
| Overload low | (87, 16) | (86, 18) |
| Spread low | (83, ±22) | (84, ±12) |
| Umbrella L | (87, 12) | (86, 14) |
| 1-3-1 flanks | (58, ±30) | (54, ±31) |

- *Fix:* make the system files authoritative and rewrite the legend (or the plays) with a literal ID map. At minimum rename `pk-triangle1` to `pk-wedge-plus-one` and use the system role IDs in plays.
- The spread low-player gap (y 22 vs 12) and the box forward gap (12 ft in x) change what the animation shows.

**M7. `pp-umbrella` has no reactions for BUMPER, DOT_L or DOT_R, but the v1 headline plays use them.**
- Matchup #2 play "N pops into the soft middle" has N take the puck at BUMPER and RF receive at DOT_R. The play "L comes out, back door" has N at the back post.
- `pp-umbrella` roles carry reactions only for PT, WALL_L/R, GL_L/R, CORNER_L/R, BEHIND and NET. The SCHEMA says to cover "BUMPER/NET if the PP uses it", and the matchup shows the umbrella uses it.
- The PK side has all 14 zones, so the PK animates and the PP does not.
- *Fix:* add BUMPER, DOT_L and DOT_R to P, LF, RF, N and L. Suggested spots:

| Role | BUMPER | DOT_L | DOT_R |
|---|---|---|---|
| N | has puck (62,0) | (83,3) | (83,-3) |
| LF | (60,26) | has puck (69,22) | (60,24), far-dot stick loaded |
| RF | (60,-26) | (60,-24) | has puck (69,-22) |
| P | (34,0) | (34,4) | (34,-4) |
| L | (86,10) | (86,14) | (86,-14) |

Keep consistent with the existing LF/RF `NET` spots (64, ±22).

### SHOULD-FIX

**S1. Spread vs Box contradicts both system files.** Record: matchup #10 (`edge: "PP"`, "slight", `evidence: "inference"`).
- `pp-spread.weak_against[0]` is "A passive box or zone that concedes the perimeter", and `pk-box.best_against[1]` lists the static spread. Both rest on TCS.
- Either flip the matchup to `PK (slight)` or `even`, or explain why it departs from the TCS-based system records. The same file must not say both.
- Related: `pk-box.best_against[1]` also lists the "static spread/umbrella" as something the box beats, while matchup #1 gives Umbrella-vs-Box to the PP (supported by Nielsen: the box doesn't handle the umbrella). Reword it as "an umbrella that only passes around the outside and never shoots". Otherwise this contradicts #1.

**S2. Diamond side-killer base geometry does not match what the text and matchup say they do.** Records: `pk-diamond.roles[side_l/side_r].base` (65, ±13); `PT` reaction text; matchup #2 `edge_why` and `key_battles`.
- The PT reaction says "Stay inside, under your flank. Stick in the lane from the QB to your flank and the bumper." The point is (30,0) and the flank is (54,±30), so the P-to-flank lane is a long diagonal. The side at (64, 12) is about 19 ft off that line, so a stick cannot be in it.
- Matchup #2 says "S_L takes LF, S_R takes RF... matched 3-on-3", but the sides stand 17 ft inside the flanks.
- Nielsen explicitly designs a compact diamond that concedes the wall: "closed tighter so that a goaltender can stop shots from outside it". That is a valid school of thought, and the research cites it elsewhere, but the "man-on-man" wording is the opposite school.
- *Fix:* pick one.
  - (a) Keep the compact shape (65, ±13) and reword: sides protect the middle and step out when the pass goes to their flank; wall shots are conceded; TOP, not the sides, owns the P-to-flank lane.
  - (b) Move the base to (60, ±16) and keep "man-on-flank" wording.
- Either way, delete "stick in the lane from the QB to your flank" for the sides.

**S3. Diamond side killer cannot block the dot shot from the spot given.** Records: `pk-diamond.side_l.reactions.DOT_L` (66,17) and `side_r.DOT_R` (66,-17), job "Close out and block the shot from the dot."
- The puck is at (69,22). The killer is 1.7 ft along the shot line, so he is effectively level with the shooter, not between the shooter and the net.
- Box D and wedge D at the same zone sit 7 to 10 ft along the line.
- *Correction:* DOT_L side_l (73, 17); DOT_R side_r (73, -17). That is about 6.4 ft along the line, 0.4 ft off it.

**S4. Crease: PK defenders are standing inside the 6 ft crease semicircle.** The scan (anything with x<89 within 6 ft of (89,0)) flags six spots.

| Record | Current | Suggested |
|---|---|---|
| `pk-diamond.low.BEHIND` | (84, 0) | (82, 0) |
| `pk-box.dl.BEHIND` | (86, 5) | (86, 7) |
| `pk-box.dr.BEHIND` | (86, -5) | (86, -7) |
| `pk-wedge-plus-one.dl.BEHIND` | (86, 5) | (86, 7) |
| `pk-wedge-plus-one.dr.BEHIND` | (86, -5) | (86, -7) |
| `pk-box-aggressive.dr.BEHIND` | (84, -2) | (82, -2) |

- The diamond-low spot is the worst: it is dead centre in the goalie's crease. It also contradicts the file's own principle "never as a screen in front of your own goalie".
- Defenders in the crease edge by the post is legal, so the box and wedge ones are lower priority.
- No PP spot is inside the crease. N sits at 6.0 to 6.7 ft on its reactions, which is right at the edge. Consider (84, ±3), about 7 ft out, so the animation does not show N "in the crease". The matchup text "L jumps from GL_L to the crease" (#1 play 1) and "N plants at NET on the goalie's eyes" should say "to the edge of the crease / to the front of the net".

**S5. Diamond side killer steps out past the top of the circle, against the diamond's own rule.** Records: `pk-diamond.side_l.PT_L` (44, 14) and `side_r.PT_R` (44, -14).
- Matchup #2 `pk_answers[4]` and the THN source say killers caught too high (past the top of the circles, x=54) leave 2-on-1s.
- *Correction:* use (50, ±14) and describe it as "show", or have TOP handle the D-to-D pass and let the side stay at (62, ±14).

**S6. "On the puck from the outside-in" contradicts the PK doctrine.** Record: `pk-diamond.side_l.GL_L.job`, `side_r.GL_R.job`.
- The file's shared principle and the box say pressure is inside-out and "go to the carrier from the inside".
- The spot (83, 12) is level with the puck at (86,14), not between it and the net.
- *Correction:* reword to "from the inside, between L and the slot", spot (85, 9) / (85, -9). That is about 5 ft from the puck and 2 ft off the L-to-net line.

**S7. A "diamond high, box low" claim is attributed to a source that does not say it, and the term is loose.** Record: `matchups.md` #2 `sources[LBX Hockey]` ("teams play the diamond when the puck is high and the box when it is low").
- LBX actually says the Red Wings "revert to a box" when the puck is low, but "typically revert to the dreadful 1-1-2" when it is high, and sometimes end up in a diamond.
- Nielsen, the Panthers clip and Silver Seven support the collapse-when-low idea. Cite those instead.
- The play named "Diamond high, box low" ends with TOP in the high slot and three killers low. That is a triangle plus one, not a box.

**S8. Other source/claim mismatches** (each checked against the page):
- LG Sports (cited under `pp-umbrella` for "Umbrella gives three one-time shooters"): the page jokes "allows a team to 'Let it Rain' with 3 potential one-time shooters, but I am making that up as a write." Do not cite it as evidence.
- `pp-systems.md` table credits TSN with "(players quoted)" for the umbrella definition. The umbrella and diamond descriptions are the article's own words. The quotes (Keefe, Hughes) are general. The "side-boards players" part is in the Globe and Mail copy, not in my TSN extract.
- Matchup #7 `u15_note`: "Hockey Canada-style course material recommends starting here". No Hockey Canada source is cited. The only Hockey Canada citation in the whole set is Rule 6.7, and the overload sources are LG Sports/CoachTube, Weiss and hockeyplayer.com. Delete the attribution.
- Jack Han: `pp-systems.md` calls the three-across-the-top "2-3" an older wording with "a second D on one flank". Han's article uses "2-3 Umbrella" as the current NHL term (F1/F2 near the net, three high), and says it and the 1-3-1 "supplanted" the 3-2 spread and 2-1-2 box+1. I saw no second-D-on-a-flank claim. Unverified; remove or source it.
- Pure Hockey ("See the jersey, pressure; see the eyes, contain"): page returned a client error, so unverified. The slogan is cited to five sources; check one that loads.
- BenchIQ diamond page is cited for "Diamond as the umbrella-killer". The page does not compare the diamond with the umbrella. It says it is built to erase one-timers and may face "an umbrella or 1-3-1". Reword the support.
- HockeyShare 415458 (diamond setup) is accurate but never mentions an umbrella.

**S9. Rules and safety wording a coach will pick up on.**
- *Delay of game.* The PK material repeatedly says "rip it off the glass and down the ice", "go off the glass", "clear off the glass" (pk-diamond triggers, matchup #2 plays, pk-box-aggressive). Hockey Canada Rule 10.1 lists "A player who deliberately shoots, bats, or throws the puck outside the playing surface" as Delay of Game. A killer who shoots it over the glass on a PK takes a minor and gives the PP 5-on-3. Add a line to every clearing instruction: "off the glass means off the boards/glass and still in play, never over it; shoot it out of play and it is a 2-minute delay-of-game minor."
- *Shot blocking.* Matchup #1 `u15_note` says "on one knee only if the PK's coach allows it", but `pk-box.DOT_L` says "on your feet, head out of the lane". That is contradictory advice about a 13 to 14 year old's safety. Make it one rule: stay on your feet, turn sideways, sticks in lanes, no diving or head-first; follow association guidance.

**S10. Naming collisions that will confuse coaches you share this with.**
- Alias `1-2-2` is used for both `pp-umbrella` and `pp-overload` ("blueseat wording").
- "2-3" means opposite things: `pp-umbrella` alias "2-3 umbrella" = three high, two low; `pk-box.best_against[0]` "2-3 (two points, three low)".
- `pk-systems.md` says the 1-1-2 "appears mainly as a neutral-zone PK forecheck... not common enough to model", but the matchup grid labels the third column "Triangle + 1 / Wedge + 1 (1-1-2)" and the LBX source is a 1-1-2 article. Use one name and define 1-1-2 once.
- The pk-box summary says the box "protects the slot and goalmouth", while the shared principles (learn-ice-hockey) say a box "concedes the middle of the slot". The intended meaning is "protects the low slot/crease, concedes the bumper"; say so.

**S11. Overload `W` handedness example is wrong.** `pp-overload.roles[W].handedness`: "left-handed shot on the right side... (e.g. Ovechkin's spot, mirrored)". Ovechkin is a left shot on the left circle, so he is an on-wing example and is the opposite of the claim. The off-wing logic itself is sound: a lefty on the PP's right (-y) receives a pass from the strong side (+y) on his stick side. Delete the Ovechkin reference or use a true off-wing example.

### NITPICKS

- **N1.** Matchup #2 "Trap the rim": "P rims the puck along the boards to LF". A PP does not rim a puck to its own flank. Reframe as "pass up the wall arrives on LF's backhand, back to the play".
- **N2.** Matchup #2 "Diamond high, box low": L's options include "up to LF (TOP's lane)", but TOP has dropped to BUMPER. The lane to LF is S_L's, who has just dropped onto L. Correct the lane owner.
- **N3.** Matchup #2 `steps`: "back post (84,-5)". That is 7.1 ft from the goal-line centre, outside the crease, so legal. The true back-post spot is about (86,-6) (6.7 ft). Both are fine; say "far post".
- **N4.** `pp-1-3-1.summary` says it "is the most common NHL power play today". Sources say "the most common modern system" (IceHockeyMan tag page) and "basically one or two power play looks, including the 1-3-1" (Guentzel). Soften to "one of the two dominant NHL looks".
- **N5.** Matchup #1 and #7 `u15_note`s say the box is "the most common at U15" and "the most common U15 matchup". Unsourced. Mark as the author's judgement.
- **N6.** Half-wall y of 30 to 33 sits 10 to 12 ft off the boards. A typical half-wall puck carrier is 6 to 9 ft off, y about 34 to 36. Zone centre WALL (54, ±31) is internally consistent, so leave it unless the animation looks off.
- **N7.** Rink assumption: Hockey Canada Rule 1.3 puts blue lines 64 ft from each goal line only on rinks of 185 ft or more. On shorter rinks they divide goal line to goal line into thirds. If a U15 team practises in a short Alberta arena, the app's x-scale for the blue line (and PT zone) shifts. Add a note.
- **N8.** The schema's +y = PP's left is correct for a screen with y pointing up. Most UI frameworks use y-down, which silently swaps left and right. Add one unit test: the role labelled "Left flank" must render on the same side as its "WALL_L" label.
- **N9.** Rules attribution in `pk-systems.md` and `matchups.md`: say "USA Hockey, 2025-26: 14U and younger may not ice the puck shorthanded; Youth 15 Only and Girls 16U and up may" and cite the USA Hockey news item (below) instead of Wikipedia. The phrase "withholds this exemption below Youth 15-only" is correct but cryptic.

---

## 2. Hockey-correctness assessment (Umbrella vs Diamond focus)

Mainstream and not wrong:
- Roles and rotations for the diamond (top pressures the point then drops inside; strong-side side steps out; low D owns net front; weak side collapses; puck low means collapse around the net; chase the wall only when the back is turned) match Nielsen line for line.
- Umbrella structure (point plus two flanks high, net front, one more low), the "move it before the PK shifts" logic, and "work low at 14U" are consistent with TCS, Han, TSN and USA Hockey.
- "Contain vs pressure on cues; one-go-all-go; clear hard; sticks in lanes" is standard.

One valid school among several (not errors; label as options in the UI):
- Flank handedness: off-wing for one-timers (majority) vs strong-hand side (TCS umbrella). The research flags it.
- Whether the umbrella's second low player lives on the goal line (the team's v1) or stacks at the net front (Han, TCS, TSN: "two closer to the net"). Han's umbrella disadvantages list "Low players are unavailable to create seam plays". The team's L-with-seam-plays is closer to an overload. The research says it is a variant; keep that wording prominent so another coach does not read the "umbrella" as the textbook one.
- Compact diamond (Nielsen) vs matched-to-flank diamond (HockeyShare/Blue Seat).
- Diamond F/D assignment of the sides. Han has the strong-side D covering the half-wall and the weak-side F guarding seams; the research says side_l is "usually the second F" and side_r "usually a D". HockeyShare says interchangeable. Rename to "F or D, whoever is on that side" to avoid a fixed assignment.
- Whether the box beats the overload (learn-ice-hockey and Blue Seat yes; TCS no). Correctly flagged as contested.

A knowledgeable coach would call these wrong or misleading as written: the items under M1, M3, S2, S3, S7, S9 above.

---

## 3. Geometry scan results (script: `rev/scan.py`, `rev/mirror.py`)

- Checked: every `[x, y]` pair in all 8 system JSON blocks (4 PP + 4 PK; `base` and all reaction `spot`s, 450 points) plus every `(x,y)` literal in the three markdown files.
- Out of rink (including rounded corner R=28): none. Inside the net (89<=x<=93, |y|<=3): none.
- Inside the crease (x<89, within 6 ft of (89,0)): six, listed in S4. All are PK defenders in the BEHIND reaction.
- Left/right: 0 sign errors in coordinates. 4 prose errors in the mirrored `play` text (M5).
- Mirror consistency: all symmetric pairs mirror exactly except deliberate asymmetries (`pk-box-aggressive` presser, `pp-spread` PL walking point and LL behind the net).
- Carrier spot vs zone centre: all within 5 ft except spread LL/LR at WALL (8 ft, they "came up the wall from low") and PL at PT (6 ft). Acceptable.
- Blocker position: besides S3, all PK "block/close out" spots lie 7 to 20 ft along the shot line and within 0.5 to 6 ft laterally.

---

## 4. Claims vs sources (opened and compared)

| # | Claim in the research | Source | Verdict |
|---|---|---|---|
| 1 | Shorthanded team may ice the puck (Hockey Canada Rule 6.7) | rulebook.hockeycanada.ca Rule 6.7, page text read | **Supported.** "Icing will not be called and play will continue if the team shooting the puck is below the numerical strength of the opposing team at the instant the puck is shot." No age exemption. Only U18AAA/Junior are named, for no-change and hybrid variants. The page has no season stamp. Confirm Hockey Alberta applies no local change. |
| 2 | USA Hockey calls icing on shorthanded teams at 14U and younger, with the exemption only at Youth 15 Only and above | usahockey.com/news_article/show/1346217 (2025-26 rules); usahockey.com/news_article/show/804355 (2017); hockeyjournal.com 12 Jun 2025 | **Supported.** "allows teams at the Youth 15 Only and above, and Girls 16U and above levels to ice the puck while playing short-handed." 14U and below remain prohibited. The usahockeyrulebook.com page is JavaScript-rendered and its text could not be retrieved, so the primary rulebook text itself was not seen. |
| 3 | Guentzel advises against the 1-3-1 with younger players | usahockey.com 567732 | **Supported.** |
| 4 | Same article: USA Hockey recommends an umbrella/overload with two skilled players on the strong side for younger teams | same | **Not supported** (it describes pro teams). The article's youth advice is 2D+3F. See M1. |
| 5 | Same article: at 14U work low (half-wall, goal line) for back-door and seam chances; kids not a threat from the point | same | **Supported.** "kids might not yet be a shooting threat at 55 feet"; "working around the half-wall or around the goal line"; "backdoor plays or little seam passes". |
| 6 | Systems from about 14U; rotate players | usahockey.com 567725 | **Supported.** "Once we get to 14U and beyond, a coach needs to start accelerating his special teams construction"; recommends getting everyone involved. |
| 7 | Diamond is what the PK uses against the umbrella; box is most often used against the overload | Blue Seat 2011/10/24 | **Supported.** Same text as the r/hockey wiki mirror, so not independent. |
| 8 | Diamond rotations, 2-on-1 low, weak side steps down, do not chase the wall unless back turned; box "doesn't handle" the umbrella | Copper & Blue (Nielsen) | **Supported** on every point. |
| 9 | Diamond is the PK that "takes away the QB and the side-boards forwards" | TSN 1.2098964; Globe and Mail copy | **Supported** (QB in both; "forwards along the side boards" confirmed in the Globe copy). "Players quoted" is wrong. |
| 10 | Tocchet: diamond leaves the bumper open; "emptying the bumper" | Philadelphia Inquirer | **Supported.** "Most teams play a diamond PK". |
| 11 | Senators' diamond fails with outside killers caught high (2-on-1s low) and concedes distance shots | The Hockey News | **Supported.** |
| 12 | Diamond is "most effective" vs the umbrella; wedge +1 is the aggressive option | Silver Seven PK | **Supported.** |
| 13 | Diamond three moving parts, minimal bumper coverage, passive box prone to seam plays | Jack Han, Diamonds Aren't Forever | **Supported.** |
| 14 | "2-3 umbrella" has no high-slot presence; low players cannot make seam plays | Jack Han, Asked and Answered | **Supported**, but Han uses "2-3" as the modern term. |
| 15 | Umbrella needs a more complex PK than the simple box or either wedge +1 | Weiss Tech umbrella tag | **Supported.** |
| 16 | 1-3-1 counter is typically a diamond; high diamond forward alternates with a linemate | Pension Plan Puppets | **Supported.** |
| 17 | Box geometry: low D about two yards in front of each post; far top player in the middle of the slot; two defenders form a barrier on the puck side; far D covers net front | Tony O | **Supported.** |
| 18 | Box vs overload both ways; diamond concedes outside and backdoor; wedge +1 is high cognitive load | learn-ice-hockey special teams | **Supported.** Also says the box "concedes the middle of the slot" (conflicts with the pk-box summary). |
| 19 | Umbrella: three high, two low; high forwards ideally on strong-hand side; predictable | TCS umbrella (preview visible) | **Supported.** |
| 20 | "Teams play the diamond when the puck is high and the box when it is low" | LBX Hockey | **Not supported.** See S7. |
| 21 | "Umbrella gives three one-time shooters" | LG Sports | **Not supported** (the page calls it a made-up joke). The page does support 1-3-1 vs umbrella, overload as most basic, and diamond vs umbrella. |
| 22 | Back-door / weak-side one-timer options; foundation for a Pee Wee power play | HockeyShare 32706 | **Supported.** |
| 23 | "See the jersey, pressure; see the eyes, contain" | Pure Hockey | **Could not verify** (fetch failed). |

Paywalls: I used only text the pages served. TCS and Jack Han previews were read as served.

---

## 5. Rules claim verdict

- **Hockey Canada (Alberta U15):** shorthanded teams may ice the puck (Rule 6.7). Verified in the live rulebook. Caveat: the page carries no season and says nothing about Hockey Alberta or league-specific amendments. Confirm with the league.
- **USA Hockey:** 14U and younger may not ice while shorthanded (since 2017-18). From 2025-26 the exemption returns for Youth 15 Only and above and Girls 16U and above. The research's two statements ("withholds below Youth 15-only", "14U and younger") are both correct. Prefer the USA Hockey news page over "per Wikipedia".
- **Additional rule to add:** Hockey Canada Rule 10.1 (deliberately shooting the puck outside the playing surface is Delay of Game). See S9.
- Rink dimensions: Hockey Canada Rules 1.3, 1.5, 1.8 confirm the schema's constants for rinks of 185 ft or more.

---

## 6. U15 age-appropriateness notes

- Timing is right. USA Hockey's own guidance puts "accelerating" special teams at 14U, which is U15's age band. It also says to keep instruction light until then.
- One-D structures conflict with USA Hockey's youth advice (M1). The spread (2 D) is closest. Consider a 2-D umbrella variant so defencemen get reps off the point.
- The point shot: the point is about 57 ft from the goal line. Guentzel notes kids "might not yet be a shooting threat at 55 feet". The research's "work low" and "wrist shot, low and on net" advice is right. Make sure the umbrella plays do not depend on a point one-timer scoring.
- Rotation and cross-ice demands: the diamond and the wedge +1 both need timed exchanges. The research already calls them demanding. Keep the "one rule per player" teaching, and confirm the sides rule in `pk-diamond.u15_note` ("puck to your side you go, other side you drop") matches the one in matchup #2 ("sides: stick in the middle lane"). They are not the same sentence.
- Saucer and blind cross-seam passes at 13 to 14: the research already warns about these.
- Safety: shot blocking and delay-of-game wording (S9). Behind-the-net rotations (L skating behind the net every swing) will create traffic in U15 divisions where body-checking is permitted. Mention "heads up behind the net" in the L rotation rule.
- Reading level: zone codes (WALL_L, CORNER_R) and role letters are fine for coaches. For player-facing `why` text, a few phrases are jargon-heavy ("pressure inside-out", "shooting lane", "seam"). They are acceptable at 13 to 14 if the app has a one-screen glossary.

---

## 7. Suggested order of work

1. M5 (4 text strings) and the S3/S4/S5/S6 coordinate corrections: mechanical and quick.
2. M2, M3, M4, S1: align verdicts and strengths/weaknesses across the three files (one pass).
3. M6, M7: ID map and the missing umbrella reactions.
4. M1, S8, S9, S11: source and wording corrections.
