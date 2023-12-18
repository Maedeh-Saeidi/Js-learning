// I cannot write it by my self (I mean recursive fibonnaci)
function recursiveFibonacci(n){
  if( n < 2){
    return n;
  }
return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);  
}
console.log(recursiveFibonacci(6));
//Big-O = O(2^n) -Recursive
//O(n) -Iterative


// I just remember how i had written fibonacci in last session :
function fibbo(n){
  const result = [0, 1];
  let answer ;
  for(let i = 2 ; i < n ; i++){
    answer = result[i - 2] + result[i - 1];
    result.push(answer);
  }
  return result;
}
// console.log(fibbo(10));
