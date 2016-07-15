var button = document.getElementById("button");

button.addEventListener("click", makeTree);
document.addEventListener("keydown", enter);

function enter(e) {
    if (13 == e.keyCode) {
     makeTree()
 }
}

function makeTree() {
  var height = document.getElementById("height").value;
  var char = document.getElementById("char").value;

  if(height === "" || char === "") {
    alert("You need to enter values!")
  }

  var addCounter = 1;

  for (var i = 0; i < height; i += 0){
    console.log(" ".repeat(height) + char.repeat(addCounter));
    addCounter += 2;
    height-=1;
  }
}
