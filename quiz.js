var button = document.getElementById("button");
var height = document.getElementById("height");
var char = document.getElementById("char");

button.addEventListener("click", makeTree);
height.addEventListener("keydown", enter);
char.addEventListener("keydown", enter);

var treeObj = {};
console.log(treeObj)
function enter(e) {
    if (13 == e.keyCode) {
      makeTree()
      console.log(treeObj)
  }
}

function newTree () {
  treeObj.newHeight = document.getElementById("height").value;
  treeObj.newChar = document.getElementById("char").value;
  console.log(treeObj)
}

function makeTree() {
  newTree();
  if(treeObj.newHeight === "" || treeObj.newChar === "") {
      alert("You need to enter values!")
  }

  var addCounter = 1;

  for (var i = 0; i < treeObj.newHeight; i += 0){
    console.log(" ".repeat(treeObj.newHeight) + treeObj.newChar.repeat(addCounter));
    addCounter += 2;
    treeObj.newHeight-=1;
  }
}
