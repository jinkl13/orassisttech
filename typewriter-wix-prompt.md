# Typewriter Effect — Wix Implementation Prompt

## What this effect does
A hero section text animation where:
- Words/phrases type out character by character (typewriter style)
- Once fully typed, the word **stays on screen** for a pause
- Then it clears and the next word starts typing
- A blinking cursor sits at the end of the text while it types
- **No deletion animation** — text disappears instantly before next word

---

## Two ways to add it in Wix

### Option A — HTML Embed (Recommended, simpler)
Use this when you want zero Wix infrastructure — just drop it in and style it.

**Steps:**
1. In the Wix Editor, go to **Add → Embed → HTML iFrame**
2. Paste the contents of `wix-typewriter-embed.html` into the embed box
3. Resize the embed element to fit your hero layout
4. Edit these values inside the `<script>` tag to match your content:

```js
const WORDS = [
  "Your first phrase",
  "Your second phrase",
];
const TYPING_SPEED   = 80;    // lower = faster typing
const PAUSE_DURATION = 2000;  // how long word stays on screen (ms)
```

5. Edit the CSS at the top of the file to match your site's font and colour:
```css
font-size: 48px;
font-weight: 700;
color: #ffffff;       /* text colour */
background: #000000;  /* match your hero background so iframe is invisible */
```

> ⚠️ Make sure the `background` in the CSS matches your hero section's background colour exactly — this makes the iframe invisible and seamlessly integrated.

---

### Option B — Wix Velo / Dev Mode
Use this if you're already using Velo and want the text element to be a native Wix Text component (better for SEO, easier to style from Wix editor).

**Steps:**
1. Add a **Text element** to your hero section in the Wix Editor
2. In the Properties panel, set its **ID** to `typewriterText`
3. Enable **Dev Mode** (top bar → Dev Mode toggle)
4. Open the **Page tab** in the Velo IDE (bottom panel)
5. Paste the contents of `wix-velo-typewriter.js` into the page code
6. Edit `WORDS`, `TYPING_SPEED`, and `PAUSE_DURATION` at the top of the file
7. Click **Preview** to test, then **Publish**

---

## Customisation reference

| Variable | What it controls | Default |
|---|---|---|
| `WORDS` | Array of phrases to cycle through | 4 example phrases |
| `TYPING_SPEED` | Milliseconds between each character | `80` |
| `PAUSE_DURATION` | How long the completed word stays visible | `2000` (2 sec) |
| `CURSOR_CHAR` | Character used as cursor (Velo version) | `\|` |
| `color` in CSS | Text colour (HTML embed version) | `#ffffff` |
| `background` in CSS | Should match your hero bg (HTML embed) | `transparent` |

---

## Notes
- The HTML embed version uses a CSS blinking animation for the cursor — smoother than JS interval
- The Velo version appends a `|` character as the cursor inline — simpler but limited to text styling
- Both versions loop indefinitely through all words
- To **stop after the last word**, change the `wordIndex` line to:
  ```js
  if (wordIndex < WORDS.length - 1) wordIndex++;
  else return; // stop after last word
  ```
