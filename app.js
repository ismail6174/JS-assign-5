
// Assignment 5 - Array & Loop - Starts


/* 1. Declare and initialize an empty multidimensional array.
(Array of arrays) */

var arr =[[],[],[]];

/* 2. Declare and initialize a multidimensional array 
representing the following matrix: */

var arr =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(arr)

/* 3. Write a program to print numeric counting from 1 to 10. */


for (var i = 1; i <=10; i++){
    console.log(i);
}

/* 4. Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user. */

var tableNum =  +prompt("Enter a number you want to get table");

var tableLength= +prompt("Enter the length of table you want");

for(var i = 1;i<=tableLength;i++){
    console.log(tableNum ,"×" ,i , "=" ,tableNum*i)
}


/* 5. Write a program to print items of the following array 
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”, 
“strawberry”] */



var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
document.write(fruits,"<br>");

for(var i = 0; i <= 4; i++){
    document.write( "Element at index", " " , i ," ","is" ," ",fruits[i],"<br>");        
}


/* 
6. Generate the following series in your browser. See 
example output.
 */
 
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("<h3>Counting:</h3>"); 
for (var i = 1; i <= 15; i++){
    document.write(i," ",);}
    
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 

document.write("<h3>Reverse counting:</h3>");
for (var i = 10; i >=1; i--){
    document.write(i);}
    
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    
document.write("<h3>Even:</h3>")
for (var i = 0; i<=10; i++){
    document.write(i*2);}
    
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<h3>Odd:</h3>")
for (var i = 0; i<10; i++){
    document.write(i+i+1);}
    
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 
document.write("<h3>Series:</h3>")   
for (var i = 1; i<=10; i++){
    document.write(i*2+"k");}
    

/* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */

ask to sir ...!


/* 8. Write a program to identify the largest number in the 
given array.
A = [24, 53, 78, 91, 12]. */


var arr = [24, 53, 78, 91, 12];
document.write("Arrays numbers:"," ",arr,"<br>");
var largest = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
document.write("Largest number is:"," ",largest);


/* 9. Write a program to identify the smallest number in the 
given array.
A = [24, 53, 78, 91, 12] */

var arr = [24, 53, 78, 91, 12];
document.write("Arrays numbers:"," ",arr,"<br>");
var smallest = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
document.write("smallest number is:",
    " ",smallest);


/* 
10. Write a program to print multiples of 5 ranging 1 to 
100.
 */
 
for(var i=0;i<=20;i++){
    console.log(5*i)
}


// Assignment 5 - Array & Loop - Ends









