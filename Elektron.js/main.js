/*
İmport Etmek İçin 1 numaralı Yerler Kullanılır.
+
+
2 Numarada electron modülümüzden istediğimiz değişkeni çağırmak için kullanılır.
+
+
3 numaralı yerde Kullanılacak ana ekran.
+
+
4 numaralı yerde ise 2 Numarada elektron modülünden çağırdığımız App dosyası Hazırsa şunları yap.
*/ 

const electron = require("electron"); // 1
const url = require("url"); // 1
const path = require("path"); // 1

const { app , BrowserWindow } = electron; // 2 

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
)
}) // 4