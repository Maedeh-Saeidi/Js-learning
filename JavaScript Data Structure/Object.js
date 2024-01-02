const obj = {
  name : 'Heisenberg',
  age : 30,
  "key-three" : true,
  sayMyName : function(){
    console.log(this.name)
  }
}
obj.hobby = 'football';
delete obj.hobby

console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj.name);
console.log(obj.hobby);
obj.sayMyName();

//Object.keys() .values() .entries() :
const person = {
  id : 252,
  userName : 'dcode',
  age : 32,
  hobbies : ["Software Development", "Gardening"],
  active: true,
}
const keys = Object.keys(person);
console.log('here');
console.log(keys);
const values = Object.values(person);
console.log(values);
const entries = Object.entries(person);
console.log(entries[2]);

for([value] of entries){
  // console.log(key);
  console.log(value);
}

//Big-O
//Indert O(1)
//Remove O(1)
//Access O(1)
//Search O(n)
//Object.keys() O(n)
//Object.values() O(n)
//Object.entries() O(n)