const { ipcRenderer, contextBridge } = require("electron");


contextBridge.exposeInMainWorld("carDataAPI", {
  getCarData: (callback) => ipcRenderer.on("carUpdate", callback),
});
