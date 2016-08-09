var button = document.getElementById("button");
var height = document.getElementById("height");
var char = document.getElementById("char");

button.addEventListener("click", newTree);
height.addEventListener("keydown", enter);
char.addEventListener("keydown", enter);


function enter(e) {
    if (13 == e.keyCode) {
      newTree()
  }
}

function newTree () {
  var treeObj = {};
  treeObj.newHeight = document.getElementById("height").value;
  treeObj.newChar = document.getElementById("char").value;
  makeTree(treeObj)
}

function makeTree(treeObj) {
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
