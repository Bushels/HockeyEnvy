# HockeyEnvy - Penalty Kill (4-on-5) systems

Side: **PK**. Coordinates follow `SCHEMA.md`: x toward the net the kill defends (goal line x=89), **+y = the power play's LEFT**. All `spot` values are approximate (within about 3-5 ft); spots marked "inference" in `why` are reasoned from principles, not taken from a diagram.

**How this was researched.** I used coaching sources: Tony O, Weiss Tech, The Coaches Site, HockeyShare, Coach Bob Nielsen, Gloucester Rangers minor-hockey PK notes, an NHLCA Canucks presentation, and Coach Enio. I also used NHL tactical breakdowns: McKeen's, Sound of Hockey, Winging It In Motown and The Hockey News. Many coaching pages give principles but no coordinates; their diagrams were images I couldn't read. Base spots and reactions are therefore built from the prose descriptions and checked across sources. Each system lists its sources with what they support. Blocked or unreadable: the icehockeysystems.com wedge+1 drill page (permission timeout), the full learn-ice-hockey.com page via WebFetch (I read it through a search/extract tool instead), Jack Han's diamond workshop (paywalled), and the Weiss Tech downloadable diagrams (zip files).

**Systems covered:** Box (passive), Aggressive/pressure box, Diamond (1-2-1), Wedge + 1 (= Triangle + 1 = triangle-and-one = "Czech press").
**Not added as separate systems:**
- "Swarm" is a 5-on-5 defensive-zone term (Leafs), not a PK system.
- "Rotating/moving box" appears only as a neutral-zone forecheck label (NHLCA Canucks), so it isn't an in-zone system.
- "Push-down / trap-down" and "three-point pressure" (Oilers 2024) are pressure tactics used inside a box or wedge. They appear as triggers.
- The 1-1-2 appears mainly as a neutral-zone PK forecheck. One source (HockeySchoolOnline) describes an in-zone 1-1-2, but it isn't common enough to model.

## Principles shared by every system (multi-source)

