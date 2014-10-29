var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    count: 0,
    storage: {}
  };

  return _.extend(someInstance, stackMethods);
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count++] = value;
  },
  pop: function() {
    if (this.size() > 0){
      var result = this.storage[--this.count];
      delete this.storage[this.count];
      return result;
    }
  },
  size: function() {
    return this.count;
  }
};


