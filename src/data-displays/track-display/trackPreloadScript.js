const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("getExampleData", {
  exampleDataJSON: async () => {
    console.log("in exampleDataJSON");
    return await ipcRenderer.invoke("getCarDataJson");
  },
});

contextBridge.exposeInMainWorld("carDataAPI", {
  getCarData: (callback) => ipcRenderer.on("carUpdate", callback),
});
