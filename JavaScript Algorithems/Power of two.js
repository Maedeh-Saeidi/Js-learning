//My solution "It is working even with 2(70) woowwwww"
function powerofTwo (n) {
  let result = 1 ;
for ( let i = 0 ; i < Math.round(Math.sqrt(n)) ; i ++ ){
result = result * 2;
if(result === n) return true;
}
return false;
}
console.log(powerofTwo(1180591620717411303424));
//Big-O = O(n)


function isPowerofTwo1 (n){
if( n < 1) return false;
while(n > 1){
  if(n % 2 !== 0) return false;
  n = n / 2;
}
return true;
}
console.log(isPowerofTwo1(1));
console.log(isPowerofTwo1(240));
console.log(isPowerofTwo1(1237940039285380274899124223));
// Big-O = O(logn)