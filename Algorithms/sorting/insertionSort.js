//Insertion Sort in Javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]
    let a
    for (a = i - 1; a >= 0 && arr[a] > currVal; a--) {
      arr[a + 1] = arr[a]
    }
    arr[a + 1] = currVal
  }
  return arr
}
let result = insertionSort([45,99,18,7,1])
console.log(result)