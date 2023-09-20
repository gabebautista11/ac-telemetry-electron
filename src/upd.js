function connectButtonPressed() {
  console.log("invoking connect to server");
  ipcRenderer.invoke("connectToServer");
}

function stopButtonPressed() {
  console.log("invoking write to file");
  ipcRenderer.invoke("writeFile");
}
