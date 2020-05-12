const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 280,
    height: 550,

    minWidth: 280,
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
