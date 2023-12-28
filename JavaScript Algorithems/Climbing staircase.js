//My solution
function climbingStaircase(n){
  if (n <= 2) return n;
  return climbingStaircase(n-2) + climbingStaircase(n-1);
}
console.log(climbingStaircase(12));

//Big-O = O(2^ n)
//Video 
function climbingStaircase1(n){
  const noOfWays = [1, 2];
  for(let i = 2 ; i <= n ; i++){
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
  }
  return noOfWays[n-1];
}

console.log(climbingStaircase1(12));
//Big-O = O(n)