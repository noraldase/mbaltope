// ===============================
// Disable Inspect / DevTools
// Frontend Only (Vercel Compatible)
// ===============================

// Disable Right Click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable Key Shortcuts
document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }

  // Ctrl+Shift+I / J / C
  if (
    e.ctrlKey &&
    e.shiftKey &&
    ['I', 'J', 'C'].includes(e.key.toUpperCase())
  ) {
    e.preventDefault();
    return false;
  }

  // Ctrl+U
  if (e.ctrlKey && e.key.toUpperCase() === 'U') {
    e.preventDefault();
    return false;
  }
});

// Detect DevTools (size trick)
(function detectDevTools() {
  const threshold = 160;
  setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
      document.body.innerHTML = `
        <h1 style="text-align:center;margin-top:20%;">
          Developer Tools Detected
        </h1>
      `;
    }
  }, 1000);
})();

// Block console access
(function () {
  const devtools = /./;
  devtools.toString = function () {
    document.body.innerHTML = `
      <h1 style="text-align:center;margin-top:20%;">
        Console Access Blocked
      </h1>
    `;
  };
  console.log('%c', devtools);
})();
