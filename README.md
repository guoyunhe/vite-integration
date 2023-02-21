# Vite Integration Web Extension

Chrome/Edge/Firefox extension to integrate old-school backend with Vite dev server

## Install

Go to Chrome web store or Firefox addon...

## Configuration

The extension is ONLY needed when your back-end generate HTML.

You need to add the following configuration to your HTML:

```html
<!-- vite integration start -->
<script>
if (window.ViteIntegration) {
  new ViteIntegration({
    port: 3333
  })
}
</script>
<!-- vite integration end -->
```

Then, add `vite-integration-disabled` to 

```html
<link href="path/to/your/production/assets.css" vite-integration-disabled>
<script src="path/to/your/production/assets.js" vite-integration-disabled></script>
```

The extension will automatically detect local vite server and replace production assets with vite dev server assets.
