var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
  console.log('==============New Hash Table=============')
};

HashTable.prototype.insert = function(k, v, rehash){
  rehash = rehash || false;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var found = false;
  for (var j = 0; j < bucket.length; j++) {
    var val = bucket[j];
    if (val[0] === k) {
      val[1] = v;
      found = true;
      break;
    }
  }
  if (!found) {
    var newItem = [k, v];
    bucket.push(newItem);
    if (!rehash) this._size++;
  }
  this._storage.set(i, bucket);
  this.resize();
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
  this._size--;
  this.resize();
};

HashTable.prototype.resize = function() {
  if (this._size/this._limit < 0.25) {
    this._limit /= 2;
    console.log('decreasing size, limit goes from ', this._limit*2, ' to ', this._limit, ', size is ', this._size);
  } else if (this._size/this._limit > 0.75) {
    this._limit *= 2;
    console.log('increasing size, limit goes from ', this._limit/2, ' to ', this._limit, ', size is ', this._size);
  } else {
    return;
  }
  // resizing will be done here
  var oldStorage = this._storage;
  var insertItem = _.bind(function(item) {
    this.insert(item[0], item[1], true);
  }, this);
  this._storage = makeLimitedArray(this._limit);
  oldStorage.each(function(bucket, index, oldStorage) {
    _.each(bucket, insertItem);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//
