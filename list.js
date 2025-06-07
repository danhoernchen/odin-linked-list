import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  setHead(value) {
    this.head = new Node(value);
  }

  prepend(value) {
    if (this.head === null) {
      this.setHead(value);
      return;
    }
    newNode = new Node(value, this.head);
    this.head = newNode;
  }

  append(value) {
    if (this.head === null) {
      this.setHead(value);
      return;
    }
    const newNode = new Node(value);
    let currentNode = this.head;
    while (true) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  size() {
    let size = 1;
    let currentNode = this.head;
    while (true) {
      if (currentNode.next === null) {
        break;
      }
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (true) {
      if (currentNode.next === null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insertAt(value, index) {
    let currentNode = this.head;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    for (let i = 1; i < index; i++) {
      console.log(i, currentNode.value);
      currentNode = currentNode.next;
    }
    const newNode = new Node(value, currentNode.next);
    currentNode.next = newNode;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    if (index === 0) {
      this.head = this.head.next;
    }
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }

  pop() {
    let currentNode = this.head;
    let previousNode;
    while (true) {
      currentNode = currentNode.next;
      if (currentNode.next === null) {
        previousNode.next = null;
        return;
      }
      previousNode = currentNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (true) {
      if (currentNode.next === null) {
        return false;
      } else if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
  }

  find(value) {
    let i = 0;
    let currentNode = this.head;
    while (true) {
      if (currentNode.value === value) {
        return i;
      }
      if (currentNode.next === null) {
        return 0;
      }
      currentNode = currentNode.next;
      i++;
    }
  }
  toString() {
    let result = ``;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      result += `( ${currentNode.value} ) --> `;
      currentNode = currentNode.next;
    }
    result += `( ${currentNode.value} ) --> null`;
    return result;
  }
}
