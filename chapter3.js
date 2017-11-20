///////////////////////////// Push Front /////////////////////////////////////
/* Given array and an additional value, insert this value at the beginning of the array.
Do this without using any built-in array.*/
function pushFront(arr, value){
  temp = [value];
  for(var i = 0; i < arr.length; i++){
    temp[i+1] = arr[i];
  }
  arr = temp;
  console.log(arr);
}
pushFront([1,4,6], 8);

///////////////////////////// Pop Front //////////////////////////////////////
/* Given array, remove and return the value at the beginning of the array.
Do this without using any built-in array methods except pop*/
function popFront(arr){
  temp = [];
  for(var i = 1; i < arr.length; i++){
    temp[i-1] = arr[i];
  }
  arr = temp;
  console.log(arr);
}
popFront([2, 4, 67, 13]);

///////////////////////////// Insert At ///////////////////////////////////////
/* Given array, index, and additional value, insert the value into array at given
index. Do this without using built-in array methods. You can think of PushFront(arr, val)
as equivalent to InsertAt(arr, 0 , val)*/
function insertAt(arr, idx, value){
  x = arr.length;
  while(x > idx){
    arr[x] = arr[x-1];
      x--;
  }
  arr[x] = value;
  return arr;
}
insertAt([2,4,6,10], 3, 8);

/////////////////////////// Remove At //////////////////////////////////////////
/* Given array and an index into array. remove and return the array value at that index.
Do this without using built-in array methods except pop(). Think of popFront(arr) as equivelant
to removeAt(arr, 0)*/
function removeAt(arr, idx){
  temp = [];
  x = 0;
  for(var i = 0; i < arr.length; i++){
    if(i != idx){
      temp[x] = arr[i];
      x++;
    }
  }
  arr = temp;
  return arr;
}
removeAt([2, 4, 30, 21], 2);
///////////////////////////// Double Trouble //////////////////////////////////
/* Create a function that changes a given array to list each original elements twice, retaining
original order. Convert [4, "Ulysses", 42, false] to [4,4 "Ulysses", "Ulysses", 42, 42, false, false].*/
function doubleTrouble(arr){
  var x = 0;
  var temp = [];
  for(var i = 0; i < arr.length; i++){
    temp[x] = arr[i];
    x++;
    temp[x] = arr[i];
    x++;
  }
  arr = temp;
  return arr;
}
doubleTrouble([2,4,6,8,11]);
