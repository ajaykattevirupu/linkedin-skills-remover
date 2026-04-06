// had to delete 90+ skills manually one by one... never again.
// run this on https://www.linkedin.com/in/{your-username}/details/skills/

(async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));

  function waitFor(buttonText, timeout = 5000) {
    return new Promise(resolve => {
      const interval = setInterval(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === buttonText);
        if (btn) { clearInterval(interval); resolve(btn); }
      }, 300);
      setTimeout(() => { clearInterval(interval); resolve(null); }, timeout);
    });
  }

  let count = 0;

  while (true) {
    const editLink = document.querySelector('a[aria-label="Edit skill"]');
    if (!editLink) {
      console.log(`Done! Deleted ${count} skill(s).`);
      break;
    }

    editLink.click();

    const deleteBtn = await waitFor('Delete skill');
    if (!deleteBtn) {
      console.log(`Stopped at skill #${count} — "Delete skill" button not found.`);
      break;
    }
    deleteBtn.click();

    const confirmBtn = await waitFor('Delete');
    if (!confirmBtn) {
      console.log(`Stopped at skill #${count} — confirm button not found.`);
      break;
    }
    confirmBtn.click();

    await delay(2500);
    count++;
    console.log(`Deleted skill #${count}`);
  }
})();
