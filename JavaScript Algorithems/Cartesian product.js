//My solution
function cartesianProduct(array1, array2){
  let totalResult = [];
  for(let i = 0 ; i < array1.length ; i++ ){
    for(let j = 0 ; j < array2.length; j++){
      let result = [];
      result.push(array1[i]);
      result.push(array2[j]);
      totalResult.push(result);
    }
  }
  return totalResult;
}
function cartesianProduct2(array1, array2){
  let totalResult = [];
  for(let i = 0 ; i < array1.length ; i++ ){
    for(let j = 0 ; j < array2.length; j++){
      totalResult.push([array1[i],array2[j]]);
    }
  }
  return totalResult;
}
console.log(cartesianProduct2([1,2], [3,4,5,6]));


// console.log(cartesianProduct([1,2], [3,4,5,6]));
//Big-O = O(mn)

//Video :
function cartesianProduct1(arr1, arr2){
  const result = [];
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0 ; j < arr2.length ; j++){
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
// function cartesianProduct3(array1, array2){
//   const len = array1.length * array2.length;
//   for (let i = 0; i < len ; i++){

//   }
// }
//Big-O = O(mn)
