module.exports = {
  
  manifest: {
    name: 'SmartNinja Chrome Extension Template',
    description: 'Your description',
    version: '1.0',
    manifest_version: 3,
    background: {
      service_worker: 'background.js'
    },
    permissions: ['storage', 'activeTab', 'declarativeContent'],
    action: {
      default_popup: 'index.html'
    },
  },
  
  entry: {
    main: './src/main.js',
    background: './src/background.js'
  }
  
}