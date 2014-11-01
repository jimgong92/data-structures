// Linked Lists are after Bloom Filters

var BloomFilter = function(m, k) {
  this._m = m;
  this._k = k;
  this._bloomArray = function(m){
    var array = Array(m);
    for (var i = 0; i < m; i++) {
      array[i] = false;
    }
    return array;
  }(this._m);
};

BloomFilter.prototype.mayContain = function (v) {
  return this._bloomArray[hash1(v, this._m)] && this._bloomArray[hash2(v, this._m)] && this._bloomArray[hash3(v, this._m)];
};

BloomFilter.prototype.add = function (value) {
  this._bloomArray[hash1(value, this._m)] = true;
  this._bloomArray[hash2(value, this._m)] = true;
  this._bloomArray[hash3(value, this._m)] = true;
};

var hash1 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<6) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var hash2 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<7) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var hash3 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<8) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var myBloomFilter = new BloomFilter(18, 3);


var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list._addToTail = function(value){
    var newNode = makeNode(value);
    if (list.tail === null) {
      list.head = newNode;
    } else {
      newNode.prev = list.tail;//
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.addToTail = function(value) {
    list._addToTail(value);
    myBloomFilter.add(value);
  };

  list._addToHead = function(value) {
    var newNode = makeNode(value);
    if (list.head === null) {
      list.tail = newNode;
    } else {
      newNode.next = list.head;//
      list.head.prev = newNode;
    }
    list.head = newNode;
  };

  list.addToHead = function(value) {
    list._addToHead(value);
    myBloomFilter.add(value);
  };

  list.removeTail = function() {
    var currentTail = list.tail;
    list.tail = currentTail.prev;
    if (list.tail) list.tail.next = null;
    return currentTail.value;
  };

  list.removeHead = function(){
    var currentHead = list.head;
    list.head = currentHead.next;
    if (list.head) list.head.prev = null;
    return currentHead.value;
  };

  list.contains = function(target){
    // debugger;
    if (myBloomFilter.mayContain(target)) {
      var currentNode = list.head;
      if (!currentNode) return false;
      while(currentNode !== null) {
        if(currentNode.value === target) return true;
        currentNode = currentNode.next;
      }
      return false;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// //Meanwhile
// myList = makeList();

// _.bind(, myList)

