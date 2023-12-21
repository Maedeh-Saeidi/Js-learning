//My solution : It is correct but it does not work for the first index(I mean 0)
function binarySearch (array , target){
let low  = array[0];
let high = array[array.length - 1];
let mid  = (low + high) / 2;
for( let i = 0 ; i < array.length ; i ++){
  if(mid < target ){
    low = mid;
    mid = Math.round((low + high) / 2);
  }else if( mid > target){
      high = mid;
      mid  = Math.round((low + high) / 2);
    }else if( mid === target){
       for(let j=0 ; j < array.length; j++){
        if( array[j] === target ) return j;
        else continue;
       }
      }
}
return -1;
}
//Big-O = O(n ^ 2)
console.log(binarySearch([-5,2,4,6,10], -5));


//Video :
function binarySearch1(arr, target){
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]){
          return middleIndex
          
        };
      if( target < arr[middleIndex]){
          rightIndex = middleIndex - 1;
          } else {
            leftIndex = middleIndex + 1;
    }
}
return -1 ;
}
//Big-o = O(logn)
console.log(binarySearch1([-5, 2, 4, 6, 10], -5));
 
