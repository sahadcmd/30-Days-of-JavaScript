
let firstName = 'Sahad',
    lastName = 'Mahaboob',
    country = 'India',
    city = 'Malappuram',
    age = 23,
    isMarried = false,
    year = new Date().getFullYear();

console.log(typeof firstName); //string
console.log(typeof lastName); //string
console.log(typeof country);  //string
console.log(typeof city);      //string
console.log(typeof age);       //number
console.log(typeof isMarried);  //boolean
console.log(typeof year);       //number

console.log(typeof '10' === 10);  //false
console.log(parseInt('9.8') === 10);   //false

console.log(parseInt('7') === 7 ? true : false);                      //true
console.log(Math.floor(parseFloat('9.8')) === 9 ? true : false);      //true
console.log('7' !== 7 ? true :false);                                 //true

console.log(parseInt('7') !== 7 ? true : false);                      //false
console.log(Math.ceil(parseFloat('9.8')) === 9 ? true : false);       //false
console.log('7' === 7 ? true :false);                                 //false

4 > 3       // true
4 >= 3      // true
4 < 3       // false
4 <=3       // false
4 == 4      // true
4 === 4     // true
4 != 4      // false
4 !== 4     // false
4 != '4'    // false
4 !== '4'   // true
4 == '4'    // true
4 === '4'   // false
'python'.length !== 'jargon'.length  // false

4 > 3 && 10 < 12        // true 
4 > 3 && 10 > 12        // false
4 > 3 || 10 < 12        // true
4 > 3 || 10 > 12        // true
!(4 > 3)                //  false
!(4 < 3)                // true
!(false)                // true
!(4 > 3 && 10 < 12)     // false
!(4 > 3 && 10 > 12)     // true
!(4 === '4')            // true
!('dragon'.includes('on') && 'python'.includes('on'))   // false

const dateObject = new Date();

console.log(dateObject);
console.log(dateObject.getFullYear());
dateObject.getMonth()             
dateObject.getDate()              
dateObject.getDay()                 
dateObject.getHours()               
dateObject.getMinutes()             
dateObject.getTime()                

/********************************************************************** 
                                LEVEL 2
***********************************************************************/

// Comment down the code which uses "prompt()" because it will slow the whole system


/*
const triangleBase = prompt('Enter the Base'),
    triangleHeight = prompt('Enter the Height'),
    areaOfTriangle = 0.5 * triangleBase * triangleHeight;
        
alert(`The area of the Triangle is ${areaOfTriangle}`)  // Result will be alerted 



const triangleSideA = parseFloat(prompt('Enter side A:')),
      triangleSideB = parseFloat(prompt('Enter side B:')),
      triangleSideC = parseFloat(prompt('Enter side C: ')),
      perimeterOfTriangle = triangleSideA + triangleSideB + triangleSideC;
        
alert(`The perimeter of the Triangle is ${perimeterOfTriangle}`)  // Result will be alerted 



const rectangleLength = parseFloat(prompt('Length of Rectangle: ')),
      rectangleWidth = parseFloat(prompt('Width of Rectangle: ')),
      areaOfRectangle = rectangleLength * rectangleWidth,
      perimeterOfRectangle = 2 * (rectangleLength + rectangleWidth);
        
alert(`The Area of the rectangle is ${areaOfRectangle}`)            // Result will be alerted
alert(`The Perimeter of the rectangle is ${perimeterOfRectangle}`)  // Result will be alerted




const pi = 3.14,
      radiusOfCircle = parseFloat(prompt('Radius of Circle: ')),
      areaOfCircle = pi * radiusOfCircle * radiusOfCircle,
      circumferenceOfCircle = 2 * pi * radiusOfCircle;     
              
alert(`The Area of the Circle is ${areaOfCircle}`)                    // Result will be alerted
alert(`The Circumference of the Circle is ${circumferenceOfCircle}`)  // Result will be alerted  




const slope = 2;              // Get the coefficients (slope and y-intercept) from the equation
const yIntercept = -2;

const xIntercept = yIntercept / slope;

alert(`Equation: y = ${slope}x - ${yIntercept}\n\nSlope (m): ${slope}\nx-intercept: ${xIntercept}\ny-intercept: ${yIntercept}`); 




let x1 = parseFloat(prompt("Enter the x-coordinate of Point 1:"));    // Get the coordinates of point 1 
let y1 = parseFloat(prompt("Enter the y-coordinate of Point 1:"));


let x2 = parseFloat(prompt("Enter the x-coordinate of Point 2:"));    // Get the coordinates of point 2 
let y2 = parseFloat(prompt("Enter the y-coordinate of Point 2:"));

let slope = (y2 - y1) / (x2 - x1);

alert(`The slope between (${x1}, ${y1}) and (${x2}, ${y2}) is: ${slope}`);  */

