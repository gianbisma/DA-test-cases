function findLargestNumber(array){
  if(array.length == 0){return null;}
  let max = array[0];
  for(let i = 1; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

let arr = [0,1,2,3,4,54];
console.log(findLargestNumber(arr));
arr = [];
console.log(findLargestNumber(arr));
arr = [-1,-2,-54,-19,0];
console.log(findLargestNumber(arr));