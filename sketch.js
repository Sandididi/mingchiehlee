let angle = 0;
//let photos;
let cam;
let flower1;
let flower2;
let flower3;

function preload() {
 // photos = loadImage('Img/220320.jpg');
  flower1 = loadModel('Img/coconut.obj');
  flower2 = loadModel('Img/flower_0402_2.obj');
  flower3 = loadModel('Img/flower_0402_3.obj');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camView = createCamera();
  camView.setPosition(0, 0, 0);
  camView.lookAt(0, 0, 0);
  
  //camView.ortho(windowWidth / 2, -windowWidth / 2, -windowHeight / 2, windowHeight / 2, 0, 4000);
  camView.perspective(1, windowWidth/windowHeight, 0, 2000);

  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(17,15,30);
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  
  //ortho(windowWidth / 2, -windowWidth / 2, -windowHeight / 2, windowHeight / 2, 0, 4000);
  //perspective(1, windowWidth/windowHeight, 0, 1000);


  ambientLight(100,150,255);
  directionalLight(255, 255, 0, -dirX, -dirY, -1);

  //orbitControl();
  camView.setPosition(cos(angle)*1000, -400, sin(angle)*1000);
  camView.lookAt(0, -200, 0);
  angle += 0.002;
  

  //noStroke();
  stroke(255);
  strokeWeight(0.3);
  texture(cam);
  
  push();
  scale(4);
  smooth();
  translate(-1,17,-2);
  rotateX(PI);
  rotateY(PI*7/6);
  model(flower1);
  pop();


  //rotateY(mouseX/60);
  

  //angle += 0.01;
}
