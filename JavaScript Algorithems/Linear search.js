//My solution
function linearSearch (n , t){
for (let i = 0 ; i < n.length ; i++){
  if( n[i] === t ) return i;
}
return -1;
}
console.log(linearSearch ([-5,2,10,4,6] , 6));
//Big-O = O(n)

function linearSearch1( arr , target){
for(i = 0 ; i < arr.length ; i++){
  if(arr[i] === target){
    return i;
    }
  }
  return -1;
}
console.log(linearSearch ([-5,2,10,4,6] , 6));
//Big-O = O(n)