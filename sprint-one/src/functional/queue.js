var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var nextInQueue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count++] = value;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() > 0) {
      var result = storage[nextInQueue];
      delete storage[nextInQueue];
      nextInQueue++;
      return result;
    }
  };

  someInstance.size = function(){
    return count - nextInQueue;
  };

  return someInstance;
};
