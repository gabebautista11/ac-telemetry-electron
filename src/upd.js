const { ipcRenderer } = require("electron");

function connectButtonPressed(){
    console.log("invoking connect to server");
    ipcRenderer.invoke('connectToServer')
}

function stopButtonPressed(){
    console.log("invoking end server");
    ipcRenderer.invoke('stopConnection')
}