const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ACRemoteTelemetryClient = require("ac-remote-telemetry-client");
const fs = require("fs");
const { getCarData } = require("./data-displays/track-display/trackController");
const { LapData } = require("./lap-objects");

let graphWindow;
let trackWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  createTrackWindow();
  // graphWindow();
};

const createTrackWindow = () => {
  trackWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(
        __dirname,
        "./data-displays/track-display/trackPreloadScript.js"
      ),
      contextIsolation: true,
    },
  });

  trackWindow.loadFile(
    path.join(__dirname, "./data-displays/track-display/track-display.html")
  );

  trackWindow.webContents.openDevTools();
};

const createGraphWindow = () => {
  graphWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(
        __dirname,
        "./data-displays/graph-displays/graphPreloadScript.js"
      ),
      contextIsolation: true,
    },
  });

  graphWindow.loadFile(
    path.join(__dirname, "./data-displays/graph-displays/graph-displays.html")
  );
  graphWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  client.stop();
  //if (process.platform !== "darwin") {
  app.quit();
  //}
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const client = new ACRemoteTelemetryClient();
const lapData = new LapData();

let carData = {};
// Implement desired listeners
//call client.handshake every time we connect to a server
client.on("HANDSHAKER_RESPONSE", (data) => {});

client.on("RT_CAR_INFO", (data) => {
  carData = data;
  lapData.addData(carData);
  try {
    trackWindow.webContents.send("carUpdate", carData, lapData.lapData.length);
  } catch (e) {
    console.log("ERROR");
  }
});

client.on("RT_LAP", (data) => {
  //console.log(data);
});

ipcMain.on("connect-to-server", () => {
  console.log("connect to server received");
  // Start listening
  client.start();
  // Send initial handshake
  client.handshake();
  // Subscribe to desired updates.
  //I can only do 1 of the bellow at a time
  client.subscribeUpdate();
  //client.subscribeSpot();
});

getCarData();
