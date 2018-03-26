const MOVE_RATE = 25;
const PLAYER_WIDTH = 256;

const moveRight = (player) => {
   let player_id = player.getAttribute('id');
   let finish_line = document.getElementById('raceway').clientWidth;
   if (parseInt(player.style.left) + PLAYER_WIDTH < finish_line) {
      player.style.left = parseInt(player.style.left) + MOVE_RATE + 'px';
   } else if (player_id === 'player1') {
      setTimeout(function () { alert('WINNER: Player 1!') },100);
      document.getElementById('rotator').setAttribute('class','rotator');
      
   } else {
      setTimeout(function () { alert('WINNER: Player 2!') },100);
      document.getElementById('rotator').setAttribute('class','rotator');
      
   };
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
   };
};

const initializeGame = () => {
   // dynamically establish raceway width
   let raceway = document.getElementById('raceway');
   let raceway_width = document.getElementById('raceway').clientWidth;
   raceway.style.width = raceway_width - 100 + 'px';

   let player1 = document.getElementById('player1');
   player1.style.position = 'relative';
   player1.style.left = '0px';

   let player2 = document.getElementById('player2');
   player2.style.position = 'relative';
   player2.style.left = '0px';
};

initializeGame();
document.onkeydown = checkKeyChar;