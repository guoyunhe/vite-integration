# Vite Integration Web Extension

Chrome/Edge/Firefox extension to integrate old-school backend with Vite dev server.

The extension is ONLY needed when:

- your back-end generate HTML and inject important stuff (header, footer, sidebar, data);
- and your back-end doesn't have Vite integration ability.

## Install extension

Go to Chrome web store or Firefox addon...

## Configure your Vite project

Install vite plugin:

```
npm install vite-plugin-integration
```

```ts
// vite.config.ts
import { UserConfig } from 'vite'
import integration from 'vite-plugin-integration';

const config: UserConfig = {
  plugins: [integration({
    replaceAssets: [
      '/assets/*.css',
      '/assets/*.js'
    ]
  })],
  server: {
    port: 3333, // must between 3000 and 4000
  }
};

export default config;
```

The extension will automatically detect local vite server and replace production assets with vite dev server assets.
