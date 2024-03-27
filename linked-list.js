function createNode(value = null) {
  return { value, nextNode: null };
}

function createLinkedList() {
  let headNode = null;

  function append(value) {
    if (headNode == null) {
      headNode = createNode(value);
      return;
    }

    let tmp = headNode;

    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = createNode(value);
  }

  function prepend(value) {
    if (headNode == null) headNode = createNode(value);
    else {
      const newNode = createNode(value);
      newNode.nextNode = headNode;
      headNode = newNode;
    }
  }

  function size() {
    let tmp = headNode;
    let size = 0;

    while (tmp != null) {
      tmp = tmp.nextNode;
      size += 1;
    }

    return size;
  }

  function head() {
    return headNode;
  }

  function tail() {
    if (!headNode) return null;
    let tmp = headNode;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp;
  }

  function at(index) {
    if (!headNode) return null;
    let tmp = headNode;

    for (let currIndex = 0; currIndex < index; currIndex++) {
      tmp = tmp.nextNode;
      if (tmp == null) return null;
    }

    return tmp;
  }

  function pop() {
    const tailNode = tail();
    if (headNode === tailNode) {
      headNode = null;
      return;
    }

    let tmp = headNode;
    while (tmp.nextNode != tailNode) tmp = tmp.nextNode;
    tmp.nextNode = null;
  }

  function contains(value) {
    if (!headNode) return false;
    let tmp = headNode;

    while (tmp.value !== value) {
      tmp = tmp.nextNode;
      if (tmp == null) return false;
    }

    return true;
  }

  function find(value) {
    if (!headNode) return null;
    let currIndex = 0;
    let tmp = headNode;

    while (tmp.value !== value) {
      tmp = tmp.nextNode;
      currIndex++;
      if (tmp == null) return null;
    }

    return currIndex;
  }

  function insertAt(value, index) {
    const newNode = createNode(value);
    const node = at(index - 1);
    if (node == null) {
      append(value);
      return;
    }
    newNode.nextNode = node.nextNode;
    node.nextNode = newNode;
  }

  function removeAt(index) {
    if (index === 0) headNode = headNode.nextNode;

    const prevNode = at(index - 1);
    if (prevNode == null || prevNode.nextNode == null) return;

    const currNode = prevNode.nextNode;

    prevNode.nextNode = currNode.nextNode;
    currNode.nextNode = null;
  }

  function toString(Node = head()) {
    if (!Node) return "null";

    return `(${Node.value}) -> ${toString(Node.nextNode)}`;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
  };
}
