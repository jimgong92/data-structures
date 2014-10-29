var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count++] = value;
  },
  pop: function() {
    if (this.size() > 0) {
      var result = this.storage[--this.count];
      delete this.storage[this.count];
      return result;
    }
  },
  size: function() {
    return this.count;
  }
};


