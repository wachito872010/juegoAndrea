const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.querySelector(".panel-menu").classList.add("hidden")
  document.querySelector(".panel-canvas").classList.remove("hidden")
  if (game.interval) {
    game.stop();
    btn.innerText = "START";
  } else {
    game.start();
    btn.innerText = "STOP";
  }
}
);

/*btn.addEventListener('click', function(){
  document.querySelector(".panel-canvas")
  if (game.interval){
      game.stop()
      btn.innerText = 'START'
  } else {
      game.start()
      btn.innerText = 'PAUSE'
  }
}
); */


