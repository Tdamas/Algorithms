function nestedLoops(numbers){
  for(var i = 0; i < numbers.length; i++){
    for(var a = 0; a <numbers[i].length; a++){
      if(numbers[i][a] % 2 == 0){
        numbers[i][a] = "even"
      }
      else {
        numbers[i][a] = "odd"
      }
    }
  }
  return numbers;
}
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
nestedLoops(numbers)

//###################### Fundementals Challenges Set, 1 #######################
/* Print all the intergers from -52 to 1066. Do this using a FOR loop.*/
function int(i){
  for (var i = -52; i < 1067; i++){
    console.log(i);
  }
  int(i);
}
int()

/* Set variable myNumber equal to the value 42. Then set variable myName equal to your name.
Now swap values - put the value of myNumber into myName and vice versa */
function swap(){
  var myNumber = 21;
  var myName = "Tamisha";
  var temp = myNumber;
  myNumber = myName;
  myName = temp;
  {
    console.log(myName, myNumber);
  }
}
swap()

/* Print multiples of 6, from 6 to 60,000. Do this using a WHILE loop.*/
function multi(){
  var i = 6;
  while (i < 60,0001){
    console.log(i);
    i *= 2;
  }
}
multi()

/* Print all the integers from 2000 to 5280, inclusive. Do this using WHILE Loop. */
function int(){
  var i = 2000;
  while (i =< 5280){
    console.log(i);
  }
}
int()

/* “Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.” */
function beCheerful(){
  for (var i = 1; i <= 98; i++){
    console.log("good morning!");
  }
}
beCheerful()

//########################## Fundementals Challenges Set II #########################
/* Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6. */
function multi(){
  for (var i = -300; i <= 0; i+3){
    if (i == -3 || i == -6){
      continue;
    }
    console.log(i);
  }
}
multi()

/* Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop. */
function multiFour(){
  var num = 2016;
  while (num <= 2016){
    if (num == 0){
      continue;
    }
    console.log(i);
    num = num - 4;
  }
}
multiFour()
// #######################################
function multi_count(){
  var count = 0;
  for (var i = 512; i < 4096; i++){
    if (i % 5 == 0){
      console.log(i);
      count++;
    }
  }
  console.log(count)
}
multi_count()
// #######################################
/* Counting the dojo way!
Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print "Dojo".*/
function dojoCount(){
  for (var i = 1; i <= 100; i++){
    if (i % 5 == 0){
      console.log("Coding");
    }
    if (i % 10 == 0) {
      console.log("Coding Dojo");
    }
  }
}
dojoCount()
// ########################################################
/*What do you know?
 Your function will be given an input parameter incoming. Please console.log this value.*/
function incoming(num){
  console.log(num);
}
incoming(5)
//####################### Fundementals Challenges, Set II ##############################
//#########################                               ##############################

/*Make a function that accepts three parameters: first, second, and last. Print all the
multiples of the last, from second to first. Do this using a FOR loop.*/
function three(first, second, last){
  for(var i = first; i <= second; i++){
    if(i % last == 0){
      console.log(i);
    }
  }
}
three(1, 20, 3);

/* Write a function that determines whether a given year is a leap year. If a year is divisible by four,
it's a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is*/.
function leapYear(){


}

//print all the odd integers from -300,00 to 300,000. What is the sum of all these numbers?
function sumOfOdd(){
  var sum = 0;
  for(var i = -299999; i < 300000; i+=2){
    if(i % 2 == 1){
      console.log(i);
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumOfOdd()

/* Construct a function to accept four parameters. Print all multiplesof param1 from param2
to param3 inclusive unless multiple is equal to param4. Use a While loop. Given (3,5,17,9),
print 6, 12, 15 (which are all multiples of 3 between 5 and 17, except for 9). */
function multiples(param1, param2, param3, param4){
  While(param2 <= param3 &&)
}
multiples(3,5,17,9);
