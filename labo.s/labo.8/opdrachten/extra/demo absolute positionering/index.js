window.addEventListener("load", setup);

function setup() {
    var player=document.getElementsByClassName("player")[0];
    var left=parseInt(window.getComputedStyle(player).left);
    player.style.left=left+"px";

    window.requestAnimationFrame(tick);
}

function tick() {
    // deze functie wordt meermaals per seconde opgeroepen

    var player=document.getElementsByClassName("player")[0];

    // verhoog de waarde van de 'left' property
    var left=parseInt(player.style.left); // haalt 30 uit bv "30px"
    left+=1;
    left%=200;
    player.style.left=left+"px";

    window.requestAnimationFrame(tick);
}
