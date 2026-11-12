# CHANGES_REPLAY.md

New and changed user-visible strings on the `replay-pics` branch, for Dr D's sign-off.

No sodium values, categories, teaching text (`t` / `teach`), food or meal names, compare labels, or other medical wording from the live app were changed. Existing game strings (button labels, feedback headlines, pep lines, “Guru Achieved” copy, the educational footer, Settings sound/haptic lines) are unchanged. New strings are listed below.

DRAFT: this branch is not merged or deployed. It is for review only.

## Home screen

- “Learn everyday sodium at your own pace.”
- “Streak”
- “No streak yet”
- “{n}-day streak”
- “{n}-day streak · Best: {n}”
- “Rank”
- “Highest rank”
- “Not started”
- “Level” (stat-card label)
- “Ready to play”
- “On Level {n}”
- “Guru achieved”
- “Best scores”
- “Level {n} · {rank}” (best-score rows; rank names Rookie / Whisperer / Specialist / Master / Guru are unchanged)
- “—” (empty score or empty streak placeholder)
- “Let's play! 🧂” (main start button for new players; was “Play”. “Continue · Level {n}” and “Play Again” for returning players are unchanged.)
- “Five levels · 10 cards each”
- “Continue · Level {n}”
- “Pick up at Level {n}”
- “Play Again” (already used at the end of Level 5; now also the home-screen button after Guru)
- “A new mix — unseen cards first”
- “Daily Challenge”
- “Today’s 10 cards”
- “Today’s 10 cards · {weekday, month day}”
- “Completed · {score}/10 · {weekday, month day}”
- “Practice the ones you missed”
- “No misses to practice”
- “1 card to review”
- “{n} cards to review”
- “Your progress is saved on this device only.”
- “Educational only • Brands/recipes vary” (unchanged; also on the home footer)

## During play (HUD and navigation)

- “Home” (button, returns to the home screen)
- “Daily Challenge” (HUD title, when playing the daily set)
- “Practice” (HUD title, when practicing missed cards)
- “ · {n}-day streak” (appended to the HUD when a streak is active)
- “Today’s 10 cards · {weekday, month day}” (subtitle during Daily Challenge)
- “Practice the ones you missed” (subtitle during practice)

The campaign subtitle “Difficulty ramps each level • Compare Mode starts at Level 3” is unchanged.

## Leave-run confirm

- “Leave this run?”
- “Your level is saved, but this run’s cards will be lost.”
- “Leave”
- “Stay”

## End of Daily Challenge

- “Daily Challenge complete”
- “Today’s score: {n}/{total}”
- “Best daily: {n}/{total}. Come back tomorrow for a new set.”
- “Back to home”

## End of Practice

- “Practice complete”
- “{n} still on your practice list.”
- “Practice again”
- “You cleared your practice list!”
- “Back to home”
- “Score: {n}/{total}” (same “Score:” pattern as the existing level-up screen)

## End of campaign (additions only)

The Level 5 “Guru Achieved” copy and the Level Up / Try Again copy are unchanged. Added:

- “Home” (second button next to “Play Again” on the Guru screen)

## Settings (addition only)

Existing Settings title, sound/haptic lines, and “Close” are unchanged. Added:

- “Your progress is saved on this device only.”

## Image alt text

Each photo uses the existing food, meal, or compare-side name as its alt text (for example “Eggs”, “Canned beans (regular)”). No new medical wording.

## Behavior notes (not new medical copy)

- Progress, best scores, streak, missed-card list, and sound/haptic prefs are saved on this device only (localStorage). Nothing is sent over the network.
- Daily Challenge is a 10-card set seeded by the device’s local date. The same date always shows the same cards, in the same order, and it works offline.
- “Practice the ones you missed” is built from cards the player got wrong. A card drops off that list once the player gets it right (in practice, campaign, or daily).
- “Play Again” is no longer a reshuffle of the same set: unseen cards are used first, and decks rotate on each new campaign.
