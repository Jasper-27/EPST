const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 400,
    height: 700,

    minWidth: 400,
    minHeight: 350,



    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html');
  win.removeMenu();
}

app.whenReady().then(createWindow)


function testFunc(){
  alert("Hello world");
}
