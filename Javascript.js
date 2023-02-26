const value = [];
for (let i = 0; i < 10; i++) {
  const number = prompt(`Add a number ${i + 1}:`);
  value.push(parseFloat(number));
}

function mergeSort(array) {
  //if the array is empty or contain 1 element, so it is sorted
  if (array.length <= 1) {
    return array;
  }
  //MergeSort is a divide and conquer sorting algorithm so we should split the array in the middle
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  //Sort left side and right side recursively
  const sortLeft = mergeSort(leftSide);
  const sortRight = mergeSort(rightSide);
  
  //Concatenate the 2 sorted sides
   const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortLeft.length && rightIndex < sortRight.length) {
    if (sortLeft[leftIndex] < sortRight[rightIndex]) {
      mergedArray.push(sortLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(sortRight[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray.concat(sortLeft.slice(leftIndex)).concat(sortRight.slice(rightIndex));
}
const sortedArray = mergeSort(value);
document.getElementById("numbers").innerHTML=sortedArray;