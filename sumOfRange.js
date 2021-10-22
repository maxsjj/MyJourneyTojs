//sum of a range
//write a function that takes two arguments and returns an array containing all the numbers from start to the end
function range(start,end){
  array=[];
  for(let i=start ; i<=end ; i++ ){
    array.push(i);
    }
    return array;
}

function sum(array){
  sum=0;
  for(let i=0 ; i<array.length ; i++)
  sum+=array[i];
  return sum;
}
console.log(sum(range(1,10)));