// skipping 7 and 8


/*
const totalHours = parseFloat(prompt('Total Hours Worked: ')),
      ratePerHour = parseFloat(prompt('Rate Per Hour: ')),
      totalEarning = totalHours * ratePerHour;     
              
alert(`Your Weekly earning is ${totalEarning}`);


const yourName = prompt('Enter your Name: '),
      shortOrLong = yourName.length > 7 ? 'long' : 'short';    
              
alert(`Your name is ${shortOrLong}`);              */



let firstNameFromAnime = 'Sahad',      
    lastNameFromAnime = 'Mahaboob',
    result = firstNameFromAnime.length > lastNameFromAnime.length
             ? `Your first name, ${firstNameFromAnime} is longer than your family name, ${lastNameFromAnime}`
             : `Your family name, ${lastNameFromAnime} is longer than your first name, ${firstNameFromAnime}`;

console.log(result);


let myAge = 23,
    yourAge = 30,
    resultFromComparison = myAge > yourAge 
                           ? `I am ${myAge - yourAge} years older than you`
                           : `I am ${yourAge - myAge} years younger than you`
            
console.log(resultFromComparison);

/*

 const userDateOfBirth = dateObject.getFullYear() - parseInt(prompt('Enter your Date of Birth: ')),
       allowedOrNot = userDateOfBirth >= 18 
                      ? `You are ${userDateOfBirth}. You are old enough to drive` 
                      : `You are ${userDateOfBirth}. You will be allowed to drive after ${18-userDateOfBirth} years`;    
              
alert(allowedOrNot);       



const yearToLive = parseInt(prompt('Enter number of years you live:'));

alert(`You lived ${((((yearToLive*365)*24)*60)*60)} seconds.`)

*/


function stringToTimeFormatter(stringToBeFormatted){

    let formattedString = stringToBeFormatted
                            .replace('YYYY', dateObject.getFullYear())
                            .replace('MM', dateObject.getMonth()+1)
                            .replace('DD', dateObject.getDate())
                            .replace('HH', dateObject.getHours())
                            .replace('mm', dateObject.getMinutes())

    return formattedString;
}

console.log(stringToTimeFormatter('YYYY-MM-DD HH:mm'));
console.log(stringToTimeFormatter('DD-MM-YYYY HH:mm'));   
console.log(stringToTimeFormatter('DD/MM/YYYY HH:mm'));

/***************************************************** 
 * 
 *                       LEVEL 3
 * 
 * ***************************************************/


function stringToTimeFormatter(stringToBeFormatted){

    function singleToDualDigit(digit){
        return digit < 10 ? `0${digit}` : digit
    }

    let formattedString = stringToBeFormatted
                            .replace('YYYY', dateObject.getFullYear())
                            .replace('MM', singleToDualDigit(dateObject.getMonth()+1))
                            .replace('DD', singleToDualDigit(dateObject.getDate()))
                            .replace('HH', singleToDualDigit(dateObject.getHours()))
                            .replace('mm', singleToDualDigit(dateObject.getMinutes()))

    return formattedString;
} 

console.log(stringToTimeFormatter('YYYY-MM-DD HH:mm'));