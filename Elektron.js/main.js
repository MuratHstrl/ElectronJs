
const electron = require("electron"); // 1
const url = require("url"); // 1
const path = require("path"); // 1

const { app , BrowserWindow , Menu , ipcMain} = electron; // 2 

let mainWindows; // 3 

app.on('ready', ()=>{
//4.1
mainWindows = new BrowserWindow({});
mainWindows.loadURL(
   url.format({
       pathname : path.join(__dirname, "index.html"),
       protocol : "file:",
       slashes : true
   })
);

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);//4.2
Menu.setApplicationMenu(mainMenu); // 4.2


ipcMain.on("key" , (err , data) => {
    console.log(data)
});//4.3
ipcMain.on("key:gelentxt", (err,data) => {
    console.log(data)
})//4.3


}); // 4
const mainMenuTemplate = [
    {
        label : "Dosya",
        submenu : [
            {
                label: "Ayarlar"
            },
            {
                label : "Çıkış",
                accelerator: process.platform == "darwin" ? "Command + q" : "Ctrl + q", // 5.1
                role : "quit" 
            }
        ]
    },
    {
        label : "Deneme2"
    }

] // 5