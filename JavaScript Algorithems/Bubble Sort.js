 //It does not work and I do not know why so let's continue 
 //The error was because of the length word :/
 function bubbleSort(array){
  const len = array.length;
  for(let i = 0 ; i < len ; i++){
    for(let j = i ; j < len ; j++){
      if(array[i] < array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
 return array;
 }
 console.log(bubbleSort([-2,4,10,-3,6]));

 //My exam solution was like this :

 function sortArray(array){
  const len = array.length;
  for(let i = 0 ; i < len ; i++){ 
    for(let j = i ; j  < len ; j++){ 
      if(array[i] < array[j]){
        let x = array[i];
        array[i] = array[j]
        array[j] = x;
      }
    }
  }
  return array;
}
console.log(sortArray([-2,4,10,-3,6]));
//Big-O= O(n^2)

//video:

function bubbleSort1(arr){
  let swapped
  do {
    swapped = false
  for(let i = 0; i < arr.length - 1 ; i++){
    if(arr[i] > arr[i+1]){
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
      swapped = true
    }
  }
 } while(swapped)
}
const arr = [-6, 20, 8, -2, 4]
bubbleSort1(arr);
console.log(arr);

//Big-O= O(n^2)