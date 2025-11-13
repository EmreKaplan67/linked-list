# LinkedList (JavaScript)

A simple singly linked list implementation in JavaScript. Built with ES Modules and intended for educational use (e.g., The Odin Project).

## Files
- **LinkedList.js**: The list implementation
- **Node.js**: Node structure used by the list

## Features
- **Append** and **prepend** nodes
- **Size**, **head**, **tail**, and **at(index)** queries
- **Pop** the last node
- **contains(value)** and **find(value)** utilities
- **insertAt(value, index)** and **removeAt(index)** for positional edits
- **toString()** representation like `( value ) -> ... -> null`

## API Reference
- **`new LinkedList()`**: Create an empty list
- **`append(value)`**: Add a node to the end
- **`prepend(value)`**: Add a node to the start
- **`size()`**: Return total number of nodes
- **`head()`**: Return the first node or `null`
- **`tail()`**: Return the last node or `null`
- **`at(index)`**: Return node at `index` (0-based) or `null`
- **`pop()`**: Remove the last node
- **`contains(value)`**: Return `true` if a node with `value` exists
- **`find(value)`**: Return index of `value` or `null` if not found
- **`toString()`**: Return a string representation of the list
- **`insertAt(value, index)`**: Insert a node at `index`
- **`removeAt(index)`**: Remove a node at `index`

## Usage
```js
import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.prepend(0);
list.append(2);

console.log(list.size()); // 3
console.log(list.head()?.value); // 0
console.log(list.tail()?.value); // 2
console.log(list.at(1)?.value); // 1
console.log(list.contains(2)); // true
console.log(list.find(2)); // 2

list.insertAt(1.5, 2);
list.removeAt(0);
list.pop();

console.log(list.toString()); // ( 1 ) -> ( 1.5 ) -> null
```

## Environment
This project uses ES Modules (`import`/`export`). Ensure your runtime supports ESM (e.g., set `"type": "module"` in your `package.json`, use `.mjs` files, or a bundler).

## License
No license specified.
