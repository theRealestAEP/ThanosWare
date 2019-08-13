const {app, BrowserWindow,  ipcMain, globalShortcut} = require('electron')
const path = require('path')
//const iohook = require('iohook')

let mainWindow
const fuckYou = () => {
    mainWindow = new BrowserWindow({
        // width: 200,
        // height: 200,
        resizable: false,
        closable: false,
        minimizable: false,
        focusable: false,
        alwaysOnTop: true,
        fullscreen:false,
        skipTaskbar:true,
        kiosk: true,
        frame: false,
        center: true,
        disableAttoHideCursor: true,
        transparent: true,
        //backgroundColor: "transparent",
        enableLargerThanScreen: true,
        titleBarStyle:"hidden",
        webPreferences:{
            nodeIntegration: true
        }
    })
    globalShortcut.register('Crtl+C', () => {
        if (mainWindow.isFocused()) {
          // do something
          mainWindow.webContents.send('nope')
        }
      });
    // globalShortcut.register('Super', () => {
    //     if (mainWindow.isFocused()) {
    //       // do something
    //       mainWindow.webContents.send('nope')
    //     }
    //   });
    //mainWindow.webContents.openDevTools()
    mainWindow.loadFile(path.join(__dirname, 'mainWindow.html'))
    mainWindow.on('closed', restartIT)
}

const restartIT = () => {
    fuckYou();
    mainWindow.reload()}

ipcMain.on('winner', ()=>{
    app.exit(0)
})

app.on('ready', fuckYou)