// main.js - Electron main process: creates the application window
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100, height: 780, minWidth: 900, minHeight: 600,
    title: 'SolatTime',
    webPreferences: { contextIsolation: true, nodeIntegration: false } // secure defaults
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
