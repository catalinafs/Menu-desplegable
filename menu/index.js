const menu = document.getElementById('menu')

const menuButton = document.getElementById('openCloseButton')|

document.getElementById('openCloseButton').addEventListener("click", menuExtend)

function menuExtend(evento) {
    menu.classList.toggle('buttones')
}