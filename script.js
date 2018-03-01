
var buttonElement = document.getElementById('button1');
var audio1 = document.getElementById('my-audio1')
buttonElement.addEventListener('mouseenter', function() {
  console.log('I was clicked!')
  audio1.play()
});

var buttonElement = document.getElementById('button2');
var audio2 = document.getElementById('my-audio2')
buttonElement.addEventListener('mouseenter', function () {
  console.log('Do Something!')
  audio2.play()
});

var buttonElement = document.getElementById('button3');
var audio3 = document.getElementById('my-audio3')
buttonElement.addEventListener('mouseenter', function () {
  console.log('Hello!')
  audio3.play()
});

var buttonElement = document.getElementById('button4');
var audio4 = document.getElementById('my-audio4')
buttonElement.addEventListener('mouseenter', function () {
  console.log('Help!!')
  audio4.play()
})
