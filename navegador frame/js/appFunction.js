const $ = require('jquery');


const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const maxResBtn = document.querySelector('maximizeBtn')
const mySidebar = document.getElementById('mySidebar')
const menu = document.querySelectorAll('.moduloBtn')
const leftMenu = document.querySelector('.leftMenu')
const iframe = document.getElementById('iframe');
const login = document.querySelector('.login')
var isLeftMenuActive = true

document.querySelector('.closeBtn').addEventListener('click', () => {
    ipc.send('closeApp')
})
document.querySelector('.minimizeBtn').addEventListener('click', () => {
    ipc.send('minimizeApp')
})
function changeMaxResBtn(isMaximizedApp) {
    if (isMaximizedApp) {
        maxResBtn.title = 'Restore'
        maxResBtn.classList.remove('maximizeBtn')
        maxResBtn.classList.add('restoreBtn')
    } else {
        maxResBtn.title = 'Maximize'
        maxResBtn.classList.remove('restoreBtn')
        maxResBtn.classList.add('maximizeBtn')
    }
}
document.querySelector('.maximizeBtn').addEventListener('click', () => {
    ipc.send('maximizeRestoreApp')
})
ipc.on('isMaximized', () => { changeMaxResBtn(true) })
ipc.on('isRestored', () => { changeMaxResBtn(false) })

//login


//menu lateral
showHideMenus.addEventListener('click', () => {
    if (isLeftMenuActive) {
        mySidebar.style.width = '0px'
        menu.forEach(element => {
            element.style.visibility = 'hidden';
        })
        isLeftMenuActive = false
    } else {
        mySidebar.style.width = '225px'
        menu.forEach(element => {
            element.style.visibility = 'visible';
        })
        isLeftMenuActive = true
    }
})



//iframe
ModuloDrop.addEventListener('click', () => {
    iframe.src = 'curso.html'
})
document.getElementById('iframeBtn').addEventListener('click', () => {
    iframe.src = 'ProfilePerfil.html'
})

