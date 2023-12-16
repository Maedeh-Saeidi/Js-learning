// My solution :
function fibonacci (n) {
let array1 = [0, 1];
for(i = 0; i < n - 2 ; i++){
  let nextNum = array1[i] + array1[i + 1];
   array1.push(nextNum);
}
return array1;
}
console.log(fibonacci(29));
// Big-o = o(n)

function fibonacci2(n) {
  const fib = [0,1];
  for(i = 2; i < n; i++){
    fib[i] = fib[i - 1] + fib[ i - 2]
  }
  return fib;
}
//Big-o = O(n)