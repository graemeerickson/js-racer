const MOVE_RATE = 10;

const moveRight = (player) => {
   player.style.left = parseInt(player.style.left) + MOVE_RATE + 'px';
};

const checkKeyChar = (e) => {
   let player;
   e = e || window.event;
   
   if (e.keyCode === 39) {
      let player = document.getElementById('player1');
      moveRight(player);
   } else if (e.keyCode === 68) {
      let player = document.getElementById('player2');
      moveRight(player);
   }
};

const initializePlayers = () => {
   let player1 = document.getElementById('player1');
   player1.style.position = 'relative';
   player1.style.left = '0px';

   let player2 = document.getElementById('player2');
   player2.style.position = 'relative';
   player2.style.left = '0px';
};

initializePlayers();
document.onkeydown = checkKeyChar;