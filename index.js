//Start the work here 
const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');



//call the functions in a random order at certain intervals
setInterval(function(){ 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let random = Math.floor(Math.random() * 5);
  //make array of functions
  let functions = [square, rectangle, circle, triangle];
  //call random function
  functions[random]();
}, 200);



function square(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = randomColor()
  
  ctx.fillRect(Math.random() * canvas.width/2, Math.random() * canvas.height/2, 
  Math.random() * 100, Math.random() * 100);
  ctx.fill();
  ctx.stroke();
  
}

function rectangle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = randomColor()
  ctx.fillRect(Math.random() * canvas.width/2, Math.random() * canvas.height/2, 
  Math.random() * 200, Math.random() * 100);
  ctx.fill();
  ctx.stroke();
}

function circle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = randomColor()
  ctx.beginPath();
  ctx.arc(Math.random() * canvas.width/2, Math.random() * canvas.height/2,
  Math.random() * 50, 0, 2 * Math.PI,false);
  ctx.fill();
  ctx.stroke();
  
}

function triangle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = randomColor()

  ctx.beginPath();
  ctx.moveTo(Math.random() * canvas.width/2, Math.random() * canvas.height/2);
  ctx.lineTo(Math.random() * canvas.width/2, Math.random() * canvas.height/2);
  ctx.lineTo(Math.random() * canvas.width/2, Math.random() * canvas.height/2);
  ctx.fill();
  ctx.stroke();
  
}

function randomColor(){
  let colors = 'rgb(' + Math.floor(Math.random() * 256) + ',' +  Math.floor(Math.random() * 256) + ',' +  Math.floor(Math.random() * 256) + ')'; 
  return colors;
}