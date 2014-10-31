var makeBinarySearchTree = function(value){
  var node = Object.create(makeBinarySearchTree.methods);
  node.left = null;
  node.right = null;
  node.value = value;
  return node;
};

makeBinarySearchTree.methods = {
  insert: function (value) {
    // Short version
    // var side = (this.value > value) ? 'left' : 'right';
    // (this[side] === null) ? (this[side] = makeBinarySearchTree(value)) : this[side]['insert'](value);

    // Long version
    if (this.value > value) {
      if (this.left === null) {
        this.left = makeBinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = makeBinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },
  contains: function (target) {
    if (this.value === target) return true;
    var side = (this.value > target) ? 'left' : 'right';
    if (this[side] === null) return false;
    return this[side]['contains'](target) || false;
  },
  depthFirstLog: function (callback) {
    var caller = function (node) {
      callback(node.value);
      if (node.left !== null) caller(node.left);
      if (node.right !== null) caller(node.right);
    }
    caller(this);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
