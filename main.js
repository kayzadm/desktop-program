const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const ipc = ipcMain

function createWindow () {
  const win = new BrowserWindow({
    minWidth: 940,
    minHeight: 560,
    frame:false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('navegador frame/login.html')
  win.setBackgroundColor('#222')

  ipc.on('minimizeApp', () => {
    console.log('Clicked on button')
    win.minimize()
  })
  ipc.on('maximizeRestoreApp', () => {
    if (win.isMaximized()){
        win.restore()
      }else {
        win.maximize()
      }
  })
  win.on('maximize', () => {
    win.webContents.send('isMaximized')
  })
  win.on('unmaximize', () => {
    win.webContents.send('isRestored')
  })

  ipc.on('closeApp', () => {
    console.log('Clicked on button')
    win.close()
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.commandLine.appendSwitch('disable-site-isolation-trials');