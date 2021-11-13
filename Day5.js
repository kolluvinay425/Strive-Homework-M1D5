/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (a,b) {

    areaRectangle = a*b
    return areaRectangle
    
}
result = area(11,12)
console.log('this is ex1 result: ',result)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
creazySum = function(a,b){
    if(a===b){
        return (a+b)*3
    }else{
        return a+b
    }
}
sum = creazySum(30,30)
console.log('this one is exercise 2 result : ',sum)
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
creazyDiff = function (num){
    if(num > 19){
        return Math.abs(num-19)*3
    }else{
        return Math.abs(num-19)
    }
}
creazyDiffResult = creazyDiff(5)
console.log('this of result of exercise 3:',creazyDiffResult)
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
boundary = function (n){
    if(n>20 && n<=100 || n==400){
        return true
    }else{
        return false
    }
}
boundaryResult = boundary(400)
console.log('this is exercise 4 result :',boundaryResult)
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
strivify = function (string){
    if(string === 'Strive'){
        result = string
        return result
    }
    return string +' '+ 'Strive'   
}
resultStrivify = strivify('Strive')
console.log('exercise 5 result: ',resultStrivify)
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
check3and7 = function (number){
    if( number>0 && (number%3 ==0 || number%7 ==0)){
        return true
    }else{
        return false
    }
}
check3and7Result = check3and7(30)
console.log('exercise 6 result: ',check3and7Result)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
reverseString = function(string){
    result = string.split('').reverse().join('')
    return result
}

reverseStringResult = reverseString('Strive')
console.log('exercise 7 result :',reverseStringResult)
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
upperFirst = function(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
}
console.log('exercise 8 solution :',upperFirst('vinay iggf'))
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
cutString = function(string){
    result = string.substring(1, string.length - 1);
    //result2 = result.length() - 1
    return result
}
console.log('exercise 9 result ',cutString('Strive'))
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
giveMeRandom = function(n){

    let array = []
    for(i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 10))
    }
    return array;
}
console.log('exercise 10 result: ',giveMeRandom(9))

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/

console.log('...................................................................operation on an object......................................................')




let listOfOrders = [
    { id: "A232389", product: "Wireless Keyboard", quantity: 1 },
    { id: "A232154", product: "Red Bull 500ml", quantity: 10 },
    { id: "A232301", product: "HD Webcam", quantity: 1 },
]

let ids = []
let products = []
for(i=0;i<listOfOrders.length;i++){
    listOfOrdersIds = listOfOrders[i].id

    listOfOrdersProducts = listOfOrders[i].product
    ids.push(listOfOrdersIds)
    products.push(listOfOrdersProducts)

}
console.log(ids)
console.log(products)