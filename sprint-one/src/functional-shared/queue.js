var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.nextInQueue = 0;
  return _.extend(someInstance, queueMethods);
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.count++] = value;
  },
  dequeue : function(){
    if (this.size() > 0) {
      var res = this.storage[this.nextInQueue];
      delete this.storage[this.nextInQueue++];
      return res;
    }
  },
  size : function(){
    return this.count - this.nextInQueue;
  }
};
