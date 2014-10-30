var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._collisions = {};
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var values = this._storage.get(i) || [];
  if (values.length > 0) {
    this._collisions[k] = values.length;
  }
  values.push(v);
  this._storage.set(i, values);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketIndex = this._collisions[k] || 0;
  return this._storage.get(i)[bucketIndex];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketIndex = this._collisions[k] || 0;
  this._storage.get(i)[bucketIndex] = null;
  delete this._collisions[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
