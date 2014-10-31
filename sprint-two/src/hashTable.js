var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  // this._collisions = {};
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var isFound = false;
  for (var j = 0; j < bucket.length; j++) {
    var val = bucket[j];
    if (val[0] === k) {
      val[1] = v;
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    var newItem = [k, v];
    bucket.push(newItem);
  }
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return null;
  }
  else {
    var res = null;
    _.each(bucket, function(item) {
      if(item[0] === k) res = item[1];
    });
    return res;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(item, index, bucket) {
    if (item[0] === k) {
      bucket.splice(index, 1);
    }
  });
  if (bucket.length === 0) this._storage.set(i, null);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//
