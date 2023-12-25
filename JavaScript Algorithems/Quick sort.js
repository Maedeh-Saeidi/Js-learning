// I do not know how to solve it. I am sorry!
function quickSort(array) {
  let leftArray = [];
  let rightArray = [];
  let pivot = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    // if(pivot < array[i] - 1) break;
    if (array[i] > pivot) {
      rightArray.push(array[i]);
    } else {
      leftArray.push(array[i]);
    }
    console.log(leftArray, rightArray);
  }
  // while(pivot < array[i] - 1){
}
// }
// console.log(quickSort([2, 12, 6, 7, 2, 5]));

//Video :
function quickSort1(arr) {
  if( arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort1(left), pivot, ...quickSort1(right)]
}
// Worst case = O(n^2)
// Average case = O(nlogn) => Because we devide array to smaller parts which is logn and we have a for loop which is n so we have nlogn

console.log(quickSort1([8,20,-2,4,-6]));
