const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

ListNode = function(x) {
  this.value = x;
  this.next = null;
}

module.exports = class Queue {
  constructor(list) {
    this._list = null;
  }

  getUnderlyingList() {
    return this._list;
  }

  enqueue(value) {
    if (!this._list) {
      this._list = new ListNode(value);
    } else {
      let current = this._list;
      while(current.next) current = current.next;
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    let value = this._list.value;
    let next = this._list.next;
    return value;
  }

}
