class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}
class BinarySearchTree{
  constructor(){
    this.root = null
  }
  isEmpty(){
    return this.root === null
  }
  insert(value){
    const newNode = new Node(value)
    if(this.isEmpty()) this.root = newNode
    else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, newNode){
    if(newNode.value < root.value){
      if(root.left === null) root.left = newNode
      else {
        this.insertNode(root.left, newNode)
      }
    }else {
      if(root.right === null) root.right = newNode
      else {
        this.insertNode(root.right, newNode)
      }
    }
  }
  search(root, value){
    if(!root) return false
    else {
      if(root.value === value) return true
      else if(root.value > value) return this.search(root.left, value)
      else return this.search(root.right, value)
    }
  }
  preOrder(root){
    if(root){
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value)
    }
  }
  levelOrder(){
    // Use Optimised queue 
    const queue = []
    queue.push(this.root);
    while(queue.length){
      let curr = queue.shift()
      console.log(curr.value);
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
  }
  minLeaf(root){
    if(!root.left) return root.value
    else return this.minLeaf(root.left)
  }
  maxLeaf(root){
    if(!root.right) return root.value
    else return this.maxLeaf(root.right)
  }
  delete(value){
    this.root = this.deleteNode(this.root, value)
  }
    deleteNode(root, value){
      if(root === null) return root
      if(value < root.value) root.left = this.deleteNode(root.left, value)
      else if( value > root.value) root.right = this.deleteNode(root.right, value)
      else {
        if(!root.left && ! root.right) return null
        if(!root.left) return root.right
        if(!root.right) return root.left

        root.value = this.minLeaf(root.right)
        root.right = this.deleteNode(root.right, root.value)
     }
     return root
    }
} 
const bst = new BinarySearchTree()
console.log(bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// bst.postOrder(bst.root)
// bst.levelOrder(bst.root)
// console.log(bst.minLeaf(bst.root))
// console.log(bst.maxLeaf(bst.root))

bst.delete(15)
bst.levelOrder()

 

 