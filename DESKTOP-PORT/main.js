const { app, BrowserWindow, nativeTheme } = require('electron');
const { App } = require('./config/config.json');
const { createGUIWindow } = require('./util/gui-utils.js');

app.whenReady().then(() => {
    if (!App.developer.activated) openGUIEditor();
});



const openGUIEditor = () => {
    createGUIWindow(BrowserWindow, App);
}

/* GUI WINDOW CLEANUP MACOS */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});