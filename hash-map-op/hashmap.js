import LinkedList from "../linked-list.js";
class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
    this.size = 0;
  }

  //Hash Function
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    let currentNode = this.buckets[index].head;
    while (currentNode) {
      if (currentNode.value.key === key) {
        currentNode.value.value = value;
        return;
      }
      currentNode = currentNode.nextNode;
    }

    this.buckets[index].append({ key, value });
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    let currentNode = this.buckets[index].head;
    while (currentNode) {
      if (currentNode.value.key === key) {
        return currentNode.value.value;
      }
      currentNode = currentNode.nextNode;
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    let currentNode = this.buckets[index].head;
    while (currentNode) {
      if (currentNode.value.key === key) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    let currentNode = this.buckets[index].head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value.key === key) {
        if (previousNode) {
          previousNode.nextNode = currentNode.nextNode;
        } else {
          this.buckets[index].head = currentNode.nextNode;
        }
        this.size--;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      let currentNode = bucket.head;
      while (currentNode) {
        keys.push(currentNode.value.key);
        currentNode = currentNode.nextNode;
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.buckets) {
      let currentNode = bucket.head;
      while (currentNode) {
        values.push(currentNode.value.value);
        currentNode = currentNode.nextNode;
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (const bucket of this.buckets) {
      let currentNode = bucket.head;
      while (currentNode) {
        entries.push([currentNode.value.key, currentNode.value.value]);
        currentNode = currentNode.nextNode;
      }
    }
    return entries;
  }
}

export default HashMap;
