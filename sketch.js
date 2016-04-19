//global variables go here
var value = "#CED8F6";
var mustache;

//only use the preload function if you need to load images
//remember you will need to use Anvil to run your local server
// function preload(){
function preload(){
  mustache = loadImage("mustache.png");
}
// }


//Set up your canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(value);

}


//Draw your story

function draw(){

  noStroke();

  fill("#0B0B61");
  rect(255,100,600,600,30);

  fill("#E0E6F8");
  rect(300,140,510,300,30);

  fill("#B45F04");
  ellipse(270,110,80,80);
  ellipse(840,110,80,80);
  rect(270,95,550,30);

  fill("#FA8258");
  rect(380,150,350,500,150);

  fill("#F6CEF5");
  rect(350,450,405,400,140);

  fill("#F781BE");
  ellipse(windowWidth/2,540,20,20);
  ellipse(windowWidth/2,610,20,20);

  stroke("#F781BE");
  strokeWeight(3);
  line(430,590,430,windowHeight);
  line(670,590,670,windowHeight);

  noStroke();
  fill("#F8E6E0");
  ellipse(windowWidth/2, windowHeight/2,300,300);

  fill("#FA8258");
  rect(420,170,270,100,200);

  fill("#F5A9A9");
  ellipse(windowWidth/2,400,50,50);

  fill("#F8E6E0");
  ellipse(windowWidth/2,380,60,60);

  fill("#0B0B61");
  ellipse(980,400,100,150);

  fill("white");
  triangle(980,150,880,350,1080,350);

  fill(value);
  rect(900,150,160,80);

  fill(value);
  rect(930,465,100,10);

  if(mouseIsPressed && mouseX>880 && mouseX<1080 && mouseY>210 && mouseY<465){
    fill("black");
    ellipse(500, windowHeight/2,50,50);
    ellipse(610, windowHeight/2,50,50);
    fill("#F8E6E0");
    ellipse(500, (windowHeight/2)-5,50,50);
    ellipse(610, (windowHeight/2)-5,50,50);
  }else if(mouseIsPressed && mouseX>400 && mouseX<700 && mouseY>200 && mouseY<500){
      image(mustache,(windowWidth/2)-79,350, mustache.width/20, mustache.height/20);

      fill("#0B0B61");
      ellipse(500, windowHeight/2,90,90);
      ellipse(610, windowHeight/2,90,90);

      strokeWeight(7);
      stroke("#0B0B61");
      line(540,320,580,320);
      line(650,320,700,320);
      line(460,320,405,320);

      noStroke();
      fill("#F8E6E0");
      ellipse(500, windowHeight/2,80,80);
      ellipse(610, windowHeight/2,80,80);

      fill("black");
      ellipse(500, windowHeight/2,50,50);
      ellipse(610, windowHeight/2,50,50);
      fill("#F8E6E0");
      ellipse(500, (windowHeight/2)-5,50,50);
      ellipse(610, (windowHeight/2)-5,50,50);

    }else{
    fill("#0B0B61");
    ellipse(500, windowHeight/2,90,90);
    ellipse(610, windowHeight/2,90,90);

    strokeWeight(7);
    stroke("#0B0B61");
    line(540,320,580,320);
    line(650,320,700,320);
    line(460,320,405,320);

    noStroke();
    fill("#F8E6E0");
    ellipse(500, windowHeight/2,80,80);
    ellipse(610, windowHeight/2,80,80);

    fill("white");
    ellipse(500, windowHeight/2,50,50);
    ellipse(610, windowHeight/2,50,50);

    fill("#81BEF7");
    ellipse(500, windowHeight/2,30,30);
    ellipse(610, windowHeight/2,30,30);

    fill("black");
    ellipse(500, windowHeight/2,20,20);
    ellipse(610, windowHeight/2,20,20);
  }


    if (mouseIsPressed && mouseX>880 && mouseX<1080 && mouseY>210 && mouseY<465 && keyIsPressed && key == 'z'){
      textSize(32);
      fill("#848484");
      text("Z",(windowWidth/2)+50, 400);
      textSize(42);
      text("Z",(windowWidth/2)+100, 350);
      textSize(55);
      text("Z",(windowWidth/2)+150, 300);
    }

}

function mousePressed(){
  if (mouseX>880 && mouseX<1080 && mouseY>210 && mouseY<465){
    value = 0;
    background(0);
  }

}

function mouseReleased(){
  value = "#CED8F6";
  background("#CED8F6");

}



















//add your functions
