
function quickSort(array) {
  if (array.length === 0 || array.length === 1) return array;
  
  let pivot = array.shift();
  let left = [];
  let right = [];
  for ( let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted]

}
 

function quickSort2(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift()

  let left = array.filter(x => x <= pivot)
  let right = array.filter(x => x > pivot)

  let sortedLeft = quickSort(left)
  let sortedRight = quickSort(right)

  return [...sortedLeft, pivot, ...sortedRight]
}

module.exports = {
  quickSort
};

let array = [2, -1, 4, 3, 7, 3];
console.log(quickSort(array));
console.log(quickSort2(array))
//note: if first one runs it has mutated array w/ shift when it runs the next function


//Psuedo code from a/A readme:
 // if the length of the array is 0 or 1, return the array

  // set the pivot to the first element of the array
  // remove the first element of the array

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right

  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted

  // return the concatenation of leftSorted, the pivot value, and rightSorted