const { ipcRenderer } = require("electron");

function connectButtonPressed(){
    console.log("invoking connect to server");
    ipcRenderer.invoke('connectToServer')
}