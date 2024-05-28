const $ = require('jquery');


const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const maxResBtn = document.querySelector('maximizeBtn')
const mySidebar = document.getElementById('mySidebar')
const menu = document.querySelectorAll('.moduloBtn')
const menuBtn = document.querySelector('.moduloBtn2')
const iframe = document.getElementById('iframe');
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
        menu.forEach(element => {
            element.style.display = 'none';
        })
        menuBtn.style.display = 'none';
        
        mySidebar.style.width = '0px'
        isLeftMenuActive = false
        
    } else {
        menu.forEach(element => {
            element.style.display = 'flex';
        })
        menuBtn.style.display = 'inline-block';
        
        mySidebar.style.width = '225px'
        isLeftMenuActive = true
        
    }
})



//iframe
ModuloDrop.addEventListener('click', () => {
    iframe.src = 'aulas.html'
})
document.getElementById('iframeBtn').addEventListener('click', () => {
    iframe.src = 'ProfilePerfil.html'
})

