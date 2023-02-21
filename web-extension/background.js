const aScript = {
  id: "insert-vite-scripts",
  js: ["insert-vite-scripts.js"],
  matches: ["https://github.com/*"],
};

try {
  browser.scripting.registerContentScripts([aScript]);
} catch (err) {
  console.error(`failed to register content scripts: ${err}`);
}
