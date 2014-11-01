var makeBinarySearchTree = function(value){
  var node = Object.create(makeBinarySearchTree.methods);
  node.left = null;
  node.right = null;
  node.value = value;
  node.parent = null;
  return node;
};

makeBinarySearchTree.methods = {
  insert: function (value) {
    if (this.value > value) {
      if (this.left === null) {
        var newTree = makeBinarySearchTree(value);
        newTree.parent = this;
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        var newTree = makeBinarySearchTree(value);
        newTree.parent = this;
        this.right = newTree;
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
  },
  breadthFirstLog: function (callback) {
    var depth = 0;
    var maxDepth = this.getMaxDepth();
    while (depth <= maxDepth) {
      var nodes = this.getNodesAtDepth(depth);
      for (var i = 0; i < nodes.length; i++) {
        callback(nodes[i]);
      }
      depth++;
    }
  },
  getNodesAtDepth: function (depth) {
    var currentDepth = 0;
    var nodes = [];
    var sub = function (node) {
      node
    };
    sub(this);

  },
  getDepthForNode: function() {
    if (!this.parent) return 0;
    return this.parent.getDepthForNode() + 1;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
