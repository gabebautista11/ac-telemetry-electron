const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("API", {
  connect: () => {
    console.log("connect pressed");
    ipcRenderer.send("connect-to-server");
  },
});
