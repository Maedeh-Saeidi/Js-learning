// My solution :
function recursiveFactorial(n){
  if( n < 2){
    return n ;
  }
return n * recursiveFactorial(n-1);
}
console.log(recursiveFactorial(5));
//Big-O = O(n) 
 

function recursiveFactorial1(n){
  if( n === 0){
    return 1;
  }
  return n * recursiveFactorial1(n-1);
}
console.log(recursiveFactorial1(5));
//Big-O = O(n)