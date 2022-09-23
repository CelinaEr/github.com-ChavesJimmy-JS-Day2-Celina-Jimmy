//Basic: exercise 1,
// Create a program that according to the temperature will provide you with the information, 
//whether the weather is cold or moderate

let temp = (Math.floor(Math.random()*26))-5;
console.log(temp);
   if (temp < 10 ){
       console.log ("The weather is cold");
    }
    else {
       console.log("The weather is moderate");
    }

//Exercise2: Random Food

let myFood = ["pizza", "hamburger", "ice cream", "chocolate"];
function randomFood() {
let random = Math.floor(Math.random()*2);
console.log(myFood[random]);
}
randomFood();

//exercise 3:  Crystal Gazer Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title

function crystalGlazer(NumberOfChildren, partnerName, Location, jobTitle) {
    return `You will be a ${jobTitle} in ${Location} and Married to ${partnerName} with ${NumberOfChildren} Childrens`
    }
    console.log(crystalGlazer(5, "Marina", "Amsterdam", "Software Engineer" ));
    

//exercise 4 Age Calculator

//Write a function called ageCalculator() that takes two arguments: birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

//You should get the following results:You are either 29 or 28

function ageCalculator(birthYear,currentYear){

    let age = (currentYear) - (birthYear);
    return `You are ${age} or ${age-1}`
    }
    console.log(ageCalculator(1976, 2022));


//Other solution
 function ageCalculator(birthYear,currentYear){
    var age = currentYear - birthYear;
    var age1 = currentYear - (birthYear+1);
    return `You are ${age} or ${age1-1}`
 }
 console.log(ageCalculator(2022,1976));


// calculate the age of the user
    var age = Math.abs(2022 - 1988);
    console.log(age);

// Exercise 5 Age Calculator-improved

function ageCalculator (birthYear) {
let currentYear = new Date().getFullYear();
    console.log(currentYear);
    let age = (currentYear) - (birthYear);
    return `You are ${age} or ${age-1}`
    }
    console.log(ageCalculator(1990));
    

    //Exercise 6 Degree-Radian Conversion

    function degreesToradians(degrees) {
        return degrees * (Math.PI / 180);
      }
      console.log(degreesToradians(90));


//Exercise 7 Area and Volume of a box

function boxarVolume(width, height, depth){
    let area = width*height ;
    let volume = width*height*depth ;
    return ` The area of the box is : ${area} 
    The volume of the box is : ${volume}` ;
    }
    console.log(boxarVolume (7,2,5));

    ///--------END----------



//INTERMIDIATE
//Exerise 1.
   
//Capitalize the first letter 'i am a web developer' 

var text = 'i am a web developer'; 
var captializedtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(captializedtext);


//-----OR-------

var text = 'i am a web developer'; 
console.log(text[0].toUpperCase() + text.slice(1).toLowerCase());
    


//exrcise 2. Average Grade
//steps: Work out the sum of the numbers in array
var nums = [3,4,5];
var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}
//Work out how many numbers are in array.
var numsCnt = nums.length;
var average = totalSum / numsCnt;
console.log('Average: ' + average);



//-----END---------
    // Advanced : Time Convert

    function tConvert(num){
        h = Math.floor(num/60);
        m = num%60;
        s = num%3600;
        return (h + "hours"+":"+m+"minutes"+":"+s+"seconds").toString();
    }
    console.log(tConvert(200));