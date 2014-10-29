var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.count++] = value;
};

Stack.prototype.pop = function () {
  if (this.size() > 0) {
    var result = this.storage[--this.count];
    delete this.storage[this.count];
    return result;
  }
};

Stack.prototype.size = function () {
  return this.count;
};
