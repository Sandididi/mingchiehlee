let angle = 0;
let backgroundImg;
let cam;
let coconut;


function preload() {
  backgroundImg = loadImage('Img/bkDSC2573.jpg');
  coconut = loadModel('Img/coconut0721.obj');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camView = createCamera();
  camView.setPosition(0, 0, 0);
  camView.lookAt(0, 0, 0);
  
  camView.ortho(windowWidth / 2, -windowWidth / 2, -windowHeight / 2, windowHeight / 2, 0, 4000);
  // camView.perspective(1, windowWidth/windowHeight, 0, 2000);

  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
   background(17,15,30);
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  
  //ortho(windowWidth / 2, -windowWidth / 2, -windowHeight / 2, windowHeight / 2, 0, 4000);
  //perspective(1, windowWidth/windowHeight, 0, 1000);

  //ambientLight(255,225,255);
  //directionalLight(255, 255, 255, -dirX, -dirY, -1);

  camView.setPosition(-300, 200, -1600);
  camView.lookAt(300, -1000, -150);
  
  push();
  rotateY(PI/8);
  rotateX(PI/5.5);
  translate(330,-812);
  texture(backgroundImg);
  rotateY(PI);
  box(-windowWidth,windowHeight,100);
  pop();


  //noStroke();
  stroke(255);
  strokeWeight(0);
  tint(255,225,250);
  texture(cam);
  rotateZ(0.5);
  translate(80,0,500);
  push();
  scale(23);
  smooth();
  translate(-windowWidth/70,42,-50);
  rotateX(PI);
  rotateY(angle/2);
  model(coconut);
  pop();

  //rotateY(mouseX/60);
  
  angle += 0.01;
}
