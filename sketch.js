let angle = 0;
let backgroundImg;
let cam;
let coconut;
let boxs;


function preload() {
  backgroundImg = loadImage('Img/bkDSC2528.jpg');
  coconut = loadModel('Img/coconut0721.obj');
  boxs = loadModel('Img/cube.obj');
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

  ambientLight(255,255,255);
  //directionalLight(255, 255, 255, -dirX, -dirY, -1);

  camView.setPosition(0, 0, -1600);
  camView.lookAt(0, 0, 0);
  
  // push();
  // texture(backgroundImg);
  // rotateY(PI);
  // box(-windowWidth,windowHeight,100);
  // pop();

  push();
  texture(backgroundImg);
  rotateX(PI);
  rotateZ(PI/2);
  scale(-windowHeight/2,-windowWidth/2,100);
  model(boxs);
  pop();


  //noStroke();
  stroke(255);
  strokeWeight(0);
  tint(180,255,180);
  texture(cam);
  
  push();
  scale(14);
  smooth();
  translate(-windowWidth/55,42,-50);
  rotateX(PI);
  rotateY(angle/2);
  model(coconut);
  pop();

  //rotateY(mouseX/60);
  
  angle += 0.01;
}
