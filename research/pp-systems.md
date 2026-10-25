# HockeyEnvy: Power Play Systems (research file)

Researched 2026-10-25 for U15 special-teams teaching. Coordinates follow SCHEMA.md: x runs toward the net (blue line 25, goal line 89); +y is the power play's LEFT side.

## How to read this file

- **Sourced** means two or more sources agree. **(inference)** in any `why` text means the claim is single-sourced or my own coaching reasoning. Treat those as editable defaults, not facts.
- **Options.** The schema says PP roles carry passing options per zone. Here they sit inside the puck carrier's reaction for that zone as `options: [{rank, to, play, why}]`. Exactly one role per zone has `options`, and that role is the puck carrier.
  - `to` is a role id, or a list of role ids meaning "whichever of these is open".
  - It can also be `"SHOT"` (shoot) or `"CARRY"` (skate it, e.g. behind the net).
- **Extra role field: `handedness`.** Added because the brief asked for handedness. The app can ignore it.
- **Mirroring.** Left-side zone reactions were written once and mirrored by script (y to -y, LF/RF swapped). Both sides are therefore geometrically consistent, and the text says "puck side / far side" rather than left/right.
- **Overload** is written as a LEFT-side overload (strong side = +y). For a right-side overload, flip every y and swap handedness. Zones not listed for the overload (e.g. WALL_R, GL_R) mean "the overload has flipped sides".
- **Paywalls.** Several The Coaches Site (TCS) and Jack Han pages are partly paywalled. Only the free text was used, and the sources lists say what each page actually supported.

## Umbrella vs 1-3-1: the naming problem, and the definition used here

Sources use "umbrella" for two different shapes:

| Usage | Shape | Who uses it |
|---|---|---|
| **Umbrella = 3 high, 2 low** | Point plus two flanks across the top (the canopy), with TWO players low near the net | TCS umbrella article, TSN (players quoted), Blue Seat Blogs, the r/hockey wiki, IceHockeyMan, and Jack Han ("2-3 Umbrella") |
| **"1-3-1 umbrella"** | Point, three across the middle (two flanks plus a high-slot bumper), one net front | NHL broadcast/blog shorthand, e.g. Jack Han writes "1-3-1 Umbrella". LG Sports describes the 1-3-1 as "similar to the umbrella, but one shooter looks for the opening in the diamond". |

**Definition used here.** The **Umbrella** is the 1-2-2 shape: point, two half-wall flanks, a net-front player, and a second low player. In Kyle's v1 that second low player works the puck-side goal line. The **1-3-1** is the shape with the fifth player in the **high slot (bumper)**.

The simple test: **is the fifth player low (umbrella) or in the middle (1-3-1)?**

Why this definition:
1. Most coaching sources define the umbrella as three high and two low, and every coaching source defines the 1-3-1 with a bumper.
2. It keeps the 1-3-1 meaning consistent with current NHL coaching material.
3. It matches the team's v1 system.

Kyle's v1 places one of the low players on the goal line rather than both in front. That is a known variant: Blue Seat notes some coaches stack or stagger the two low forwards. It is also what USA Hockey recommends 14U teams attack from (the half-wall and goal line).

