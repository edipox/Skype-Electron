
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

let quitApp = function(){ app.quit() }

app.on('ready', function() {
  var size = { width: 910, height: 792 };
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    frame: false,
    minWidth: size.width,
    minHeight: size.height,
    // maxWidth: size.width,
    // maxHeight: size.height,
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // mainWindow.openDevTools();
});
