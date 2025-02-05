var astridW= document.querySelector("#idAstrid").offsetWidth;
var astridH= document.querySelector("#idAstrid").offsetHeight;
var karelW= document.querySelector("#idKarel").offsetWidth;
var karelH= document.querySelector("#idKarel").offsetHeight;
var luisW= document.querySelector("#idLuis").offsetWidth;
var luisH= document.querySelector("#idLuis").offsetHeight;
var sobreW= document.querySelector("#idSobre").offsetWidth;
var sobreH= document.querySelector("#idSobre").offsetHeight;

window.addEventListener("resize", redimensionar);

function redimensionar(){
  astridW= document.querySelector("#idAstrid").offsetWidth;
  astridH= document.querySelector("#idAstrid").offsetHeight;
  karelW= document.querySelector("#idKarel").offsetWidth;
  karelH= document.querySelector("#idKarel").offsetHeight;
  luisW= document.querySelector("#idLuis").offsetWidth;
  luisH= document.querySelector("#idLuis").offsetHeight;
  sobreW= document.querySelector("#idSobre").offsetWidth;
  sobreH= document.querySelector("#idSobre").offsetHeight;
}

let fillcolor;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function mudarCor(bg,body) {
  document.querySelector("body").style.backgroundColor = "#"+bg;
  document.querySelector("nav").style.backgroundColor = "#"+bg;
  document.querySelector("body").style.color = "#"+body;
  document.querySelector(".favicon").setAttribute("href","imagens/favicon"+body+".ico");
  
  fillcolor = '#'+body;
  let logos = document.querySelectorAll("svg path");
  for (var i = 0; i < logos.length; i++) {
      logos[i].setAttribute("fill", "#"+body);
  }
  let elemA = document.querySelectorAll("a");
  for (var i = 0; i < elemA.length; i++) {
      elemA[i].style.color = "#"+body;
  }
  let elemOradores = document.querySelectorAll(".nome h2");
  for (var i = 0; i < elemOradores.length; i++) {
      elemOradores[i].style.color = "#"+bg;
  }
  let imgdiv = document.querySelectorAll(".imgdiv");
  for (var i = 0; i < imgdiv.length; i++) {
      imgdiv[i].style.backgroundColor = "#"+body;
  }
  let burguirLinhas = document.querySelectorAll("#hamburguer span");
  for (var i = 0; i < burguirLinhas.length; i++) {
    burguirLinhas[i].style.background = "#"+body;
  }
  let menu2 = document.querySelector("#menu2");
  menu2.style.background = "#"+bg;

  var textoScroll = "::-webkit-scrollbar-thumb {background: #"+body+"33;}";
  var styleElement = document.createElement("style");
  styleElement.appendChild(document.createTextNode(textoScroll));
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

let p;
function escolherCor(){
  p = getRandom(0,8);
  
  if (p<1) {
    mudarCor('101820','F4F9FF');
  } else if (p<2) {
    mudarCor('DA291C','F2F0A1');
  } else if (p<3) {
    mudarCor('211551','E31C79');
  } else if (p<4) {
    mudarCor('E56DB1','151F6D');
  } else if (p<5) {
    mudarCor('F2F0A1','006F62');
  } else if (p<6) {
    mudarCor('7E5475','80E0A7');
  } else if (p<7) {
    mudarCor('51284F','C5E86C');
  } else {
    mudarCor('84344E','FABBCB');
  }
}


document.addEventListener('click',escolherCor);

var ccdm = function( sketch ) {

var pointsc1 = [];
var pointsc2 = [];
var pointsm = [];
var pointsdsup = [];
var pointsdinf = [];

var pointsc1n = [];
var pointsc2n = [];
var pointsmn = [];
var pointsdsupn = [];
var pointsdinfn = [];

var pointsc1da = [];
var pointsc2da = [];
var pointsmda = [];
var pointsdsupda = [];
var pointsdinfda = [];

var increment = 0.01;
var periodo = 50;

var raio = 0;
var raioi = 0;
var rini = 20;
var rmax = 11;
var randon = 2;

var windowSize = window.innerWidth;
let sWindow;
var tempo = 60;

sketch.setup = function() {

  escolherCor();

  sketch.frameRate(24);
  
  var myCanvas = sketch.createCanvas(800,400);
  myCanvas.parent("ccdm");
  
  if (windowSize<800) {
    
    sWindow = true;
  } else {
    sWindow = false;
  }

  if (sWindow == true) {
    sketch.resizeCanvas(360,400);
  }
  
  raioi = raioi + (2*3.15/(24*periodo));
  raio = 25;
  
  ///////////////////////C1/////////////////////////////
  pointsc1[0] = sketch.createVector(205,175);
  pointsc1[1] = sketch.createVector(218,147);
  pointsc1[2] = sketch.createVector(160,127);
  pointsc1[3] = sketch.createVector(129,127);
  pointsc1[4] = sketch.createVector(68,200);
  pointsc1[5] = sketch.createVector(129,273);
  pointsc1[6] = sketch.createVector(160,273);
  pointsc1[7] = sketch.createVector(218,253);
  pointsc1[8] = sketch.createVector(207,226);
  pointsc1[9] = sketch.createVector(150,246);
  pointsc1[10] = sketch.createVector(118,200);
  pointsc1[11] = sketch.createVector(150,154);
  
  for(var i = 0; i<pointsc1.length; i++) {
    pointsc1n[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
    pointsc1da[i] = sketch.createVector();
    
    if (sWindow == true) {
      pointsc1[i].x -= 68;
      pointsc1[i].y -= 91;
    }
  }
  
  ////////////////////////C2////////////////
  
  for(var i = 0; i<pointsc1.length; i++) {
    pointsc2[i]=sketch.createVector(pointsc1[i].x + 147,pointsc1[i].y);
    pointsc2n[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
    pointsc2da[i] = sketch.createVector();
    if (sWindow == true) {
      pointsc2[i].x += 42;
      pointsc2[i].y -= 0;
    }
  }
  
  ////////////////////DSUP/////////////////
  
  pointsdsup[0] = sketch.createVector(420,127);
  pointsdsup[1] = sketch.createVector(388,142);
  pointsdsup[2] = sketch.createVector(388,256);
  pointsdsup[3] = sketch.createVector(419,273);
  pointsdsup[4] = sketch.createVector(484,270);
  pointsdsup[5] = sketch.createVector(535,207);
  pointsdsup[6] = sketch.createVector(535,193);
  pointsdsup[7] = sketch.createVector(484,130);
  
  for(var i = 0; i<pointsdsup.length; i++) {
    pointsdsupn[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
    pointsdsupda[i] = sketch.createVector();
    if (sWindow == true) {
      pointsdsup[i].x -= 372;
      pointsdsup[i].y += 90;
    }
  }
  
  ///////////////////DINF////////////////////////
  
  pointsdinf[0] = sketch.createVector(420,156);
  pointsdinf[1] = sketch.createVector(420,243);
  pointsdinf[2] = sketch.createVector(471,240);
  pointsdinf[3] = sketch.createVector(504,200);
  pointsdinf[4] = sketch.createVector(471,159);
  
  for(var i = 0; i<pointsdinf.length; i++) {
    pointsdinfn[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
    pointsdinfda[i] = sketch.createVector();
    
    if (sWindow == true) {
      pointsdinf[i].x -= 372;
      pointsdinf[i].y += 90;
    }
  }
  
  //////////////////M////////////////
  pointsm[0] = sketch.createVector(590,127);
  pointsm[1] = sketch.createVector(558,142);
  pointsm[2] = sketch.createVector(558,273);
  pointsm[3] = sketch.createVector(590,273);
  pointsm[4] = sketch.createVector(590,190);
  pointsm[5] = sketch.createVector(633,249);
  pointsm[6] = sketch.createVector(647,249);
  pointsm[7] = sketch.createVector(690,190);
  pointsm[8] = sketch.createVector(690,273);
  pointsm[9] = sketch.createVector(722,273);
  pointsm[10] = sketch.createVector(722,142);
  pointsm[11] = sketch.createVector(690,127);
  pointsm[12] = sketch.createVector(640,200);
  
  for(var i = 0; i<pointsm.length; i++) {
    pointsmn[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
    pointsmda[i] = sketch.createVector();
    if (sWindow == true) {
      pointsm[i].x -= 372;
      pointsm[i].y += 90;
    }
  }
}

sketch.draw = function() {

  increment=sketch.map(sketch.abs(sketch.dist(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY)),0,800,0.01,3);

  windowSize = window.innerWidth;

  tempo++;
  
  
  if (windowSize<800) {
    sWindow = true;
  } else {
    sWindow = false;
  }
  
  sketch.clear();
  raioi = raioi + (2*3.15/(24*periodo));
  raio = rini + (rmax*sketch.cos(raioi));
  sketch.fill(fillcolor);
  sketch.noStroke();
  
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  
  sketch.beginShape();
  for (var i = 0; i<pointsc1.length; i++) {
    pointsc1n[i].x = pointsc1n[i].x + increment;
    pointsc1n[i].y = pointsc1n[i].y + increment;
    
    pointsc1da.x = raio * sketch.noise(pointsc1n[i].x);
    pointsc1da.y = 2*3.15 * sketch.noise(pointsc1n[i].y);
    
    var x = pointsc1[i].x+(pointsc1da.x* sketch.cos(pointsc1da.y));
    var y = pointsc1[i].y+(pointsc1da.x* sketch.sin(pointsc1da.y));
    
    sketch.vertex(x, y);
  }
  sketch.endShape(sketch.CLOSE);
  
  /////////////////////////////////////////
  
  sketch.beginShape();
  for (var i = 0; i<pointsc2.length; i++) {
    pointsc2n[i].x = pointsc2n[i].x + increment;
    pointsc2n[i].y = pointsc2n[i].y + increment;
    
    pointsc2da.x = raio * sketch.noise(pointsc2n[i].x);
    pointsc2da.y = 2*3.15 * sketch.noise(pointsc2n[i].y);
    
    var x = pointsc2[i].x+(pointsc2da.x* sketch.cos(pointsc2da.y));
    var y = pointsc2[i].y+(pointsc2da.x* sketch.sin(pointsc2da.y));
    
    sketch.vertex(x, y);
  }
  sketch.endShape(sketch.CLOSE);
  
  ////////////////////////D/////////////////
  
  sketch.beginShape();
  
  for (var i = 0; i<pointsdsup.length; i++) {
    pointsdsupn[i].x = pointsdsupn[i].x + increment;
    pointsdsupn[i].y = pointsdsupn[i].y + increment;
    
    pointsdsupda.x = raio * sketch.noise(pointsdsupn[i].x);
    pointsdsupda.y = 2*3.15 * sketch.noise(pointsdsupn[i].y);
    
    var x = pointsdsup[i].x+(pointsdsupda.x* sketch.cos(pointsdsupda.y));
    var y = pointsdsup[i].y+(pointsdsupda.x* sketch.sin(pointsdsupda.y));
    
    sketch.vertex(x, y);
  }
  
  sketch.beginContour();
  for (var i = (pointsdinf.length)-1; i>=0; i--) {
    pointsdinfn[i].x = pointsdinfn[i].x + increment;
    pointsdinfn[i].y = pointsdinfn[i].y + increment;
    
    pointsdinfda.x = raio/1.5 * sketch.noise(pointsdinfn[i].x);
    pointsdinfda.y = 2*3.15 * sketch.noise(pointsdinfn[i].y);
    
    var x = pointsdinf[i].x+(pointsdinfda.x* sketch.cos(pointsdinfda.y));
    var y = pointsdinf[i].y+(pointsdinfda.x* sketch.sin(pointsdinfda.y));
    
    sketch.vertex(x, y);
  }
  sketch.endContour(sketch.CLOSE);
  sketch.endShape(sketch.CLOSE);
  //////////////////////M////////////////
  
  sketch.beginShape();
  
  for (var i = 0; i<pointsm.length; i++) {
    pointsmn[i].x = pointsmn[i].x + increment;
    pointsmn[i].y = pointsmn[i].y + increment;
    
    pointsmda.x = raio * sketch.noise(pointsmn[i].x);
    pointsmda.y = 2*3.15 * sketch.noise(pointsmn[i].y);
    
    var x = pointsm[i].x+(pointsmda.x* sketch.cos(pointsmda.y));
    var y = pointsm[i].y+(pointsmda.x* sketch.sin(pointsmda.y));
    
    sketch.vertex(x, y);
  }
  
  sketch.endShape(sketch.CLOSE);

  if (tempo==1) {
    if (sWindow == true && pointsc2[3].x == 276) {
      for(var i = 0; i<pointsc1.length; i++) {
        pointsc1[i].x -= 68;
        pointsc1[i].y -= 91;
        pointsc2[i].x -= 26;
        pointsc2[i].y -= 91;
      }
      for(var i = 0; i<pointsdsup.length; i++) {
        pointsdsup[i].x -= 372;
        pointsdsup[i].y += 90;
      }
      for(var i = 0; i<pointsdinf.length; i++) {
        pointsdinf[i].x -= 372;
        pointsdinf[i].y += 90;
      }
      for(var i = 0; i<pointsm.length; i++) {
        pointsm[i].x -= 372;
        pointsm[i].y += 90;
      }
    }
      
      if (sWindow == false && pointsc2[3].x == 250) {
        for(var i = 0; i<pointsc1.length; i++) {
          pointsc1[i].x += 68;
          pointsc1[i].y += 91;
          pointsc2[i].x += 26;
          pointsc2[i].y += 91;
        }
        for(var i = 0; i<pointsdsup.length; i++) {
          pointsdsup[i].x += 372;
          pointsdsup[i].y -= 90;
        }
        for(var i = 0; i<pointsdinf.length; i++) {
          pointsdinf[i].x += 372;
          pointsdinf[i].y -= 90;
        }
        for(var i = 0; i<pointsm.length; i++) {
          pointsm[i].x += 372;
          pointsm[i].y -= 90;
        }
        
      }
    }
}
  


sketch.windowResized = function() {
  tempo = 0;
  if(window.innerWidth<800){
    sketch.resizeCanvas(360,400);
  }
  else {
    sketch.resizeCanvas(800,400);
  }
}
}

///////////////////////////////////////////////////////




///////////////////////////////////////////////////////
var ccdmpequeno = function( sketch ) {

  var pointsc1 = [];
  var pointsc2 = [];
  var pointsm = [];
  var pointsdsup = [];
  var pointsdinf = [];
  
  var pointsc1n = [];
  var pointsc2n = [];
  var pointsmn = [];
  var pointsdsupn = [];
  var pointsdinfn = [];
  
  var pointsc1da = [];
  var pointsc2da = [];
  var pointsmda = [];
  var pointsdsupda = [];
  var pointsdinfda = [];
  
  var increment = 0.01;
  var periodo = 50;
  
  var raio = 0;
  var raioi = 0;
  var rini = 3;
  var rmax = 3;
  var randon = 2;
  
  sketch.setup = function() {
  
    escolherCor();
  
    sketch.frameRate(24);
    
    var myCanvas = sketch.createCanvas(163,45);
    myCanvas.parent("logopequeno");
    
    raioi = raioi + (2*3.15/(24*periodo));
    
    ///////////////////////C1/////////////////////////////
    pointsc1[0] = sketch.createVector(17,5);
    pointsc1[1] = sketch.createVector(5,22);
    pointsc1[2] = sketch.createVector(17,40);
    pointsc1[3] = sketch.createVector(25,40);
    pointsc1[4] = sketch.createVector(38,35);
    pointsc1[5] = sketch.createVector(36,29);
    pointsc1[6] = sketch.createVector(22,33);
    pointsc1[7] = sketch.createVector(14,22);
    pointsc1[8] = sketch.createVector(22,12);
    pointsc1[9] = sketch.createVector(35,16);
    pointsc1[10] = sketch.createVector(38,10);
    pointsc1[11] = sketch.createVector(25,5);
    
    for(var i = 0; i<pointsc1.length; i++) {
      pointsc1n[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
      pointsc1da[i] = sketch.createVector();
      
      
    }
    
    ////////////////////////C2////////////////
    
    for(var i = 0; i<pointsc1.length; i++) {
      pointsc2[i]=sketch.createVector(pointsc1[i].x + 35,pointsc1[i].y);
      pointsc2n[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
      pointsc2da[i] = sketch.createVector();
      
    }
    
    ////////////////////DSUP/////////////////
    
    pointsdsup[0] = sketch.createVector(86,5);
    pointsdsup[1] = sketch.createVector(79,9);
    pointsdsup[2] = sketch.createVector(79,36);
    pointsdsup[3] = sketch.createVector(86,40);
    pointsdsup[4] = sketch.createVector(102,39);
    pointsdsup[5] = sketch.createVector(114,24);
    pointsdsup[6] = sketch.createVector(114,21);
    pointsdsup[7] = sketch.createVector(102,6);
    
    for(var i = 0; i<pointsdsup.length; i++) {
      pointsdsupn[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
      pointsdsupda[i] = sketch.createVector();
      
    }
    
    ///////////////////DINF////////////////////////
    
    pointsdinf[0] = sketch.createVector(86,12);
    pointsdinf[1] = sketch.createVector(86,33);
    pointsdinf[2] = sketch.createVector(98,32);
    pointsdinf[3] = sketch.createVector(106,23);
    pointsdinf[4] = sketch.createVector(98,13);
    
    for(var i = 0; i<pointsdinf.length; i++) {
      pointsdinfn[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
      pointsdinfda[i] = sketch.createVector();
      
      
    }
    
    //////////////////M////////////////
    pointsm[0] = sketch.createVector(127,5);
    pointsm[1] = sketch.createVector(119,9);
    pointsm[2] = sketch.createVector(119,40);
    pointsm[3] = sketch.createVector(127,40);
    pointsm[4] = sketch.createVector(127,20);
    pointsm[5] = sketch.createVector(137,34);
    pointsm[6] = sketch.createVector(140,34);
    pointsm[7] = sketch.createVector(151,20);
    pointsm[8] = sketch.createVector(151,40);
    pointsm[9] = sketch.createVector(158,40);
    pointsm[10] = sketch.createVector(158,9);
    pointsm[11] = sketch.createVector(151,5);
    pointsm[12] = sketch.createVector(139,22);
    
    for(var i = 0; i<pointsm.length; i++) {
      pointsmn[i] = sketch.createVector(sketch.random(0,randon),sketch.random(0,randon));
      pointsmda[i] = sketch.createVector();
      
    }
  }
  
  sketch.draw = function() {
  
    increment=sketch.map(sketch.abs(sketch.dist(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY)),0,800,0.01,3);
  
    windowSize = window.innerWidth;
    
    sketch.clear();
    raioi = raioi + (2*3.15/(24*periodo));
    raio = rini + (rmax*sketch.cos(raioi));
    sketch.fill(fillcolor);
    sketch.noStroke();
    
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    
    sketch.beginShape();
    for (var i = 0; i<pointsc1.length; i++) {
      pointsc1n[i].x = pointsc1n[i].x + increment;
      pointsc1n[i].y = pointsc1n[i].y + increment;
      
      pointsc1da.x = raio * sketch.noise(pointsc1n[i].x);
      pointsc1da.y = 2*3.15 * sketch.noise(pointsc1n[i].y);
      
      var x = pointsc1[i].x+(pointsc1da.x* sketch.cos(pointsc1da.y));
      var y = pointsc1[i].y+(pointsc1da.x* sketch.sin(pointsc1da.y));
      
      sketch.vertex(x, y);
    }
    sketch.endShape(sketch.CLOSE);
    
    /////////////////////////////////////////
    
    sketch.beginShape();
    for (var i = 0; i<pointsc2.length; i++) {
      pointsc2n[i].x = pointsc2n[i].x + increment;
      pointsc2n[i].y = pointsc2n[i].y + increment;
      
      pointsc2da.x = raio * sketch.noise(pointsc2n[i].x);
      pointsc2da.y = 2*3.15 * sketch.noise(pointsc2n[i].y);
      
      var x = pointsc2[i].x+(pointsc2da.x* sketch.cos(pointsc2da.y));
      var y = pointsc2[i].y+(pointsc2da.x* sketch.sin(pointsc2da.y));
      
      sketch.vertex(x, y);
    }
    sketch.endShape(sketch.CLOSE);
    
    ////////////////////////D/////////////////
    
    sketch.beginShape();
    
    for (var i = 0; i<pointsdsup.length; i++) {
      pointsdsupn[i].x = pointsdsupn[i].x + increment;
      pointsdsupn[i].y = pointsdsupn[i].y + increment;
      
      pointsdsupda.x = raio * sketch.noise(pointsdsupn[i].x);
      pointsdsupda.y = 2*3.15 * sketch.noise(pointsdsupn[i].y);
      
      var x = pointsdsup[i].x+(pointsdsupda.x* sketch.cos(pointsdsupda.y));
      var y = pointsdsup[i].y+(pointsdsupda.x* sketch.sin(pointsdsupda.y));
      
      sketch.vertex(x, y);
    }
    
    sketch.beginContour();
    for (var i = (pointsdinf.length)-1; i>=0; i--) {
      pointsdinfn[i].x = pointsdinfn[i].x + increment;
      pointsdinfn[i].y = pointsdinfn[i].y + increment;
      
      pointsdinfda.x = raio/1.5 * sketch.noise(pointsdinfn[i].x);
      pointsdinfda.y = 2*3.15 * sketch.noise(pointsdinfn[i].y);
      
      var x = pointsdinf[i].x+(pointsdinfda.x* sketch.cos(pointsdinfda.y));
      var y = pointsdinf[i].y+(pointsdinfda.x* sketch.sin(pointsdinfda.y));
      
      sketch.vertex(x, y);
    }
    sketch.endContour(sketch.CLOSE);
    sketch.endShape(sketch.CLOSE);
    //////////////////////M////////////////
    
    sketch.beginShape();
    
    for (var i = 0; i<pointsm.length; i++) {
      pointsmn[i].x = pointsmn[i].x + increment;
      pointsmn[i].y = pointsmn[i].y + increment;
      
      pointsmda.x = raio * sketch.noise(pointsmn[i].x);
      pointsmda.y = 2*3.15 * sketch.noise(pointsmn[i].y);
      
      var x = pointsm[i].x+(pointsmda.x* sketch.cos(pointsmda.y));
      var y = pointsm[i].y+(pointsmda.x* sketch.sin(pointsmda.y));
      
      sketch.vertex(x, y);
    }
    
    sketch.endShape(sketch.CLOSE);
  
  }
}
///////////////////////////////////////////////////////

var retangulo = function( sketch, pai) {

var w=sobreW;
var h=sobreH;

var nomeParent;
var points = [];
var pointsn = [];
var raioi = 5;
var increment = 0.01;
var periodo = 10;
var ff = 15;
var raiomax = 15;

sketch.setup = function() {
  var myCanvas = sketch.createCanvas(w,h);
  myCanvas.parent(pai);
  nomeParent = myCanvas.parent().id;

  redimensionar();

  if (nomeParent == "idAstrid") {
    w =astridW;
    h=astridH;
    sketch.noStroke();
    sketch.fill(fillcolor);
  } else if (nomeParent == "idKarel") {
    w =karelW;
    h=karelH;
    sketch.noStroke();
    sketch.fill(fillcolor);
  } else if (nomeParent == "idLuis") {
    w =luisW;
    h=luisH;
    sketch.noStroke();
    sketch.fill(fillcolor);
  } else if (nomeParent == "idSobre") {
    w =sobreW;
    h=sobreH;
    sketch.stroke(fillcolor);
    sketch.noFill();
    sketch.strokeWeight(2);
  }

  sketch.resizeCanvas(w,h);

  sketch.frameRate(24);
  points[0] = sketch.createVector(ff,ff);
  points[1] = sketch.createVector(ff,(h-ff));
  points[2] = sketch.createVector((w-ff),(h-ff));
  points[3] = sketch.createVector((w-ff),ff);
  for(var i= 0; i<points.length; i++) {
    pointsn[i] = sketch.createVector(sketch.random(0,500),sketch.random(0,500));
  }
}

sketch.draw = function() {
  if (nomeParent == "idAstrid") {
    sketch.noStroke();
    sketch.fill(fillcolor);
  } else if (nomeParent == "idKarel") {
    sketch.noStroke();
    sketch.fill(fillcolor);
  } else if (nomeParent == "idLuis") {
    sketch.noStroke();
    sketch.fill(fillcolor);
  } else if (nomeParent == "idSobre") {
    sketch.stroke(fillcolor);
    sketch.noFill();
    sketch.strokeWeight(2);
  }

  increment=sketch.map(sketch.abs(sketch.dist(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY)),0,800,0.01,3);

  raioi = raioi + (2*3.15/(24*periodo));
  raio = raiomax*sketch.cos(raioi);
  sketch.clear();
  sketch.beginShape();
  for(var i= 0; i<points.length; i++) {
    pointsn[i].x = pointsn[i].x + sketch.random(0,increment);
    pointsn[i].y = pointsn[i].y + sketch.random(0,increment);
    var distance = raio * sketch.noise(pointsn[i].x);
    var angle = 2*3.15 * sketch.noise(pointsn[i].y);
    sketch.vertex(points[i].x+(distance* sketch.cos(angle)),points[i].y+(distance* sketch.sin(angle)));
  }
  sketch.endShape(sketch.CLOSE);
}

sketch.windowResized = function () {

  if (nomeParent == "idAstrid") {
    w =astridW;
    h=astridH;
  } else if (nomeParent == "idKarel") {
    w =karelW;
    h=karelH;
  } else if (nomeParent == "idLuis") {
    w =luisW;
    h=luisH;
  } else if (nomeParent == "idSobre") {
    w =sobreW;
    h=sobreH;
  }

  sketch.resizeCanvas(w,h);
  points[0] = sketch.createVector(ff,ff);
  points[1] = sketch.createVector(ff,(h-ff));
  points[2] = sketch.createVector((w-ff),(h-ff));
  points[3] = sketch.createVector((w-ff),ff);
}
}

let ccdmSketch = new p5(ccdm);
let ccdmPequenoSketch = new p5(ccdmpequeno);
let astridDiv = new p5(retangulo,"idAstrid");
let karelDiv = new p5(retangulo,"idKarel");
let luisDiv = new p5(retangulo,"idLuis");
let sobreDiv = new p5(retangulo,"idSobre");


var altura = document.querySelector("#ccdm").offsetHeight;

document.addEventListener("scroll",funcaoScroll);

function funcaoScroll(){
  if(window.scrollY<altura){
    document.querySelector("#logopequeno").classList.remove('show');
    document.querySelector("#logopequeno").classList.add('hide');
  } else {
    document.querySelector("#logopequeno").classList.remove('hide');
    document.querySelector("#logopequeno").classList.add('show');
  }
}