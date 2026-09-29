class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  size() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
    return -1;
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += `${currentNode.value} -> `;
      currentNode = currentNode.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.at(index - 1);
      newNode.nextNode = previousNode.nextNode;
      previousNode.nextNode = newNode;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default LinkedList;
