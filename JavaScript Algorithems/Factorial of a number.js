// My solution
function factorial (n){
let result = 1 ;
for (i = n ; i > 0 ; i--){
result = result * i;
}
return result;
}
console.log(factorial(1));
//Big-o = O(n)

function factorial1 (n){
let result = 1 ;
for( let i = 2; i <= n ; i++){
  result = result * i;
}
return result;
}
//Big-o = O(n)
