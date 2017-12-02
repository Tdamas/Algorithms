/* Implement function sigma(num) that given a number, returns the sum of all positive integers up
 to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). */
 function Sigma(num){
   var sum = 0;
   for(var i = 0; i <= num; i++){
     sum += i;
   }
   console.log(sum);
 }
 Sigma(6);

/* Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number,
returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For
example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5). */
function Factorials(num){
  var sum = 1;
  for (var i = 1; i <= num; i++){
    sum *= i;
  }
  console.log(sum);
}
 Factorials(4);

 /* Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces
and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively.
Depending on which function is called, those stars should be left-justified (first star would be very first
char in the text field), or right-justified (last star would be very last char in the text field, with
potentially some number of spaces at beginning of text field before the block of stars start), or centered
in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).*/
function DrawLeftStars(num){
  for(var i = 0; i < 75; i++){
    if(i < num){
      console.log('*');
    }
    else{
      console.log(' ');
    }
  }
}
DrawLeftStars(10);

function DrawRightStars(num){
  for(var i = 0; i < 75; i++){
    if(i < num){
      console.log(' ');
    }
    else{
      console.log('*');
    }
  }
}
DrawRightStars(15);

function DrawCenterStars(num){
  for(var i = 0; i < 75; i++){
    if(i < Math.floor((75-num)/2) || i > Math.ceil((75 - num)/2) + num{
      console.log(" ");
    }
    else{
      console.log("*");
    }
  }
}
DrawCenterStars(20);

/*“Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or
5 but not both. Display the final sum in the console.” */
function threesFives(){
  sum = 0;
  for(var i = 100; i <= 4000000; i++){
    if(i % 3 == 0 && i % 5 == 0){
      continue;
    }
    else if(i % 3 == 0 || i % 5 == 0){
      sum +=1;
    }
  }
  console.log(sum);
}
threesFives();

/* “Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of
American cents, compute and print how to represent that amount with smallest number of coins. Common American coins
 are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).” */
function generateCoinChange(cents){
  var arr = [25,10,5,1];
  change = [];
  for (var i = 0; i < arr.length; i++){
    change[i] = Math.floor(cents / arr[i]);
    cents = cents % arr[i];
  }
  return change;
}
generateCoinChange(94);

/* Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", then
"boom", then "chick" - continuuing the same cycle for each number up to (including) 12. */
function twelveBarBlues() {
  var count = 0;
  for(var i = 1; i <= 12; i++){
    console.log(count = i);
    console.log("chick");
    console.log("boom");
  }
}
twelveBarBlues();
