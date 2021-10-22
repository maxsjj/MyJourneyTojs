// reverse an array in another array and in place
function reverseArray(array){
  output=[];
  for (let i=array.length-1 ; i>=0 ; i--){
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array){
  for(let i=0;i<=Math.floor((array.length-1)/2);i++){
    old=array[i];
    array[i]=array[array.length-1-i];
    array[array.length-1-i]=old
    
    }
    return array;

}
let A=[1,2,3,4,5];
console.log(reverseArray(A));
console.log(reverseArrayInPlace(A));
