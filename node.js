export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.next = nextNode;
  }

  changeValue(value) {
    this.value = value;
  }

  changeNext(next) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}
