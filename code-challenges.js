// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"


// I will need to create conditions in the function that will give me three different outcomes

var temp1 = 85
var temp2 = 350
var temp3 = 212
var temp4 = "pineapple'

//Create a function called isBoiling
//takes in one argument (temp)
const isBoiling = (temp) =>{
    //if the value is below 212, return "(isBoiling) is below boiling point"
    if(temp < 212){
        return `${temp} is below boiling point`
    //if the value is above 212, return "(isBoiling) is above boiling point"
    }else if(temp > 212){
        return `${temp} is above boiling point`
    //if the value is exactly 212 , return "(isBoiling) is at boiling point"
    }else if(temp === 212){
        return `${temp} is at boiling point`
    // if someone gets silly with the input, let's get silly with the output. Deal?
    }else{
        return "you've defied the laws of chemistry"
    }
}

console.log(isBoiling(temp1))
console.log(isBoiling(temp2))
console.log(isBoiling(temp3))
console.log(isBoiling(temp4))


// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

// 
// //the loop that is created should take each number individually and multiply by five

//create a function that is called timesFive
//takes in an array 
const timesFive = (array) => {
    //create an empty array for the values that will be multiplied by five
    let timedFive = []
    //iterates through each index 
    for(let i=0; i<array.length; i++){
        //multiplies each value by five and adds it to the empty timedFive array
        timedFive.push(array[i] * 5)
    }
    //returns the new array with all the values timed by five
    return timedFive
}

console.log(timesFive(myForNumbers1))
console.log(timesFive(myForNumbers2))





// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]


var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

//create a function named multiFiveMap
//takes in an array 
const multiFiveMap = (array)=>{
    // iterates through each index and creates a new array with the multiplied values
    return array.map(value => {
        //multiplies each value by five
        return value * 5
    })
}


console.log(multiFiveMap(myMapNumbers1))
console.log(multiFiveMap(myMapNumbers2))


// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//-----------------------------------------------------------------------------------------------------------
//This was my original answer (#4 attempt one) This code worked, but if felt like a work around of what we had been doing in class.
// I did a search with the google machine and found the ".replace(/[aeiou]/ig,'')" function. My understanding of this function is that it appears to identify the letters is the brackets and then replaces them with nothing which is why the '' is also in the parenthesis. Tested by putting 'R' into the space and a bunch of 'R's showed up in in the string

// //Create a function called noVowel
// //takes in an argument that contains a string
// const noVowel = (vowels)=>{
        //replaces the vowels space with nothing
//     return vowels.replace(/[aeiouAEIOU]/ig,'')
// }

// I went back to tried to make this function based off of the tools learned this week in class (attempt two)
// ------------------------------------------------------------------------------------------------------------
//---------------4 attempt two)!!!!!!(Use this version)!!!!!!!

//create a function and name it noVowelTwo
//takes in an argument that is a string
const noVowelTwo = (str) => {
    //create a new variable that takes the string an makes it an array
    strArray = str.split("")
    //use filter method to iterate though the newly formed array and returns it
     return strArray.filter(value =>{
         //filter iterates through each value and finds aeiouAEIOU and returns an array with out them
         return value !== "e" && value !== "a" && value !== "i" && value !== "o" && value !== "u" !== "E" && value !== "A" && value !== "I" && value !== "O" && value !== "U"
    //join method will bring array full circle, back into a string
     }).join("")
    }

console.log(noVowelTwo(stringWithVowels1))
console.log(noVowelTwo(stringWithVowels2))

//------------- 4 attempting to get fancy and clean up code.
// I was feeling fairly confident with this one, the loop felt right and return value felt right, but for some reason the loop would only iterate through the first index.... I tried using the google machine and moving things around, but in the end I decided to settle with attempt two 

// const noVowelTwo = (str) => {
//     strArray = str.split("")
//     vowels = ["e" , "a" , "i" , "o" ,"u", "A" , "E", "I", "O" , "U"] <---played around with order to confirm only iterating index 0
//      return strArray.filter(value =>{
//         for(let i=0; i<vowels.length; i++){
//          return value !== vowels[i]   <-----not sure why it would just stop on first index
//      }}).join("")
//     }

// const noVowelTwo = (str) => {
//         strArray = str.split("") ---------------------   tried moving it down a level
//          return strArray.filter(value =>{            |
//          vowels = ["e" , "a" , "i" , "o" ,"u" , "A" , "E", "I", "O" , "U"]<------    still no luck
//             for(let i=0; i<vowels.length; i++){
//              return value !== vowels[i]
//         }}).join("")
//      }






// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

//create a function named noVowelOnly
//takes in a string
const noVowelOnly = (str) => {
    //if it is a string it will return a string with no vowels
    if (typeof str === "string"){
        //create a new variable that takes the string an makes it an array
        strArray = str.split("")
    //use filter method to iterate though the newly formed array and return it
     return strArray.filter(value =>{
         //filter iterates through each value and finds aeiouAEIOU and returns an array with out them
         return value !== "e" && value !== "a" && value !== "i" && value !== "o" && value !== "u" !== "E" && value !== "A" && value !== "I" && value !== "O" && value !== "U"
    //join method will bring array full circle, back into a string
     }).join("")
    // if the argument is not a sting then function will return that "argument is not a string"
    }else if (typeof str !== "string") {
        return `${str} is not a string`
    }else{
        return "this is why we can't have nice things"
    }
}
console.log(noVowelOnly(refactorTester1))
console.log(noVowelOnly(refactorTester2))
console.log(noVowelOnly(refactorTester3))


// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

//create a function called longestString
//takes in an array of strings
const longestString = (array) => {
    //create a variable that stores the lengths of each string in each array
    let max = array.length
    // combining the map and math.max functions to iterate though each array and find the length of each
    array.map(value => max = Math.max(max, value.length))
    //using filter to return a new array with the longest string out of the previous array
    return array.filter(value => value.length === max)
  }
  
console.log(longestString(utensils))
console.log(longestString(vessels))


// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

//!!!!!!! attempt one !!!!! the uncommented one is when I used a .map instead to tighten up code
//create a function called removeLast
//takes in one argument that is an array
// const removeLast = (array) => {  
//     // create a new array to store the strings that had last letter removed <- aha moment during pseudo
//     let lastLetterArr = []
        // iterate trough each value in the array
//     for(let i = 0 ; i<array.length; i++){
            //add each value from original array to new array with the last letter taken off using slice
//         lastLetterArr.push(array[i].slice(0 ,-1))
//     }
    //returns the new array that stores the new stings sans last letter
//  return lastLetterArr
// }
// console.log(removeLast(mario))
// console.log(removeLast(pacman)) 

//---7 attempt 2 !!!(use this one)!!!

//create a function named removeLast
// takes in one argument that is an array
const removeLast = (array) => {
    //create a variable that will store the mapped array and also return it when function is called
    return mappedArray = array.map(value => {
        //return the result of iterating though each sting and removing the last character using slice
        return value.slice(0 ,-1)
    })
}
console.log(removeLast(mario))
console.log(removeLast(pacman)) 