# SmartNinja Chrome Extension Template

> Adapted from https://github.com/BrunoCasotto/vue-chrome-extension-boilerplate 

## Quickstart

Install and run:

```bash
npm install
npm run dev
npm run build
```

Build:

```bash
npm run build
```
  
## Configure the manifest

To configure extension manifest edit the file extension.config.js. <a target=”_blank” href="https://developer.chrome.com/docs/extensions/mv3/manifest/">See more here.</a>


### Example:
  
```javascript
manifest: {
  name: 'Extension Name',
  description: 'Extension description here',
  version: '1.0',
  manifest_version: 3,
  
  background: {
    service_worker: 'background.js'
  },
  
  content_scripts: [],
  
  permissions: [],
  
  action: {
    default_popup: 'index.html'
  },
}
```
  
To configure your source files edit the entry parameter in extension.config.js

Example:
  
```javascript
entry: {
  main: './src/main.js',
  background: './src/background.js',
  content: './src/content.js'
}
```
  
## Test demo

1) Clone the repository and run:
  
```bash
npm run dev
```
  
2) Access extension chrome page:
  
```
chrome://inspect/#devices
```
  
3) Load the extension with "load unpacked" button
  
4) Select dist folder
  