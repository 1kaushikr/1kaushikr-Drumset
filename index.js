var j = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", handlekey);

function handlekey(event) {
  var h = event.key;
  Switch(h);
  btnAni(h);
}

for (var i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var innerHtml = this.innerHTML;
  Switch(innerHtml);
  btnAni(innerHtml);
}

function Switch(j) {
  switch (j) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(j);

  }
}

function btnAni(KEY)
{
  var activeBtn = document.querySelector("."+KEY);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100);
}
