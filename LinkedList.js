import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // Add a node to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  // Return the total number of nodes
  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Return the first node
  head() {
    return this.headNode || null;
  }

  // Return the last node
  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Return node at a given index (0-based)
  at(index) {
    if (index < 0) return null;
    let count = 0;
    let current = this.headNode;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  // Remove the last node from the list
  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // Check if a value exists in the list
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // Find the index of a value, or return null
  find(value) {
    let index = 0;
    let current = this.headNode;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // Convert the list to a string representation
  toString() {
    let str = "";
    let current = this.headNode;
    while (current) {
      if (
        current.value &&
        typeof current.value === "object" &&
        "key" in current.value &&
        "value" in current.value
      ) {
        str += `( ${current.value.key}: ${current.value.value} ) -> `;
      } else {
        str += `( ${current.value} ) -> `;
      }
      current = current.nextNode;
    }
    return str + "null";
  }

  // Insert a node at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size()) return null;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const prevNode = this.at(index - 1);
    const newNode = new Node(value, prevNode.nextNode);
    prevNode.nextNode = newNode;
  }

  // Remove a node at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size()) return null;

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    const prevNode = this.at(index - 1);
    prevNode.nextNode = prevNode.nextNode.nextNode;
  }
}

export default LinkedList;
