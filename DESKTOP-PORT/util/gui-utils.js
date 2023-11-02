function createGUIWindow(BrowserWindow, App) {
    const neocaridinaGUIWin = new BrowserWindow({
        width: App.window.width,
        height: App.window.height,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    if (!App.window.menu) neocaridinaGUIWin.setMenu(null);
    if (App.developer.activated) neocaridinaGUIWin.webContents.openDevTools();

    //neocaridinaGUIWin.loadFile('main.html');
    //nativeTheme.themeSource = 'dark';
}

module.exports = {
    createGUIWindow
}