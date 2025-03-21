const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');

let mainWindow;

app.whenReady().then(() => {
    
    mainWindow = new BrowserWindow({
        width: 1920,         
        height: 1080,        
        frame: false,        
        alwaysOnTop: false,  
        transparent: true,   
        fullscreen: true,    
        webPreferences: { nodeIntegration: false }
    });

    mainWindow.loadURL('https://www.twitch.tv');

    mainWindow.setSkipTaskbar(true);

    app.on('ready', () => {
        exec('powershell -Command "& {[System.Runtime.Interopservices.Marshal]::WriteInt32((Get-Process -id $pid).MainWindowHandle, -20, 0x80)}"');
    });
});
