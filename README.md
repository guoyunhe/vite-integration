# Vite Integration (Vite Plugin + Browser Extension)

Integrate old-school backend with Vite dev server.

## Who need it

It is ONLY needed when:

- your back-end generate HTML and inject important stuff (header, footer, sidebar, data);
- and your back-end doesn't have Vite integration ability.

## How it works

1. **Vite Plugin** tell **Browser Extension** what page and asset URL should be replaced
2. **Browser Extension** match page URL and replace specific assets with Vite dev server assets

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

