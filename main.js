drawApple = "";
appleImg = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload() {
    appleImg = loadImage("apple.png");
}

function start() {
    document.getElementById("mainLbl").innerHTML = "Recording..."
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    transcriptVal = event.results[0][0].transcript;
    toNumber = Number(transcriptVal);
    if (Number.isInteger(toNumber)) {
        document.getElementById("mainLbl").innerHTML = "Started adding apples...";
        drawApple = "drawing";
    } else {
        document.getElementById("mainLbl").innerHTML = "Not a valid number, retry!";
    }
}

function setup() {
    canvas = createCanvas(400, 400)
}

function draw() {
    if(drawApple == "drawing") {
        for(var i = 1; i <= toNumber; i++) {
            xPos = Math.floor(Math.random() * 400);
            yPos = Math.floor(Math.random() * 400);
            image(appleImg, xPos, yPos, 50, 50);
            document.getElementById("mainLbl").innerHTML = toNumber + " apple(s) drawn";
            drawApple = "";
        }
    }
}
