const set = new Set([1,2,2,3,2,5]);

set.add(4);
// console.log(set.has(4));
// console.log(set.size);
// set.clear();
for(const item of set){
  console.log(item);
}
// console.log(set)
