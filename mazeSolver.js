var canvas = document.querySelector('canvas');

var drawBoardMaxWid = window.innerWidth - 5;
var drawBoardMaxHei = window.innerHeight - 8;
canvas.width = drawBoardMaxWid;
canvas.height = drawBoardMaxHei;

var c = canvas.getContext('2d');

//VARIABLES
var mouse = {
  x: undefined,
  y: undefined
}

colorArray = [
  '#BF0B3B',
  '#4A44F2',
  '#F2E635',
  '#F2BE22',
  '#F20505'
];

maxHex = 1

//EVENT LISTENERS
window.addEventListener('mousemove',
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  }
);

window.addEventListener('resize',
  function() {
    drawBoardMaxWid = window.innerWidth - 5;
    drawBoardMaxHei = window.innerHeight - 8;
    canvas.width = drawBoardMaxWid;
    canvas.height = drawBoardMaxHei;

    init();
  }
);

window.addEventListener('click',
  function() {
    init()
  }
);



//UTIL
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(color){
  return color[Math.floor(Math.random() * color.length)];
}



function Hex(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.draw = function() {
    c.beginPath();
    //Hex Center
    console.log('cen', x,y);
    c.moveTo(this.x, this.y);
    c.arc(this.x, this.y, 0.5, 0, Math.PI * 2, false);

    //Hex first point
    var sideX = this.x - (this.size / 2);
    var sideY = this.y - this.size;
    console.log('p1 ', sideX, sideY);
    c.moveTo(sideX, sideY);

    // Hex second point
    var angX = sideX + Math.floor(Math.cos(0)*size);
    var angY = sideY + Math.floor(Math.sin(0)*size);
    console.log('an1', angX, angY);
    c.lineTo(angX, angY);

    // Hex third point
    angX = angX + Math.floor(Math.cos(Math.PI/3)*size);
    angY = angY + Math.floor(Math.sin(Math.PI/3)*size);
    console.log('an2', angX, angY);
    c.lineTo(angX, angY);

    // Hex fourth point
    angX = angX + Math.floor(Math.cos(Math.PI/3*2)*size);
    angY = angY + Math.floor(Math.sin(Math.PI/3*2)*size);
    console.log('an3', angX, angY);
    c.lineTo(angX, angY);

    // Hex fifth point
    angX = angX + Math.floor(Math.cos(Math.PI/3*3)*size);
    angY = angY + Math.floor(Math.sin(Math.PI/3*3)*size);
    console.log('an4', angX, angY);
    c.lineTo(angX, angY);

    // Hex sixth point
    angX = angX + Math.floor(Math.cos(Math.PI/3*4)*size);
    angY = angY + Math.floor(Math.sin(Math.PI/3*4)*size);
    console.log('an5', angX, angY);
    c.lineTo(angX, angY);

    //
    // for (var side = 0; side < 7; side++) {
    //   console.log(this.x + this.size * Math.cos(this.size * 2 * Math.PI / 6), this.y + this.size * Math.sin(side * 2 * Math.PI / 6));
    //   c.lineTo(this.x + this.size * Math.cos(this.size * 2 * Math.PI / 6), this.y + this.size * Math.sin(side * 2 * Math.PI / 6));
    // }

    c.fillStyle = '#333333';
    c.fill();
    c.strokeStyle = 'black';
    c.stroke();
  }
}

function init() {
  HexArray = [];
  for (var i = 0; i < maxHex; i++) {
    var x = 100;
    var y = 100;
    var size = 100;
    HexArray.push(new Hex(x, y, size));
  }
}

function animate() {
  //requestAnimationFrame(animate);
  c.clearRect(0, 0, drawBoardMaxWid, drawBoardMaxHei);
  for (var i = 0; i < HexArray.length; i++) {
    HexArray[i].draw();
  }
}

console.log('init');
init();
console.log('animate');
animate();
