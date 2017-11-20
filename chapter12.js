//For review, create a function that uses SelectionSort to sort an unsorted array in-place.
function SelectionSort(arr){
  for(var i = 0, len = arr.length; i < len; i++){
    let min_idx = i;
    for(var k = i+1; k < len; k++){
      if(arr[k] < arr[min_idx]){
        min_idx = k;
      }
    }
    if(min_idx !== i){
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }
  return arr;
}
SelectionSort([2, 10, 3, -1]);


function SelectionSort(arr){
  for(var i = 0; i <arr.length; i++){
    for(var k = i + 1; k < arr.length; k++){
      if(arr[k] < arr[i]){
        var temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
      }
    }
  }
  return arr;
}
SelectionSort([2,10,3,-1]);

//For review, create a function that uses BubbleSort
function BubbleSort(arr){
  for(var i = arr.length - 1; i > 0; i--){
    for(var k = 0; k < i; k++){
      if(arr[k+1] < arr[k]){
        var temp = arr[k];
        arr[k] = arr[k+1];
        arr[k+1] = temp;
      }
    }
  }
  return arr;
}
console.log(BubbleSort([2, 10, 3, -1]));
