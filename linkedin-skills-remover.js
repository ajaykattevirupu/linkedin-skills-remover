(async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));

  function waitForText(text, timeout = 5000) {
    return new Promise(resolve => {
      const start = Date.now();

      const timer = setInterval(() => {
        const btn = [...document.querySelectorAll('button')]
          .find(b => b.textContent.trim() === text);

        if (btn) {
          clearInterval(timer);
          resolve(btn);
        }

        if (Date.now() - start > timeout) {
          clearInterval(timer);
          resolve(null);
        }
      }, 300);
    });
  }

  let count = 0;

  while (true) {
    const editLink = document.querySelector('a[aria-label$=" skill"]');

    if (!editLink) {
      console.log(`Done! Deleted ${count} skill(s).`);
      break;
    }

    console.log(`Opening: ${editLink.getAttribute('aria-label')}`);
    editLink.click();

    await delay(1000);

    const deleteBtn = await waitForText('Delete skill');

    if (!deleteBtn) {
      console.log('Delete skill button not found.');
      break;
    }

    deleteBtn.click();

    const confirmBtn = await waitForText('Delete');

    if (!confirmBtn) {
      console.log('Delete confirmation button not found.');
      break;
    }

    confirmBtn.click();

    count++;
    console.log(`Deleted skill #${count}`);

    await delay(2500);
  }
})();
