let angle = 0;
let backgroundImg;
let cam;
let coconut;


function preload() {
  backgroundImg = loadImage('Img/coconut-beach.jpg');
  coconut = loadModel('Img/coconut.obj');
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


  ambientLight(100,150,255);
  directionalLight(255, 255, 0, -dirX, -dirY, -1);

  //orbitControl();
  // camView.setPosition(cos(angle)*1000, -400, sin(angle)*1000);
  camView.setPosition(0, 0, 1600);
  camView.lookAt(0, 0, 0);
  //angle += 0.002;
  
  push();
  //rotateZ(PI/2);
  imageMode(CENTER);
  image(backgroundImg,0,0,windowWidth,windowHeight);
  pop();

  //noStroke();
  stroke(255);
  strokeWeight(0.3);
  texture(cam);
  
  push();
  scale(4.5);
  smooth();
  translate(windowWidth/20,110,100);
  rotateX(PI);
  rotateY(angle/2);
  model(coconut);
  pop();


  //rotateY(mouseX/60);
  

  angle += 0.01;
}
