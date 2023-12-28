const array = [1,2,3,'Vishwas'];
array.push(4);
array.unshift(0);
array.pop();
array.shift();

for(let i = 0; i < array.length ; i++){
  console.log(array[i]);
}

//Big O:
//map, filter, reduce, concat, slice and splice
//insert/remove from beginning -O(n)
//Access O(1)
//Search O(n)
//Shift/ unshift/ concat/ slice/ splice O(n)
//forEach/ map/ filter/ reduce O(n)




