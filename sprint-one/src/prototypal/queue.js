var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.nextInQueue = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.count++] = value;
  },
  dequeue: function () {
    if (this.size() > 0) {
      var result = this.storage[this.nextInQueue];
      delete this.storage[this.nextInQueue++];
      return result;
    }
  },
  size: function () {
    return this.count - this.nextInQueue;
  }
};
