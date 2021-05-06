//Lancement du jeu
let clickStartScreen = document.getElementById('clickToStartScreen');

clickStartScreen.addEventListener('click', start);

function start() {
    document.getElementById('gameStartScreen').classList.add('displayed')  
}
