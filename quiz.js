var button = document.getElementById("button");

button.addEventListener("click", makeTree)


function makeTree() {
var height = document.getElementById("height").value;
var char = document.getElementById("char").value;

var addCounter = 1;

for (var i = 0; i < height; i += 0){
    console.log(" ".repeat(height) + char.repeat(addCounter));
    addCounter += 2;
    height-=1;
 }
}
