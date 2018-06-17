/**
@summary Given an encoded string, return its corresponding decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
@param {String} encoded string
@returns {String} decoded string
*/

class Node {
  constructor(value, k) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.k = k;
    this.decoded = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(value, k) {
    const node = new Node(value, k);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  traverseReverse(fn) {
    let current = this.tail;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.prev;
    }
  }
}

const decode = item => {
  let output = '';
  for (let i = 0; i < item.k; i++) {
    if (item.next) {
      output += item.value + item.next.decoded;
    } else output += item.value;
  }
  item.decoded = output;
};

const decodeString = s => {
  const list = new DoublyLinkedList();
  if (!s || !s.length) return '';
  for (let i = 0; i < s.length; i++) {
    const k = s[i];
    // when a number is reached get the encodedString between the brackets.
    if (!isNaN(k)) {
      s = s.substring(i + 2, s.length - 1);

      let stack = '';
      for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) break;
        else stack += s[i];
      }
      list.add(stack, k);

      i = 0; // reset loop back to the beginning
    }
  }
  list.traverseReverse(item => {
    decode(item);
  });
  return list.head.decoded;
};

module.exports.default = decodeString;
