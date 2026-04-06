# linkedin-skills-remover

I had over 90 skills on my LinkedIn profile and there was no "delete all" button. Removing them one by one through the UI would've taken forever, so I wrote this script to do it automatically.

## What it does

Opens the edit modal for each skill and deletes it. Runs in a loop until all visible skills are gone.

## How to use

1. Go to your LinkedIn skills page:
   ```
   https://www.linkedin.com/in/{your-username}/details/skills/
   ```

2. Open the browser console — press `F12` and click the **Console** tab

3. Chrome/Edge will block pasting by default. You need to manually **type** (not paste) the following and press Enter:
   ```
   allow pasting
   ```

4. Now paste the script from `linkedin-skills-remover.js` and hit Enter

5. Watch it go. It'll log each deletion in the console.

## Notes

- LinkedIn re-renders the page after a batch of deletions, which causes the script to stop. Just paste and run it again until the count hits 0.
- You can check how many skills are left at any point by running this in the console:
  ```js
  document.querySelectorAll('a[aria-label="Edit skill"]').length
  ```
- Tested in Chrome. Should work in any Chromium-based browser.
- LinkedIn changes their UI often. If the script breaks, the selectors (`a[aria-label="Edit skill"]`, `Delete skill`, `Delete`) are the things to check first.

## Browser support

Works in Chrome, Edge, Firefox, and Brave.
