const $ = require('jquery');
const { ipcRenderer } = require('electron')
const ipc = ipcRenderer


ipcRenderer.on('env-variables', (event, envVariables) => {
    // Passe as variáveis de ambiente para o iframe
    const iframe = document.getElementById('iframe');
    iframe.contentWindow.postMessage(envVariables, '*'); // '*' permite qualquer origem
});

// Solicita as variáveis de ambiente do processo principal
ipcRenderer.send('get-env-variables');
const maxResBtn = document.querySelector('maximizeBtn')
const mySidebar = document.getElementById('mySidebar')
const menu = document.querySelectorAll('.moduloBtn')
const menuBtn = document.querySelector('.moduloBtn2')
var isLeftMenuActive = true
const logout = document.getElementById('logout')

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
        logout.style.display = 'none'
        menuBtn.style.display = 'none';
        
        mySidebar.style.width = '0px'
        isLeftMenuActive = false
        
    } else {
        mySidebar.style.width = '225px'
        menu.forEach(element => {
            element.style.display = 'flex';
        })
        menuBtn.style.display = 'inline-flex';
        logout.style.display = 'flex'
        
        isLeftMenuActive = true
        
    }
})



//iframe
function enviarVariaveisParaIframe() {
    // Solicita as variáveis de ambiente do processo principal
    ipcRenderer.on('env-variables', (event, envVariables) => {
        // Passe as variáveis de ambiente para o iframe
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.postMessage({ envVariables }, '*'); // '*' permite qualquer origem
    });

    // Solicita as variáveis de ambiente do processo principal
    ipcRenderer.send('get-env-variables');
}

// Evento de clique no ModuloDrop
ModuloDrop.addEventListener('click', () => {
    const iframe = document.getElementById('iframe');

    // Troca o src do iframe para 'curso.html'
    iframe.src = 'curso.html';

    // Aguarde o carregamento completo do iframe antes de enviar as variáveis de ambiente
    iframe.addEventListener('load', () => {
        enviarVariaveisParaIframe();
    });
});
document.getElementById('iframeBtn').addEventListener('click', () => {
    iframe.src = 'ProfilePerfil.html'
})

