var i = 0;
var text ="Hello World! My name is Cynthia. Web Developer & Digital Literacy Instructor";
var speed = 50;



window.onload = function typeWriter(){
  if(i < text.length){
    document.getElementById("typewrite-intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



