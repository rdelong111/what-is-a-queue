class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if (this.queue.length < this.limit) {
      this.queue.push(item);
    }
    else {
      throw Error('Error');
    }
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift();
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0];
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  // return true if queue is full, otherwise false
  isFull() {
    if (this.queue.length === this.limit) {
      return true;
    }
    else {
      return false;
    }
  }

  // return number of items in queue
  size() {
    return this.queue.length;
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] === target) {
        return i;
      }
    }
    return -1;
  }

  // print contents of queue: do not return the queue itself!
  print() {
    console.log(this.queue);
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Queue;
