const a = [
  { id: 12, name: "amir" },
  { id: 13, name: "abbas" },
  { id: 14, name: "sarah" },
  { id: 14, name: "sarah" }
];
const b = [
  { id: 13, name: "mamad" },
  { id: 34, name: "akbar" },
  { id: 14, name: "zara" },
  { id: 34, name: "akbar" },
  { id: 34, name: "ghgf" },
  { id: 12, name: "bina" },
];
function uniqAndSort(arr){
  const map1 = new Map();
  const result = [];
  for(let i = 0; i < arr.length ; i++){
    if(!map1.has(arr[i].id)){
      result.push(arr[i]);
      map1.set(arr[i].id,true);
    }
  }
  return result; 
} // /big-o = n
const unique1 = uniqAndSort(a);
const unique2 = uniqAndSort(b);

const total = unique1.concat(unique2) // O = O(n+m)
total.sort((a,b) => {
  if(a.id > b.id) return 1;
  else return -1;
}) // O(n log n)
const sameItems = [];
const theOthers = [];

for(let i = 0; i < total.length - 1 ;i++){
  if(total[i].id === total[i+1].id){87
    sameItems.push(total[i])
    //This is a jumper
    i++;
  }else {
    theOthers.push(total[i])
  }
  if(i === total.length - 2){
    // if(total[total.length - 1] !== total[total.length - 2]){
      theOthers.push(total[total.length - 1])
    // }
  }
} // O(n)
console.log(`All:`, total)
console.log(`same item :`,sameItems)
console.log(`The others`, theOthers)
// O(n log n )