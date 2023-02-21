/**
 * @see https://vitejs.dev/guide/backend-integration.html
 */
const viteServer = "localhost:3333";
const refreshScript = document.createElement("script");
refreshScript.type = "module";
refreshScript.innerHTML = `// Vite React Refresh
import RefreshRuntime from "https://${viteServer}/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window);
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;
window.__vite_plugin_react_preamble_installed__ = true;
`;
document.body.append(refreshScript);

const clientScript = document.createElement("script");
clientScript.type = "module";
clientScript.src = `https://${viteServer}/@vite/client`;
document.body.append(clientScript);

const entryScript = document.createElement("script");
entryScript.type = "module";
entryScript.src = `https://${viteServer}/src/index.tsx`;
document.body.append(entryScript);
