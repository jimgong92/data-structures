var Graph = function(){
  this._nodes = {};
};

var Node = function(value) {
  this.value = value;
  this.edges = [];
};

var Edge = function(fromNode, toNode) {
}

Graph.prototype.addNode = function(newNode, toNode){
  // toNode is optional sometimes
  var node = new Node(newNode);
  this._nodes[newNode] = node;
  if (this.size() === 2) {
    this.createDefaultEdge();
  }
  else if (this.size() > 2 && arguments[1]) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return !!this._nodes[node];
};

Graph.prototype.removeNode = function(node){
  delete this._nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return _.contains(this._nodes[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromEdges = this._nodes[fromNode].edges;
  var toEdges = this._nodes[toNode].edges;
  if (!_.contains(fromEdges, toNode)) {
    fromEdges.push(toNode);
    toEdges.push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromEdges = this._nodes[fromNode].edges;
  var toEdges = this._nodes[toNode].edges;
  var toIndex = fromEdges.indexOf(toNode);
  var fromIndex = toEdges.indexOf(fromNode);
  if (toIndex >= 0){
    fromEdges.splice(toIndex, 1);
    toEdges.splice(fromIndex, 1);
  }
};

Graph.prototype.forEachNode = function(callback, nodes){
  // nodes defaults to all the nodes
};

Graph.prototype.size = function() {
  return this._nodes.length;
};

Graph.prototype.createDefaultEdge = function() {
  this.addEdge(this._nodes[0].value, this._nodes[1].value);
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
