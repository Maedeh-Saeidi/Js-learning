//I have got TypeError and I don't know why => Because I didn't write return before my recursive function. My error was about call stack
//Now I have got new error. It is about the index that it returns. It is because of splicing and reordering the array.
// when the array has got the target, it returns a number(actually anything almost zero) but if it hasn't got, it returns -1(bcause of return -1)
function recursiveBinarySearch (array, target){
 let leftIndex = 0;
 let rightIndex =  array.length - 1;
 while (leftIndex <= rightIndex){
  let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  if(target === array[middleIndex]) return middleIndex;
  if(target < array[middleIndex]){
    array.splice(middleIndex ,(rightIndex - middleIndex) + 1);
    return recursiveBinarySearch(array, target);
  }else {
    array.splice(leftIndex, ((middleIndex - leftIndex)+1))
    return recursiveBinarySearch(array, target);
  }
 }
 return -1;
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));

//Big-o = O(logn) به نظر من

//Video :
function recursiveBinarySearch1( arr, target){
return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex){
 if(leftIndex > rightIndex) return -1 ;

 let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

 if(target === arr[middleIndex])return middleIndex;

 if(target < arr[middleIndex]) return search(arr, target, leftIndex, middleIndex - 1)
 else return search(arr, target, middleIndex + 1, rightIndex )

}
//Big-o = O(logn)
console.log(recursiveBinarySearch1([-5, 2, 4, 6, 10], -5));
