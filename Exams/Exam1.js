const a = [
  { id: 12, name: "amir" },
  { id: 13, name: "abbas" },
  { id: 14, name: "sarah" },
  { id: 14, name: "sarah" },
];
const b = [
  { id: 13, name: "mamad" },
  { id: 34, name: "akbar" },
  { id: 14, name: "zara" },
  { id: 34, name: "arshia" },
];
function uniq(arr) {
  return [
    ...new Set(
      arr.map((x) => {
        const sortedKey = Object.keys(x).sort();
        const obj = Object.assign({}, ...sortedKey.map((k) => ({ [k]: x[k] })));
        return JSON.stringify(obj);
      })
    ),
  ].map((s) => JSON.parse(s));
}

const unique1 = uniq(a);
const unique2 = uniq(b);

let status;
const sameItems = [];
for(let i = 0; i < unique1.length; i++){
  for(let j = 0 ; j < unique2.length; j++){
    if(unique1[i].id === unique2[j].id){
      unique2.splice(j, 1)
       status = true;
    }
    if(status === true){
      sameItems.push(unique1[i])
      unique1.splice(i,1)
    }
  }
}
const uniqueItems = unique1.concat(unique2);
console.log(`Unique items:`,uniqueItems)
console.log(`Same items:`,sameItems)
