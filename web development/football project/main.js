function myKeyDown(event) {
    if (event.keyCode == 37) {
        leftPressedplayer = true;
    }
    if (event.keyCode == 38) {
        upPressedplayer = true;
    }
    if (event.keyCode == 40) {
        downPressedplayer = true;
    }
    if (event.keyCode == 39) {
        rightPressedplayer = true;
    }
}

function myKeyUp(event) {
    if (event.keyCode == 37) {
        leftPressedplayer = false;
    }
    if (event.keyCode == 38) {
        upPressedplayer = false;
    }
    if (event.keyCode == 40) {
        downPressedplayer = false;
    }
    if (event.keyCode == 39) {
        rightPressedplayer = false;
    }
}
var leftPressedplayer = false;
var rightPressedplayer = false;
var upPressedplayer = false;
var downPressedplayer = false;

function moveInterval() {
    if (leftPressedplayer == true) {
        moveLeft();
    }
    if (rightPressedplayer == true) {
        moveRight();
    }
    if (upPressedplayer == true) {
        moveUp();
    }
    if (downPressedplayer == true) {
        moveDown();
    }
}

function moveUp() {
    var player = document.getElementById('player');
    var ball = document.getElementById('ball');
    var topposofball = ball.offsetTop;
    var topposofplayer = player.offsetTop;
    var leftposofplayer = player.offsetLeft;
    var leftposofball = ball.offsetLeft;


    player.style.top = leftposofplayer - 1 + 'px';
    if (topposofplayer == topposofball + 20) {

        var gap = leftposofball - leftposofplayer;
        // console.log(gap);
        // console.log(leftposofplayer);
        if (gap < 20 && gap > -60) {
            ball.style.top = topposofball - 40 + 'px';

        }


    }

}

function moveDown() {
    var element = document.getElementById('player');
    var ball = document.getElementById('ball');
    var positionTop = element.offsetTop;
    var positionTopball = ball.offsetTop;
    element.style.top = positionTop + 1 + 'px';


}

function moveLeft() {
    var player = document.getElementById('player');
    var ball = document.getElementById('ball');
    var topposofball = ball.offsetTop;
    var topposofplayer = player.offsetTop;
    var leftposofplayer = player.offsetLeft;
    var leftposofball = ball.offsetLeft;
    // console.log(positionLeftball);
    // console.log(positionTopball);

    player.style.left = leftposofplayer - 1 + 'px';
    if (leftposofplayer == leftposofball + 20) {
        var topposofplayertop = topposofplayer;
        var topposofplayerdown = topposofplayer + 40;
        var gap = topposofball - topposofplayer
        if (gap < 40 && gap > -20) {
            ball.style.left = leftposofball - 40 + 'px';

        }


    }
}

function moveRight() {
    var player = document.getElementById('player');
    var ball = document.getElementById('ball');
    var topposofball = ball.offsetTop;
    var topposofplayer = player.offsetTop;
    var leftposofplayer = player.offsetLeft;
    var leftposofball = ball.offsetLeft;

    player.style.left = leftposofplayer + 1 + 'px';
    if (leftposofball == leftposofplayer + 60) {

        var gap = topposofball - topposofplayer
        if (gap < 40 && gap > -20) {
            ball.style.left = leftposofball + 40 + 'px';

        }
    }

}

function myLoadEvent() {
    document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp);
    setInterval(moveInterval, 10);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);