- **Concede something on purpose.** A box concedes the middle of the slot, a diamond concedes the outside and back door, and a wedge+1 concedes the perimeter. A kill fails when a killer covers something that wasn't his (learn-ice-hockey; Tony O).
- **Contain vs pressure.** Pressure on a cue: puck in the air or moving, bobbled or rolling puck, back turned or facing the wall, backhand reception, rim or dump, rebound into the corner, isolated carrier. Otherwise contain with sticks in lanes. Rule of thumb: "see his numbers, go; see his eyes, contain" (Pure Hockey, Gloucester, Coach Enio, Hakstol, IHM).
- **One go, all go.** When one killer pressures, the next covers the space behind him and the rest tighten to the middle (NHLCA Canucks, Coach Enio, Sound of Hockey).
- **Pressure in straight lines from the net outward, inside-out**, so the presser stays in the shooting lane (Pure Hockey, Hakstol).
- **Sticks on the ice in the seams; bodies in shooting lanes.** Block from the lane, on your feet, never as a screen in front of your own goalie (Tony O, learn-ice-hockey, HockeyPlayer).
- **Clearing.** Whoever wins the puck clears it hard, the full length. Use the forehand where possible, or go off the glass or along the boards. Never rag the puck in your own zone or flip a soft one up the middle (Coach Enio, Gloucester, Nielsen, BenchIQ). The +1 or a high forward breaks for a shorthanded chance only after a clean win (Hakstol, McKeen's). **Hockey Canada Rule 6.7: a shorthanded team may ice the puck**, which applies to U15 in Alberta. USA Hockey withholds this exemption below Youth 15-only, so beware of US-sourced material on this point.
- **Player coming around the net / two low.** The D don't chase behind the net. The D on the side the carrier comes out takes him and the other D takes the net, calling "I've got him, you've got the net." This is even-strength DZ guidance from learn-ice-hockey (DZ page) plus HockeyPlayer's "don't chase behind the net"; treat its PK use as inference. A third attacker low is handled by a forward sinking (box and wedge) or the weak-side killer dropping (diamond).

## Open disagreements between sources

1. **Box vs overload.** learn-ice-hockey says the box is very good against an overload because it can out-wait it, and Blue Seat says the box is what teams use against the overload. The Coaches Site says an overload or 1-3-1 can make the box "mostly useless."
2. **The +1's route in the wedge.** Hakstol/Sound of Hockey has the +1 go straight out from the goal. The Coaches Site has him sweep across the top to keep the PP on one side. Weiss has the closest corner of the box challenge. learn-ice-hockey explicitly flags this split. The records use straight-line pressure plus a push-down after a pass to the wall.
3. **Who in the wedge guards the back door.** McKeen's says it's the low "sagging forward." Hakstol and learn-ice-hockey put both D low and the forward at the top. Both are real variants, depending on whether a forward or a D ends up low after the exchange. The records use 2 D low and the weak-side D on the back door.
4. **Diamond: puck in the corner.** Nielsen has the side killer follow the carrier down while the low D stays in front. The Gloucester notes have the low D pressure with the other D covering the net. The records use Nielsen; Gloucester is noted as an alternative.
5. **Diamond F/D layout.** Most sources (Nielsen, HockeyShare, Blue Seat, Pure Hockey) put the top F, one F and one D at the sides, and a low D. The Coaches Site's wording is muddled. HockeyShare's aggressive diamond says F and D are interchangeable.
6. **Clearing up the middle.** Gloucester's notes say to flip the puck up the middle when recovering in the mid-defensive zone. BenchIQ says never chip soft up the middle. The app should teach hard, high clears (off the glass or full length) and avoid the soft middle chip.
7. **Box puck-side forward.** HoopsKing says "the two nearest players pressure." Other sources (Tony O, HockeyPlayer, HockeyShare) say the passive box never double-pressures. HoopsKing is a low-weight general blog, so the records follow the majority.

---

## 1. Box (passive) - `pk-box`

**Shape:** Two forwards high at the top of the slot, two D low just off the posts, forming a square no wider than the dots. All four slide with the puck rather than rotating.
**Rules of the box (Tony O):** The two killers on the puck side form a wall. The D furthest from the puck takes the net-front player. The forward furthest from the puck slides into the middle of the slot. Everyone keeps their head turning.
**Puck low:** The puck-side D takes the carrier from the inside. The puck-side forward sinks to the dot to take the pass back up the wall. The far forward holds the middle and the far D holds the net and back door.
**Weak spots:** The bumper, the far-flank one-timer once the far forward has slid inside, and a 3-on-2 below the dots.
**Confidence:** High for the shape and principles (many agreeing sources). Medium for exact coordinates.

```json
{
  "id": "pk-box",
  "side": "PK",
  "name": "Box (passive)",
  "aliases": [
    "2-2",
    "Simple box",
    "Passive box",
    "Tight low box",
    "Square"
  ],
  "summary": "Two forwards high and two D low form a tight square around the slot that slides with the puck. The kill gives up outside shots and perimeter passing and protects the slot and goalmouth.",
  "best_against": [
    "2-3 (two points, three low): it attacks the points and goalmouth, the two areas the box defends best",
    "Static spread/umbrella that just moves the puck around the outside (single-source on the spread: The Coaches Site)",
    "Overload: contested. Learn-ice-hockey and Blue Seat say the box is the usual answer; The Coaches Site says an overload can make it 'mostly useless'"
  ],
  "weak_against": [
    "1-3-1: nobody in the box owns the middle of the slot, so the bumper sits uncovered",
    "Quick cross-seam passes to a weak-side one-timer",
    "Screened point shots with a strong net-front player",
    "Overload low plays, which create 3-on-2 below the dots when the box won't come out (see disagreement above)"
  ],
  "u15_note": "The box is the standard first PK for youth and inexperienced players; several sources say to teach it before anything else. It suits U15 well. Simplify to three rules: stay inside the dots, sticks on the ice in the passing lanes, and only the nearest player pressures, then only on a trigger. Teach the far-side forward to slide to the middle. Under Hockey Canada Rule 6.7 a shorthanded team may ice the puck, so every win is a hard 200-foot clear.",
  "roles": [
    {
      "id": "fl",
      "label": "High forward - PP's left side",
      "player": "F",
      "base": [
        60,
        11
      ],
      "core_job": "Protect your half of the top of the slot: the shooting lane from your point and the pass into the middle.",
      "why": "Two forwards side by side make a wall at the top of the slot, so shots come from far out and passes into the middle have to go through sticks.",
      "reactions": {
        "PT": {
          "spot": [
            56,
            6
          ],
          "job": "Tighten toward the middle with your partner; stick on the ice in the lane from the middle point to the bumper.",
          "why": "The puck is 60 feet away. Showing pressure without leaving the slot forces a long shot that has to get through you."
        },
        "PT_L": {
          "spot": [
            49,
            12
          ],
          "job": "Step out toward the point on the puck-to-net line ('show' pressure). Stick takes the pass down to the flank. Do not go to the blue line.",
          "why": "Imply pressure, don't chase: if you get caught at the line, the box is broken and someone gets a slot shot."
        },
        "PT_R": {
          "spot": [
            58,
            1
          ],
          "job": "Slide into the middle of the slot. Cover the bumper and the seam, and be ready to shift if it goes D-to-D.",
          "why": "The far-side top killer moves to the centre of the slot. From there you can still reach your point if the puck comes across."
        },
        "WALL_L": {
          "spot": [
            57,
            21
          ],
          "job": "Get between the flank and the net. Body in the shooting lane, stick on the pass to the middle. Keep him outside the dots.",
          "why": "You and the puck-side D make a two-man wall on the puck side; he can have the outside, never the inside."
        },
        "WALL_R": {
          "spot": [
            61,
            0
          ],
          "job": "Fill the middle: bumper and seam pass. Keep your head turning to see the far flank.",
          "why": "The puck-side pair takes the wall; the far forward protects the middle, which is the most dangerous ice."
        },
        "DOT_L": {
          "spot": [
            64,
            15
          ],
          "job": "He's inside the circle - close from above and inside, stick on the pass into the slot.",
          "why": "Once the puck gets into the box area, the nearest killer must move to it and everyone else tightens toward the net."
        },
        "DOT_R": {
          "spot": [
            66,
            1
          ],
          "job": "Middle of the slot, stick on the cross-slot pass.",
          "why": "If the puck gets into the circle, the pass across the slot is the killer. Take it away."
        },
        "CORNER_L": {
          "spot": [
            70,
            20
          ],
          "job": "Sink to the dot/hash area on the puck side. Take the pass back up the wall and the pass out to the dot.",
          "why": "The D is handling the corner; you protect the next most likely pass so the corner player has nowhere good to go."
        },
        "CORNER_R": {
          "spot": [
            66,
            -1
          ],
          "job": "Middle of the slot.",
          "why": "Someone has to own the slot while the box slides to the puck side."
        },
        "GL_L": {
          "spot": [
            71,
            14
          ],
          "job": "Sit at the low circle between the puck and the slot. Stick on the pass out to the dot and the seam.",
          "why": "The goal-line player wants to pass out to a one-timer in the circle or slot; you are in that lane."
        },
        "GL_R": {
          "spot": [
            66,
            2
          ],
          "job": "Middle of the slot, a little to the far side.",
          "why": "Covers the pass out of the corner into the slot and the far one-timer."
        },
        "BEHIND": {
          "spot": [
            70,
            8
          ],
          "job": "Sink between the dots, facing the net. Watch for players cutting into the slot.",
          "why": "Pucks from behind the net come out front fast; both forwards protect the slot instead of chasing."
        },
        "BUMPER": {
          "spot": [
            60,
            4
          ],
          "job": "Collapse on the bumper from above; sticks to the puck. The nearer forward takes the body.",
          "why": "The bumper is the box's soft middle. Two forwards squeezing it make him rush the shot or pass."
        },
        "NET": {
          "spot": [
            72,
            7
          ],
          "job": "Drop to the low slot on your side. Find the rebound and clear it.",
          "why": "The D are tied up with net-front players. You are the rebound and loose-puck player."
        }
      }
    },
    {
      "id": "fr",
      "label": "High forward - PP's right side",
      "player": "F",
      "base": [
        60,
        -11
      ],
      "core_job": "Protect your half of the top of the slot: the shooting lane from your point and the pass into the middle.",
      "why": "Mirror of the other high forward; together you never both drift to the same side.",
      "reactions": {
        "PT": {
          "spot": [
            56,
            -6
          ],
          "job": "Tighten toward the middle with your partner; stick on the ice in the lane from the middle point to the bumper.",
          "why": "Same as your partner: close the middle lane without leaving the slot."
        },
        "PT_L": {
          "spot": [
            58,
            -1
          ],
          "job": "Slide into the middle of the slot. Cover the bumper and the seam, and be ready to shift if it goes D-to-D.",
          "why": "The far-side top killer moves to the centre of the slot. From there you can still reach your point if the puck comes across."
        },
        "PT_R": {
          "spot": [
            49,
            -12
          ],
          "job": "Step out toward the point on the puck-to-net line ('show' pressure). Stick takes the pass down to the flank. Do not go to the blue line.",
          "why": "Imply pressure, don't chase: if you get caught at the line, the box is broken and someone gets a slot shot."
        },
        "WALL_L": {
          "spot": [
            61,
            0
          ],
          "job": "Fill the middle: bumper and seam pass. Keep your head turning to see the far flank.",
          "why": "The puck-side pair takes the wall; the far forward protects the middle, which is the most dangerous ice."
        },
        "WALL_R": {
          "spot": [
            57,
            -21
          ],
          "job": "Get between the flank and the net. Body in the shooting lane, stick on the pass to the middle. Keep him outside the dots.",
          "why": "You and the puck-side D make a two-man wall on the puck side; he can have the outside, never the inside."
        },
        "DOT_L": {
          "spot": [
            66,
            -1
          ],
          "job": "Middle of the slot, stick on the cross-slot pass.",
          "why": "If the puck gets into the circle, the pass across the slot is the killer. Take it away."
        },
        "DOT_R": {
          "spot": [
            64,
            -15
          ],
          "job": "He's inside the circle - close from above and inside, stick on the pass into the slot.",
          "why": "Once the puck gets into the box area, the nearest killer must move to it and everyone else tightens toward the net."
        },
        "CORNER_L": {
          "spot": [
            66,
            1
          ],
          "job": "Middle of the slot.",
          "why": "Someone has to own the slot while the box slides to the puck side."
        },
        "CORNER_R": {
          "spot": [
            70,
            -20
          ],
          "job": "Sink to the dot/hash area on the puck side. Take the pass back up the wall and the pass out to the dot.",
          "why": "The D is handling the corner; you protect the next most likely pass so the corner player has nowhere good to go."
        },
        "GL_L": {
          "spot": [
            66,
            -2
          ],
          "job": "Middle of the slot, a little to the far side.",
          "why": "Covers the pass out of the corner into the slot and the far one-timer."
        },
        "GL_R": {
          "spot": [
            71,
            -14
          ],
          "job": "Sit at the low circle between the puck and the slot. Stick on the pass out to the dot and the seam.",
          "why": "The goal-line player wants to pass out to a one-timer in the circle or slot; you are in that lane."
        },
        "BEHIND": {
          "spot": [
            70,
            -8
          ],
          "job": "Sink between the dots, facing the net. Watch for players cutting into the slot.",
          "why": "Pucks from behind the net come out front fast; both forwards protect the slot instead of chasing."
        },
        "BUMPER": {
          "spot": [
            60,
            -4
          ],
          "job": "Collapse on the bumper from above; sticks to the puck. The nearer forward takes the body.",
          "why": "Two forwards squeezing the bumper make him rush the shot or pass."
        },
        "NET": {
          "spot": [
            72,
            -7
          ],
          "job": "Drop to the low slot on your side. Find the rebound and clear it.",
          "why": "You are the rebound and loose-puck player."
        }
      }
    },
    {
      "id": "dl",
      "label": "Low D - PP's left side",
      "player": "D",
      "base": [
        81,
        7
      ],
      "core_job": "Own your side of the goalmouth: the net-front player, the low pass across the crease and rebounds.",
      "why": "Tips, rebounds and back-door passes right beside the net are where power plays score most; two D live there.",
      "reactions": {
        "PT": {
          "spot": [
            82,
            6
          ],
          "job": "Net front, body position on the net-front player, stick in the lane.",
          "why": "Point shots are for tips and rebounds. Win the body position before the shot."
        },
        "PT_L": {
          "spot": [
            81,
            8
          ],
          "job": "Hold the puck-side post area; watch for the pass down to the flank or goal line.",
          "why": "You are the puck-side low corner of the box."
        },
        "PT_R": {
          "spot": [
            82,
            3
          ],
          "job": "Take the net-front player; check the back door over your shoulder.",
          "why": "The far D is the net-front and back-door guard."
        },
        "WALL_L": {
          "spot": [
            80,
            11
          ],
          "job": "Stay below him and inside: take away the pass down to the goal line and the shot from the low circle.",
          "why": "You are the bottom half of the two-man wall on the puck side. Do not come up the wall and leave the net."
        },
        "WALL_R": {
          "spot": [
            83,
            1
          ],
          "job": "Net front, and keep turning your head to see the back door.",
          "why": "The D furthest from the puck covers the man in front. The back-door player is the next danger."
        },
        "DOT_L": {
          "spot": [
            76,
            15
          ],
          "job": "Step out and block the shot: square to the puck, on your feet, head out of the lane.",
          "why": "A shot from the dot is dangerous. Get in the lane before the shot, not sliding into it after."
        },
        "DOT_R": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. Block the cross-crease pass with your stick.",
          "why": "Your partner went out to block; you're the last line."
        },
        "CORNER_L": {
          "spot": [
            84,
            21
          ],
          "job": "Go to the carrier from the inside. Contain him and angle him away from the net. Stick on the pass out front. Pressure hard only on a trigger.",
          "why": "The strong-side D owns pucks below the dots. Inside position means any pass has to go around you."
        },
        "CORNER_R": {
          "spot": [
            83,
            1
          ],
          "job": "Net front. Box out and watch the back door.",
          "why": "With the puck low on the far side, back-door passes are coming."
        },
        "GL_L": {
          "spot": [
            84,
            9
          ],
          "job": "On the goal-line player from the net side. Stick flat in the pass across the crease.",
          "why": "The pass across the crease is the highest-danger pass in hockey. Your stick lives in it."
        },
        "GL_R": {
          "spot": [
            83,
            4
          ],
          "job": "Between the net-front player and the back door. Stick in the crease lane.",
          "why": "Two attackers near the net and one of you means you guard the more dangerous pass, the one across the crease."
        },
        "BEHIND": {
          "spot": [
            86,
            5
          ],
          "job": "Hold your post, stick on the ice in front of the crease. If he comes out your side, he's yours; call it.",
          "why": "Chasing behind the net breaks the box. Let him come to you. The D on the side he comes out takes him, and the other D takes the net."
        },
        "BUMPER": {
          "spot": [
            80,
            5
          ],
          "job": "Step up one stride to block the bumper's shot, but keep a stick on the net-front player.",
          "why": "Pressure the shot without giving the net-front player a free tip."
        },
        "NET": {
          "spot": [
            83,
            3
          ],
          "job": "Box out the net-front player, tie up his stick, find the rebound.",
          "why": "No rules in front of the net (within the rules): the goalie must see the shot and rebounds must be yours."
        }
      }
    },
    {
      "id": "dr",
      "label": "Low D - PP's right side",
      "player": "D",
      "base": [
        81,
        -7
      ],
      "core_job": "Own your side of the goalmouth: the net-front player, the low pass across the crease and rebounds.",
      "why": "Mirror of the other low D; when the puck is on the other side, you are the back-door and net-front guard.",
      "reactions": {
        "PT": {
          "spot": [
            82,
            -6
          ],
          "job": "Net front, body position on the net-front player, stick in the lane.",
          "why": "Win position before the shot comes."
        },
        "PT_L": {
          "spot": [
            82,
            -3
          ],
          "job": "Take the net-front player; check the back door over your shoulder.",
          "why": "The far D is the net-front and back-door guard."
        },
        "PT_R": {
          "spot": [
            81,
            -8
          ],
          "job": "Hold the puck-side post area; watch for the pass down to the flank or goal line.",
          "why": "You are the puck-side low corner of the box."
        },
        "WALL_L": {
          "spot": [
            83,
            -1
          ],
          "job": "Net front, and keep turning your head to see the back door.",
          "why": "The D furthest from the puck covers the man in front. The back-door player is the next danger."
        },
        "WALL_R": {
          "spot": [
            80,
            -11
          ],
          "job": "Stay below him and inside: take away the pass down to the goal line and the shot from the low circle.",
          "why": "You are the bottom half of the two-man wall on the puck side. Do not come up the wall and leave the net."
        },
        "DOT_L": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. Block the cross-crease pass with your stick.",
          "why": "Your partner went out to block; you're the last line."
        },
        "DOT_R": {
          "spot": [
            76,
            -15
          ],
          "job": "Step out and block the shot: square to the puck, on your feet, head out of the lane.",
          "why": "A shot from the dot is dangerous. Get in the lane before the shot, not sliding into it after."
        },
        "CORNER_L": {
          "spot": [
            83,
            -1
          ],
          "job": "Net front. Box out and watch the back door.",
          "why": "With the puck low on the far side, back-door passes are coming."
        },
        "CORNER_R": {
          "spot": [
            84,
            -21
          ],
          "job": "Go to the carrier from the inside. Contain him and angle him away from the net. Stick on the pass out front. Pressure hard only on a trigger.",
          "why": "The strong-side D owns pucks below the dots. Inside position means any pass has to go around you."
        },
        "GL_L": {
          "spot": [
            83,
            -4
          ],
          "job": "Between the net-front player and the back door. Stick in the crease lane.",
          "why": "Two attackers near the net and one of you means you guard the more dangerous pass, the one across the crease."
        },
        "GL_R": {
          "spot": [
            84,
            -9
          ],
          "job": "On the goal-line player from the net side. Stick flat in the pass across the crease.",
          "why": "The pass across the crease is the highest-danger pass in hockey. Your stick lives in it."
        },
        "BEHIND": {
          "spot": [
            86,
            -5
          ],
          "job": "Hold your post, stick on the ice in front of the crease. If he comes out your side, he's yours; call it.",
          "why": "The D on the side he comes out takes him; the other D takes the net."
        },
        "BUMPER": {
          "spot": [
            80,
            -5
          ],
          "job": "Step up one stride to block the bumper's shot, keeping track of the net-front player.",
          "why": "Same as your partner."
        },
        "NET": {
          "spot": [
            83,
            -3
          ],
          "job": "Box out the net-front player, tie up his stick, find the rebound.",
          "why": "The goalie must see the shot."
        }
      }
    }
  ],
  "triggers": [
    {
      "cue": "Bobbled or rolling puck, or a pass that's missed, inside or at the edge of the box",
      "who": "the nearest box corner (fl/fr/dl/dr)",
      "action": "Pressure hard to win it, then clear. The other three shift toward the net. If you don't win it, sprint back to your corner of the box.",
      "why": "A puck that is moving, bouncing or being fought for can't be passed or shot well, so for a second the power play is not really 5-on-4."
    },
    {
      "cue": "Puck rimmed into the corner, or a player picks it up facing the boards (back to you)",
      "who": "puck-side D (dl or dr); puck-side forward seals up the wall",
      "action": "D pressures from the inside. The puck-side F takes the pass back up the wall. The far F holds the middle and the far D holds the net.",
      "why": "A player facing the boards can't see his options. 'See his numbers, pressure; see his eyes, contain.'"
    },
    {
      "cue": "Puck passed into the box (bumper, slot)",
      "who": "the next nearest killer",
      "action": "Close on him immediately while the others collapse toward the net.",
      "why": "If the pass got in, the two killers it went between are at fault. The fix is a fast close-out so he has to rush."
    },
    {
      "cue": "Clean possession on the perimeter, head up",
      "who": "nobody",
      "action": "Contain: shift with the puck, sticks in lanes, no chasing.",
      "why": "Chasing a player who is looking at his options is how the box breaks and a slot shot opens."
    }
  ],
  "weaknesses": [
    {
      "where": "BUMPER (62,0)",
      "why": "The box has no player assigned to the middle; both forwards are beside it, not on it.",
      "how_exploited": "1-3-1 half-wall feeds the bumper for a one-timer or a bumper-to-net-front tip."
    },
    {
      "where": "Weak-side half-wall / dot (seam)",
      "why": "When the far forward slides to the middle, the far flank is open for a cross-seam one-timer.",
      "how_exploited": "Half-wall to far half-wall pass through the slot; the goalie has to move across."
    },
    {
      "where": "Two low (GL + NET + back door)",
      "why": "Only two D below the dots. A third attacker low, or the puck carrier coming out from behind the net, makes it 3-on-2.",
      "how_exploited": "Goal-line player passes across the crease or to the back door while the D are tied up."
    },
    {
      "where": "Point shots",
      "why": "The passive box deliberately concedes them; with a screen and tips they become dangerous.",
      "how_exploited": "Shot-volume PP: point shot with traffic, net-front and back-door hunt rebounds."
    }
  ],
  "sources": [
    {
      "title": "Tony O Hockey - Penalty Killing (passive and aggressive box, 5-on-3 triangle)",
      "url": "https://tonyohockey.com/defense/penalty_killing/",
      "supports": "Box geometry (low D about two yards off each post, high players inside the circles), the far top player in the middle of the slot, 'two defenders form a barrier puck side', far D on the net-front man, contain don't chase, the nearest killer closes when the puck enters the box, and the aggressive vs passive box definition"
    },
    {
      "title": "Learning to Play the Game - Special Teams (box, diamond, wedge+1, aggressive vs passive)",
      "url": "https://learn-ice-hockey.com/systems/special_teams/",
      "supports": "Two forwards high/two D low, high forwards never both drift to one side, strong-side D pressures below the goal line or in the low circle, weak-side D owns goalmouth/back door, box slides rather than rotates, good vs overload/2-3, countered by 1-3-1 bumper; shorthanded icing differs by rule book"
    },
    {
      "title": "The Coaches Site - Explained: Box Penalty Kill Formation",
      "url": "https://members.thecoachessite.com/article/explained-box-penalty-kill-formation",
      "supports": "Quadrant responsibilities; simple and good for young players; good vs spread; weak vs overload and 1-3-1 (disagrees with learn-ice-hockey on the overload)"
    },
    {
      "title": "Weiss Tech Hockey - Penalty Kill: Simple Box",
      "url": "https://weisstechhockey.com/?p=1244",
      "supports": "Starter PK for youngsters, strong net-front coverage, not aggressive"
    },
    {
      "title": "HockeyPlayer.com - The man-down, defensive-zone box",
      "url": "https://www.hockeyplayer.com/artman/publish/article_472.shtml",
      "supports": "Imply pressure rather than chase; forwards not to the blue line, D not behind the net; sweeping sticks; know each other's job on switches"
    },
    {
      "title": "HockeyShare - Penalty Kill 4 man Box (drill notes)",
      "url": "https://www.hockeyshare.com/drill/34960/",
      "supports": "Passive positional box, sticks covering middle lanes, D watch the back door, clear the net front"
    },
    {
      "title": "Edge Ice Academy - Understanding the Passive Box Penalty Kill",
      "url": "https://www.edgeiceacademy.com/article/understanding-the-passive-box-penalty-kill-in-hockey",
      "supports": "Box shifts as a unit, sticks in passing lanes, concedes perimeter; relies on goaltending"
    },
    {
      "title": "BenchIQ - Standing Box PK",
      "url": "https://benchiq.hockey/drills/standing-box-pk",
      "supports": "Triggers (bobbled puck, backhand pass, rim to the corner); clear 200 ft or off the glass, never soft up the middle"
    },
    {
      "title": "Gloucester Rangers Minor Hockey (R. Bercuson) - Penalty-Killing in Minor Hockey",
      "url": "https://docslib.org/doc/1956090/penalty-killing-in-minor-hockey",
      "supports": "Pressure triggers (puck moving, shoulders turned, loose puck), ice it using boards/glass, passive box with lateral slide"
    },
    {
      "title": "Blue Seat Blogs - Penalty kill (diamond, box, wedge/triangle +1)",
      "url": "https://blueseatblogs.com/2011/10/24/penalty-kill/",
      "supports": "Box as a passive low collapse; weak-side player must take the far-post player; often used vs overload"
    },
    {
      "title": "HoopsKing - Hockey Penalty Kill Systems: Box vs Diamond vs Wedge (general-audience blog)",
      "url": "https://hoopsking.com/blogs/ice-hockey/hockey-penalty-kill-systems",
      "supports": "Youth recommendation and weakness to the bumper (general-audience blog; low weight)"
    },
    {
      "title": "Pure Hockey - How to Play the Penalty Kill in Hockey",
      "url": "https://www.purehockey.com/c/how-to-play-the-penalty-kill-in-hockey",
      "supports": "'See the jersey, pressure; see the eyes, contain' and pressure situations"
    },
    {
      "title": "Hockey Canada Playing Rules - Rule 6.7 Icing (no icing when shorthanded)",
      "url": "http://rulebook.hockeycanada.ca/english/part-i-technical-rules/section-6/rule-6-7/",
      "supports": "Shorthanded team may ice the puck under Hockey Canada rules (U15 Alberta)"
    },
    {
      "title": "Learning to Play the Game - Defensive Zone Coverage (low-zone rotations, D exchange behind the net)",
      "url": "https://learn-ice-hockey.com/systems/defensive_zone_coverage/",
      "supports": "D exchange at the midline when the puck goes behind the net ('I've got him, you've got the net'). This is even-strength guidance applied to the PK, so it is inference"
    }
  ]
}
```

## 2. Aggressive / pressure box - `pk-box-aggressive`

**Shape:** The same 2-2, started higher, with forwards around the tops of the circles. The nearest forward pressures the point inside-out with his stick on the D-to-D pass and pushes the puck down the wall. The puck-side D steps up to trap it, the far forward holds the middle and the far D holds the net. On loose pucks in the corner, the kill goes to three-point pressure, all four together: D engages, puck-side F seals the top, far D seals the bottom, far F holds the middle.
**Confidence:** Medium. The concept is well sourced (Tony O, Gloucester, BVHS, CoachTube outline, Coach Enio's Oilers push-down). Exact D step-up depth and the behind-the-net reaction are partly inference, and the Savard rotation transcript is garbled.

```json
{
  "id": "pk-box-aggressive",
  "side": "PK",
  "name": "Aggressive (pressure) box",
  "aliases": [
    "Pressure box",
    "High box",
    "Push-down / trap-down box (NHL wording for the forward pressure)"
  ],
  "summary": "The same 2-2 shape played higher. The nearest forward pressures the point inside-out to push the puck down one wall, the D steps up to trap it, and the far side holds the middle and net. On loose pucks the kill swarms in three-point pressure.",
  "best_against": [
    "Power plays that struggle under pressure or with weak puck control",
    "Umbrella/point-heavy PPs where taking point time away matters",
    "PPs that set up slowly after entry"
  ],
  "weak_against": [
    "Skilled PPs that move it D-to-D or cross-ice before the pressure arrives (the presser is caught high)",
    "Low plays and back door when the D steps up and the far D is left 1-vs-2",
    "Teams with a confident bumper when both forwards are caught on one side"
  ],
  "u15_note": "Teachable at U15 once the passive box is automatic. The 'one go, all go' rule and clear triggers are the key. A good progression is passive box, then forward pressure on triggers only, then the D step-up. If players chase without the others moving, go back to passive.",
  "roles": [
    {
      "id": "fl",
      "label": "High forward - PP's left side",
      "player": "F",
      "base": [
        54,
        12
      ],
      "core_job": "Play higher than the passive box. Pressure your point inside-out on any pass or bobble, and push the puck down the wall.",
      "why": "Starting higher lets you reach the point while the puck is still travelling, so the PP gets less time to set up.",
      "reactions": {
        "PT": {
          "spot": [
            40,
            4
          ],
          "job": "Pressure the middle point straight out from the net (closer forward goes), stick on the pass to your side.",
          "why": "Takes away his time. The other forward covers the middle behind you."
        },
        "PT_L": {
          "spot": [
            36,
            13
          ],
          "job": "Pressure inside-out. Stick takes away the D-to-D pass so he has to go down the wall.",
          "why": "Keeping the puck on one side means the kill only has to defend half the ice."
        },
        "PT_R": {
          "spot": [
            54,
            6
          ],
          "job": "High slot. Read the D-to-D pass; if it gets through, you are the new presser.",
          "why": "One forward pressures and one covers the middle; you switch as the puck switches sides."
        },
        "WALL_L": {
          "spot": [
            52,
            25
          ],
          "job": "Follow the pass down from above ('push down'). Stick on the pass back to the point. Steer him down the wall.",
          "why": "Pushing him toward the goal line traps him between you, the boards and your D."
        },
        "WALL_R": {
          "spot": [
            62,
            0
          ],
          "job": "Close the middle; take away seam passes.",
          "why": "The far forward guards the middle while the near side traps."
        },
        "DOT_L": {
          "spot": [
            64,
            18
          ],
          "job": "Close from above, stick on the pass into the slot.",
          "why": "Squeeze him with your D so he has to rush."
        },
        "DOT_R": {
          "spot": [
            66,
            0
          ],
          "job": "Middle of the slot.",
          "why": "Cross-slot pass is the danger."
        },
        "CORNER_L": {
          "spot": [
            74,
            26
          ],
          "job": "Seal the top: stand on the wall above the puck so it can't come back up.",
          "why": "With the D pressuring the corner, you take away the escape pass up the boards."
        },
        "CORNER_R": {
          "spot": [
            68,
            -2
          ],
          "job": "Hold the middle of the slot.",
          "why": "One killer must always own the middle during pressure."
        },
        "GL_L": {
          "spot": [
            72,
            16
          ],
          "job": "Low circle: take the pass out to the dot and the seam.",
          "why": "Same lane job as the passive box."
        },
        "GL_R": {
          "spot": [
            66,
            1
          ],
          "job": "Middle of the slot.",
          "why": "Covers the pass out front and the far one-timer."
        },
        "BEHIND": {
          "spot": [
            72,
            9
          ],
          "job": "Drop to the slot, facing the net.",
          "why": "The puck is low. Protect the slot first."
        },
        "BUMPER": {
          "spot": [
            58,
            4
          ],
          "job": "Collapse on the bumper from above.",
          "why": "Middle first, always."
        },
        "NET": {
          "spot": [
            72,
            7
          ],
          "job": "Low slot, find rebounds.",
          "why": "Second-chance pucks are yours."
        }
      }
    },
    {
      "id": "fr",
      "label": "High forward - PP's right side",
      "player": "F",
      "base": [
        54,
        -12
      ],
      "core_job": "Play higher than the passive box. Pressure your point inside-out on any pass or bobble, and push the puck down the wall.",
      "why": "Mirror of the other forward; when your partner pressures, you sag to the middle and read the D-to-D pass.",
      "reactions": {
        "PT": {
          "spot": [
            52,
            -5
          ],
          "job": "Sag to the high slot, read the D-to-D pass and jump it if it's slow.",
          "why": "You become the next presser when the puck moves to your side."
        },
        "PT_L": {
          "spot": [
            54,
            -6
          ],
          "job": "High slot. Read the D-to-D pass; if it gets through, you are the new presser.",
          "why": "One forward pressures and one covers the middle; you switch as the puck switches sides."
        },
        "PT_R": {
          "spot": [
            36,
            -13
          ],
          "job": "Pressure inside-out. Stick takes away the D-to-D pass so he has to go down the wall.",
          "why": "Keeping the puck on one side means the kill only has to defend half the ice."
        },
        "WALL_L": {
          "spot": [
            62,
            0
          ],
          "job": "Close the middle; take away seam passes.",
          "why": "The far forward guards the middle while the near side traps."
        },
        "WALL_R": {
          "spot": [
            52,
            -25
          ],
          "job": "Follow the pass down from above ('push down'). Stick on the pass back to the point. Steer him down the wall.",
          "why": "Pushing him toward the goal line traps him between you, the boards and your D."
        },
        "DOT_L": {
          "spot": [
            66,
            0
          ],
          "job": "Middle of the slot.",
          "why": "Cross-slot pass is the danger."
        },
        "DOT_R": {
          "spot": [
            64,
            -18
          ],
          "job": "Close from above, stick on the pass into the slot.",
          "why": "Squeeze him with your D so he has to rush."
        },
        "CORNER_L": {
          "spot": [
            68,
            2
          ],
          "job": "Hold the middle of the slot.",
          "why": "One killer must always own the middle during pressure."
        },
        "CORNER_R": {
          "spot": [
            74,
            -26
          ],
          "job": "Seal the top: stand on the wall above the puck so it can't come back up.",
          "why": "With the D pressuring the corner, you take away the escape pass up the boards."
        },
        "GL_L": {
          "spot": [
            66,
            -1
          ],
          "job": "Middle of the slot.",
          "why": "Covers the pass out front and the far one-timer."
        },
        "GL_R": {
          "spot": [
            72,
            -16
          ],
          "job": "Low circle: take the pass out to the dot and the seam.",
          "why": "Same lane job as the passive box."
        },
        "BEHIND": {
          "spot": [
            68,
            -6
          ],
          "job": "Drop to the slot, facing the net.",
          "why": "Protect the slot first."
        },
        "BUMPER": {
          "spot": [
            58,
            -4
          ],
          "job": "Collapse on the bumper from above.",
          "why": "Middle first."
        },
        "NET": {
          "spot": [
            72,
            -7
          ],
          "job": "Low slot, find rebounds.",
          "why": "Second-chance pucks are yours."
        }
      }
    },
    {
      "id": "dl",
      "label": "Low D - PP's left side",
      "player": "D",
      "base": [
        80,
        7
      ],
      "core_job": "Step up to meet pucks pushed down your wall. Hold the net when the puck is on the other side.",
      "why": "The forwards push the puck low on purpose; the D is waiting there to squeeze it.",
      "reactions": {
        "PT": {
          "spot": [
            81,
            6
          ],
          "job": "Net front; win body position.",
          "why": "Point shots are for tips."
        },
        "PT_L": {
          "spot": [
            78,
            11
          ],
          "job": "Get ready to step up to the hash marks for a pass down from their D.",
          "why": "If the forward forces a pass down the wall, you meet it early."
        },
        "PT_R": {
          "spot": [
            82,
            2
          ],
          "job": "Take the deep puck and the net front.",
          "why": "If your partner steps up, you are the last player back."
        },
        "WALL_L": {
          "spot": [
            72,
            22
          ],
          "job": "Step up to meet him as he comes down: body in the shooting lane, stick in the middle.",
          "why": "You and the forward trap him on the wall. Your stick stops the pass to the slot."
        },
        "WALL_R": {
          "spot": [
            83,
            1
          ],
          "job": "Net front and back door. You are alone low; stay between the two threats.",
          "why": "The trap uses two players on the wall, which leaves you 1-vs-2 low. Read the pass; don't commit early."
        },
        "DOT_L": {
          "spot": [
            74,
            17
          ],
          "job": "Step out and block the shot.",
          "why": "Get in the lane before the shot."
        },
        "DOT_R": {
          "spot": [
            83,
            0
          ],
          "job": "Net front, stick on the crease pass.",
          "why": "Last line."
        },
        "CORNER_L": {
          "spot": [
            84,
            24
          ],
          "job": "Pressure the corner from the inside. Stay on the puck, not the body.",
          "why": "The trap's job is to win the puck and clear it."
        },
        "CORNER_R": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. On a trigger, seal the bottom (goal line beside the net).",
          "why": "Normally you hold the net. In full three-point pressure you seal the low escape."
        },
        "GL_L": {
          "spot": [
            84,
            10
          ],
          "job": "On the goal-line player from the net side, stick in the crease lane.",
          "why": "Deny the cross-crease pass."
        },
        "GL_R": {
          "spot": [
            83,
            4
          ],
          "job": "Between the net-front player and the back door.",
          "why": "Guard the most dangerous pass."
        },
        "BEHIND": {
          "spot": [
            89,
            7
          ],
          "job": "Go to the post on the side he's heading. Take away the wrap and the pass out front.",
          "why": "Aggressive version: the D on the carrier's side closes. The other D must hold the net (partly inference)."
        },
        "BUMPER": {
          "spot": [
            80,
            5
          ],
          "job": "Step up a stride to block, stick on the net-front player.",
          "why": "Same as passive."
        },
        "NET": {
          "spot": [
            83,
            3
          ],
          "job": "Box out, tie up the stick, find the rebound.",
          "why": "Same as passive."
        }
      }
    },
    {
      "id": "dr",
      "label": "Low D - PP's right side",
      "player": "D",
      "base": [
        80,
        -7
      ],
      "core_job": "Step up to meet pucks pushed down your wall. Hold the net when the puck is on the other side.",
      "why": "Mirror of the other D.",
      "reactions": {
        "PT": {
          "spot": [
            81,
            -6
          ],
          "job": "Net front; win body position.",
          "why": "Point shots are for tips."
        },
        "PT_L": {
          "spot": [
            82,
            -2
          ],
          "job": "Take the deep puck and the net front.",
          "why": "If your partner steps up, you are the last player back."
        },
        "PT_R": {
          "spot": [
            78,
            -11
          ],
          "job": "Get ready to step up to the hash marks for a pass down from their D.",
          "why": "If the forward forces a pass down the wall, you meet it early."
        },
        "WALL_L": {
          "spot": [
            83,
            -1
          ],
          "job": "Net front and back door. You are alone low; stay between the two threats.",
          "why": "The trap uses two players on the wall, which leaves you 1-vs-2 low. Read the pass; don't commit early."
        },
        "WALL_R": {
          "spot": [
            72,
            -22
          ],
          "job": "Step up to meet him as he comes down: body in the shooting lane, stick in the middle.",
          "why": "You and the forward trap him on the wall. Your stick stops the pass to the slot."
        },
        "DOT_L": {
          "spot": [
            83,
            0
          ],
          "job": "Net front, stick on the crease pass.",
          "why": "Last line."
        },
        "DOT_R": {
          "spot": [
            74,
            -17
          ],
          "job": "Step out and block the shot.",
          "why": "Get in the lane before the shot."
        },
        "CORNER_L": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. On a trigger, seal the bottom (goal line beside the net).",
          "why": "Normally you hold the net. In full three-point pressure you seal the low escape."
        },
        "CORNER_R": {
          "spot": [
            84,
            -24
          ],
          "job": "Pressure the corner from the inside. Stay on the puck, not the body.",
          "why": "The trap's job is to win the puck and clear it."
        },
        "GL_L": {
          "spot": [
            83,
            -4
          ],
          "job": "Between the net-front player and the back door.",
          "why": "Guard the most dangerous pass."
        },
        "GL_R": {
          "spot": [
            84,
            -10
          ],
          "job": "On the goal-line player from the net side, stick in the crease lane.",
          "why": "Deny the cross-crease pass."
        },
        "BEHIND": {
          "spot": [
            84,
            -2
          ],
          "job": "Hold the net front.",
          "why": "One D must always own the crease."
        },
        "BUMPER": {
          "spot": [
            80,
            -5
          ],
          "job": "Step up a stride to block, keeping the net-front player.",
          "why": "Same as passive."
        },
        "NET": {
          "spot": [
            83,
            -3
          ],
          "job": "Box out, tie up the stick, find the rebound.",
          "why": "Same as passive."
        }
      }
    }
  ],
  "triggers": [
    {
      "cue": "D-to-D pass in the air, or slow/wobbly",
      "who": "far forward (the one sagging in the high slot)",
      "action": "Jump the receiver inside-out. The original presser drops into the high slot.",
      "why": "Pressure arriving with the puck takes away the one-timer and the time to look."
    },
    {
      "cue": "Puck pushed down the wall below the tops of the circles",
      "who": "puck-side D steps up; puck-side F stays above",
      "action": "Trap on the wall. The far F holds the middle and the far D holds the net.",
      "why": "Two killers against one puck carrier on the boards, with the middle still protected."
    },
    {
      "cue": "Loose, bouncing or rimmed puck in the corner, shot/rebound into the corner, or a player facing the wall",
      "who": "all four ('one go, all go')",
      "action": "Three-point pressure: puck-side D engages, puck-side F seals the top, far D seals the bottom, far F holds the middle. Win it and clear 200 ft on the forehand.",
      "why": "For a moment the kill has 3-on-2 at the puck. Everyone must go together or a seam opens (Oilers model)."
    },
    {
      "cue": "Clean possession, head up, support nearby",
      "who": "nobody",
      "action": "Contain; drop back to box spots.",
      "why": "Pressure without support is how a PP springs a shooter."
    }
  ],
  "weaknesses": [
    {
      "where": "Far point / far flank after a quick D-to-D",
      "why": "The presser is on the wrong side and the far forward has to cover a long distance.",
      "how_exploited": "Point-to-point one-timer, or a quick swing to the far half-wall (the Blashill wedge example shows the same failure)."
    },
    {
      "where": "Back door (GL far side / NET)",
      "why": "When the puck-side D steps up the wall, the far D is alone against the net-front player and the back door.",
      "how_exploited": "Goal-line or low-circle pass across the crease."
    },
    {
      "where": "BUMPER",
      "why": "A box shape still has nobody assigned to the middle; with one forward out pressuring, only one forward is left for the middle.",
      "how_exploited": "Half-wall to bumper as the trap closes."
    }
  ],
  "sources": [
    {
      "title": "Tony O Hockey - Penalty Killing (passive and aggressive box, 5-on-3 triangle)",
      "url": "https://tonyohockey.com/defense/penalty_killing/",
      "supports": "Aggressive box: one or two killers attack when the opponent is cornered or the puck is loose, the others cover the slot, and roles alternate as the box re-forms"
    },
    {
      "title": "Gloucester Rangers Minor Hockey (R. Bercuson) - Penalty-Killing in Minor Hockey",
      "url": "https://docslib.org/doc/1956090/penalty-killing-in-minor-hockey",
      "supports": "Pressure box: forwards pressure inside-out at the blue line, F2 may drop to the high slot, D1 steps up to the hash marks for a pass from their D, D2 takes the deep puck; high/low pressure risky"
    },
    {
      "title": "Coaching and Team Tactics Manual (T. Morgan, June 2026) - PK box/high box/diamond",
      "url": "https://bvhs.ca/wp-content/uploads/2026/06/Coaching-and-Team-Tactics-Manual-Updated-June-2026.pdf",
      "supports": "High box played higher to take away the D; pounce on fumbles"
    },
    {
      "title": "How to Play Hockey Module 5.3.2 - Passive and Aggressive Box (course outline)",
      "url": "https://coachtube.com/course_lesson/how-to-play-hockey-module-5-special-teams-pp-pk/5-3-2-penalty-kill-passive-and-aggressive-box/119096",
      "supports": "Passive vs aggressive box is a recognised teaching split (course outline only)"
    },
    {
      "title": "LG Sports - Module 5: Special Teams (PK box/diamond outline)",
      "url": "https://lgsports.ca/?p=8784",
      "supports": "Same course outline; box vs diamond depends on the PP"
    },
    {
      "title": "Ice Hockey Systems / D. Savard - Aggressive Box to Diamond PK Rotation (video transcript)",
      "url": "https://www.youtube.com/watch?v=0Hspvnyt_Nc",
      "supports": "Aggressive box with D activation on the half-wall player and forward/D rotation; recommended to teach kids. Transcript is garbled, so treat as single-source"
    },
    {
      "title": "Coach Enio - Three keys to the Edmonton Oilers' 2024 playoff penalty kill (push-down, three-point pressure)",
      "url": "https://www.coachenio.com/drills/6717/",
      "supports": "Push-down/trap-down (forward stick takes the high D-to-D, D steps into the shooting lane, weak-side F closes the middle), three-point pressure roles and triggers, 200 ft forehand clear"
    },
    {
      "title": "NHLCA 2016 - Canucks Penalty Killing presentation (PDF)",
      "url": "https://www.flexxcoach.com/Content/nhlca/presentations/2016/NHLCA2016-Canucks-PenaltyKilling.pdf",
      "supports": "'One go, all go'; press when the puck is won or passed; flush/strike pressure language"
    },
    {
      "title": "Pure Hockey - How to Play the Penalty Kill in Hockey",
      "url": "https://www.purehockey.com/c/how-to-play-the-penalty-kill-in-hockey",
      "supports": "Pressure situations (struggling to control, facing the wall, two players passing along the boards)"
    },
    {
      "title": "Learning to Play the Game - Special Teams (box, diamond, wedge+1, aggressive vs passive)",
      "url": "https://learn-ice-hockey.com/systems/special_teams/",
      "supports": "Chase only a puck you can win; pressure without support is the failure mode"
    },
    {
      "title": "Hockey Canada Playing Rules - Rule 6.7 Icing (no icing when shorthanded)",
      "url": "http://rulebook.hockeycanada.ca/english/part-i-technical-rules/section-6/rule-6-7/",
      "supports": "Shorthanded icing allowed under Hockey Canada rules"
    }
  ]
}
```

## 3. Diamond (1-2-1) - `pk-diamond` (team's v1)

**Shape:** A top forward on the QB, two side killers (usually one F and one D) inside and under the flank one-timer spots, and the best defensive D low in front. Nielsen recommends a compact diamond, with the top lower and the sides inside, and conceding outside shots the goalie can see.
**Rotation (Nielsen, the most detailed source):**
- Top pressures the QB, forces a pass, then gets back inside under the middle to stop the cross-ice pass.
- The side on the pass side steps out to block the one-timer and keep the shooter outside.
- Low D takes the strong-side low player. The far side collapses to the weak-side low player, so the diamond becomes a box.
- Puck back to the top: everyone resets.
- Carrier goes down the wall: the side shadows him, low D plus far side form a triangle in front, and the top drops into the high slot.
**Main risk:** A 2-on-1 down low against the single D when the puck gets below the top three. The fix is the far side dropping on time.
**Confidence:** High for the base shape, matchups and the umbrella-side rotation. Medium for goal-line and behind-net reactions, partly inference with a Gloucester alternative.

```json
{
  "id": "pk-diamond",
  "side": "PK",
  "name": "Diamond",
  "aliases": [
    "1-2-1",
    "Diamond PK",
    "A box 'turned 1/8' (course outline wording)"
  ],
  "summary": "One forward at the top, two side killers under the flank shooters, one D in front of the net. The top forward pressures the point and the sides protect the one-timer spots and squeeze the middle. When the puck goes to a flank or low, the kill rotates into a box or a low triangle.",
  "best_against": [
    "Umbrella (three high): the top man pressures the QB and the sides take both flank one-timers",
    "1-3-1: the two sides squeeze the bumper, so it's the only common shape that starts with an answer to the middle",
    "PPs built around the point quarterback"
  ],
  "weak_against": [
    "Overload / low plays: the lone low D faces 2-vs-1 until a side killer drops down",
    "Goal-line plays (pass from the goal line to the slot or back door)",
    "Quick cross-seam pass to the far half-wall when the sides are slow",
    "Half-wall-based PPs if run as a rigid diamond. Nielsen says to let a box morph into a diamond instead"
  ],
  "u15_note": "Usable at U15, but harder than the box because of constant rotations and the timing of when sides leave the wall for the middle. Sources say a confused diamond is worse than a competent box. Simplify: run it compact (Nielsen), have the top forward pressure only the middle point, and use one rule for the sides: 'puck to your side, you go; puck to the other side, you drop to the back door.' If your team's v1 is the diamond, drill the weak-side drop to the back door and the low D's 'net-front first' rule first.",
  "roles": [
    {
      "id": "top",
      "label": "Top forward (apex)",
      "player": "F",
      "base": [
        52,
        0
      ],
      "core_job": "Pressure the point quarterback and take away the middle shooting lane and the seam to the bumper.",
      "why": "You are the only killer up top. Your pressure makes the QB move the puck before he wants to, and your stick protects the middle.",
      "reactions": {
        "PT": {
          "spot": [
            40,
            0
          ],
          "job": "Come out hard in a straight line at the QB. Stick down the middle lane. Force him to move it.",
          "why": "A QB with time picks the kill apart. Make him pass early, then get back inside."
        },
        "PT_L": {
          "spot": [
            54,
            -3
          ],
          "job": "After forcing the pass, get back down inside, under the middle, into the cross-ice lane.",
          "why": "The quick pass back across under you is the diamond's classic leak. Your stick stops it."
        },
        "PT_R": {
          "spot": [
            54,
            3
          ],
          "job": "After forcing the pass, get back down inside, under the middle, into the cross-ice lane.",
          "why": "The quick pass back across under you is the diamond's classic leak. Your stick stops it."
        },
        "WALL_L": {
          "spot": [
            55,
            -2
          ],
          "job": "Drop to the middle: stick on the seam across the slot and on the bumper. Step out if it goes back to the point.",
          "why": "The half-wall player's best passes are through the middle. You are the roof over the slot."
        },
        "WALL_R": {
          "spot": [
            55,
            2
          ],
          "job": "Drop to the middle: stick on the seam across the slot and on the bumper. Step out if it goes back to the point.",
          "why": "The half-wall player's best passes are through the middle. You are the roof over the slot."
        },
        "DOT_L": {
          "spot": [
            58,
            0
          ],
          "job": "Drop to the high slot; take away the bumper and the pass across.",
          "why": "Protect the middle while your side killer blocks."
        },
        "DOT_R": {
          "spot": [
            58,
            0
          ],
          "job": "Drop to the high slot; take away the bumper and the pass across.",
          "why": "Protect the middle while your side killer blocks."
        },
        "CORNER_L": {
          "spot": [
            62,
            2
          ],
          "job": "Step down into the high slot on the puck side. Take away the cross-ice pass out of the corner.",
          "why": "With the puck low, the next danger is a pass out to the slot or the far side."
        },
        "CORNER_R": {
          "spot": [
            62,
            -2
          ],
          "job": "Step down into the high slot on the puck side. Take away the cross-ice pass out of the corner.",
          "why": "With the puck low, the next danger is a pass out to the slot or the far side."
        },
        "GL_L": {
          "spot": [
            64,
            2
          ],
          "job": "High slot. Watch for the pass out to the slot and the far flank.",
          "why": "Same as corner."
        },
        "GL_R": {
          "spot": [
            64,
            -2
          ],
          "job": "High slot. Watch for the pass out to the slot and the far flank.",
          "why": "Same as corner."
        },
        "BEHIND": {
          "spot": [
            66,
            0
          ],
          "job": "High slot, facing the net.",
          "why": "Pucks from behind come out front. Stay central."
        },
        "BUMPER": {
          "spot": [
            56,
            0
          ],
          "job": "Collapse on the bumper's back from above. Stick on the puck.",
          "why": "Squeeze him with the two sides."
        },
        "NET": {
          "spot": [
            66,
            0
          ],
          "job": "High slot. Be ready to clear a rebound that squirts out.",
          "why": "Your two sides and the D are near the net; you cover the top."
        }
      }
    },
    {
      "id": "side_l",
      "label": "Side killer - PP's left side (usually the second F)",
      "player": "F",
      "base": [
        65,
        13
      ],
      "core_job": "Guard the flank or half-wall shooter on your side, and pinch to the bumper when the puck is in the middle.",
      "why": "The two sides sit under the flank one-timer spots, so neither shooter gets a free one-timer.",
      "reactions": {
        "PT": {
          "spot": [
            64,
            12
          ],
          "job": "Stay inside, under your flank. Stick in the lane from the QB to your flank and the bumper.",
          "why": "Don't get pulled to the wall early. The pass to your flank is the one you must stop or block."
        },
        "PT_L": {
          "spot": [
            44,
            14
          ],
          "job": "Step out at the shooter to block the one-timer. Keep him from cutting inside.",
          "why": "First job: block the shot. Second job: keep him outside. The top forward covers the pass behind you."
        },
        "PT_R": {
          "spot": [
            80,
            7
          ],
          "job": "Collapse down to the weak-side low player near the net.",
          "why": "With the puck up high on the far side, the low D is 1-vs-2. You drop to make it 2-vs-2."
        },
        "WALL_L": {
          "spot": [
            58,
            21
          ],
          "job": "Take the shooting lane between him and the net and keep him outside. On a trigger, pressure.",
          "why": "Make the half-wall player go around you. Don't chase him up the wall unless he has his back to you."
        },
        "WALL_R": {
          "spot": [
            66,
            8
          ],
          "job": "Pinch in: cover the bumper and keep an eye on the far flank and the back door.",
          "why": "You do two jobs: middle first, then the far one-timer or back door if the puck goes low."
        },
        "DOT_L": {
          "spot": [
            66,
            17
          ],
          "job": "Close out and block the shot from the dot.",
          "why": "One-timer spot: be in the lane before the pass arrives."
        },
        "DOT_R": {
          "spot": [
            72,
            6
          ],
          "job": "Collapse to the slot, far side of the net.",
          "why": "Cross-slot and back-door passes are next."
        },
        "CORNER_L": {
          "spot": [
            82,
            24
          ],
          "job": "If he carries down the wall, stay with him. Force him outside and below the goal line.",
          "why": "The rest of the diamond becomes a triangle in front of the net while you shadow the puck."
        },
        "CORNER_R": {
          "spot": [
            81,
            6
          ],
          "job": "Form the low triangle with the low D: take the back-door/weak-side low player.",
          "why": "The puck is low; the weak-side killer must step down or it's a simple pass-and-shot down low."
        },
        "GL_L": {
          "spot": [
            83,
            12
          ],
          "job": "On the puck from the outside-in. Stick on the pass to the slot and across the crease.",
          "why": "You followed it down; finish the job so the low D can stay on the net-front player."
        },
        "GL_R": {
          "spot": [
            81,
            7
          ],
          "job": "Back door. Stick on the pass across the crease.",
          "why": "The most dangerous pass when the puck is on the goal line."
        },
        "BEHIND": {
          "spot": [
            82,
            8
          ],
          "job": "Drop beside the net on your side. Take the carrier if he comes out your side.",
          "why": "Inference: with the puck behind, both sides sink so the low D isn't 1-vs-2."
        },
        "BUMPER": {
          "spot": [
            63,
            5
          ],
          "job": "Pinch toward the bumper. Stick on the puck and the lane.",
          "why": "The two middle points stay level with the puck so no pass goes through the middle."
        },
        "NET": {
          "spot": [
            78,
            6
          ],
          "job": "Step down to the post area; win the rebound and clear.",
          "why": "In the diamond the weak-side killer must step down to help the lone D."
        }
      }
    },
    {
      "id": "side_r",
      "label": "Side killer - PP's right side (usually a D)",
      "player": "D",
      "base": [
        65,
        -13
      ],
      "core_job": "Guard the flank or half-wall shooter on your side, and pinch to the bumper when the puck is in the middle.",
      "why": "Mirror of the other side. Several sources say F and D sides can swap as long as all four points are filled.",
      "reactions": {
        "PT": {
          "spot": [
            64,
            -12
          ],
          "job": "Stay inside, under your flank. Stick in the lane from the QB to your flank and the bumper.",
          "why": "Same as the other side."
        },
        "PT_L": {
          "spot": [
            80,
            -7
          ],
          "job": "Collapse down to the weak-side low player near the net.",
          "why": "With the puck up high on the far side, the low D is 1-vs-2. You drop to make it 2-vs-2."
        },
        "PT_R": {
          "spot": [
            44,
            -14
          ],
          "job": "Step out at the shooter to block the one-timer. Keep him from cutting inside.",
          "why": "First job: block the shot. Second job: keep him outside. The top forward covers the pass behind you."
        },
        "WALL_L": {
          "spot": [
            66,
            -8
          ],
          "job": "Pinch in: cover the bumper and keep an eye on the far flank and the back door.",
          "why": "You do two jobs: middle first, then the far one-timer or back door if the puck goes low."
        },
        "WALL_R": {
          "spot": [
            58,
            -21
          ],
          "job": "Take the shooting lane between him and the net and keep him outside. On a trigger, pressure.",
          "why": "Make the half-wall player go around you. Don't chase him up the wall unless he has his back to you."
        },
        "DOT_L": {
          "spot": [
            72,
            -6
          ],
          "job": "Collapse to the slot, far side of the net.",
          "why": "Cross-slot and back-door passes are next."
        },
        "DOT_R": {
          "spot": [
            66,
            -17
          ],
          "job": "Close out and block the shot from the dot.",
          "why": "One-timer spot: be in the lane before the pass arrives."
        },
        "CORNER_L": {
          "spot": [
            81,
            -6
          ],
          "job": "Form the low triangle with the low D: take the back-door/weak-side low player.",
          "why": "The puck is low; the weak-side killer must step down or it's a simple pass-and-shot down low."
        },
        "CORNER_R": {
          "spot": [
            82,
            -24
          ],
          "job": "If he carries down the wall, stay with him. Force him outside and below the goal line.",
          "why": "The rest of the diamond becomes a triangle in front of the net while you shadow the puck."
        },
        "GL_L": {
          "spot": [
            81,
            -7
          ],
          "job": "Back door. Stick on the pass across the crease.",
          "why": "The most dangerous pass when the puck is on the goal line."
        },
        "GL_R": {
          "spot": [
            83,
            -12
          ],
          "job": "On the puck from the outside-in. Stick on the pass to the slot and across the crease.",
          "why": "You followed it down; finish the job so the low D can stay on the net-front player."
        },
        "BEHIND": {
          "spot": [
            82,
            -8
          ],
          "job": "Drop beside the net on your side. Take the carrier if he comes out your side.",
          "why": "Inference: both sides sink with the puck behind the net."
        },
        "BUMPER": {
          "spot": [
            63,
            -5
          ],
          "job": "Pinch toward the bumper. Stick on the puck and the lane.",
          "why": "Squeeze the middle."
        },
        "NET": {
          "spot": [
            78,
            -6
          ],
          "job": "Step down to the post area; win the rebound and clear.",
          "why": "Help the lone D clear the house."
        }
      }
    },
    {
      "id": "low",
      "label": "Low D (bottom)",
      "player": "D",
      "base": [
        82,
        0
      ],
      "core_job": "Own the goalmouth: the net-front player first, the back door second.",
      "why": "You are alone low until a side killer drops down. Use your best defensive D here.",
      "reactions": {
        "PT": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. Win body position, stick in the lane.",
          "why": "You're the only D at the net for now."
        },
        "PT_L": {
          "spot": [
            82,
            5
          ],
          "job": "Pick up the strong-side player near the net.",
          "why": "The far side killer drops in for the weak-side player."
        },
        "PT_R": {
          "spot": [
            82,
            -5
          ],
          "job": "Pick up the strong-side player near the net.",
          "why": "The far side killer drops in for the weak-side player."
        },
        "WALL_L": {
          "spot": [
            82,
            4
          ],
          "job": "Net front, puck side. Stick on the pass to the goal line and across the crease.",
          "why": "Stay between the net-front player and the puck. Don't get pulled to the corner."
        },
        "WALL_R": {
          "spot": [
            82,
            -4
          ],
          "job": "Net front, puck side. Stick on the pass to the goal line and across the crease.",
          "why": "Stay between the net-front player and the puck. Don't get pulled to the corner."
        },
        "DOT_L": {
          "spot": [
            82,
            2
          ],
          "job": "Net front. Tie up the stick of the net-front player.",
          "why": "A shot from the dot is coming: win the tip and rebound."
        },
        "DOT_R": {
          "spot": [
            82,
            -2
          ],
          "job": "Net front. Tie up the stick of the net-front player.",
          "why": "A shot from the dot is coming: win the tip and rebound."
        },
        "CORNER_L": {
          "spot": [
            83,
            4
          ],
          "job": "Net front, near post side.",
          "why": "Your side killer took the corner. You and the far side form the triangle."
        },
        "CORNER_R": {
          "spot": [
            83,
            -4
          ],
          "job": "Net front, near post side.",
          "why": "Your side killer took the corner. You and the far side form the triangle."
        },
        "GL_L": {
          "spot": [
            83,
            1
          ],
          "job": "On the net-front player.",
          "why": "The puck carrier is covered; you own the most dangerous man."
        },
        "GL_R": {
          "spot": [
            83,
            -1
          ],
          "job": "On the net-front player.",
          "why": "The puck carrier is covered; you own the most dangerous man."
        },
        "BEHIND": {
          "spot": [
            84,
            0
          ],
          "job": "Hold the front of the net. Only go behind for a loose puck you can win.",
          "why": "Inference plus Gloucester: one D stays at the net. If you leave, a side killer must fill."
        },
        "BUMPER": {
          "spot": [
            82,
            0
          ],
          "job": "Stay on the net-front player.",
          "why": "The bumper's shot or pass will come to your area. Be there first."
        },
        "NET": {
          "spot": [
            83,
            0
          ],
          "job": "Box out, tie up the stick, clear the rebound.",
          "why": "No rules in front of the net (within the rules)."
        }
      }
    }
  ],
  "triggers": [
    {
      "cue": "Puck at the top (QB) with the PP set",
      "who": "top",
      "action": "Pressure hard in a straight line to force the pass, then get back inside under the middle.",
      "why": "The diamond is built to make the top move the puck; the danger is the pass back across under the top forward."
    },
    {
      "cue": "QB passes to a flank or half-wall",
      "who": "side on that side steps out; top drops inside; low takes the strong-side low player; far side collapses to the weak-side low player",
      "action": "Rotate one click: the diamond becomes a box with the top F in the middle.",
      "why": "Blocks the one-timer, covers the cross-ice pass, and turns the low 2-vs-1 into 2-vs-2."
    },
    {
      "cue": "Flank carries the puck down the wall",
      "who": "side on that side follows; low and far side make a triangle in front; top steps into the high slot",
      "action": "Shadow the puck down. Force him outside.",
      "why": "Keeps three killers between the puck and the net."
    },
    {
      "cue": "Half-wall player has his back to you or is fighting the puck",
      "who": "side on that side",
      "action": "Pressure up the wall; otherwise hold and force the play around the outside.",
      "why": "Nielsen: don't chase up the wall unless his back is turned and he's struggling."
    },
    {
      "cue": "Blocked shot or rebound into the corner",
      "who": "nearest killer goes; if the low D goes, the side killer drops to the net and the far side collapses",
      "action": "Win it and rip it off the glass and down the ice; don't skate with it.",
      "why": "A puck that is moving, bouncing or being fought for can't be passed or shot well, so for a second the power play is not really 5-on-4."
    },
    {
      "cue": "Puck into the middle (bumper)",
      "who": "side_l + side_r + top",
      "action": "Collapse: the diamond shrinks around the puck.",
      "why": "If the puck is inside the diamond, it collapses (HockeyShare)."
    }
  ],
  "weaknesses": [
    {
      "where": "Low 2-vs-1 (NET + GL/back door)",
      "why": "Only one D is low when the puck is up high; the weak-side killer has to arrive in time.",
      "how_exploited": "Puck gets below the top three killers, then goal line to net front or a pass across the crease. THN's heat map of Ottawa's diamond shows exactly this."
    },
    {
      "where": "Under the top forward (cross-ice pass behind him)",
      "why": "If the top man pressures too high, the lane behind him opens.",
      "how_exploited": "Flank to flank one-timer under the top forward."
    },
    {
      "where": "Far half-wall / far flank (seam)",
      "why": "The diamond is narrow; the far side is pinched in on the bumper.",
      "how_exploited": "Quick cross-seam pass for a one-timer with the goalie moving."
    },
    {
      "where": "Goal line (GL_L/GL_R)",
      "why": "A capable goal-line player creates asymmetry the diamond has to rotate to cover.",
      "how_exploited": "Goal-line set plays (Jack Han's 'Exploiting a 1-2-1 with goal line plays'; outline only)."
    }
  ],
  "sources": [
    {
      "title": "Coach Bob Nielsen - Diamond Penalty Kill (video, transcript)",
      "url": "https://www.youtube.com/watch?v=26KBaCYSrBI",
      "supports": "Detailed rotations: top F pressures and returns inside, side steps out to block the one-timer, low D takes the strong-side low player, far side collapses to the weak-side low player; down-the-wall shadowing with a triangle in front; compressed setup; rip it off the glass"
    },
    {
      "title": "Coach Bob Nielsen - Diamond Penalty Kill drill sheets (PDF)",
      "url": "https://coachnielsen.wordpress.com/wp-content/uploads/2010/09/diamondpk.pdf",
      "supports": "Same rotations in drill-sheet form; 2-vs-1 low is the one real danger; tighter middle defenders"
    },
    {
      "title": "Copper & Blue - The Diamond Penalty Kill: Q&A with Coach Bob Nielsen",
      "url": "https://www.coppernblue.com/2010/11/16/1815602/the-diamond-penalty-kill-strategies-and-tactics-with-coach-bob-nielsen",
      "supports": "Diamond needs read/react, angling and shot blocking; weak side must step down; don't chase up the wall unless his back is turned; a diamond against a non-umbrella PP opens space, so morph from a box"
    },
    {
      "title": "Ice Hockey Systems - Panthers Diamond PK vs Bruins 1-3-1 PP (clip notes)",
      "url": "https://www.icehockeysystems.com/coaching-clip/panthers-diamond-penalty-kill-vs-bruins-1-3-1-power-play",
      "supports": "Vs 1-3-1: top stops the easy point shot, edges take the shooting lanes outside, and collapse to the middle when the puck goes low"
    },
    {
      "title": "HockeyShare - PK 4man: The Diamond",
      "url": "https://www.hockeyshare.com/drill/415458/",
      "supports": "High F on the QB, F + D on the circles, low D on the slot; collapse or attack the three high shooters"
    },
    {
      "title": "HockeyShare - Penalty Kill - Diamond (Aggressive)",
      "url": "https://www.hockeyshare.com/drills/print/95316",
      "supports": "Aggressive diamond: collapse if the puck is inside; F/D interchangeable; middle points parallel to the puck"
    },
    {
      "title": "Blue Seat Blogs - Penalty kill (diamond, box, wedge/triangle +1)",
      "url": "https://blueseatblogs.com/2011/10/24/penalty-kill/",
      "supports": "Diamond vs umbrella; positions; attack the three high shooters"
    },
    {
      "title": "Silver Seven - Tactical Formations: Penalty Kill",
      "url": "https://silversevensens.com/tactical-formations-penalty-kill",
      "supports": "Fluid: the nearest steps out and the others rotate to keep the shape; most effective vs umbrella"
    },
    {
      "title": "Learning to Play the Game - Special Teams (box, diamond, wedge+1, aggressive vs passive)",
      "url": "https://learn-ice-hockey.com/systems/special_teams/",
      "supports": "Apex/two middles/low; answer to the bumper; good vs 1-3-1 and umbrella; weak to the cross-seam and the low 2-vs-1; harder than the box"
    },
    {
      "title": "Pure Hockey - How to Play the Penalty Kill in Hockey",
      "url": "https://www.purehockey.com/c/how-to-play-the-penalty-kill-in-hockey",
      "supports": "Diamond is popular because many PPs use the umbrella; same personnel layout"
    },
    {
      "title": "Coaching and Team Tactics Manual (T. Morgan, June 2026) - PK box/high box/diamond",
      "url": "https://bvhs.ca/wp-content/uploads/2026/06/Coaching-and-Team-Tactics-Manual-Updated-June-2026.pdf",
      "supports": "Diamond vs umbrella/hybrid overload; low players clear the house"
    },
    {
      "title": "HockeySchoolOnline - Game Theory Concepts: Penalty Kill (2-2 vs 1-2-1 vs 1-1-2)",
      "url": "http://www.hockeyschoolonline.com/game_theory_penaltykill.htm",
      "supports": "1-2-1 protects the seam/high slot but is weak down low unless the D blocks passing lanes"
    },
    {
      "title": "Gloucester Rangers Minor Hockey (R. Bercuson) - Penalty-Killing in Minor Hockey",
      "url": "https://docslib.org/doc/1956090/penalty-killing-in-minor-hockey",
      "supports": "Diamond: F1 takes the high slot and the nearest point; the triangle can rotate; puck behind/in corner = D pressure with the other D on the net (alternative to Nielsen's 'side follows')"
    },
    {
      "title": "The Coaches Site - Explained: Diamond Penalty Kill Formation",
      "url": "https://members.thecoachessite.com/article/explained-diamond-penalty-kill-formation",
      "supports": "Stationary/predictable diamond limits low-slot passes, gives outside time; good with good rebound-control goalie. Its F/D placement wording is unclear"
    },
    {
      "title": "The Hockey News - Senators remain loyal to struggling (diamond) penalty kill formation (Oct 2025)",
      "url": "https://thehockeynews.com/ottawa-senators/latest-news/senators-remain-loyal-to-struggling-penalty-kill-formation",
      "supports": "Real-world failure mode: outside killers caught high produce 2-on-1s down low"
    },
    {
      "title": "Jack Han - How to pick a Diamond PK apart (Workshop 154; paywalled, outline only)",
      "url": "https://jhanhky.substack.com/p/how-to-pick-a-diamond-pk-apart",
      "supports": "Goal-line plays as the diamond counter (title/outline only; paywalled)"
    },
    {
      "title": "BenchIQ - Diamond PK",
      "url": "https://benchiq.hockey/drills/diamond-pk",
      "supports": "Diamond as the umbrella-killer; bottom man plays 2-on-1 net-front vs back door; beaten by bumper/low goal-line play"
    },
    {
      "title": "LG Sports - Module 5: Special Teams (PK box/diamond outline)",
      "url": "https://lgsports.ca/?p=8784",
      "supports": "Switch to the diamond when the PP goes umbrella or brings the puck to the middle"
    },
    {
      "title": "Hockey Canada Playing Rules - Rule 6.7 Icing (no icing when shorthanded)",
      "url": "http://rulebook.hockeycanada.ca/english/part-i-technical-rules/section-6/rule-6-7/",
      "supports": "Shorthanded icing allowed under Hockey Canada rules"
    }
  ]
}
```

## 4. Wedge + 1 / Triangle + 1 - `pk-wedge-plus-one`

**Shape:** Both D just off the crease edges with a forward at the top of the triangle in the mid-to-high slot. The other forward, the +1, pressures the puck up top. When the puck swings away, the wedge-top forward becomes the +1 and the old +1 drops into the triangle. When the puck is controlled low on the boards, the puck-side D can become the "one" while the wedge-top forward crashes to the near post (Kraken).
**Why teams like it:** The wedge eats the bumper and the slot while the +1 disrupts the QB. NHL sources (Islanders, Kraken, Red Wings/Bruins via Houda) use it widely, though no league-wide count exists. It also creates shorthanded chances.
**Main risks:** A missed exchange leaves both forwards on one side and the far point open. A second net-front attacker ties up both D. It concedes perimeter shots.
**Confidence:** High for structure and exchange (many agreeing sources). Medium for the exact +1 route (sources disagree) and the low-zone coordinates.

```json
{
  "id": "pk-wedge-plus-one",
  "side": "PK",
  "name": "Wedge + 1",
  "aliases": [
    "Triangle + 1",
    "Triangle-and-one",
    "Czech press",
    "Wedge"
  ],
  "summary": "Three killers (usually both D plus a forward on top) hold a tight triangle in front of the net, while the fourth, a forward, pressures the puck up top. As the puck swings, the two forwards exchange the +1 and wedge-top jobs.",
  "best_against": [
    "1-3-1: the wedge top sits on the bumper, so the PP's middle player is 'eaten'",
    "Umbrella / point-QB PPs: the +1 takes away the QB's time",
    "PPs that are uncomfortable under pressure (it creates turnovers and shorthanded chances)"
  ],
  "weak_against": [
    "Highly skilled PPs that make the hard pass back across after the push-down (both forwards end up on one side)",
    "A second player at the net front (Weiss: you must change systems or give up a lane)",
    "Shot-volume PPs: it concedes the perimeter and point shots through traffic",
    "Any team where the +1 chases without the exchange, leaving the kill playing with three"
  ],
  "u15_note": "The most demanding of the three because of the forward exchange. Several sources call it a poor choice for young or ad-hoc units. It is teachable at U15 with forwards who read well. Simplify by keeping the D always in the wedge (as the Islanders do), giving the +1 one route (straight out from the net toward the puck), and using one exchange rule: 'puck goes past you to the other side, the other forward goes and you drop to the slot.' Teach it after the box.",
  "roles": [
    {
      "id": "press",
      "label": "+1 (pressure forward)",
      "player": "F",
      "base": [
        44,
        0
      ],
      "core_job": "Pressure whoever has the puck up top, from the inside, and make him uncomfortable. Hand off the pressure when the puck swings away.",
      "why": "One chaser takes away the QB's time while three killers lock the slot. You keep the PP on one side of the ice.",
      "reactions": {
        "PT": {
          "spot": [
            38,
            0
          ],
          "job": "Pressure straight out from the net, inside-out. Stick on the pass to the bumper.",
          "why": "Straight-line pressure from the goal outward keeps you in the shooting lane while you close."
        },
        "PT_L": {
          "spot": [
            36,
            12
          ],
          "job": "Pressure inside-out. Stick takes away the D-to-D pass so the PP stays on this side.",
          "why": "If the puck can't come back across, the kill only defends half the ice."
        },
        "PT_R": {
          "spot": [
            36,
            -12
          ],
          "job": "Pressure inside-out. Stick takes away the D-to-D pass so the PP stays on this side.",
          "why": "If the puck can't come back across, the kill only defends half the ice."
        },
        "WALL_L": {
          "spot": [
            50,
            24
          ],
          "job": "Follow the pass from above ('push down'). Stick on the pass back to the point. Steer him lower.",
          "why": "One published reading of the +1 route. Some teams instead let the closest wedge player challenge and swap; ask the coach which one you run."
        },
        "WALL_R": {
          "spot": [
            50,
            -24
          ],
          "job": "Follow the pass from above ('push down'). Stick on the pass back to the point. Steer him lower.",
          "why": "One published reading of the +1 route. Some teams instead let the closest wedge player challenge and swap; ask the coach which one you run."
        },
        "DOT_L": {
          "spot": [
            62,
            18
          ],
          "job": "Chase from above; stick on the pass back up and into the slot.",
          "why": "Your D is closing out the shot; you take his escape passes."
        },
        "DOT_R": {
          "spot": [
            62,
            -18
          ],
          "job": "Chase from above; stick on the pass back up and into the slot.",
          "why": "Your D is closing out the shot; you take his escape passes."
        },
        "CORNER_L": {
          "spot": [
            66,
            8
          ],
          "job": "Drop into the top of the triangle (high slot).",
          "why": "The D has become the 'one' on the corner puck; the wedge must re-form with you on top."
        },
        "CORNER_R": {
          "spot": [
            66,
            -8
          ],
          "job": "Drop into the top of the triangle (high slot).",
          "why": "The D has become the 'one' on the corner puck; the wedge must re-form with you on top."
        },
        "GL_L": {
          "spot": [
            66,
            6
          ],
          "job": "Top of the triangle, high slot.",
          "why": "Same as corner."
        },
        "GL_R": {
          "spot": [
            66,
            -6
          ],
          "job": "Top of the triangle, high slot.",
          "why": "Same as corner."
        },
        "BEHIND": {
          "spot": [
            64,
            0
          ],
          "job": "High slot.",
          "why": "Stay central; pucks from behind come out front."
        },
        "BUMPER": {
          "spot": [
            55,
            0
          ],
          "job": "Collapse on the bumper from above.",
          "why": "Help the wedge top squeeze him."
        },
        "NET": {
          "spot": [
            64,
            0
          ],
          "job": "High slot. Read for a loose puck to clear, or a chance to break out if the kill wins it cleanly.",
          "why": "The +1 is often the one who gets the shorthanded break, but only after a clean win."
        }
      }
    },
    {
      "id": "top",
      "label": "Wedge top (second forward)",
      "player": "F",
      "base": [
        65,
        0
      ],
      "core_job": "Top of the triangle: own the bumper and the passes through the middle. Become the new +1 when the puck swings to the side away from the current +1.",
      "why": "With you in the slot, a 1-3-1's bumper is 'eaten' by the wedge.",
      "reactions": {
        "PT": {
          "spot": [
            63,
            0
          ],
          "job": "Top of the wedge. Stick on the bumper and the seams.",
          "why": "The middle belongs to you."
        },
        "PT_L": {
          "spot": [
            62,
            0
          ],
          "job": "Stay in the slot. If the puck goes D-to-D, you jump the far point and the +1 drops in for you.",
          "why": "The exchange: the nearest forward to the new puck becomes the +1."
        },
        "PT_R": {
          "spot": [
            62,
            0
          ],
          "job": "Stay in the slot. If the puck goes D-to-D, you jump the far point and the +1 drops in for you.",
          "why": "The exchange: the nearest forward to the new puck becomes the +1."
        },
        "WALL_L": {
          "spot": [
            62,
            1
          ],
          "job": "Hold the middle. Bumper and seam.",
          "why": "The near side is being pressured; the cross-seam is the danger."
        },
        "WALL_R": {
          "spot": [
            62,
            -1
          ],
          "job": "Hold the middle. Bumper and seam.",
          "why": "The near side is being pressured; the cross-seam is the danger."
        },
        "DOT_L": {
          "spot": [
            66,
            0
          ],
          "job": "Middle of the slot, stick on the cross-slot pass.",
          "why": "Same as wall."
        },
        "DOT_R": {
          "spot": [
            66,
            0
          ],
          "job": "Middle of the slot, stick on the cross-slot pass.",
          "why": "Same as wall."
        },
        "CORNER_L": {
          "spot": [
            82,
            5
          ],
          "job": "Crash to the near post to rebuild the triangle while the D pressures the corner.",
          "why": "When a D steps out to be the 'one', a forward crashes to protect the near side of the net."
        },
        "CORNER_R": {
          "spot": [
            82,
            -5
          ],
          "job": "Crash to the near post to rebuild the triangle while the D pressures the corner.",
          "why": "When a D steps out to be the 'one', a forward crashes to protect the near side of the net."
        },
        "GL_L": {
          "spot": [
            81,
            3
          ],
          "job": "Near-post side of the net front. Stick on the pass out front.",
          "why": "Same as corner."
        },
        "GL_R": {
          "spot": [
            81,
            -3
          ],
          "job": "Near-post side of the net front. Stick on the pass out front.",
          "why": "Same as corner."
        },
        "BEHIND": {
          "spot": [
            76,
            0
          ],
          "job": "Low slot, in front of the crease.",
          "why": "Inference: the wedge collapses tight with the puck behind."
        },
        "BUMPER": {
          "spot": [
            63,
            0
          ],
          "job": "Body and stick on the bumper.",
          "why": "This is your man."
        },
        "NET": {
          "spot": [
            74,
            0
          ],
          "job": "Low slot. Rebounds.",
          "why": "D are boxing out; you pick up loose pucks."
        }
      }
    },
    {
      "id": "dl",
      "label": "Wedge D - PP's left side",
      "player": "D",
      "base": [
        83,
        6
      ],
      "core_job": "Low corner of the triangle just off the crease: net-front player, close-outs on shooters coming down your side, clear rebounds.",
      "why": "The two D stay home so the area in front of the goalie is never short of bodies.",
      "reactions": {
        "PT": {
          "spot": [
            83,
            6
          ],
          "job": "Just off the crease, net-front player.",
          "why": "Win body position before the shot."
        },
        "PT_L": {
          "spot": [
            82,
            7
          ],
          "job": "Puck-side post area. Ready to close out if the puck comes down your side.",
          "why": "You're the next close-out."
        },
        "PT_R": {
          "spot": [
            82,
            5
          ],
          "job": "Net front and back door.",
          "why": "Puck is away from you: you guard the far post."
        },
        "WALL_L": {
          "spot": [
            79,
            11
          ],
          "job": "Come off the post toward the dot line: block the shot if he walks down, stick on the pass to the goal line.",
          "why": "Effective close-outs by the D are one of the three keys of this kill."
        },
        "WALL_R": {
          "spot": [
            83,
            3
          ],
          "job": "Net front and back door. Head on a swivel.",
          "why": "The weak-side D (and the sagging forward) must not let anyone creep in behind on the back door."
        },
        "DOT_L": {
          "spot": [
            75,
            15
          ],
          "job": "Close out straight from the post: block the shot, stick in the middle.",
          "why": "The strong-side D challenges by coming straight out from the strong-side post."
        },
        "DOT_R": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. Stick on the cross-crease pass.",
          "why": "Your partner closed out; you're the last line."
        },
        "CORNER_L": {
          "spot": [
            84,
            24
          ],
          "job": "Become the 'one' on a puck controlled low on the boards. Contain from the inside.",
          "why": "Hakstol's Kraken: the D steps out when the puck is controlled low, and a forward fills the net."
        },
        "CORNER_R": {
          "spot": [
            83,
            5
          ],
          "job": "Weak-side post / back door.",
          "why": "Rebuilt triangle: forward at near post, you at far post."
        },
        "GL_L": {
          "spot": [
            84,
            10
          ],
          "job": "On the goal-line player from the net side. Stick in the crease lane.",
          "why": "Deny the cross-crease pass."
        },
        "GL_R": {
          "spot": [
            83,
            6
          ],
          "job": "Back door. Stick in the crease lane.",
          "why": "The pass across the crease is the danger."
        },
        "BEHIND": {
          "spot": [
            86,
            5
          ],
          "job": "Hold your post. Take him if he comes out your side; call it.",
          "why": "Inference: don't chase behind the net."
        },
        "BUMPER": {
          "spot": [
            80,
            6
          ],
          "job": "Step up a stride to block, keep the net-front player.",
          "why": "Middle shot is coming."
        },
        "NET": {
          "spot": [
            83,
            3
          ],
          "job": "Box out, tie up the stick, find the rebound and clear it.",
          "why": "D find the puck in the corner/near the net and shoot it down the ice."
        }
      }
    },
    {
      "id": "dr",
      "label": "Wedge D - PP's right side",
      "player": "D",
      "base": [
        83,
        -6
      ],
      "core_job": "Low corner of the triangle just off the crease: net-front player, close-outs on shooters coming down your side, clear rebounds.",
      "why": "Mirror of the other D; when the puck is away, you own the back door.",
      "reactions": {
        "PT": {
          "spot": [
            83,
            -6
          ],
          "job": "Just off the crease, net-front player.",
          "why": "Win body position before the shot."
        },
        "PT_L": {
          "spot": [
            82,
            -5
          ],
          "job": "Net front and back door.",
          "why": "Puck is away from you: you guard the far post."
        },
        "PT_R": {
          "spot": [
            82,
            -7
          ],
          "job": "Puck-side post area. Ready to close out if the puck comes down your side.",
          "why": "You're the next close-out."
        },
        "WALL_L": {
          "spot": [
            83,
            -3
          ],
          "job": "Net front and back door. Head on a swivel.",
          "why": "The weak-side D (and the sagging forward) must not let anyone creep in behind on the back door."
        },
        "WALL_R": {
          "spot": [
            79,
            -11
          ],
          "job": "Come off the post toward the dot line: block the shot if he walks down, stick on the pass to the goal line.",
          "why": "Effective close-outs by the D are one of the three keys of this kill."
        },
        "DOT_L": {
          "spot": [
            83,
            0
          ],
          "job": "Net front. Stick on the cross-crease pass.",
          "why": "Your partner closed out; you're the last line."
        },
        "DOT_R": {
          "spot": [
            75,
            -15
          ],
          "job": "Close out straight from the post: block the shot, stick in the middle.",
          "why": "The strong-side D challenges by coming straight out from the strong-side post."
        },
        "CORNER_L": {
          "spot": [
            83,
            -5
          ],
          "job": "Weak-side post / back door.",
          "why": "Rebuilt triangle: forward at near post, you at far post."
        },
        "CORNER_R": {
          "spot": [
            84,
            -24
          ],
          "job": "Become the 'one' on a puck controlled low on the boards. Contain from the inside.",
          "why": "Hakstol's Kraken: the D steps out when the puck is controlled low, and a forward fills the net."
        },
        "GL_L": {
          "spot": [
            83,
            -6
          ],
          "job": "Back door. Stick in the crease lane.",
          "why": "The pass across the crease is the danger."
        },
        "GL_R": {
          "spot": [
            84,
            -10
          ],
          "job": "On the goal-line player from the net side. Stick in the crease lane.",
          "why": "Deny the cross-crease pass."
        },
        "BEHIND": {
          "spot": [
            86,
            -5
          ],
          "job": "Hold your post. Take him if he comes out your side; call it.",
          "why": "Inference: don't chase behind the net."
        },
        "BUMPER": {
          "spot": [
            80,
            -6
          ],
          "job": "Step up a stride to block, keep the net-front player.",
          "why": "Middle shot is coming."
        },
        "NET": {
          "spot": [
            83,
            -3
          ],
          "job": "Box out, tie up the stick, find the rebound and clear it.",
          "why": "Clear the house."
        }
      }
    }
  ],
  "triggers": [
    {
      "cue": "Puck swings D-to-D or across the top, away from the current +1",
      "who": "top (wedge forward) becomes the new +1; old +1 drops into the wedge top",
      "action": "Exchange. The new +1 attacks inside-out; the old +1 takes the slot.",
      "why": "The +1 never chases across the whole zone; the closer forward takes over (Blashill example: chasing across leaves the point one-timer open)."
    },
    {
      "cue": "Point player with puck in shooting position, head up",
      "who": "press",
      "action": "Straight-line pressure from the net outward; get in the shooting lane, look for a block.",
      "why": "Conservative straight-line pressure stays in the lane (Hakstol)."
    },
    {
      "cue": "Bobbled puck, back turned, puck not in a shooting position, or a slow pass",
      "who": "press (or the nearest wedge player)",
      "action": "Attack the puck to win it.",
      "why": "Aggression when the puck is loose or the player can't shoot (Hakstol)."
    },
    {
      "cue": "Puck controlled low on the boards (corner/goal line)",
      "who": "puck-side D becomes the 'one'; wedge top crashes to the near post; +1 drops to the top of the triangle",
      "action": "Re-form the triangle with a forward at the net.",
      "why": "Never leave the net side open when a D steps out."
    },
    {
      "cue": "Loose puck at or below the circles, PP without control",
      "who": "up to two killers into the corner; the other two hold low and high slot",
      "action": "Corner pressure, then clear. If broken, sprint back to the base triangle.",
      "why": "Creates a 3-on-2 or 3-on-3 at the puck (Islanders, Kraken). Kraken stopped sending three into the corner because it left the middle open."
    }
  ],
  "weaknesses": [
    {
      "where": "Far point / far flank after the push-down",
      "why": "If both forwards end up on one side (bad exchange), nobody can reach the far point.",
      "how_exploited": "Cross-ice pass to the far point or flank for a one-timer with only the wedge in front (Blashill/Weber example)."
    },
    {
      "where": "Back door (far GL / far post)",
      "why": "The weak-side D and the sagging forward own it; a missed exchange or a D drawn to the net-front player leaves it open.",
      "how_exploited": "Low-to-high-to-back-door or a pass across the crease from the goal line."
    },
    {
      "where": "Perimeter / point shots",
      "why": "It concedes the outside by design.",
      "how_exploited": "Point shots through screens with tips and rebounds."
    },
    {
      "where": "NET with two attackers",
      "why": "Two attackers at the net front tie up both wedge D.",
      "how_exploited": "Second man to the net (Weiss: switch systems or concede a lane)."
    }
  ],
  "sources": [
    {
      "title": "Sound of Hockey - Hakstol's scheme: the penalty kill (triangle-and-one, corner pressure)",
      "url": "https://soundofhockey.com/2022/04/22/kraken-coach-dave-hakstols-scheme-and-philosophies-the-penalty-kill-part-8/",
      "supports": "Triangle-and-one base: D just above the crease edges, F mid-to-high slot, the 'one' attacks in a straight line from the goal; exchange on cross-ice; D can step out to become the 'one' on low board possession with a forward crashing the net; corner pressure with up to two; straight-line conservative pressure vs aggression on loose pucks"
    },
    {
      "title": "The Coaches Site - Explained: Wedge Penalty Kill Formation",
      "url": "https://members.thecoachessite.com/article/explained-wedge-penalty-kill-formation",
      "supports": "Top forward sweeps above the circles to keep the PP on one side and stop the pass back across; second F at the top of the triangle; D cover net-front/side-of-net and clear; skilled PP can exploit with the difficult pass; demanding"
    },
    {
      "title": "McKeen's Hockey - Inside the Islanders' Flawless Penalty Kill (Wedge Plus One)",
      "url": "https://www.mckeenshockey.com/nhl-blog/islanders-flawless-penalty-kill/",
      "supports": "Wedge eats the slot/bumper; +1 disrupts the QB; forwards exchange; 'sagging forward' covers back door; D rarely the +1; big box off draws before setting the wedge; swarm loose pucks for local 3-on-2"
    },
    {
      "title": "Winging It In Motown - Breaking down Doug Houda's PK (Czech press / wedge +1)",
      "url": "https://www.wingingitinmotown.com/breaking-down-doug-houdas-penalty-kill-structure/",
      "supports": "Czech press = wedge +1: 2 D + C wedge, winger +1; keys are pressure without giving up cross-ice lanes, forward rotations, D close-outs"
    },
    {
      "title": "Winging It In Motown - Jeff Blashill's system: penalty killing (wedge +1 rotation errors)",
      "url": "https://www.wingingitinmotown.com/getting-to-know-jeff-blashills-system-penalty-killing/",
      "supports": "Wedge +1 vs 1-3-1; exchange as the puck swings; example failure: both forwards trapped on one side gives up a point one-timer"
    },
    {
      "title": "Weiss Tech Hockey - Penalty Kill: Wedge +1",
      "url": "https://weisstechhockey.com/penalty-kill-wedge-1/",
      "supports": "Closest box corner challenges while three stay in front; force vs contain; weak-side F and D guard the back door; strong-side D comes straight out from the post"
    },
    {
      "title": "Weiss Tech Hockey - Penalty Kill: Expanded Wedge +1 (excerpt on category page)",
      "url": "https://weisstechhockey.com/category/team-hockey-systems/page/8/",
      "supports": "Expanded wedge +1 is more aggressive; weak if the PP brings a second man to the net front"
    },
    {
      "title": "Blue Seat Blogs - Penalty kill (diamond, box, wedge/triangle +1)",
      "url": "https://blueseatblogs.com/2011/10/24/penalty-kill/",
      "supports": "Wedge = triangle +1 alias; roaming forward rotates into the triangle; weak side must cover the back door; heavy thinking load"
    },
    {
      "title": "Silver Seven - Tactical Formations: Penalty Kill",
      "url": "https://silversevensens.com/tactical-formations-penalty-kill",
      "supports": "Wedge +1 is the most aggressive 5-on-4 option; triangle in front plus a chaser"
    },
    {
      "title": "Learning to Play the Game - Special Teams (box, diamond, wedge+1, aggressive vs passive)",
      "url": "https://learn-ice-hockey.com/systems/special_teams/",
      "supports": "Wedge+1 = triangle-and-one; the +1's route differs between sources (straight out vs sweeping vs roaming); exchange; poor choice for young/ad-hoc units; concedes the perimeter"
    },
    {
      "title": "IHM Academy Lesson #380 - The Wedge +1 Penalty Kill Explained",
      "url": "https://icehockeyman.com/2026/09/25/ihm-academy-lesson-380-the-wedge-plus1-penalty-kill-explained/",
      "supports": "Pressure only on cues (poor touch, backhand, bouncing puck, isolated carrier) with support layers connected; weak-side protector doesn't drift"
    },
    {
      "title": "Coach Enio - Three keys to the Edmonton Oilers' 2024 playoff penalty kill (push-down, three-point pressure)",
      "url": "https://www.coachenio.com/drills/6717/",
      "supports": "Push-down/trap-down and three-point pressure"
    },
    {
      "title": "HoopsKing - Hockey Penalty Kill Systems: Box vs Diamond vs Wedge (general-audience blog)",
      "url": "https://hoopsking.com/blogs/ice-hockey/hockey-penalty-kill-systems",
      "supports": "Neutralises the bumper in a 1-3-1 (general-audience blog)"
    },
    {
      "title": "Hockey Canada Playing Rules - Rule 6.7 Icing (no icing when shorthanded)",
      "url": "http://rulebook.hockeycanada.ca/english/part-i-technical-rules/section-6/rule-6-7/",
      "supports": "Shorthanded icing allowed under Hockey Canada rules"
    }
  ]
}
```
