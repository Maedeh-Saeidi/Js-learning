class Queue {
  constructor(){
    this.items = {}
    this.rear = 0
    this.front = 0
  }
  enqueue(element){ //Big-O = O(1)
    this.items[this.rear] = element
    this.rear++
  }
  dequeue(){ //Big-O = O(1)
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }
  isEmpty(){
    return this.rear - this.front === 0 
  }
  peek(){
    return this.items[this.front]
  }
  size(){
    return this.rear - this.front
  }
  print(){
    return console.log(this.items)
  }
}

const queue = new Queue()
console.log(queue.isEmpty());

queue.enqueue('Ali');
queue.enqueue(20);
queue.print();
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();