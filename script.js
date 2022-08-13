const canvasShow = document.getElementById("canvasShow");
const ctxShow = canvasShow.getContext('2d');
const CANVAS_WIDTH = canvasShow.width = 64;
const CANVAS_HEIGHT = canvasShow.height = 64;
const canvasOriginal = document.getElementById("canvasOriginal");
const ctxOriginal = canvasOriginal.getContext('2d');

canvasShow.width = 400;
canvasShow.height = 400;

const playImage = new Image();
playImage.src = "walk.png"
const IMAGE_WIDTH = 384;
const IMAGE_HEIGHT = 256;

canvasOriginal.width = IMAGE_WIDTH;
canvasOriginal.height = IMAGE_HEIGHT;

const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 32;

function animate()
{
    ctxShow.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctxShow.drawImage(playImage, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, 0, 0, 400, 400);
    
    ctxOriginal.clearRect(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
    ctxOriginal.drawImage(playImage, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

    ctxOriginal.beginPath();
    ctxOriginal.lineWidth = "2";
    ctxOriginal.strokeStyle = "red";
    ctxOriginal.rect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    ctxOriginal.stroke();
    requestAnimationFrame(animate);
}

animate();