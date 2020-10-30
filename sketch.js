var database;
var canvas, formObject, playerObject, gameObject;
var playerCount = 0;
var gameState = 0;
var allPlayers
function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database()
    gameObject = new Game()
    gameObject.getState()
    gameObject.start()
    
}

function draw(){
    if(playerCount===4){
        gameObject.updateState(1)

    }
    if(gameState===1){
        console.log("Hi")
        clear()
        gameObject.play()
    }
}

