  //My solution is not completed.
  function mergeSort(array){
    if(array.length === 1) return array;
    let left = [];
    let right = [];
    let middleNum = Math.floor(array.length / 2);
    for(let i = 0 ; i < array.length ; i++){
      if(i < middleNum){
        left.push(array[i]);
      }else {
        right.push(array[i]);
      }
    }
    console.log(left,right);
        let result = [];
      if(left.length === 1 && right.length === 1){
        
       console.log("now");
      }
    return [...mergeSort(left),...mergeSort(right)];
  }
  // console.log(mergeSort([-6,20,8,-2,4]));


  //Video :

  function mergeSort1(arr){
    if(arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2); 
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort1(leftArr), mergeSort1(rightArr));
  } 

  function merge(leftArr, rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
      if(leftArr[0] <= rightArr[0]){
        sortedArr.push(leftArr.shift())
      }else{
        sortedArr.push(rightArr.shift())
      }
    }
    return [...sortedArr,...leftArr,...rightArr]
  }
 console.log(mergeSort1([-6,20,8,-2,4]));

 //Big-O = O(nlogn)

