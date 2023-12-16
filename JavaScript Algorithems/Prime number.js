// My solution + Amir's guide
function primeNumber (num) {
if( num === 2) return true;
for(let i = 2 ; i < Math.round(num/2) ; i++){
if(num % i === 0) return false;
}
return true;
}
console.log(primeNumber(121));
// Big-o = O(n)

function isPrime1(n){
if( n < 0) return false;
for(let i = 2 ; i < Math.sqrt(num) ; i++ ){
//this is more optimized than my solution
  if( n % i === 0 ) return false;
}
return true;
}
// Big-O = O(n)
