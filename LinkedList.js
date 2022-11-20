import Node from './Node.js';

//The linked list FACTORY
const LinkedList = () => {
  let length = 0;
  let HEAD = null;

  function append(value) {
    const node = Node(value);
    length++;
    if (HEAD === null) {
      return (HEAD = node);
    }
    let pointer = HEAD;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = node;
  }

  function prepend(value) {
    const node = Node(value);
    length++;
    const next = HEAD;
    HEAD = node;
    HEAD.next = next;
    return HEAD;
  }

  function size() {
    if (!HEAD) return null;
    return length;
  }

  function head() {
    if (!HEAD) return null;
    return HEAD;
  }

  //returns the last node in the list
  function tail() {
    if (!HEAD) return null;
    let tail = HEAD;
    while (tail.next !== null) {
      {
        tail = tail.next;
      }
    }
    return tail;
  }

  function at(index) {
    if (!HEAD) return null;
    let pointer = HEAD;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer;
  }

  function pop() {
    if (!HEAD) return null;
    let pointer = HEAD;
    if (HEAD.next === null) HEAD = null;
    for (let i = 0; i < length - 2; i++) {
      pointer = pointer.next;
    }
    length--;
    pointer.next = null;
  }

  function contains(value) {
    if (!HEAD) return null;
    let pointer = HEAD;

    while (pointer.value !== value && pointer.next !== null) {
      pointer = pointer.next;
    }

    return pointer.value === value ? true : false;
  }

  function find(value) {
    if (!HEAD) return null;
    let pointer = HEAD;
    let index = 0;
    while (pointer.value !== value && pointer.next !== null) {
      pointer = pointer.next;
      index++;
    }

    return pointer.value === value ? index : null;
  }

  function toString() {
    if (!HEAD) return null;
    let pointer = HEAD;
    let string = '';
    while (pointer !== null) {
      string = string.concat(`(${pointer.value}) -> `);
      pointer = pointer.next;
    }
    string = string.concat(' null');

    return string;
  }

  function insertAt(value, index) {
    if (!HEAD) return null;
    if (index >= length) return null;
    const node = Node(value);
    length++;
    let pointerBefore = HEAD;
    let pointerAfter = HEAD;
    if (index === 0) {
      node.next = HEAD;
      return (HEAD = node);
    }
    for (let i = 0; i < index; i++) {
      if (pointerAfter !== null) pointerAfter = pointerAfter.next;
    }
    for (let i = 0; i < index - 1; i++) {
      if (pointerBefore) pointerBefore = pointerBefore.next;
    }
    pointerBefore.next = node;
    node.next = pointerAfter;
  }

  function removeAt(index) {
    if (!HEAD) return null;
    if (index >= length) return null;
    if (index === 0) HEAD = HEAD.next;
    else {
      let pointer = HEAD;
      for (let i = 0; i < index - 1; i++) {
        pointer = pointer.next;
      }
      pointer.next = pointer.next.next;
      length--;
    }
  }

  return { append, prepend, size, pop, head, tail, contains, at, find, toString, insertAt, removeAt };
};

export default LinkedList;
