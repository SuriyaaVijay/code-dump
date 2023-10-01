const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');
const os = require('os');
const Toastify = require('toastify-js');

//exposing the bridge for operating system 
contextBridge.exposeInMainWorld('os', {
  homedir : () => os.homedir()
  
});

//exposing the bridge for path
contextBridge.exposeInMainWorld('path', {
    join : (...args) => path.join(...args),
    
  });

//exposing the bridge for toastify alerts
contextBridge.exposeInMainWorld('Toastify',{
    toast : (options) => Toastify(options).showToast(),
});

//exposing the bridge for ipcRenderer
contextBridge.exposeInMainWorld('ipcRenderer',{
    send : (channel, data) => ipcRenderer.send(channel,data) ,
    on : (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
});