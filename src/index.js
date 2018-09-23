class Sorter {
  constructor(arr) {
     this.arr = [];
 }

  add(element) {
    return this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
   }

  toArray() {
    return this.arr;
  }
  
  sort(indices) {
     
    return this.arr.sort(function(a, b) {
      return a - b;
    });

  }

  setComparator(compareFunction) {
   return this.arr.sort(function(a, b) {
      return b - a;
    });
  }  
  
}
 module.exports = Sorter;