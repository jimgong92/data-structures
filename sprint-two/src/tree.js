var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  if (this.value === target) return true;
  for (var i = 0; i < (this.children).length; i++) {
    var child = this.children[i];
    if (child.contains(target)) return true;
  }
  return false;
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    var siblings = this.parent.children;
    siblings.splice(siblings.indexOf(this), 1);
    this.parent = null;
  }
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  for (var i = 0; i < this.children.length; i++){
    this.children[i].traverse(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
