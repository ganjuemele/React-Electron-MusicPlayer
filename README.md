npm install --save-dev electron
npm install --save electron-is-dev
npm install --save wait-on

#### electron-is-dev：能夠得知 Electron 應用目前運行狀態是處於開發階段還是產品階段，讓開發者能輕鬆對不同情況做邏輯分流

```js
const isDev = require('electron-is-dev');

if (isDev) {
console.log('Running in development');
} else {
console.log('Running in production');
}
```

#### wait-on：先等待某些服務 (files/ports/sockets/http(s)) 正常運作，再執行接下來的指令

```bash
wait-on tcp:3000 && electron .    # 直到 TCP 3000 正常運作，才會執行 electron .
```
#### 新建main.js 和空文件preload.js
```js
// main.js
const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    if (isDev) {
        // 開發階段直接與 React 連線
        mainWindow.loadURL('http://localhost:3000/');
        // 開啟 DevTools.
        mainWindow.webContents.openDevTools()
    } else {
        // 產品階段直接讀取 React 打包好的
        mainWindow.loadFile('./build/index.html');
    }
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
```

#### package.json
```json
"homepage": ".",
"main": "main.js",

"scripts": {
    "start": "export BROWSER=none && react-scripts start", //mac
    "start": "set BROWSER=none && react-scripts start", //windows
    ...
    "electron-start": "wait-on tcp:3000 && electron ."
},
```

開啟兩個 cmd，一個用來啟動 CRA (npm run start)，另一個則是用來啟動 Electron (npm run electron-start)。

## 打包

`npm install --save-dev electron-builder`

```js
const path = require('path');
const builder = require('electron-builder');

builder.build({
    projectDir: path.resolve(__dirname),
    win: ['portable', 'nsis'],  // portable 為 Windows 的免安裝程式，nsis 為安裝程式
    mac: ['dmg'],   // dmg 為 Mac 常見的打包方式，若開發環境為 Windows 無法打包，需註解掉，否則會出錯
    config: {
        'appId': 'io.github.weirenxue.react-electron-demo', // 應用程式 ID
        'productName': 'React Based Electron',  // 應用程式名稱
        'copyright': 'Copyright © 2021 Wei-Ren Xue',    // 授權宣告
        'directories': {
            'output': 'electron-build/win'  // 打包後的應用程式放置在 electron-build/win
        },
        // 設定打包後的 icon
        'win': {
            'icon': path.resolve(__dirname, 'icon.png'), 
        },
        'mac': {
            'icon': path.resolve(__dirname, 'icon.png'),
        },
        // 打包需要用到的原始碼、模組，皆需要寫到 files 內
        'files': [
            'build/**/*',
            'node_modules/**/*',
            'package.json',
            'main.js',
            'preload.js',
        ],
        'extends': null,
    }
}).then(
    (data) => console.log(data),
    (err) => console.error(err)
)
```
```json
//package.json
"electron-build": "npm run build && node build.js"
```
`npm run electron-build`

```
    yarn start
or
    yarn electron-start
```
