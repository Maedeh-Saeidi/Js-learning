//I do not know how to code insertion sort
function insertionSort(array){
  for(let i = 1 ; i < array.length ; i++){
    let numberToinsert = array[i];
    for(let j = 0 ; j < array.length ; j++){
      if(array[j] > numberToinsert ){
        // array[j] = 
      }
    }
 }
}
//Video :
function insertionSort1(arr){
  for(let i = 1 ; i < arr.length - 1 ; i++){
    let numberToinsert1 = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > numberToinsert1){
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToinsert1;
  }
}
const arr = [8, 20, -2, 4, -6];
insertionSort1(arr);
console.log(arr);

//Big-O = O(n^2)