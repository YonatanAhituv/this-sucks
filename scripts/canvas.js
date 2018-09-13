
var down = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    space: false
}

var player = {
    x: -40,
    y: 150,
    thingX: 0
}

function draw(x, y, shooting) {
    console.log(x)
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(player.x, player.y, 50, 100)
    ctx.fillStyle = '#000';
    ctx.fillRect(player.x, y, 50, 100);
    console.log(shooting)
    if (shooting) {
        ctx.clearRect(player.thingX, player.y+25, 50,25)
        ctx.fillRect(x, y+25, 50, 25)
        
    }
    else {
        x = 50
    }
    player.thingX = x
    player.y = y
}

function gameLogic() {
    // Movement and shooting
    var x = player.thingX;
    var y = player.y;
    if (down.ArrowUp) {
        y -= 3
    }
    if (down.ArrowDown) {
        y += 3
    }
    if (down.ArrowLeft) {
        x -= 3
    }
    if (down.ArrowRight) {
        x += 3
    }
    draw(x, y, down.space); 
}

document.onkeydown = function(e) {
    console.log("Down: "+e.key)
    if (e.key == "ArrowUp") {
        down.ArrowUp = true
    }
    if (e.key == "ArrowDown") {
        down.ArrowDown = true
    }
    if (e.key == "ArrowLeft") {
        down.ArrowLeft = true
    }
    if (e.key == "ArrowRight") {
        down.ArrowRight = true
    }
    if (e.key == " ") {
        down.space = true
    }
    console.log(down)
}

document.onkeyup = function(e) {
    console.log("Up: "+e.key)
    if (e.key == "ArrowUp") {
        down.ArrowUp = false
    }
    if (e.key == "ArrowDown") {
        down.ArrowDown = false
    }
    if (e.key == "ArrowLeft") {
        down.ArrowLeft = false
    }
    if (e.key == "ArrowRight") {
        down.ArrowRight = false
    }
    if (e.key == " ") {
        down.space = false
    }
    console.log(down)
}

function update() {
    gameLogic();
    setTimeout(update, 10)
}

function init() {
    player.thingX = player.x
    draw(player.x, player.y)
    setTimeout(update, 10)
}