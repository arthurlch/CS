# Data Structure

<aside>
💡 Notes about data structure course 
[https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344246#overview](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344246#overview)

</aside>

## Singly linked list

### What is a linked list ?

A data structure that contains a head, tail and length property.
Linked list consists of nodes, and each nodes has value and a pointer to another node or null. 

### Comparison with Arrays

Lists

- Do not have indexes
- Connected via nodes with a next pointer
- Random access is not allowed

Arrays 

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Code example

```jsx
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		}
}

let first = new Node('1')
first.next.next = new Node('2')

// this is the bad way to do that but it is for the sake of the example.
// no push methods to remember the index

  

```
