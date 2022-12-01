document.addEventListener("keydown", function (event) {
  var btn = event.key;
  sound(btn);
  animation(btn);
});

var drumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var btn = this.innerHTML;
    sound(btn);
    animation(btn);
  });
}


function animation(btn)
{
    var activeBtn = document.querySelector("."+btn);
    activeBtn.classList.add("pressed");
    setTimeout(function()
    {
        activeBtn.classList.remove("pressed");
    },100);
}



function sound(btn) {
  var w = new Audio("crash.mp3");
  var a = new Audio("snare.mp3");
  var s = new Audio("kick-bass.mp3");
  var d = new Audio("tom-1.mp3");
  var j = new Audio("tom-2.mp3");
  var k = new Audio("tom-3.mp3");
  var l = new Audio("tom-4.mp3");

  switch (btn) {
    case "w":
      w.play();
      break;
    case "a":
      a.play();
      break;
    case "s":
      s.play();
      break;
    case "d":
      d.play();
      break;
    case "j":
      j.play();
      break;
    case "k":
      k.play();
      break;
    case "l":
      l.play();
      break;
    default:
      break;
  }
}



// document.querySelector("button").addEventListener("click",function()
// {
// var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// });

// function handleClick() {
//
// }
