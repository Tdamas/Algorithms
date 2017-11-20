// ################  Recursive Sigma ################################
function rsigma(num, sum = 0, step = 0){
	if (num != step){
    step ++;
		sum = sum + step;
		return rsigma(num, sum, step);
	}
  return sum;
}
console.log(rsigma(5))

// ################ Flood Fill ######################################
Function floodFill(canvas2D, startPos, newColor)
	if (canvas2D[Y][X-1] == startPos){
		canvas2D[Y][X-1] == newColor;
		floodFill(canvas2D, [Y, X-1], newColor;
	}
	if (canvas2D[Y][X+1] == startPos){
		canvas2D[Y][X+1] == newColor;
		floodFill(canvas2D, [Y, X+1], newColor;
	}
	if (canvas2D[X][Y-1] == startPos){
		canvas2D[X][Y-1] == newColor;
		floodFill(canvas2D, [X, Y-1], newColor;
	}
	if (canvas2D[X][Y+1] == startPos){
		canvas2D[X][Y+1] == newColor;
		floodFill(canvas2D, [X, Y+1], newColor;
	}
	canvas2D =
	[[3, 2, 3, 4 ,5]
	 [2, 3, 3, 4, 0]
	 [7, 3, 3, 5, 3]
	 [6, 5, 3, 4, 1]
	 [1, 2, 3, 3, 3]]

//  ################# Recursive Fibonacci ##########################
function rFib(num){
	if(num == 2){
		return 1;
	}
	if(num <= 1){
		return 0;
	}
	return rFib(num -1) + rfib(num - 2);
}
rFib(21)

// ################# Recursive Tribonacci ###############################
function rTrib(num){
	if(num <= 2){
		return 0;
	}
	return rTrib(num -3) + rTrib(num - 2) + rTrib(num -1);
}
rTrib(24)

//################# Recursive Binary Search ################################
function rBinarySearch(arr, val, start = 0, end = -1){
	if(end == -1){
		end = arr.length;
	}
	mid = Math.floor((end + start)/2);
	if(val == arr[mid]){
		return true;
	}
	if(start == end){
		return false;
	}
	if(val < arr[mid]){

		return rBinarySearch(arr, val, start, mid);
	}
	if(val > arr[mid]){
		return rBinarySearch(arr, val, mid, end);
	}
}
rBinarySearch([2,4,6,12,21,32,40], 32, start = 0, end = -1)
