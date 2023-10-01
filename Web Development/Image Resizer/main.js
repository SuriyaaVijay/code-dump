const {app, BrowserWindow, Menu, ipcMain, shell} = require('electron');
const path = require('path');
const os = require('os');
const fs = require('fs');
const resizeImg = require('resize-img');

//explicitly setting the node environment to prod
process.env.NODE_ENV = 'production';

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform == 'darwin';

if (require('electron-squirrel-startup')) app.quit();

// creating global scope windows
let mainWindow;
let aboutWindow;

// Creating the main window
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title : 'Image Resizer',
        width : isDev ? 1000 : 600,
        height : 600,
        webPreferences : {
            contextIsolation : true,
            nodeIntegration : true,
            preload : path.join(__dirname,'preload.js')
        }
    });

    //open devtools
    if(isDev)
    {
        mainWindow.webContents.openDevTools();
    }


    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
};


// create about window
const createAboutWindow = () => {
    aboutWindow = new BrowserWindow({
        title : 'About Image Resizer',
        width : 300,
        height : 300
    });

    aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
};


//Menu Template
let menu = [

    ...(!isMac ? [{
        label : 'Help',
        submenu : [
            {
                label : 'About',
                click : createAboutWindow,
            }
        ]
    }] : []),
    {
        role : 'fileMenu',
    }
];

// Implementing menu
const mainMenu = Menu.buildFromTemplate(menu);
Menu.setApplicationMenu(mainMenu);



// App is ready
app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    });
});

// // Respond to ipcRenderer resize
ipcMain.on('image:resize', (e, options) => {
    options.dest = path.join(os.homedir(), 'imageresizer');
    resizeImage(options);
});

//Resize the image
async function resizeImage({ imgPath, width, height, dest }){
    try {
        const newPath = await resizeImg(fs.readFileSync(imgPath), {
            width : +width,
            height : +height
        });

        // Create filename
        const fileName = path.basename(imgPath);

        // create destination folder if it doesn't exist
        if (!fs.existsSync(dest)){
            fs.mkdirSync(dest);
        }

        // Write file to destination folder
        fs.writeFileSync(path.join(dest, fileName), newPath);

        // Send success message to render
        mainWindow.webContents.send('image:done');


        // open the destination folder
        shell.openPath(dest);


    } catch (error) {
        console.log(error);
    }

}

// remove mainWindow and aboutWindow from memory on close
// mainWindow.on('closed', () => (mainWindow = null));
// aboutWindow.on('closed', () => (aboutWindow = null));


// shut down the app
app.on('window-all-closed', () => {
    if(!isMac)
    {
        app.quit();
    }
});