Coaches should also know two other names. Older writing sometimes put a second D on one flank (Jack Han's "2-3", three across the top). USA Hockey's Guentzel calls a similar strong-side setup an "umbrella overload".

---

## 1. Umbrella (team v1). Confidence: medium-high on the shape and roles, medium on the detailed movement.

**Shape.** P at the middle of the blue line. LF and RF on the half-walls near the top of the circles. N at the net front. L on the puck-side goal line.

**Handedness.** Flanks on the off-wing (right-handed shot on the left) gives one-timers and puts the forehand toward the middle. This is the majority view. The TCS umbrella article instead puts the high forwards on their strong-hand side so they catch passes on the forehand while skating downhill. That is an open disagreement. For U15 the suggestion (inference) is: off-wing on the side where you want a one-timer, and an on-wing passer is acceptable on the side whose job is feeding the goal line.

**How it attacks.**
- Puck at the point: P moves it to the flank the PK's top forward isn't covering, or shoots low through N's screen.
- Puck on the half-wall: first look is down to L, which makes a 2-on-1 with N against the PK's low D. Second is back to P, who swings it across. Third is the cross-seam pass to the far flank.
- Puck on the goal line: first look is N popping into the low slot, second is the far flank at the back door, third is a give-and-go with the flank stepping into the seam.

**Movement rules.**
- L follows the puck to the puck-side goal line and goes behind the net to get there.
- N shades to the puck-side post.
- The far flank sags toward the far dot.
- P slides toward the puck but always stays the safety.

**Strengths.** Three shooters up top against a box's two forwards. A low 2-on-1. Simple roles.

**Weaknesses.**
- Only one player is back.
- No one in the high slot, so passes go around the outside.
- Cross-seam passes are risky.
- Too much time at the point is far from the net.

**PK matchups.**
- Best against a **passive box** and collapsing kills.
- The **diamond** is the standard counter (sourced). The suggested answer (inference) is to go low, because the diamond has one low player for N and L.
- Aggressive kills that attack the high three are dangerous.

**U15.** Very teachable. Three plays, one rotation rule (L follows the puck behind the net), and wrist shots from the point.

---

## 2. 1-3-1. Confidence: high on the shape and handedness, medium on PK matchups (sources disagree on the diamond).

**Shape.** P at the middle point. LF and RF on the half-walls between the top of the circle and the hash marks, both on their off-wing (all sources agree). B in the high slot. N at the net front.

**How it attacks.**
- Puck at the point: open flank, then bumper, then low shot.
- Puck on the flank: bumper (shot or bump across), then N on the strong-side post, then back to P for the swing.
- Puck with the bumper: shoot, or bump to the far flank.
- Puck low (N on the goal line): slot, then the wall, then back door across the front (IceHockeySystems' order).

**Movement rules.**
- N slides to the puck-side post while the flank holds the puck.
- B steps toward a pressured carrier.
- "Empty the bumper": B rotates out and someone else fills the middle.
- The weak-side flank slides down the dot lane as the QB walks the middle.

**Strengths.** Four passing triangles, a bumper in the PK's hole, and the most options of any setup.

**Weaknesses.**
- The lone point is a breakaway risk.
- Cross-seam passes can be intercepted.
- Weaker than the overload at winning back pucks low.
- Needs high skill.

**PK matchups.**
- Best against a **passive box** (bumper and seams) and collapsing kills.
- **Diamond is disputed.** TSN and the Panthers clip say the diamond is built to take away the QB and flanks. Jack Han and Tocchet say it leaves the bumper and seams open.
- Dangerous against aggressive pressure on the point.

**U15.** USA Hockey (Guentzel) advises against it for younger players, and TCS calls it high-risk. If you use it, run it static with two or three set plays, and give the bumper role to your smartest player.

---

## 3. Overload. Confidence: medium-high. All sources agree on the concept, but the exact five-player arrangement varies.

**Shape (left-side overload).** Strong-side triangle of P (strong-side point), H (half-wall, off-wing) and L (goal line). N at the net front. W is the weak-side shooter at the far dot, off-wing for the one-timer.

The sources vary in the details:
- TCS uses a middle point D, a half-wall forward, a low forward, a bumper near the top of the crease, and a far-side forward.
- The r/hockey wiki's "Czech" version uses two D.

This file follows the brief's layout, which fits both.

**How it attacks.**
- Puck on the half-wall: first look is down to L, second is up to P (for a shot or the swing to W), third is N.
- Puck on the goal line: N in the low slot, then H stepping into the seam, then W at the back door.
- Puck at the point: low shot through the screen, then walk to the middle and hit W, then back to H.

**Movement rules.**
- H steps into the seam after passing low (give-and-go).
- H rises up the wall when P walks the line.
- An optional "high rotation" (P dives, H fills the point) for pressure. Its U15 form is inference.
- When W gets the puck: shoot, N screens, L crashes the net.

**Strengths.** Short passes, 3-on-2s on the strong side, a weak-side trigger, and the simplest to teach.

**Weaknesses.**
- Clears to the weak side.
- Low-percentage shots from below the goal line.
- Predictable short lanes.
- Retrievals.

**PK matchups.** Best against a **passive box** that won't pressure the wall (the box is the usual PK against it). Weak against a **pressure kill that squeezes the half-wall**, and against any kill once the overload is predictable.

**U15.** The most-recommended first PP for youth (Weiss Tech, hockeyplayer.com, LG Sports). It also matches USA Hockey's advice to work low at 14U.

---

## 4. Spread (2-1-2 / Box + 1). Confidence: medium. Fewer detailed sources, and most of them discuss it as a 5-on-3 or reset set.

**Shape.** Two points (PL, PR). S in the slot. LL and LR low on the dot lines beside the net.

**Naming.** "Box + 1" is used mostly for 5-on-3 (LG Sports). Jack Han lists "2-1-2 Box+1" and a "3-2 Spread" as separate older schemes, so the word "spread" is not consistent across writers.

**How it attacks.**
- Puck at a point: D-to-D, then down to the same-side low player, then into the slot.
- Puck low: slot, then back door, then up to the point.
- Puck with the slot player: shoot, or pass to the low player whose PK D stepped up.

**Movement rules.**
- The far low player sneaks back door.
- When a low player carries the puck up the wall, the unit shifts into a 1-3-1 or overload (TCS: Detroit does this).

**Strengths.** Time and space. Punishes aggressive PKers. Easy to rotate players through.

**Weaknesses.** Perimeter shots against a passive box, long passes, and no fixed net front.

**PK matchups.** Best against **aggressive/pressure kills** and on **5-on-3**. Weak against a **passive box**.

**U15.** Use it as a reset or for 5-on-3, then shift into your main system.

---

## Open disagreements between sources

1. **What "umbrella" means.** Three high and two low (majority) versus "1-3-1 umbrella" (NHL shorthand). Resolved above.
2. **Umbrella flank handedness.** TCS umbrella says strong-hand side (forehand catch). Every 1-3-1 and overload source, and IceHockeySystems, say off-wing for one-timers.
3. **Diamond against the 1-3-1.** TSN and the IceHockeySystems Panthers clip say the diamond takes away the QB and flanks. Jack Han and Tocchet (Inquirer) say it concedes the bumper and seams.
4. **The overload's five-player layout.** One point or two, and a bumper versus a goal-line player. All versions share the strong-side triangle and the weak-side one-timer.
5. **"Spread" naming.** 2-1-2, box + 1 and 3-2 spread are used inconsistently.

## Systems considered but not added

- **Split** (silversevensens): an overload/1-3-1 hybrid with a mobile point.
- **Slot set** (r/hockey wiki).
- **Behind-the-net formation** (TCS title only).

Each was single-sourced or a variant of the four systems here, so none was added.

## System records (JSON)

### Umbrella

```json
{
  "id": "pp-umbrella",
  "side": "PP",
  "name": "Umbrella",
  "aliases": [
    "1-2-2",
    "umbrella (point + two flanks + two low)",
    "2-3 umbrella (older 3-high/2-low wording)"
  ],
  "summary": "One point player and two half-wall flanks form the umbrella's canopy. Two players work low: one at the net front and one on the puck-side goal line. The puck moves around the top to create a shot through a screen, or goes down low for a 2-on-1 against the PK's low defender. What separates it from the 1-3-1 is that the fifth player is LOW, not in the high slot.",
  "best_against": [
    "A passive box (2-2). Its two forwards must cover three high players (P, LF, RF), so one shooter up top is always open, and the two PK D are tied up by N and L (sources: blueseat 2011, r/hockey wiki; the 3-on-2 high logic is inference).",
    "Kills that collapse to the slot and give up the perimeter. The umbrella gets point and flank shots through a screen."
  ],
  "weak_against": [
    "A diamond (1-2-1). It is the standard answer to the umbrella: its top forward takes the point and its two side players take the flanks (blueseat PK, r/hockey wiki, TSN, LG Sports). Counter (inference): the diamond has one low player for two umbrella low players, so work low to L and N.",
    "Aggressive kills that attack the three high players. Only one player is at the blue line, so a turnover becomes a shorthanded rush (blueseat PK)."
  ],
  "u15_note": "Very teachable at U15. USA Hockey's special-teams guidance recommends an umbrella/overload-type look with skilled players on the strong side for younger teams. It also says 14U players should work the puck low (half-wall and goal line) quickly for back-door and seam chances, because they are rarely scoring threats from the blue line. Simplify by teaching three plays only: (1) P to open flank to shot through N; (2) flank to L, L to N in the slot; (3) flank to L, L across to the far flank at the back door. Use wrist shots rather than slap shots from the point. Keep the rotation rule simple: L always goes to the puck-side goal line by skating BEHIND the net.",
  "triggers": [
    {
      "cue": "Puck moves from one half-wall to the other (through P)",
      "who": "L, N",
      "action": "L skates BEHIND the net to the new puck-side goal line. N shades to the new puck-side post.",
      "why": "Keeps the low 2-on-1 on the side with the puck. Going behind the net keeps L out of shooting lanes and away from PK sticks (rotation rule is coaching consensus; behind-the-net path is inference)."
    },
    {
      "cue": "Puck on one half-wall",
      "who": "far flank",
      "action": "Sag down from the half-wall toward the far dot.",
      "why": "The PK's weak-side forward cheats to the puck. Dropping in behind him sets up a one-timer the goalie must cross the crease to stop."
    },
    {
      "cue": "Point shot is taken",
      "who": "N, L",
      "action": "N screens and tips. L attacks the near post for the rebound. The flanks hold their spots unless a rebound comes to their dot.",
      "why": "Point shots at this level are usually stopped, so the goals come from the second chance."
    },
    {
      "cue": "PK forward pressures P hard",
      "who": "P, flanks",
      "action": "P moves the puck to the open flank right away instead of holding it. The flank on the far side drops toward the dot.",
      "why": "Pressure on the point leaves a flank open. Holding the puck risks a shorthanded breakaway."
    },
    {
      "cue": "PK low defender chases L below the goal line",
      "who": "N",
      "action": "N pops out from the crease into the low slot.",
      "why": "The PK defender who was covering N has left. N is now open for the goal-line-to-slot pass."
    },
    {
      "cue": "Loose puck in a corner",
      "who": "L, near flank, P",
      "action": "L goes first, the near flank comes down the wall to make it 2-on-1, and P holds the puck-side blue line.",
      "why": "Outnumber the PK on loose pucks. P stops the rim-out."
    }
  ],
  "weaknesses": [
    {
      "where": "Blue line behind P",
      "why": "Only one player is high.",
      "how_exploited": "The PK's top forward jumps a lazy pass or P bobbles the puck, and it's a shorthanded breakaway."
    },
    {
      "where": "BUMPER (high slot)",
      "why": "Nobody plays the middle, so every pass goes around the outside (Jack Han notes the older umbrella has no high-slot presence).",
      "how_exploited": "A diamond can read the perimeter passes and keep its shape. The PP struggles to get the puck through the middle."
    },
    {
      "where": "Flank-to-flank seam through the slot",
      "why": "It's a long pass through the most crowded area.",
      "how_exploited": "A PK stick in the lane picks it off and clears, or starts a rush."
    },
    {
      "where": "PT when the puck stays up top",
      "why": "The play is far from the net and the goalie is comfortable (TCS).",
      "how_exploited": "The PK lets the PP shoot from the point and clears the rebound. Fix it by going low."
    }
  ],
  "roles": [
    {
      "id": "P",
      "label": "Point (quarterback)",
      "player": "D",
      "base": [
        32,
        0
      ],
      "handedness": "Either. Pick your calmest passer with a shot that gets through traffic (low and on net beats hard and wide at U15).",
      "core_job": "Run the play from the middle of the blue line: move the puck to the open flank, shoot through the screen, and never let the puck get past you out of the zone.",
      "why": "From the middle you can pass to either side, so one PK forward cannot cover both of your passes. You are also the last player back.",
      "reactions": {
        "PT": {
          "spot": [
            32,
            0
          ],
          "job": "Have the puck. Head up, read the PK's top forward.",
          "why": "Whichever side the top PK forward takes away, the other side is open.",
          "options": [
            {
              "rank": 1,
              "to": [
                "LF",
                "RF"
              ],
              "play": "Pass to the flank the PK's top forward is NOT covering.",
              "why": "Moves the puck before the PK can shift. The flank gets it with time to shoot or go low."
            },
            {
              "rank": 2,
              "to": "SHOT",
              "play": "Low, hard shot or shot-pass through N's screen.",
              "why": "A low shot through traffic makes a tip or rebound for N and L. Wide shots that rim out of the zone waste the PP."
            },
            {
              "rank": 3,
              "to": [
                "LF",
                "RF"
              ],
              "play": "Look one way, pass to the other flank.",
              "why": "A head fake pulls the top PK forward. Use it when both flanks are covered."
            }
          ]
        },
        "WALL_L": {
          "spot": [
            32,
            8
          ],
          "job": "Slide a few feet toward the puck. Be the pressure release.",
          "why": "LF always has a short, safe pass back. From here you can shoot or swing the puck to the far flank."
        },
        "GL_L": {
          "spot": [
            34,
            4
          ],
          "job": "Get to the middle of the line. You are the safety and the high option.",
          "why": "If the PK clears, you stop it at the line. A quick pass up to you finds a goalie who is still looking low."
        },
        "CORNER_L": {
          "spot": [
            33,
            12
          ],
          "job": "Hold the blue line on the puck side.",
          "why": "If the PK wins the puck and rims it up the boards, you have to keep it in."
        },
        "BEHIND": {
          "spot": [
            38,
            0
          ],
          "job": "Stay in the middle, a few feet down. Be the safety.",
          "why": "No one else is high. A clear that gets past you means 25 seconds of PP lost."
        },
        "NET": {
          "spot": [
            36,
            0
          ],
          "job": "Stay middle, be ready for a kick-out.",
          "why": "Safety and a high option."
        },
        "WALL_R": {
          "spot": [
            32,
            -8
          ],
          "job": "Slide a few feet toward the puck. Be the pressure release.",
          "why": "LF always has a short, safe pass back. From here you can shoot or swing the puck to the far flank."
        },
        "GL_R": {
          "spot": [
            34,
            -4
          ],
          "job": "Get to the middle of the line. You are the safety and the high option.",
          "why": "If the PK clears, you stop it at the line. A quick pass up to you finds a goalie who is still looking low."
        },
        "CORNER_R": {
          "spot": [
            33,
            -12
          ],
          "job": "Hold the blue line on the puck side.",
          "why": "If the PK wins the puck and rims it up the boards, you have to keep it in."
        }
      }
    },
    {
      "id": "LF",
      "label": "Left flank",
      "player": "F",
      "base": [
        54,
        30
      ],
      "handedness": "Preferred: right-handed shot (off-wing) so a pass from the point or across the ice lands on your forehand for a one-timer and your forehand faces the middle. Acceptable: a left-handed passer if this side's job is mostly to feed the goal line (one source puts umbrella flanks on their strong side for forehand catches).",
      "core_job": "Be a shooting and passing threat on the half-wall at the top of the circle.",
      "why": "Two flanks stretch the PK side to side. When the PK leans one way, the other flank is open.",
      "reactions": {
        "PT": {
          "spot": [
            54,
            30
          ],
          "job": "Stick down, open your body to the middle, be ready to catch and shoot.",
          "why": "A flank who is ready can shoot before the PK defender gets there."
        },
        "WALL_L": {
          "spot": [
            54,
            31
          ],
          "job": "Have the puck. Face the middle with your shoulders square, look low first.",
          "why": "From the half-wall you can see all four teammates. Your job is to make the PK guess.",
          "options": [
            {
              "rank": 1,
              "to": "L",
              "play": "Pass down to L on the goal line.",
              "why": "Gets the puck below the PK. L and N then make a 2-on-1 against the PK's low defender."
            },
            {
              "rank": 2,
              "to": "P",
              "play": "Bump it back up to P.",
              "why": "Resets when you're pressured. P can shoot or swing it to the far flank, and two quick passes across the ice move the goalie and the PK."
            },
            {
              "rank": 3,
              "to": "RF",
              "play": "Cross-seam pass to the far flank at the far dot.",
              "why": "Biggest reward because the goalie has to cross the whole crease, and biggest risk because it goes through the slot. Only throw it when the lane is clearly open. If the PK backs off, walk down into the circle and shoot instead."
            }
          ]
        },
        "GL_L": {
          "spot": [
            62,
            24
          ],
          "job": "After passing down, step inside the dot into the seam for a return pass.",
          "why": "This is a give-and-go. The PK defender who chased the puck down leaves the space inside the dot open."
        },
        "CORNER_L": {
          "spot": [
            68,
            36
          ],
          "job": "Come down the wall to help. Make it 2-on-1 on the puck.",
          "why": "The PP should outnumber the PK on every loose puck, and you give L a short pass."
        },
        "BEHIND": {
          "spot": [
            64,
            24
          ],
          "job": "Drop to the dot, stick loaded.",
          "why": "From behind the net L can hit a shooter at either dot, and the PK can't cover both sides."
        },
        "NET": {
          "spot": [
            64,
            22
          ],
          "job": "Find the dot, stick loaded.",
          "why": "Kick-out passes from the crease go to the dots."
        },
        "WALL_R": {
          "spot": [
            60,
            24
          ],
          "job": "Sag down toward the far dot, stick loaded for a one-timer.",
          "why": "With the puck on the far side, the PK's weak-side forward cheats toward it. Sliding down puts you behind him and on the goalie's blind side."
        },
        "GL_R": {
          "spot": [
            79,
            12
          ],
          "job": "Sneak toward the far post (back door), stick on the ice.",
          "why": "Every PK player is watching the puck below the goal line. The far post is the spot nobody checks."
        },
        "CORNER_R": {
          "spot": [
            50,
            20
          ],
          "job": "Come up high on the far side. Be the safety and the reset option.",
          "why": "Covers for P if he has to move and gives you an easy swing pass once you win the puck (inference)."
        }
      }
    },
    {
      "id": "RF",
      "label": "Right flank",
      "player": "F",
      "base": [
        54,
        -30
      ],
      "handedness": "Preferred: left-handed shot (off-wing), same reasons as the left flank.",
      "core_job": "Same job as the left flank, on the right side.",
      "why": "Same reason as the left flank. The far flank is usually your best one-timer because the goalie must move the farthest to stop it.",
      "reactions": {
        "PT": {
          "spot": [
            54,
            -30
          ],
          "job": "Same as the left flank: stick down, open to the middle.",
          "why": "Same as the left flank."
        },
        "WALL_L": {
          "spot": [
            60,
            -24
          ],
          "job": "Sag down toward the far dot, stick loaded for a one-timer.",
          "why": "With the puck on the far side, the PK's weak-side forward cheats toward it. Sliding down puts you behind him and on the goalie's blind side."
        },
        "GL_L": {
          "spot": [
            79,
            -12
          ],
          "job": "Sneak toward the far post (back door), stick on the ice.",
          "why": "Every PK player is watching the puck below the goal line. The far post is the spot nobody checks."
        },
        "CORNER_L": {
          "spot": [
            50,
            -20
          ],
          "job": "Come up high on the far side. Be the safety and the reset option.",
          "why": "Covers for P if he has to move and gives you an easy swing pass once you win the puck (inference)."
        },
        "BEHIND": {
          "spot": [
            64,
            -24
          ],
          "job": "Drop to the dot, stick loaded.",
          "why": "Same as LF."
        },
        "NET": {
          "spot": [
            64,
            -22
          ],
          "job": "Find the dot, stick loaded.",
          "why": "Same as LF."
        },
        "WALL_R": {
          "spot": [
            54,
            -31
          ],
          "job": "Have the puck. Face the middle with your shoulders square, look low first.",
          "why": "From the half-wall you can see all four teammates. Your job is to make the PK guess.",
          "options": [
            {
              "rank": 1,
              "to": "L",
              "play": "Pass down to L on the goal line.",
              "why": "Gets the puck below the PK. L and N then make a 2-on-1 against the PK's low defender."
            },
            {
              "rank": 2,
              "to": "P",
              "play": "Bump it back up to P.",
              "why": "Resets when you're pressured. P can shoot or swing it to the far flank, and two quick passes across the ice move the goalie and the PK."
            },
            {
              "rank": 3,
              "to": "LF",
              "play": "Cross-seam pass to the far flank at the far dot.",
              "why": "Biggest reward because the goalie has to cross the whole crease, and biggest risk because it goes through the slot. Only throw it when the lane is clearly open. If the PK backs off, walk down into the circle and shoot instead."
            }
          ]
        },
        "GL_R": {
          "spot": [
            62,
            -24
          ],
          "job": "After passing down, step inside the dot into the seam for a return pass.",
          "why": "This is a give-and-go. The PK defender who chased the puck down leaves the space inside the dot open."
        },
        "CORNER_R": {
          "spot": [
            68,
            -36
          ],
          "job": "Come down the wall to help. Make it 2-on-1 on the puck.",
          "why": "The PP should outnumber the PK on every loose puck, and you give L a short pass."
        }
      }
    },
    {
      "id": "N",
      "label": "Net front",
      "player": "F",
      "base": [
        82,
        0
      ],
      "handedness": "Either. Pick someone strong on their skates with soft hands for tips and quick rebounds.",
      "core_job": "Screen the goalie, tip shots, bang in rebounds, and pop out to the slot for quick passes.",
      "why": "The goalie can't stop what he can't see. Most U15 PP goals come from screens, tips, and rebounds rather than clean shots from far out.",
      "reactions": {
        "PT": {
          "spot": [
            83,
            0
          ],
          "job": "Get in the goalie's eyes, stick on the ice for a tip.",
          "why": "A point shot only scores if the goalie can't see it or it gets tipped."
        },
        "WALL_L": {
          "spot": [
            83,
            3
          ],
          "job": "Shade toward the puck side of the crease, stay in the goalie's eyes, stick on the ice.",
          "why": "LF's shot comes from this angle and needs a screen on this side. You're also a tip target."
        },
        "GL_L": {
          "spot": [
            77,
            2
          ],
          "job": "Pop off the crease into the low slot, stick ready to shoot.",
          "why": "A pass from the goal line to the slot is the most dangerous pass in hockey. Stepping out gets you away from the PK defender who has been leaning on you (inference)."
        },
        "CORNER_L": {
          "spot": [
            82,
            3
          ],
          "job": "Hold the net front. Don't chase the puck.",
          "why": "If L wins it, the quick pass is to you. Leaving the net makes the PK's job easy."
        },
        "BEHIND": {
          "spot": [
            76,
            0
          ],
          "job": "Step out into the slot and face the puck.",
          "why": "Gives L a pass out front while the goalie is turned around."
        },
        "NET": {
          "spot": [
            82,
            0
          ],
          "job": "Have the puck at the crease. Shoot or jam it right away.",
          "why": "You have no time. Shoot first.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Shoot or jam it right away.",
              "why": "Every extra touch lets the PK collapse on you."
            },
            {
              "rank": 2,
              "to": "L",
              "play": "Slide it to L at the far post.",
              "why": "If the goalie has sealed your side, the other post is open."
            },
            {
              "rank": 3,
              "to": [
                "LF",
                "RF",
                "P"
              ],
              "play": "Kick it out to an open flank or P.",
              "why": "Restart with the PK all bunched at the net."
            }
          ]
        },
        "WALL_R": {
          "spot": [
            83,
            -3
          ],
          "job": "Shade toward the puck side of the crease, stay in the goalie's eyes, stick on the ice.",
          "why": "LF's shot comes from this angle and needs a screen on this side. You're also a tip target."
        },
        "GL_R": {
          "spot": [
            77,
            -2
          ],
          "job": "Pop off the crease into the low slot, stick ready to shoot.",
          "why": "A pass from the goal line to the slot is the most dangerous pass in hockey. Stepping out gets you away from the PK defender who has been leaning on you (inference)."
        },
        "CORNER_R": {
          "spot": [
            82,
            -3
          ],
          "job": "Hold the net front. Don't chase the puck.",
          "why": "If L wins it, the quick pass is to you. Leaving the net makes the PK's job easy."
        }
      }
    },
    {
      "id": "L",
      "label": "Low / goal line",
      "player": "F",
      "base": [
        87,
        12
      ],
      "handedness": "Either. Pick your best puck-handler below the goal line (inference: a player whose forehand faces the slot when looking out from the goal line is a plus).",
      "core_job": "Live on the puck-side goal line beside the net. Give the half-wall a low option, win loose pucks, and make the low-to-slot or back-door pass.",
      "why": "With N, you make a 2-on-1 against the one PK defender who is low on the puck side. It also gets the puck below the PK, where they have to turn their heads.",
      "reactions": {
        "PT": {
          "spot": [
            86,
            8
          ],
          "job": "Move tight to the post on your side, stick on the ice.",
          "why": "You are the rebound player and a second screen. Point shots that are stopped kick out to the side of the net."
        },
        "WALL_L": {
          "spot": [
            86,
            14
          ],
          "job": "Set up on the puck-side goal line, stick on the ice, show a target.",
          "why": "Gives LF a low option and makes the PK's low defender choose between you and N."
        },
        "GL_L": {
          "spot": [
            86,
            14
          ],
          "job": "Have the puck. Protect it and look slot, back door, then up.",
          "why": "From the goal line the goalie must turn his head, and every pass you make is to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "N",
              "play": "Pass into the low slot to N for a quick shot.",
              "why": "Highest-percentage shot available. Shoot it right away."
            },
            {
              "rank": 2,
              "to": "RF",
              "play": "Pass across the crease to the far flank at the back door.",
              "why": "Goalie is hugging your post, so the far side of the net is open. Pass only if no PK stick is in the crease."
            },
            {
              "rank": 3,
              "to": "LF",
              "play": "Pass back to LF stepping into the seam.",
              "why": "LF gets a shot from inside the dot with the goalie still turned. If nothing is open, take it behind the net or back up the wall. Don't force it."
            }
          ]
        },
        "CORNER_L": {
          "spot": [
            88,
            32
          ],
          "job": "First one in. Win the puck and protect it.",
          "why": "Retrievals keep the PP alive. A lost corner battle usually means a clear.",
          "options": [
            {
              "rank": 1,
              "to": "LF",
              "play": "Pass up the wall to LF.",
              "why": "Safest play. It resets the umbrella with the puck on the half-wall."
            },
            {
              "rank": 2,
              "to": "N",
              "play": "Quick pass to N in the slot.",
              "why": "Only if N is clearly open. It's a scoring chance before the PK has set up."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net to the other side.",
              "why": "Escapes pressure and makes the PK turn. Teammates shift to the new puck side."
            }
          ]
        },
        "BEHIND": {
          "spot": [
            95,
            0
          ],
          "job": "Have the puck behind the net. Keep your feet moving.",
          "why": "Standing still lets the PK pin you. Moving makes them choose a side.",
          "options": [
            {
              "rank": 1,
              "to": "N",
              "play": "Pass out front to N in the slot.",
              "why": "Goalie has to turn all the way around. Best chance if N is open."
            },
            {
              "rank": 2,
              "to": [
                "LF",
                "RF"
              ],
              "play": "Hit the flank at the dot on the side you are skating toward.",
              "why": "Short pass to a shooter with the goalie moving."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Keep going and come out on the far goal line. That's now the puck side.",
              "why": "Changes the puck side, and the whole unit shifts with it. Try a wraparound only if the post is open."
            }
          ]
        },
        "NET": {
          "spot": [
            85,
            -7
          ],
          "job": "Go to the far post, stick on the ice.",
          "why": "Rebounds and cross-crease passes end up at the far post."
        },
        "WALL_R": {
          "spot": [
            86,
            -14
          ],
          "job": "Set up on the puck-side goal line, stick on the ice, show a target.",
          "why": "Gives LF a low option and makes the PK's low defender choose between you and N."
        },
        "GL_R": {
          "spot": [
            86,
            -14
          ],
          "job": "Have the puck. Protect it and look slot, back door, then up.",
          "why": "From the goal line the goalie must turn his head, and every pass you make is to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "N",
              "play": "Pass into the low slot to N for a quick shot.",
              "why": "Highest-percentage shot available. Shoot it right away."
            },
            {
              "rank": 2,
              "to": "LF",
              "play": "Pass across the crease to the far flank at the back door.",
              "why": "Goalie is hugging your post, so the far side of the net is open. Pass only if no PK stick is in the crease."
            },
            {
              "rank": 3,
              "to": "RF",
              "play": "Pass back to LF stepping into the seam.",
              "why": "LF gets a shot from inside the dot with the goalie still turned. If nothing is open, take it behind the net or back up the wall. Don't force it."
            }
          ]
        },
        "CORNER_R": {
          "spot": [
            88,
            -32
          ],
          "job": "First one in. Win the puck and protect it.",
          "why": "Retrievals keep the PP alive. A lost corner battle usually means a clear.",
          "options": [
            {
              "rank": 1,
              "to": "RF",
              "play": "Pass up the wall to LF.",
              "why": "Safest play. It resets the umbrella with the puck on the half-wall."
            },
            {
              "rank": 2,
              "to": "N",
              "play": "Quick pass to N in the slot.",
              "why": "Only if N is clearly open. It's a scoring chance before the PK has set up."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net to the other side.",
              "why": "Escapes pressure and makes the PK turn. Teammates shift to the new puck side."
            }
          ]
        }
      }
    }
  ],
  "sources": [
    {
      "title": "The Coaches Site: Explained: Umbrella Power Play Formation",
      "url": "https://members.thecoachessite.com/article/explained-umbrella-power-play-formation",
      "supports": "Three high, two low near the net. Point distributes and shoots through traffic. Low forwards screen and retrieve. Predictable and far from the net if overused. TCS puts high forwards on their strong-hand side (handedness disagreement). Free preview only."
    },
    {
      "title": "TSN: NHLers on the evolution of power plays and penalty killing",
      "url": "https://www.tsn.ca/nhl/nhlers-on-the-evolution-of-power-plays-and-penalty-killing-1.2098964",
      "supports": "Umbrella = one player on each flank, one at the point, two near the net or slot. The diamond PK was adopted to take away the QB and side-boards players."
    },
    {
      "title": "Blue Seat Blogs: Complete idiot's guide to hockey systems: special teams (2011)",
      "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams",
      "supports": "Umbrella = high triangle plus two low (sometimes stacked). Outnumbers the PK high. Separate definition of the 1-3-1."
    },
    {
      "title": "Blue Seat Blogs: Penalty kill (2011)",
      "url": "https://blueseatblogs.com/2011/10/24/penalty-kill/",
      "supports": "Diamond is the PK used against the umbrella. The PK can attack the three high shooters."
    },
    {
      "title": "r/hockey wiki: On-ice strategies (mirror)",
      "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies",
      "supports": "Umbrella = high triangle plus two low forwards. Diamond used against the umbrella."
    },
    {
      "title": "Jack Han, Hockey Tactics Newsletter: 2-3 vs 1-3-1",
      "url": "https://jhanhky.substack.com/p/asked-and-answered-2-3-vs-1-3-1",
      "supports": "'2-3 Umbrella' = three high, two low. No high-slot presence. Low players can't easily make seam plays. Older wording differs from modern usage."
    },
    {
      "title": "Jack Han: Guy Boucher is smarter than me (preview)",
      "url": "https://jhanhky.substack.com/p/guy-boucher-is-smarter-than-me",
      "supports": "Shows the naming overlap: the author writes '1-3-1 Umbrella'."
    },
    {
      "title": "IceHockeyMan: power play formation tag",
      "url": "https://icehockeyman.com/tag/power-play-formation/",
      "supports": "Umbrella = three high, two low. 1-3-1 is the most common modern formation."
    },
    {
      "title": "LG Sports / How to Play Hockey, Module 5: Special Teams",
      "url": "https://lgsports.ca/?p=8784",
      "supports": "Umbrella gives three one-time shooters. 1-3-1 is similar but puts one shooter into the diamond's opening. PK shifts to a diamond against the umbrella."
    },
    {
      "title": "USA Hockey: Special Teams Tactics (Mike Guentzel)",
      "url": "https://www.usahockey.com/news_article/show/567732",
      "supports": "U15 note: avoid the 1-3-1 for younger players. Use an umbrella/overload with two skilled players on the strong side. At 14U work low to the half-wall and goal line for back-door and seam chances."
    },
    {
      "title": "USA Hockey: special teams at youth ages (Witt)",
      "url": "https://www.usahockey.com/news_article/show/567725",
      "supports": "Systems from about 14U. Rotate players through units."
    },
    {
      "title": "Weiss Tech Hockey: Power Play: Umbrella",
      "url": "https://weisstechhockey.com/power-play-umbrella/",
      "supports": "Assign spots by shooting side. Two cross-ice passes before a shot moves the goalie."
    },
    {
      "title": "HockeyShare: Power Play Overload to Umbrella High Play",
      "url": "https://www.hockeyshare.com/drills/print/32706",
      "supports": "Back-door and weak-side high-slot one-timer options. Recommended as a base for younger (Pee Wee) power plays."
    },
    {
      "title": "IceHockeySystems: Overload Power Play Drill",
      "url": "https://icehockeysystems.com/node/1629",
      "supports": "Wall player passes low and bursts into the seam for a return pass (give-and-go)."
    },
    {
      "title": "hockeyplayer.com: overload power play article",
      "url": "https://hockeyplayer.com/?p=1412",
      "supports": "Below-the-goal-line player feeds the goal mouth or back door. Best puck-handler goes low."
    },
    {
      "title": "Dummies: Controlling a power play in hockey",
      "url": "https://dummies.com/sports/hockey/controlling-a-power-play-in-hockey",
      "supports": "Net-front role. Young players should favour wrist shots over slap shots."
    }
  ]
}
```

### 1-3-1

```json
{
  "id": "pp-1-3-1",
  "side": "PP",
  "name": "1-3-1",
  "aliases": [
    "1-3-1 umbrella (NHL broadcast usage)",
    "bumper power play"
  ],
  "summary": "One point quarterback, three players across the middle (two half-wall flanks on their off-wing plus a bumper in the high slot), and one net-front player. It makes four passing triangles and puts the PK in a 2-on-1 almost everywhere. It is the most common NHL power play today.",
  "best_against": [
    "A passive box (2-2). The bumper sits in the hole in the middle of the box, and seam passes go between the PK's forwards and D (r/hockey wiki: 'very effective against the box'; Jack Han).",
    "Kills that collapse to the middle. The point and flank shooting lanes open (blueseat 2011, PPP).",
    "A triangle+1 whose forwards switch late or early. The bumper or weak-side one-timer opens up (Jack Han)."
  ],
  "weak_against": [
    "A disciplined diamond (1-2-1). It is built to take away the quarterback and the half-wall players (TSN, IceHockeySystems Panthers clip). This is contested: Jack Han and Rick Tocchet (Inquirer) both say the diamond leaves the bumper and seams open, so the 1-3-1 attacks it through the middle.",
    "Aggressive pressure on the lone point. A turnover becomes an odd-man rush the other way (blueseat 2011, PPP)."
  ],
  "u15_note": "Teachable at U15, but harder than it looks. The Coaches Site calls it high-risk/high-reward and dependent on hard, accurate cross-ice passes and one-timers. USA Hockey's Guentzel advises against it for younger players. If you use it: run it static (no rotations), drill it with one-touch passing and no pressure first (TCS 5 Easy Steps), give the bumper to your smartest player rather than your best shooter, and teach two or three set plays only (point to flank to bumper to far flank; flank to net front to bumper). Put your most reliable D at the point because he is alone back there.",
  "triggers": [
    {
      "cue": "Flank holds the puck on the half-wall",
      "who": "N, B",
      "action": "N slides to the puck-side post. B steps a little toward the puck.",
      "why": "Gives the flank a low outlet and a short middle outlet (THW Red Wings; TCS 5 Easy Steps)."
    },
    {
      "cue": "Puck carrier is pressured",
      "who": "B",
      "action": "Move closer for a short support pass.",
      "why": "Gives the pressured player an escape (THW Red Wings)."
    },
    {
      "cue": "Bumper is covered tightly",
      "who": "B, a flank, N",
      "action": "'Empty the bumper': B moves out (to a flank or to the net) and someone else fills the middle.",
      "why": "The PK player who followed B is now out of position (Inquirer/Tocchet)."
    },
    {
      "cue": "P carries the puck to the middle of the line",
      "who": "far flank",
      "action": "Fish-hook or slide down the far dot lane for a one-timer.",
      "why": "Gets open as the PK watches the quarterback (TCS 5 Easy Steps)."
    },
    {
      "cue": "PK collapses into the slot",
      "who": "P, flanks",
      "action": "Shoot. Point and flank shots through traffic are open.",
      "why": "A collapsed PK gives up the perimeter (blueseat 2011, PPP)."
    },
    {
      "cue": "P loses the puck at the line",
      "who": "nearest flank, B",
      "action": "The nearest flank or the bumper gets above the puck right away.",
      "why": "Only one player is back, so stop the odd-man rush (inference)."
    }
  ],
  "weaknesses": [
    {
      "where": "Blue line behind P",
      "why": "Only one player is high.",
      "how_exploited": "Pressure on the point, or a picked-off pass, becomes a shorthanded breakaway (blueseat 2011, PPP)."
    },
    {
      "where": "Cross-seam passes",
      "why": "Long passes through the slot.",
      "how_exploited": "Intercepted and cleared down the ice (silversevensens)."
    },
    {
      "where": "Strong-side corners",
      "why": "Only one player is low.",
      "how_exploited": "Worse than the overload at winning back loose pucks low (silversevensens)."
    },
    {
      "where": "Skill demand",
      "why": "Needs hard, accurate passes and one-timers (TCS).",
      "how_exploited": "Weak passers and shooters make it slow and predictable."
    }
  ],
  "roles": [
    {
      "id": "P",
      "label": "Point (quarterback)",
      "player": "D",
      "base": [
        32,
        0
      ],
      "handedness": "Either. Must be your best decision-maker, since he is the only player back.",
      "core_job": "Distribute to both flanks and the bumper from the middle of the blue line, and shoot through traffic when the lane is there.",
      "why": "One player up top can pass to three teammates, so the PK's top forward can only take one option away.",
      "reactions": {
        "PT": {
          "spot": [
            32,
            0
          ],
          "job": "Have the puck. Read the PK's top forward.",
          "why": "He can only take away one of your three passes.",
          "options": [
            {
              "rank": 1,
              "to": [
                "LF",
                "RF"
              ],
              "play": "Pass to the flank the top forward is NOT on.",
              "why": "Moves the puck before the PK shifts and sets up a catch-and-shoot or a one-timer."
            },
            {
              "rank": 2,
              "to": "B",
              "play": "Pass through the middle to the bumper.",
              "why": "If the top forward leans to one side, the lane to the bumper opens. The bumper then shoots or bumps it to a flank."
            },
            {
              "rank": 3,
              "to": "SHOT",
              "play": "Low shot through the B and N screens.",
              "why": "Creates a tip or rebound. Use it when the passes are covered."
            }
          ]
        },
        "WALL_L": {
          "spot": [
            32,
            8
          ],
          "job": "Slide toward the puck. Be the reset.",
          "why": "Gives LF a safe pass back. From here you can swing it to the far flank."
        },
        "BUMPER": {
          "spot": [
            33,
            0
          ],
          "job": "Stay in the middle. Be the safety and the reset.",
          "why": "A blocked bumper shot often bounces up top."
        },
        "NET": {
          "spot": [
            34,
            0
          ],
          "job": "Stay in the middle. Be the safety.",
          "why": "Last player back."
        },
        "GL_L": {
          "spot": [
            34,
            4
          ],
          "job": "Get to the middle of the line.",
          "why": "Safety and high option."
        },
        "CORNER_L": {
          "spot": [
            33,
            12
          ],
          "job": "Hold the puck-side blue line.",
          "why": "Stop the rim-out."
        },
        "BEHIND": {
          "spot": [
            38,
            0
          ],
          "job": "Stay middle, a few feet down.",
          "why": "Safety."
        },
        "WALL_R": {
          "spot": [
            32,
            -8
          ],
          "job": "Slide toward the puck. Be the reset.",
          "why": "Gives LF a safe pass back. From here you can swing it to the far flank."
        },
        "GL_R": {
          "spot": [
            34,
            -4
          ],
          "job": "Get to the middle of the line.",
          "why": "Safety and high option."
        },
        "CORNER_R": {
          "spot": [
            33,
            -12
          ],
          "job": "Hold the puck-side blue line.",
          "why": "Stop the rim-out."
        }
      }
    },
    {
      "id": "LF",
      "label": "Left flank",
      "player": "F",
      "base": [
        58,
        30
      ],
      "handedness": "Right-handed shot (off-wing) for one-timers. Sources agree on this for the 1-3-1.",
      "core_job": "Shooter and playmaker on the half-wall, between the top of the circle and the hash marks.",
      "why": "Flanks on their off-wing can one-time passes from the point, the bumper, or across the ice.",
      "reactions": {
        "PT": {
          "spot": [
            58,
            30
          ],
          "job": "Stick down, ready to one-time.",
          "why": "Being ready on the pass is what makes the PK move."
        },
        "WALL_L": {
          "spot": [
            58,
            31
          ],
          "job": "Have the puck. Face the middle, look at the bumper and the net front, then up.",
          "why": "The 1-3-1 makes a triangle on every side. You are at the top corner with options inside and down.",
          "options": [
            {
              "rank": 1,
              "to": "B",
              "play": "Pass into the middle to the bumper.",
              "why": "The bumper shoots or bumps it across to the far flank before the PK can rotate."
            },
            {
              "rank": 2,
              "to": "N",
              "play": "Pass low to N on the puck-side post.",
              "why": "Gets the puck below the PK. N can tip, shoot in tight, or pass to the bumper."
            },
            {
              "rank": 3,
              "to": "P",
              "play": "Pass back up to P.",
              "why": "Reset when pressured. P to the far flank is a two-pass swing for a one-timer. A direct cross-seam pass to RF is a fourth option, but only when the slot lane is clearly open."
            }
          ]
        },
        "BUMPER": {
          "spot": [
            60,
            28
          ],
          "job": "Be ready to one-time a bump pass.",
          "why": "The bumper's quickest pass is to a flank."
        },
        "NET": {
          "spot": [
            64,
            24
          ],
          "job": "Get to the dot, stick ready.",
          "why": "Kick-out target."
        },
        "GL_L": {
          "spot": [
            62,
            26
          ],
          "job": "After passing down, step inside the dot into the seam.",
          "why": "This is a give-and-go. The PK D who chased the puck down leaves the seam open."
        },
        "CORNER_L": {
          "spot": [
            70,
            36
          ],
          "job": "Come down the wall to make it 2-on-1.",
          "why": "Outnumber the PK on loose pucks. It also gives N a short pass."
        },
        "BEHIND": {
          "spot": [
            64,
            24
          ],
          "job": "Drop to the dot.",
          "why": "Shooter on either side of the net."
        },
        "WALL_R": {
          "spot": [
            62,
            24
          ],
          "job": "Drift down toward the far dot, stick loaded.",
          "why": "With the puck on the far side, you slip in behind the PK's weak-side forward for a one-timer."
        },
        "GL_R": {
          "spot": [
            78,
            12
          ],
          "job": "Sneak to the far post (back door).",
          "why": "Every PK player is watching the goal line, so the far post is open."
        },
        "CORNER_R": {
          "spot": [
            52,
            22
          ],
          "job": "Rise high on the far side. Be the safety and the swing option.",
          "why": "Covers the middle of the blue line if P is pinned to the boards (inference)."
        }
      }
    },
    {
      "id": "RF",
      "label": "Right flank",
      "player": "F",
      "base": [
        58,
        -30
      ],
      "handedness": "Left-handed shot (off-wing).",
      "core_job": "Same as the left flank.",
      "why": "Same as the left flank.",
      "reactions": {
        "PT": {
          "spot": [
            58,
            -30
          ],
          "job": "Stick down, ready to one-time.",
          "why": "Same as LF."
        },
        "WALL_L": {
          "spot": [
            62,
            -24
          ],
          "job": "Drift down toward the far dot, stick loaded.",
          "why": "With the puck on the far side, you slip in behind the PK's weak-side forward for a one-timer."
        },
        "BUMPER": {
          "spot": [
            60,
            -28
          ],
          "job": "Be ready to one-time a bump pass.",
          "why": "Same as LF."
        },
        "NET": {
          "spot": [
            64,
            -24
          ],
          "job": "Get to the dot, stick ready.",
          "why": "Kick-out target."
        },
        "GL_L": {
          "spot": [
            78,
            -12
          ],
          "job": "Sneak to the far post (back door).",
          "why": "Every PK player is watching the goal line, so the far post is open."
        },
        "CORNER_L": {
          "spot": [
            52,
            -22
          ],
          "job": "Rise high on the far side. Be the safety and the swing option.",
          "why": "Covers the middle of the blue line if P is pinned to the boards (inference)."
        },
        "BEHIND": {
          "spot": [
            64,
            -24
          ],
          "job": "Drop to the dot.",
          "why": "Same as LF."
        },
        "WALL_R": {
          "spot": [
            58,
            -31
          ],
          "job": "Have the puck. Face the middle, look at the bumper and the net front, then up.",
          "why": "The 1-3-1 makes a triangle on every side. You are at the top corner with options inside and down.",
          "options": [
            {
              "rank": 1,
              "to": "B",
              "play": "Pass into the middle to the bumper.",
              "why": "The bumper shoots or bumps it across to the far flank before the PK can rotate."
            },
            {
              "rank": 2,
              "to": "N",
              "play": "Pass low to N on the puck-side post.",
              "why": "Gets the puck below the PK. N can tip, shoot in tight, or pass to the bumper."
            },
            {
              "rank": 3,
              "to": "P",
              "play": "Pass back up to P.",
              "why": "Reset when pressured. P to the far flank is a two-pass swing for a one-timer. A direct cross-seam pass to RF is a fourth option, but only when the slot lane is clearly open."
            }
          ]
        },
        "GL_R": {
          "spot": [
            62,
            -26
          ],
          "job": "After passing down, step inside the dot into the seam.",
          "why": "This is a give-and-go. The PK D who chased the puck down leaves the seam open."
        },
        "CORNER_R": {
          "spot": [
            70,
            -36
          ],
          "job": "Come down the wall to make it 2-on-1.",
          "why": "Outnumber the PK on loose pucks. It also gives N a short pass."
        }
      }
    },
    {
      "id": "B",
      "label": "Bumper (high slot)",
      "player": "F",
      "base": [
        63,
        0
      ],
      "handedness": "Either. Quick release and hockey sense matter more than shot side.",
      "core_job": "Live in the middle between the PK's layers: take quick shots, bump passes to the flanks, and move to stay open.",
      "why": "The bumper sits in the hole in the middle of a box or diamond. A PK player who steps up to cover him leaves someone else open.",
      "reactions": {
        "PT": {
          "spot": [
            63,
            0
          ],
          "job": "Find the hole between the PK forwards and their D, and show your stick.",
          "why": "Making yourself available in the middle forces a PK player to step to you, which opens a flank."
        },
        "WALL_L": {
          "spot": [
            64,
            5
          ],
          "job": "Step a little toward the puck side and show your stick.",
          "why": "Shortens the pass from LF and supports him under pressure (THW Red Wings)."
        },
        "BUMPER": {
          "spot": [
            63,
            0
          ],
          "job": "Have the puck. Shoot quickly or bump it.",
          "why": "Every PK player turns to you, so whatever you do has to be fast.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Quick shot.",
              "why": "The slot is the best shooting spot on the ice. Don't hold it."
            },
            {
              "rank": 2,
              "to": [
                "LF",
                "RF"
              ],
              "play": "One-touch bump to the flank on the side the pass did NOT come from.",
              "why": "The PK shifted toward the pass, so the far flank is the open one-timer."
            },
            {
              "rank": 3,
              "to": "N",
              "play": "Quick pass low to N at the net.",
              "why": "Use it when the PK D steps up to block you. It leaves N alone at the crease."
            }
          ]
        },
        "NET": {
          "spot": [
            66,
            0
          ],
          "job": "Hold the slot, stick ready.",
          "why": "The quickest pass from the crease is to the bumper."
        },
        "GL_L": {
          "spot": [
            67,
            2
          ],
          "job": "Hold the slot, stick loaded.",
          "why": "The pass from the goal line to the slot is the first look."
        },
        "CORNER_L": {
          "spot": [
            68,
            6
          ],
          "job": "Slide toward the puck-side slot.",
          "why": "Quick slot option once the puck is won."
        },
        "BEHIND": {
          "spot": [
            70,
            0
          ],
          "job": "Slide down into the slot, facing the puck.",
          "why": "The first pass out from behind the net."
        },
        "WALL_R": {
          "spot": [
            64,
            -5
          ],
          "job": "Step a little toward the puck side and show your stick.",
          "why": "Shortens the pass from LF and supports him under pressure (THW Red Wings)."
        },
        "GL_R": {
          "spot": [
            67,
            -2
          ],
          "job": "Hold the slot, stick loaded.",
          "why": "The pass from the goal line to the slot is the first look."
        },
        "CORNER_R": {
          "spot": [
            68,
            -6
          ],
          "job": "Slide toward the puck-side slot.",
          "why": "Quick slot option once the puck is won."
        }
      }
    },
    {
      "id": "N",
      "label": "Net front",
      "player": "F",
      "base": [
        82,
        0
      ],
      "handedness": "Either. Strong, good hands in tight.",
      "core_job": "Screen, tip, rebound, retrieve pucks in the corners, and slide to the puck-side post or goal line as an outlet.",
      "why": "Screens and second chances, plus the low outlet that makes the PK's low defender work.",
      "reactions": {
        "PT": {
          "spot": [
            82,
            0
          ],
          "job": "Screen the goalie, stick on the ice.",
          "why": "Point shots need a screen and a tip to score."
        },
        "WALL_L": {
          "spot": [
            84,
            5
          ],
          "job": "Slide to the puck-side post.",
          "why": "LF has a low outlet, and you still screen a shot from that angle (TCS 5 Easy Steps, THW)."
        },
        "BUMPER": {
          "spot": [
            83,
            0
          ],
          "job": "Screen and be ready for a tip or rebound.",
          "why": "A bumper shot from the slot plus a screen is hard for a goalie."
        },
        "NET": {
          "spot": [
            82,
            0
          ],
          "job": "Have the puck at the crease. Shoot or jam right away.",
          "why": "No time in front.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Shoot or jam.",
              "why": "Every extra touch lets the PK collapse on you."
            },
            {
              "rank": 2,
              "to": "B",
              "play": "Quick pass up to the bumper.",
              "why": "The Coaches Site notes good net-front players make quick passes to the bumper."
            },
            {
              "rank": 3,
              "to": [
                "LF",
                "RF"
              ],
              "play": "Kick it to the flank at the dot.",
              "why": "Restart with the PK bunched at the net."
            }
          ]
        },
        "GL_L": {
          "spot": [
            86,
            14
          ],
          "job": "Have the puck on the puck-side goal line.",
          "why": "From here every pass goes to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "B",
              "play": "Pass into the slot to the bumper.",
              "why": "IceHockeySystems' 1-3-1 set play lists the slot as the first look from low."
            },
            {
              "rank": 2,
              "to": "LF",
              "play": "Pass back up to LF, or to LF in the seam.",
              "why": "Restarts the cycle, or gives LF a shot if he stepped into the seam."
            },
            {
              "rank": 3,
              "to": "RF",
              "play": "Pass across the front to the far flank at the back door.",
              "why": "A tap-in if the PK is pulled to the puck side. Throw it only if no stick is in the crease."
            }
          ]
        },
        "CORNER_L": {
          "spot": [
            88,
            32
          ],
          "job": "First in. Win the puck.",
          "why": "Retrievals keep the PP alive. IceHockeySystems makes net front the 'go-getter'.",
          "options": [
            {
              "rank": 1,
              "to": "LF",
              "play": "Pass up the wall to LF.",
              "why": "Resets the 1-3-1 with the puck on the half-wall."
            },
            {
              "rank": 2,
              "to": "B",
              "play": "Pass to the bumper in the slot.",
              "why": "Only if clearly open. It's a scoring chance."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net.",
              "why": "Escape pressure. The unit shifts to the new side."
            }
          ]
        },
        "BEHIND": {
          "spot": [
            95,
            0
          ],
          "job": "Have the puck behind the net. Keep moving.",
          "why": "Make the PK pick a side.",
          "options": [
            {
              "rank": 1,
              "to": "B",
              "play": "Pass out front to the bumper in the slot.",
              "why": "The goalie is turned around."
            },
            {
              "rank": 2,
              "to": [
                "LF",
                "RF"
              ],
              "play": "Hit the flank at the dot on the side you are skating toward.",
              "why": "Short pass to a shooter."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Come out on the far goal line, or wrap it if the post is open.",
              "why": "Switches the puck side."
            }
          ]
        },
        "WALL_R": {
          "spot": [
            84,
            -5
          ],
          "job": "Slide to the puck-side post.",
          "why": "LF has a low outlet, and you still screen a shot from that angle (TCS 5 Easy Steps, THW)."
        },
        "GL_R": {
          "spot": [
            86,
            -14
          ],
          "job": "Have the puck on the puck-side goal line.",
          "why": "From here every pass goes to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "B",
              "play": "Pass into the slot to the bumper.",
              "why": "IceHockeySystems' 1-3-1 set play lists the slot as the first look from low."
            },
            {
              "rank": 2,
              "to": "RF",
              "play": "Pass back up to LF, or to LF in the seam.",
              "why": "Restarts the cycle, or gives LF a shot if he stepped into the seam."
            },
            {
              "rank": 3,
              "to": "LF",
              "play": "Pass across the front to the far flank at the back door.",
              "why": "A tap-in if the PK is pulled to the puck side. Throw it only if no stick is in the crease."
            }
          ]
        },
        "CORNER_R": {
          "spot": [
            88,
            -32
          ],
          "job": "First in. Win the puck.",
          "why": "Retrievals keep the PP alive. IceHockeySystems makes net front the 'go-getter'.",
          "options": [
            {
              "rank": 1,
              "to": "RF",
              "play": "Pass up the wall to LF.",
              "why": "Resets the 1-3-1 with the puck on the half-wall."
            },
            {
              "rank": 2,
              "to": "B",
              "play": "Pass to the bumper in the slot.",
              "why": "Only if clearly open. It's a scoring chance."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net.",
              "why": "Escape pressure. The unit shifts to the new side."
            }
          ]
        }
      }
    }
  ],
  "sources": [
    {
      "title": "The Coaches Site: Explained: 1-3-1 Power Play Formation",
      "url": "https://members.thecoachessite.com/article/explained-1-3-1-power-play-formation",
      "supports": "Alignment (one point, three across the dots line, net front). Off-hand flanks for one-timers. Bumper as screen, option, and decoy. Predominantly static. High-risk/high-reward, needs elite passing."
    },
    {
      "title": "The Coaches Site: 5 Easy Steps To Kick Start Your Power Play",
      "url": "https://members.thecoachessite.com/article/5-easy-steps-to-kick-start-your-power-play",
      "supports": "Goal-line player moves just off the strong-side post. Weak-side D slides down the far dot lane. Teaching progression (one-touch, no pressure)."
    },
    {
      "title": "The Coaches Site: Position-specific skills behind elite power plays",
      "url": "https://members.thecoachessite.com/article/position-specific-skills-behind-elite-power-plays",
      "supports": "Bumper is the most important position, especially against the diamond. Flanks move and use deception. Net front passes to the bumper."
    },
    {
      "title": "Philadelphia Inquirer: Flyers bumper power play explained (2025)",
      "url": "https://www.inquirer.com/flyers/flyers-bumper-power-play-explained-owen-tippett-20251028.html",
      "supports": "Bumper location, 'emptying the bumper' rotation. Diamond PK often leaves the bumper open (Tocchet)."
    },
    {
      "title": "The Hockey Writers: Breaking down the Red Wings' power play",
      "url": "https://thehockeywriters.com/?p=1099969",
      "supports": "N slides to the post and B moves toward the crease when the flank has the puck. B supports a pressured carrier."
    },
    {
      "title": "IceHockeySystems: 1-3-1 Powerplay (system)",
      "url": "https://icehockeysystems.com/print/system/standard/2021376",
      "supports": "Role names. Order of options from low: slot, then wall, then back door across the front."
    },
    {
      "title": "IceHockeySystems: 1-3-1 Power Play - 5 Options",
      "url": "https://icehockeysystems.com/node/31591",
      "supports": "Off-hand shooters for one-timers. Weak side crashes the far post. Low-to-slot plays."
    },
    {
      "title": "Pension Plan Puppets: The 1-3-1 power play (2013)",
      "url": "https://pensionplanpuppets.com/the-1-3-1-power-play-leafs-analysis",
      "supports": "Alignment. Off-wing half-wall shooter. Risk at the single point. Diamond as the usual counter."
    },
    {
      "title": "Jack Han: PK structures - Diamonds aren't forever",
      "url": "https://jhanhky.substack.com/p/pk-structures-diamonds-arent-forever",
      "supports": "Diamond concedes seams and the middle bumper. Passive box is weak to the bumper and seams. Triangle+1 switch timing."
    },
    {
      "title": "r/hockey wiki: On-ice strategies (mirror)",
      "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies",
      "supports": "1-3-1 very effective against the box. Risk with the last man holding the puck."
    },
    {
      "title": "Blue Seat Blogs: Complete idiot's guide (2011)",
      "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams",
      "supports": "1-3-1 definition. Shrinks the PK to the middle. Single-point turnover risk."
    },
    {
      "title": "silversevensens: Tactical formations - powerplay",
      "url": "https://silversevensens.com/tactical-formations-powerplay",
      "supports": "Cross-seam interception risk. Less effective than the overload on strong-side retrievals."
    },
    {
      "title": "TSN: NHLers on the evolution of power plays",
      "url": "https://www.tsn.ca/nhl/nhlers-on-the-evolution-of-power-plays-and-penalty-killing-1.2098964",
      "supports": "1-3-1 spreads the PK. Diamond designed to take away the QB and side-boards players."
    },
    {
      "title": "IceHockeySystems: Panthers diamond PK vs Bruins 1-3-1",
      "url": "https://icehockeysystems.com/coaching-clip/panthers-diamond-penalty-kill-vs-bruins-1-3-1-power-play",
      "supports": "How the diamond takes away point and outside shots against a 1-3-1."
    },
    {
      "title": "USA Hockey: Special Teams Tactics (Guentzel)",
      "url": "https://www.usahockey.com/news_article/show/567732",
      "supports": "Advises against the 1-3-1 for younger players."
    }
  ]
}
```

### Overload (left-side)

```json
{
  "id": "pp-overload",
  "side": "PP",
  "name": "Overload",
  "aliases": [
    "strong-side overload",
    "Czech power play (r/hockey wiki)",
    "1-2-2 (blueseat wording)"
  ],
  "summary": "Three players (point, half-wall, and goal line) form a triangle on one side, with a net-front player in support, to get 3-on-2 and 4-on-3 situations on the strong side. A weak-side shooter sits at the far dot for the one-timer when the puck swings across. Written here as a LEFT-side overload. For a right-side overload, flip every y-coordinate and the handedness.",
  "best_against": [
    "A passive box that sits in the slot and won't pressure the half-wall. The PP gets a 3-on-2 on the strong side and time on the wall (TCS overload; the box is the PK most often used against the overload: blueseat PK, r/hockey wiki).",
    "A PK that matches 2-on-2 low and leaves a 2-on-1 at the point. Point shots and swings to the weak side open up (HockeyShare PK drill)."
  ],
  "weak_against": [
    "A pressure kill that squeezes the half-wall and jumps the pass down low. The triangle needs time on the wall (HockeyShare PK drill).",
    "Any kill once the overload becomes predictable. Compact PKers put sticks in the short lanes and intercept (TCS).",
    "Clears to the weak side. Few PP players are there to keep it in (silversevensens)."
  ],
  "u15_note": "The most commonly recommended first power play for youth. Weiss Tech calls it simple enough for younger players, hockeyplayer.com says to teach one basic system first (the overload), and LG Sports calls it the most basic structure. It also matches USA Hockey's advice that 14U power plays should work low around the half-wall and goal line. Simplify by running the triangle (H to L to H in the seam, or H to P to shot) and having W shoot only off a clean pass. Practise the retrieval and the rim-out stop by P, because that is where U15 overloads lose possession.",
  "triggers": [
    {
      "cue": "H passes down to L",
      "who": "H, N, W, P",
      "action": "H steps into the seam inside the dot. N pops to the low slot. W sneaks to the back door. P slides to the middle of the line.",
      "why": "Gives L three scoring passes and keeps a safety high (IceHockeySystems drill; hockeyplayer.com)."
    },
    {
      "cue": "P walks the line toward the middle",
      "who": "H",
      "action": "H rises up the wall toward the strong-side point.",
      "why": "Supports P and covers the line (HockeyShare overload-to-umbrella sequence)."
    },
    {
      "cue": "PK forward pressures P hard",
      "who": "P, H",
      "action": "Rotation (optional): P passes to H and dives down the wall or through the seam, and H fills the point.",
      "why": "The 'high rotation' (hockeyplayer.com) collapses the PK's box and opens the middle. Exact U15 form is inference."
    },
    {
      "cue": "Puck swings to W",
      "who": "all",
      "action": "W shoots. N screens, L crashes the net, P goes to the middle. If W can't shoot, re-set the overload on that side.",
      "why": "The weak-side one-timer is the overload's main finish (TCS). Switching sides is inference."
    },
    {
      "cue": "Shot misses wide or is blocked low",
      "who": "L, H, P",
      "action": "L goes first, H comes down to make it 2-on-1, and P holds the line.",
      "why": "Retrieval and keeping the puck in are the overload's weak point (silversevensens)."
    }
  ],
  "weaknesses": [
    {
      "where": "Weak side of the ice",
      "why": "Only W is there.",
      "how_exploited": "The PK clears the puck to the weak side and there's no one to keep it in (silversevensens)."
    },
    {
      "where": "GL / CORNER below the goal line",
      "why": "Shots from below the goal line are low-percentage (TCS).",
      "how_exploited": "The PK lets L have the puck down low and protects the slot."
    },
    {
      "where": "Short strong-side passing lanes",
      "why": "Predictable once scouted (TCS).",
      "how_exploited": "PK sticks in the lanes, intercept, and clear."
    },
    {
      "where": "Blue line",
      "why": "One point player on the strong side.",
      "how_exploited": "The PK forward attacks P. A miss on the weak side becomes a rush."
    }
  ],
  "roles": [
    {
      "id": "P",
      "label": "Strong-side point",
      "player": "D",
      "base": [
        32,
        14
      ],
      "handedness": "Either. Must walk the line and get shots through. (No source specifies a hand.)",
      "core_job": "Top of the strong-side triangle: shoot through the screen, swing the puck to the weak-side shooter, or move it back to the wall.",
      "why": "The point stretches the PK's forward up high and is the only player who can switch the puck to the weak side.",
      "reactions": {
        "WALL_L": {
          "spot": [
            32,
            12
          ],
          "job": "Stay open for a pass back. Be ready to walk the line toward the middle.",
          "why": "Gives H a release and threatens the swing to W."
        },
        "PT_L": {
          "spot": [
            32,
            14
          ],
          "job": "Have the puck. Read the PK's top forward.",
          "why": "If he comes at you, someone below is open.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Low shot through N's screen.",
              "why": "Creates tips and rebounds for N and L."
            },
            {
              "rank": 2,
              "to": "W",
              "play": "Walk toward the middle, then pass across to W.",
              "why": "The weak-side one-timer is the overload's best shot (TCS). Walking first shortens the pass and moves the PK."
            },
            {
              "rank": 3,
              "to": "H",
              "play": "Pass back down to H.",
              "why": "Restarts the triangle."
            }
          ]
        },
        "PT": {
          "spot": [
            34,
            0
          ],
          "job": "Have the puck in the middle of the line.",
          "why": "Now you can hit W with a shorter pass.",
          "options": [
            {
              "rank": 1,
              "to": "W",
              "play": "Pass across to W for a one-timer.",
              "why": "Shorter pass from the middle, and the goalie has to move."
            },
            {
              "rank": 2,
              "to": "SHOT",
              "play": "Shoot through the screen.",
              "why": "Tip and rebound chance."
            },
            {
              "rank": 3,
              "to": "H",
              "play": "Pass back to H.",
              "why": "Reset on the strong side."
            }
          ]
        },
        "GL_L": {
          "spot": [
            34,
            6
          ],
          "job": "Slide to the middle of the line. Be the safety and high option.",
          "why": "If the PK clears, you stop it. A pass up to you finds a goalie looking low."
        },
        "CORNER_L": {
          "spot": [
            33,
            14
          ],
          "job": "Hold the strong-side blue line.",
          "why": "Stop the rim-out. The overload's known weakness is clears and lost retrievals (silversevensens)."
        },
        "BEHIND": {
          "spot": [
            36,
            4
          ],
          "job": "Middle of the line, safety.",
          "why": "Last player back."
        },
        "NET": {
          "spot": [
            36,
            4
          ],
          "job": "Middle, safety.",
          "why": "Kick-out option."
        },
        "DOT_R": {
          "spot": [
            32,
            0
          ],
          "job": "Get to the middle of the line.",
          "why": "Safety. A blocked one-timer can bounce up top."
        }
      }
    },
    {
      "id": "H",
      "label": "Half-wall (strong side)",
      "player": "F",
      "base": [
        56,
        33
      ],
      "handedness": "Off-wing: right-handed shot on the left wall (TCS: half-wall forward usually plays his off-hand side). Your forehand faces the middle.",
      "core_job": "Starts every play: run the triangle with P and L, walk into the seam to shoot, feed the net front.",
      "why": "From the wall you see the whole strong side. TCS calls this player the leader of the unit.",
      "reactions": {
        "WALL_L": {
          "spot": [
            56,
            33
          ],
          "job": "Have the puck. Look low, then up, then to the net.",
          "why": "Every pass from here is short, so the PK has trouble taking all of them away.",
          "options": [
            {
              "rank": 1,
              "to": "L",
              "play": "Pass down to L on the goal line.",
              "why": "Starts the low-to-high triangle. L and N make a 2-on-1 against the PK's low D."
            },
            {
              "rank": 2,
              "to": "P",
              "play": "Pass back up to P.",
              "why": "P can shoot through N's screen or swing it to W for a one-timer."
            },
            {
              "rank": 3,
              "to": "N",
              "play": "Pass into the slot to N popping out, or a tip pass.",
              "why": "Use it if the PK D steps out to L. If the PK sags off you, walk into the seam and shoot."
            }
          ]
        },
        "PT_L": {
          "spot": [
            52,
            32
          ],
          "job": "Slide up the wall a few feet, stay open for a return pass.",
          "why": "Gives P an easy outlet when pressured (HockeyShare sequence: F moves up the boards as D walks)."
        },
        "PT": {
          "spot": [
            44,
            32
          ],
          "job": "Rise up the wall to cover the strong-side point area.",
          "why": "P left the strong point, so somebody has to be near the line on that side (HockeyShare)."
        },
        "GL_L": {
          "spot": [
            62,
            25
          ],
          "job": "After passing down, step inside the dot into the seam.",
          "why": "This is a give-and-go. The PK D chasing L leaves the seam open (IceHockeySystems overload drill)."
        },
        "CORNER_L": {
          "spot": [
            70,
            36
          ],
          "job": "Come down the wall to make it 2-on-1.",
          "why": "The overload's advantage is numbers on the strong side, so use them on loose pucks."
        },
        "BEHIND": {
          "spot": [
            64,
            24
          ],
          "job": "Drop to the strong-side dot.",
          "why": "Shooter if L comes out on this side."
        },
        "NET": {
          "spot": [
            64,
            22
          ],
          "job": "Get to the strong-side dot.",
          "why": "Kick-out target."
        },
        "DOT_R": {
          "spot": [
            58,
            22
          ],
          "job": "Drift toward the strong-side high slot.",
          "why": "Rebound or second option if W can't shoot (inference)."
        }
      }
    },
    {
      "id": "L",
      "label": "Low / goal line (strong side)",
      "player": "F",
      "base": [
        87,
        16
      ],
      "handedness": "Either. Pick your best puck-handler (hockeyplayer.com).",
      "core_job": "Bottom of the triangle: take passes down low, make quick passes to the slot or back door, and win retrievals.",
      "why": "Forces the PK's strong-side D to choose between you and the net front.",
      "reactions": {
        "WALL_L": {
          "spot": [
            86,
            16
          ],
          "job": "Set up on the strong-side goal line, stick on the ice.",
          "why": "Bottom corner of the triangle."
        },
        "PT_L": {
          "spot": [
            85,
            9
          ],
          "job": "Move to the post for rebounds.",
          "why": "Point shots create rebounds beside the net."
        },
        "PT": {
          "spot": [
            85,
            8
          ],
          "job": "At the post for rebounds.",
          "why": "Second chances."
        },
        "GL_L": {
          "spot": [
            86,
            16
          ],
          "job": "Have the puck on the goal line.",
          "why": "Every pass from here goes to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "N",
              "play": "Pass into the low slot to N.",
              "why": "Best shot available."
            },
            {
              "rank": 2,
              "to": "H",
              "play": "Pass to H stepping into the seam.",
              "why": "Shot from inside the dot with the goalie turned."
            },
            {
              "rank": 3,
              "to": "W",
              "play": "Pass across the crease to W at the back door.",
              "why": "Tap-in if the PK is all on the strong side (hockeyplayer.com: feed the goal mouth or back door)."
            }
          ]
        },
        "CORNER_L": {
          "spot": [
            88,
            32
          ],
          "job": "First in. Win the puck.",
          "why": "Retrieval keeps the PP alive.",
          "options": [
            {
              "rank": 1,
              "to": "H",
              "play": "Pass up the wall to H.",
              "why": "Reset the triangle."
            },
            {
              "rank": 2,
              "to": "N",
              "play": "Pass to N in the slot.",
              "why": "Only if clearly open."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net.",
              "why": "Escape pressure."
            }
          ]
        },
        "BEHIND": {
          "spot": [
            95,
            0
          ],
          "job": "Have the puck behind the net. Keep moving.",
          "why": "Make the PK choose.",
          "options": [
            {
              "rank": 1,
              "to": "N",
              "play": "Pass out front to N.",
              "why": "The goalie is turned around."
            },
            {
              "rank": 2,
              "to": "W",
              "play": "Pass to W at the back door or the far dot.",
              "why": "The PK is leaning to the strong side."
            },
            {
              "rank": 3,
              "to": "H",
              "play": "Come back out on the strong side and pass up to H.",
              "why": "Keep the overload set up."
            }
          ]
        },
        "NET": {
          "spot": [
            85,
            8
          ],
          "job": "At the near post.",
          "why": "Rebound."
        },
        "DOT_R": {
          "spot": [
            84,
            6
          ],
          "job": "Go to the net for the rebound.",
          "why": "The one-timer will be stopped more often than not."
        }
      }
    },
    {
      "id": "N",
      "label": "Net front",
      "player": "F",
      "base": [
        82,
        0
      ],
      "handedness": "Either. Strong on skates, good stick for tips.",
      "core_job": "Screen and tip the point shots, pop to the slot for passes from low, and collect rebounds.",
      "why": "Turns every shot from the triangle into a dangerous one.",
      "reactions": {
        "WALL_L": {
          "spot": [
            82,
            2
          ],
          "job": "Screen, shade a little toward the puck, stick to the ice.",
          "why": "Screens H's shot and is a target for a tip or slot pass."
        },
        "PT_L": {
          "spot": [
            83,
            0
          ],
          "job": "Screen the goalie's eyes.",
          "why": "Point shots need a screen."
        },
        "PT": {
          "spot": [
            83,
            0
          ],
          "job": "Screen.",
          "why": "Point shot."
        },
        "GL_L": {
          "spot": [
            77,
            2
          ],
          "job": "Pop off the crease into the low slot.",
          "why": "Separate from the PK D for the goal-line-to-slot pass (inference)."
        },
        "CORNER_L": {
          "spot": [
            82,
            3
          ],
          "job": "Hold the net front.",
          "why": "Quick option once the puck is won."
        },
        "BEHIND": {
          "spot": [
            76,
            0
          ],
          "job": "Step into the slot, facing the puck.",
          "why": "First option."
        },
        "NET": {
          "spot": [
            82,
            0
          ],
          "job": "Have the puck at the crease. Shoot or jam.",
          "why": "No time.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Shoot or jam.",
              "why": "Shoot first."
            },
            {
              "rank": 2,
              "to": "W",
              "play": "Pass to W at the far post.",
              "why": "If the goalie sealed the near side."
            },
            {
              "rank": 3,
              "to": "H",
              "play": "Kick it out to H.",
              "why": "Restart."
            }
          ]
        },
        "DOT_R": {
          "spot": [
            83,
            0
          ],
          "job": "Screen the goalie's eyes.",
          "why": "A one-timer plus a screen is the overload's best chance."
        }
      }
    },
    {
      "id": "W",
      "label": "Weak-side shooter",
      "player": "F",
      "base": [
        62,
        -24
      ],
      "handedness": "Off-wing: left-handed shot on the right side, set up for a one-timer (e.g. Ovechkin's spot, mirrored).",
      "core_job": "Get 'lost' on the weak side near the far dot and be ready for the one-timer. Sneak to the back door on low plays.",
      "why": "With four players drawing the PK to the strong side, the weak side is where the open shot appears.",
      "reactions": {
        "WALL_L": {
          "spot": [
            62,
            -24
          ],
          "job": "Drift to the far dot behind the PK's weak-side forward, stick loaded.",
          "why": "That forward is watching the puck. You are the one-timer when it swings across."
        },
        "PT_L": {
          "spot": [
            62,
            -24
          ],
          "job": "Stick loaded at the far dot.",
          "why": "Be ready for P's pass."
        },
        "PT": {
          "spot": [
            62,
            -24
          ],
          "job": "Stick loaded.",
          "why": "First option."
        },
        "GL_L": {
          "spot": [
            80,
            -12
          ],
          "job": "Sneak to the back door, stick on the ice.",
          "why": "Every PK player is watching the puck low."
        },
        "CORNER_L": {
          "spot": [
            50,
            -18
          ],
          "job": "Rise up high on the weak side. Be the safety.",
          "why": "With P pinned to the strong side, the weak-side blue line is empty (inference)."
        },
        "BEHIND": {
          "spot": [
            76,
            -14
          ],
          "job": "Slide down toward the far post.",
          "why": "Back-door option."
        },
        "NET": {
          "spot": [
            80,
            -10
          ],
          "job": "Go to the far post.",
          "why": "Rebounds and cross-crease passes."
        },
        "DOT_R": {
          "spot": [
            64,
            -24
          ],
          "job": "Have the puck at the weak-side dot.",
          "why": "This is the shot the overload was built to create.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "One-timer or quick release.",
              "why": "The goalie is moving across, and this is why you were there."
            },
            {
              "rank": 2,
              "to": "N",
              "play": "Quick pass to N at the net for a tip or tap.",
              "why": "If a PK player slides to block you."
            },
            {
              "rank": 3,
              "to": "P",
              "play": "Pass back to P.",
              "why": "Reset. If the PK has shifted, set up the overload on this side."
            }
          ]
        }
      }
    }
  ],
  "sources": [
    {
      "title": "The Coaches Site: Explained: Overload Power Play Formation",
      "url": "https://members.thecoachessite.com/article/explained-overload-power-play-formation",
      "supports": "Overload concept. Half-wall forward on his off-hand side and leading the unit. Low forward. Point resets and sets up the weak-side one-timer. Weak-side forward gets lost. Predictability and low-angle-shot weaknesses."
    },
    {
      "title": "hockeyplayer.com: overload article",
      "url": "https://hockeyplayer.com/?p=1412",
      "supports": "Strong-side superiority. Best puck-handler low. Options from below the goal line (goal mouth, back door). 'High rotation'. Teach one system first."
    },
    {
      "title": "r/hockey wiki: On-ice strategies (mirror)",
      "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies",
      "supports": "'Czech' overload: three on the strong side vs two, weak-side one-timer. Box is the usual PK against it."
    },
    {
      "title": "Blue Seat Blogs: special teams (2011) and penalty kill (2011)",
      "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams",
      "supports": "Overload (1-2-2) creates 3-on-2s down low. Quality over volume. Box used against it."
    },
    {
      "title": "Blue Seat Blogs: Penalty kill (2011)",
      "url": "https://blueseatblogs.com/2011/10/24/penalty-kill/",
      "supports": "Box is most often used against the overload. Weak-side players watch the far post."
    },
    {
      "title": "silversevensens: Tactical formations - powerplay",
      "url": "https://silversevensens.com/tactical-formations-powerplay",
      "supports": "Weak-side clear and retrieval weakness. Many bodies at the net."
    },
    {
      "title": "IceHockeySystems: Overload Power Play Drill",
      "url": "https://icehockeysystems.com/node/1629",
      "supports": "Wall-to-low pass, then burst into the seam (give-and-go). Low/wall/seam rotation."
    },
    {
      "title": "HockeyShare: Power Play Overload to Umbrella High Play",
      "url": "https://www.hockeyshare.com/drills/print/32706",
      "supports": "F moves up the boards as D walks the line. D2 back door. Weak-side high-slot one-timer."
    },
    {
      "title": "HockeyShare: PK D-zone defending the overload",
      "url": "https://www.hockeyshare.com/free-drills/print/288649",
      "supports": "How a PK squeezes the half-wall and what it concedes (2-on-1 at the point)."
    },
    {
      "title": "Weiss Tech Hockey: Power Play: Overload",
      "url": "https://weisstechhockey.com/power-play-overload/",
      "supports": "Simple enough for younger players. Fundamental set-up."
    },
    {
      "title": "LG Sports Module 5",
      "url": "https://lgsports.ca/?p=8784",
      "supports": "Overload is the most basic structure and the place to start."
    },
    {
      "title": "USA Hockey: Special Teams Tactics (Guentzel)",
      "url": "https://www.usahockey.com/news_article/show/567732",
      "supports": "Umbrella/overload with two skilled players on the strong side. 14U works low."
    }
  ]
}
```

### Spread (2-1-2)

```json
{
  "id": "pp-spread",
  "side": "PP",
  "name": "Spread (2-1-2)",
  "aliases": [
    "2-1-2",
    "box + 1",
    "3-2 spread (some writers' term for a related older shape)"
  ],
  "summary": "Two players on the blue line, one in the slot, and two low on the dot lines beside the net. The PK has to cover a lot of ice, so the PP gets time and space. It is used mostly as a reset or starting shape, and as the standard 5-on-3 set. From it, a team can slide into a 1-3-1 or an overload.",
  "best_against": [
    "Aggressive or pressure kills. When a PK player chases a point, a teammate is open in a more dangerous spot, often the slot or back door (TCS spread; blueseat 2011).",
    "5-on-3. With three PKers, the box + 1 shape leaves a player open (r/hockey wiki; LG Sports 'Box + 1' for 5-on-3)."
  ],
  "weak_against": [
    "A passive box or zone that concedes the perimeter. Shots come from outside the dot lines, where goalies are comfortable (TCS spread).",
    "Teams without a real point shot. Both blue-line players are far from the net."
  ],
  "u15_note": "Easy to set up and easy to rotate players through (TCS spread notes players can be swapped in and out easily, which is good for development and USA Hockey's rotate-everyone advice). At 5-on-4, though, U15 players rarely score from the points, so use it as a reset or for 5-on-3 and teach the shift into your main system (umbrella or overload). Simplify with two plays: point to low on the same side, then low to slot; and D-to-D, then shot through the slot screen with the low players at the posts.",
  "triggers": [
    {
      "cue": "PK forward chases a point",
      "who": "the other point, S",
      "action": "D-to-D pass, or a pass into the slot behind the chasing forward.",
      "why": "Aggressive PK players leave a teammate open (TCS spread; blueseat 2011)."
    },
    {
      "cue": "Puck goes low on one side",
      "who": "far low player",
      "action": "Sneak to the back door/far post.",
      "why": "The PK collapses to the puck (blueseat 2011)."
    },
    {
      "cue": "Low player carries the puck up the half-wall",
      "who": "unit",
      "action": "Shift into your 1-3-1 or overload shape.",
      "why": "TCS: the spread is a kickstart that easily becomes a 1-3-1 or overload (e.g. Detroit)."
    },
    {
      "cue": "Point shot",
      "who": "S, LL, LR",
      "action": "S screens and tips. The low players attack the posts.",
      "why": "Shots from far out need traffic and rebounds."
    }
  ],
  "weaknesses": [
    {
      "where": "PT_L / PT_R (perimeter)",
      "why": "Few players are near the net (TCS spread).",
      "how_exploited": "A passive PK lets the PP shoot from the point and clears the rebound."
    },
    {
      "where": "Long cross-ice passes",
      "why": "Passes have to cover long distances (TCS spread).",
      "how_exploited": "Slow or soft passes get picked off."
    },
    {
      "where": "No fixed net front",
      "why": "S has to leave the slot to screen.",
      "how_exploited": "The goalie sees point shots clearly."
    }
  ],
  "roles": [
    {
      "id": "PL",
      "label": "Left point",
      "player": "D",
      "base": [
        30,
        17
      ],
      "handedness": "Inference: a right-handed shot on the left point can one-time D-to-D passes. No source states this for the spread.",
      "core_job": "Move the puck across the blue line, pull the PK forwards out, shoot through traffic, and feed the low player on your side.",
      "why": "Two players up top make the PK forwards skate a long way, and a D-to-D pass moves the whole box.",
      "reactions": {
        "PT_L": {
          "spot": [
            30,
            17
          ],
          "job": "Have the puck. Read the PK forward on your side.",
          "why": "If he comes out to you, someone behind him is open.",
          "options": [
            {
              "rank": 1,
              "to": "PR",
              "play": "D-to-D pass across.",
              "why": "Moves the whole PK and sets up a one-timer or a shot through traffic (TCS spread)."
            },
            {
              "rank": 2,
              "to": "LL",
              "play": "Pass straight down to the low player on your side.",
              "why": "The point-to-low pass is especially effective on a 5-on-3 (r/hockey wiki)."
            },
            {
              "rank": 3,
              "to": "S",
              "play": "Pass into the slot through the gap between the PK forwards.",
              "why": "Only if the lane is clean. It's the best shot available."
            }
          ]
        },
        "PT": {
          "spot": [
            32,
            6
          ],
          "job": "Have the puck in the middle (left point walked in).",
          "why": "From the middle you threaten both sides.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Shoot through S's screen.",
              "why": "Tip and rebound chance."
            },
            {
              "rank": 2,
              "to": "PR",
              "play": "Pass to the other point.",
              "why": "Switches the attack."
            },
            {
              "rank": 3,
              "to": "S",
              "play": "Pass into the slot.",
              "why": "If the PK forwards both turn to you."
            }
          ]
        },
        "WALL_L": {
          "spot": [
            32,
            12
          ],
          "job": "Slide toward the middle of the line. Be the safety and the reset.",
          "why": "The low player has come up the wall, so cover the line."
        },
        "GL_L": {
          "spot": [
            34,
            14
          ],
          "job": "Hold the strong-side line, ready for a pass up.",
          "why": "Low-to-high option."
        },
        "CORNER_L": {
          "spot": [
            32,
            16
          ],
          "job": "Hold the line on the puck side.",
          "why": "Stop the rim-out."
        },
        "BEHIND": {
          "spot": [
            34,
            12
          ],
          "job": "Hold the line.",
          "why": "Safety."
        },
        "BUMPER": {
          "spot": [
            32,
            14
          ],
          "job": "Hold the line, ready for a pass back.",
          "why": "Safety."
        },
        "PT_R": {
          "spot": [
            30,
            14
          ],
          "job": "Stay open for the D-to-D pass, stick ready.",
          "why": "First option."
        },
        "WALL_R": {
          "spot": [
            32,
            12
          ],
          "job": "Slide toward the middle too.",
          "why": "Keep the blue line covered."
        },
        "GL_R": {
          "spot": [
            34,
            6
          ],
          "job": "Slide toward the middle.",
          "why": "Safety."
        },
        "CORNER_R": {
          "spot": [
            34,
            4
          ],
          "job": "Slide toward the middle. Be the safety.",
          "why": "Last player back."
        }
      }
    },
    {
      "id": "PR",
      "label": "Right point",
      "player": "D",
      "base": [
        30,
        -17
      ],
      "handedness": "Inference: left-handed shot on the right point, for the same reason.",
      "core_job": "Same as the left point.",
      "why": "Same as the left point.",
      "reactions": {
        "PT_L": {
          "spot": [
            30,
            -14
          ],
          "job": "Stay open for the D-to-D pass, stick ready.",
          "why": "First option."
        },
        "PT": {
          "spot": [
            32,
            -16
          ],
          "job": "Hold your point, stick ready.",
          "why": "Option."
        },
        "WALL_L": {
          "spot": [
            32,
            -12
          ],
          "job": "Slide toward the middle too.",
          "why": "Keep the blue line covered."
        },
        "GL_L": {
          "spot": [
            34,
            -6
          ],
          "job": "Slide toward the middle.",
          "why": "Safety."
        },
        "CORNER_L": {
          "spot": [
            34,
            -4
          ],
          "job": "Slide toward the middle. Be the safety.",
          "why": "Last player back."
        },
        "BEHIND": {
          "spot": [
            34,
            -12
          ],
          "job": "Hold the line.",
          "why": "Safety."
        },
        "BUMPER": {
          "spot": [
            32,
            -14
          ],
          "job": "Hold the line.",
          "why": "Safety."
        },
        "PT_R": {
          "spot": [
            30,
            -17
          ],
          "job": "Have the puck. Read the PK forward on your side.",
          "why": "If he comes out to you, someone behind him is open.",
          "options": [
            {
              "rank": 1,
              "to": "PL",
              "play": "D-to-D pass across.",
              "why": "Moves the whole PK and sets up a one-timer or a shot through traffic (TCS spread)."
            },
            {
              "rank": 2,
              "to": "LR",
              "play": "Pass straight down to the low player on your side.",
              "why": "The point-to-low pass is especially effective on a 5-on-3 (r/hockey wiki)."
            },
            {
              "rank": 3,
              "to": "S",
              "play": "Pass into the slot through the gap between the PK forwards.",
              "why": "Only if the lane is clean. It's the best shot available."
            }
          ]
        },
        "WALL_R": {
          "spot": [
            32,
            -12
          ],
          "job": "Slide toward the middle of the line. Be the safety and the reset.",
          "why": "The low player has come up the wall, so cover the line."
        },
        "GL_R": {
          "spot": [
            34,
            -14
          ],
          "job": "Hold the strong-side line, ready for a pass up.",
          "why": "Low-to-high option."
        },
        "CORNER_R": {
          "spot": [
            32,
            -16
          ],
          "job": "Hold the line on the puck side.",
          "why": "Stop the rim-out."
        }
      }
    },
    {
      "id": "S",
      "label": "Slot (middle)",
      "player": "F",
      "base": [
        66,
        0
      ],
      "handedness": "Either. Quick release.",
      "core_job": "Sit in the middle of the PK box: shoot, tip point shots, and go to the net on shots.",
      "why": "The slot player forces a PK player to step in, and that opens a point or the far side.",
      "reactions": {
        "PT_L": {
          "spot": [
            66,
            2
          ],
          "job": "Find the gap between the PK forwards and D.",
          "why": "The slot pass is the most dangerous one."
        },
        "PT": {
          "spot": [
            76,
            0
          ],
          "job": "Drift to the net front to screen.",
          "why": "A shot from the middle needs a screen."
        },
        "WALL_L": {
          "spot": [
            66,
            4
          ],
          "job": "Show your stick in the slot.",
          "why": "First option from the wall."
        },
        "GL_L": {
          "spot": [
            70,
            2
          ],
          "job": "Low slot, stick loaded.",
          "why": "First pass from the goal line."
        },
        "CORNER_L": {
          "spot": [
            72,
            8
          ],
          "job": "Slide to the puck-side low slot.",
          "why": "Support and quick option."
        },
        "BEHIND": {
          "spot": [
            72,
            0
          ],
          "job": "Slot, facing the puck.",
          "why": "First pass out."
        },
        "BUMPER": {
          "spot": [
            66,
            0
          ],
          "job": "Have the puck in the slot. Shoot quickly.",
          "why": "The best spot on the ice.",
          "options": [
            {
              "rank": 1,
              "to": "SHOT",
              "play": "Quick shot.",
              "why": "Don't hold it."
            },
            {
              "rank": 2,
              "to": [
                "LL",
                "LR"
              ],
              "play": "Pass to the low player on the side the PK D left.",
              "why": "A PK D who stepped up to you leaves his man at the post."
            },
            {
              "rank": 3,
              "to": [
                "PL",
                "PR"
              ],
              "play": "Pass back to a point.",
              "why": "Reset."
            }
          ]
        },
        "PT_R": {
          "spot": [
            66,
            -2
          ],
          "job": "Find the gap between the PK forwards and D.",
          "why": "The slot pass is the most dangerous one."
        },
        "WALL_R": {
          "spot": [
            66,
            -4
          ],
          "job": "Show your stick in the slot.",
          "why": "First option from the wall."
        },
        "GL_R": {
          "spot": [
            70,
            -2
          ],
          "job": "Low slot, stick loaded.",
          "why": "First pass from the goal line."
        },
        "CORNER_R": {
          "spot": [
            72,
            -8
          ],
          "job": "Slide to the puck-side low slot.",
          "why": "Support and quick option."
        }
      }
    },
    {
      "id": "LL",
      "label": "Left low",
      "player": "F",
      "base": [
        83,
        22
      ],
      "handedness": "Inference: a player whose forehand faces the slot when looking out from the goal line (left-handed on the left).",
      "core_job": "Low on the dot line beside the net: move pucks to the slot and the points, take rebounds, and sneak back door when the puck is on the far side.",
      "why": "Two low players give the PK D two people to cover near the net.",
      "reactions": {
        "PT_L": {
          "spot": [
            80,
            26
          ],
          "job": "Step up a little toward the wall, stick out.",
          "why": "Opens a passing lane from the point (inference)."
        },
        "PT": {
          "spot": [
            84,
            12
          ],
          "job": "Close in toward the post.",
          "why": "Rebounds."
        },
        "WALL_L": {
          "spot": [
            62,
            32
          ],
          "job": "Have the puck. You've come up the wall from low.",
          "why": "This turns the spread into an overload or 1-3-1 shape (TCS spread: often shifts into a 1-3-1 or overload).",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass into the slot.",
              "why": "Best shot."
            },
            {
              "rank": 2,
              "to": "PL",
              "play": "Pass back up to the point.",
              "why": "Reset."
            },
            {
              "rank": 3,
              "to": "LR",
              "play": "Cross-ice pass to the far low player at the back door.",
              "why": "Only if clearly open."
            }
          ]
        },
        "GL_L": {
          "spot": [
            86,
            16
          ],
          "job": "Have the puck on the goal line.",
          "why": "From here every pass goes to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass into the slot.",
              "why": "Highest-percentage shot."
            },
            {
              "rank": 2,
              "to": "LR",
              "play": "Pass across the crease to the back door.",
              "why": "The goalie is hugging your post."
            },
            {
              "rank": 3,
              "to": "PL",
              "play": "Pass up to the point.",
              "why": "Reset with the PK collapsed low."
            }
          ]
        },
        "CORNER_L": {
          "spot": [
            88,
            32
          ],
          "job": "First in. Win the puck.",
          "why": "Retrieval.",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass to S in the slot.",
              "why": "Quick chance."
            },
            {
              "rank": 2,
              "to": "PL",
              "play": "Pass up the wall to the point.",
              "why": "Reset."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net.",
              "why": "Escape."
            }
          ]
        },
        "BEHIND": {
          "spot": [
            95,
            2
          ],
          "job": "Have the puck behind the net. Keep moving.",
          "why": "Make the PK choose.",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass out front.",
              "why": "The goalie is turned."
            },
            {
              "rank": 2,
              "to": "LR",
              "play": "Pass to the far low player stepping out.",
              "why": "Short pass to a shooter."
            },
            {
              "rank": 3,
              "to": "PL",
              "play": "Come out the side and pass up top.",
              "why": "Reset."
            }
          ]
        },
        "BUMPER": {
          "spot": [
            84,
            12
          ],
          "job": "Go toward the post, stick down.",
          "why": "Rebound or pass."
        },
        "PT_R": {
          "spot": [
            83,
            18
          ],
          "job": "Hold the far side and be ready to sneak back door.",
          "why": "If the PK leans to the puck, the back door opens (blueseat 2011)."
        },
        "WALL_R": {
          "spot": [
            82,
            12
          ],
          "job": "Sneak toward the far post.",
          "why": "The PK is turned to the puck side."
        },
        "GL_R": {
          "spot": [
            82,
            8
          ],
          "job": "Back door: far post, stick on the ice.",
          "why": "The PK is watching the puck."
        },
        "CORNER_R": {
          "spot": [
            82,
            2
          ],
          "job": "Go to the net front.",
          "why": "Someone has to screen while the puck is won."
        }
      }
    },
    {
      "id": "LR",
      "label": "Right low",
      "player": "F",
      "base": [
        83,
        -22
      ],
      "handedness": "Inference: right-handed on the right.",
      "core_job": "Same as the left low player.",
      "why": "Same as the left low player.",
      "reactions": {
        "PT_L": {
          "spot": [
            83,
            -18
          ],
          "job": "Hold the far side and be ready to sneak back door.",
          "why": "If the PK leans to the puck, the back door opens (blueseat 2011)."
        },
        "PT": {
          "spot": [
            84,
            -12
          ],
          "job": "Close in toward the post.",
          "why": "Rebounds."
        },
        "WALL_L": {
          "spot": [
            82,
            -12
          ],
          "job": "Sneak toward the far post.",
          "why": "The PK is turned to the puck side."
        },
        "GL_L": {
          "spot": [
            82,
            -8
          ],
          "job": "Back door: far post, stick on the ice.",
          "why": "The PK is watching the puck."
        },
        "CORNER_L": {
          "spot": [
            82,
            -2
          ],
          "job": "Go to the net front.",
          "why": "Someone has to screen while the puck is won."
        },
        "BEHIND": {
          "spot": [
            84,
            -16
          ],
          "job": "Step out to the far dot line.",
          "why": "Option."
        },
        "BUMPER": {
          "spot": [
            84,
            -12
          ],
          "job": "Go toward the post, stick down.",
          "why": "Rebound or pass."
        },
        "PT_R": {
          "spot": [
            80,
            -26
          ],
          "job": "Step up a little toward the wall, stick out.",
          "why": "Opens a passing lane from the point (inference)."
        },
        "WALL_R": {
          "spot": [
            62,
            -32
          ],
          "job": "Have the puck. You've come up the wall from low.",
          "why": "This turns the spread into an overload or 1-3-1 shape (TCS spread: often shifts into a 1-3-1 or overload).",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass into the slot.",
              "why": "Best shot."
            },
            {
              "rank": 2,
              "to": "PR",
              "play": "Pass back up to the point.",
              "why": "Reset."
            },
            {
              "rank": 3,
              "to": "LL",
              "play": "Cross-ice pass to the far low player at the back door.",
              "why": "Only if clearly open."
            }
          ]
        },
        "GL_R": {
          "spot": [
            86,
            -16
          ],
          "job": "Have the puck on the goal line.",
          "why": "From here every pass goes to a scoring spot.",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass into the slot.",
              "why": "Highest-percentage shot."
            },
            {
              "rank": 2,
              "to": "LL",
              "play": "Pass across the crease to the back door.",
              "why": "The goalie is hugging your post."
            },
            {
              "rank": 3,
              "to": "PR",
              "play": "Pass up to the point.",
              "why": "Reset with the PK collapsed low."
            }
          ]
        },
        "CORNER_R": {
          "spot": [
            88,
            -32
          ],
          "job": "First in. Win the puck.",
          "why": "Retrieval.",
          "options": [
            {
              "rank": 1,
              "to": "S",
              "play": "Pass to S in the slot.",
              "why": "Quick chance."
            },
            {
              "rank": 2,
              "to": "PR",
              "play": "Pass up the wall to the point.",
              "why": "Reset."
            },
            {
              "rank": 3,
              "to": "CARRY",
              "play": "Carry it behind the net.",
              "why": "Escape."
            }
          ]
        }
      }
    }
  ],
  "sources": [
    {
      "title": "The Coaches Site: Explained: Spread Power Play Formation",
      "url": "https://members.thecoachessite.com/article/explained-spread-power-play-formation",
      "supports": "Alignment (two blue line, one middle, two low on the dot lines). Time and space. Aggressive PKers leave an outlet. Weak against a passive PK. Used as a reset that shifts into a 1-3-1 or overload. Easy to rotate players."
    },
    {
      "title": "r/hockey wiki: On-ice strategies (mirror)",
      "url": "https://reddit.sudovanilla.org/r/hockey/wiki/on_ice_strategies",
      "supports": "Spread = wide 2-1-2. Mid-slot player forces the weak-side D to overcommit. Especially effective on 5-on-3, point to low strong-side pass."
    },
    {
      "title": "Blue Seat Blogs: special teams (2011)",
      "url": "https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams",
      "supports": "Spread (2-1-2): outnumber the PK low. A PK player leaving for the point opens the slot or back door. Mostly a 5-on-3 set."
    },
    {
      "title": "Jack Han: 2-3 vs 1-3-1",
      "url": "https://jhanhky.substack.com/p/asked-and-answered-2-3-vs-1-3-1",
      "supports": "Names '2-1-2 Box+1' and '3-2 Spread' as older schemes largely replaced by the 1-3-1 and 2-3 umbrella."
    },
    {
      "title": "LG Sports Module 5",
      "url": "https://lgsports.ca/?p=8784",
      "supports": "'Box + 1' as the 5-on-3 structure."
    },
    {
      "title": "USA Hockey (Witt)",
      "url": "https://www.usahockey.com/news_article/show/567725",
      "supports": "Rotate players through special-teams units at youth levels."
    }
  ]
}
```

