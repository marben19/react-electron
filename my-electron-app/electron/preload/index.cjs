// electron/preload/index.cjs
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  ping: () => 'pong'
})
