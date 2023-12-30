class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }

  //O(1)
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  insert(value, index){
    if(index < 0 || index > this.size) return
    if(index === 0) this.prepend(value)
    else{
  const node = new Node(value)
  let prev = this.head
  for(let i = 0 ; i < index-1 ; i++){
    prev = prev.next
  }
  node.next = prev.next
  prev.next = node
  this.size++
  }
  }
  removeFrom(index){
    if (index < 0 || index >= this.size) return null
    let removeNode
      if(index === 0) {
        removeNode = this.head
        this.head = this.head.next
      } 
      else{
       let prev = this.head
       for(let i = 0; i < index - 1; i++){
        prev = prev.next
       }  
       removeNode = prev.next
       prev.next =removeNode.next     
      }
      this.size --
      return removeNode.value
    
  }
  removeValue(value){
    if(this.isEmpty()) return null
    if(this.head.value === value){
      this.head = this.head.next
      this.size --
      return value
    }else{
      let prev = this.head
      while(prev.next && prev.next.value !== value){
        prev = prev.next
      }
      if(prev.next){
        const removeNode = prev.next
        prev.next = removeNode.next
        this.size --
        return value
      }
      return null
    }
  }
  search(value){
    if(this.isEmpty()) return -1
     /* My solution:
    else{
      let curr = this.head
      for(let i = 0; i < this.size - 1; i++){
        if(curr.value === value) return 1
        curr = curr.next
      }
      */
     let i = 0;
     let curr = this.head
     while(curr){
      if(curr.value === value){
        return i
      }
      curr = curr.next
      i++
     }
     return -1
  }

  print(){
    if(this.isEmpty()) console.log('The list is empty!')
    else{
      let curr = this.head
      let listValues = ''
      while(curr){
        listValues += ` ${curr.value}`
        curr = curr.next
      }
      console.log(listValues) 
  }
  }
  //O(n)
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else {
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size ++
  }
}
const list = new LinkedList()
console.log('List is empty?' , list.isEmpty())
console.log('List size', list.getSize())


list.print();
list.prepend(10);
console.log(list.head)

list.print();
list.append(20);
list.append(30);
list.print();

list.append(40);
list.print();

list.insert(10,0)
list.print()
console.log(list.removeFrom(10));
console.log(list.removeFrom(0));
list.print();
console.log(list.removeFrom(1));
list.print();

console.log(list.removeValue(30))
list.print();
console.log(list.search(10))
