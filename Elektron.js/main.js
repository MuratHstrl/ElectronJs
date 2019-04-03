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
+
+
4.1 de ise pencere açma işlemlerini gerçekleştiriyoruz "pathname deki index i değiştirerek kendi html dosyanın ismini yazarak çalıştırabilirsin".
+
+
4.2 de ise Kendi istediğimiz menüyü oluşturmak için kullanıyoruz
+
+
5 Numarada Kendi Menümüzü Düzenleyebilir Submenu kullanarak dropdown oluşturabiliriz. 5numaralı yer Her bir süslü parantez "{}" 1 menuyü belirtir yan yana virgül atarak yazılırsa birden fazla menu butonunuz olur.
+
+
Roller:
quit = Çıkışı Sağlar.
TODO = Tıklanabilir bir label oluşturmayı Sağlar.
+
+
5.1 Numara Kısa Yol Eklememizi sağlar "darvin" Mac bilgisayarlar içi yazılmıştır
+
+
 
*/ 

const electron = require("electron"); // 1
const url = require("url"); // 1
const path = require("path"); // 1

const { app , BrowserWindow , Menu} = electron; // 2 

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
Menu.setApplicationMenu(mainMenu) // 4.2
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