// 1_
// Check if a given number is less than or equal to 100
// If number is less than or  equal to 100 
// Console.log number is less than or  equal to 100
// Else number is greater than 100


function checkNumber(num) {
    if (num <= 100) {
        console.log("Number is less than or equal to 100");
    } else {
        console.log("Number is greater than 100");
    }
}

// Example usage
checkNumber(150); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2- Check the number of characters in text
//  If number of characters  greater than 100 
//  Console log the string is long 
//  Else console log string is short 



function checkStringLength(text) {
    if (text.length > 100) {
        console.log("String is long");
    } else {
        console.log("String is short");
    }
}

// Example 
checkStringLength("This is a short string."); // String is short

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3- Password validation 
// If password equal confirm password 
// Password is validation else no valied



function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password is valid");
    } else {
        console.log("Password is not valid");
    }
}

// Example 
validatePassword("myPassword123", "differentPassword"); // Password is not valid 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4-  Check the day of the week if saterday 
// It's weekend else work day 



function checkDayOfWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    if (dayOfWeek === 6) { 
        console.log("It's the weekend");
    } else {
        console.log("It's a workday");
    }
}

// Example  
checkDayOfWeek();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5-  check the number is positive or negative 



function checkNumberSign(num) {
    if (num > 0) {
        console.log("The number is positive");
    } else if (num < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }
}

// Example 
checkNumberSign(10);  // The number is positive
checkNumberSign(-5);  // The number is negative
checkNumberSign(0);   // The number is zero

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6- Verifying academic grade  less than 50 F
//  Greater 60 it's D 70 C 80 B greater than it A


function getGrade(grade) {
    if (grade < 50) {
        console.log("Grade: F");
    } else if (grade < 60) {
        console.log("Grade: D");
    } else if (grade < 70) {
        console.log("Grade: C");
    } else if (grade < 80) {
        console.log("Grade: B");
    } else {
        console.log("Grade: A");
    }
}

// Example 
getGrade(44);  // Grade: F
getGrade(56);  // Grade: D
getGrade(67);  // Grade: C
getGrade(76);  // Grade: B
getGrade(90);  // Grade: A

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7- Check temperature temp greater than 30 it's hot 
// else it's cold



function checkTemperature(temp) {
    switch (true) {
        case (temp > 30):
            console.log("It's hot");
            break;
        default:
            console.log("It's cold");
            break;
    }
}

// Example 
checkTemperature(35);  // It's hot
checkTemperature(20);  // It's cold

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8- Checking an odd or even number


function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

// Example 
checkOddOrEven(4);  // The number is even
checkOddOrEven(7);  // The number is odd

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9- Checking an odd or even number if greater than 20 
// console log You can enter the university
//  Else You can't enter


function checkNumberAndEligibility(num) {
    if (num % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }

    if (num > 20) {
        console.log("You can enter the university");
    } else {
        console.log("You can't enter");
    }
}

// Example 
checkNumberAndEligibility(23);  // The number is even, You can enter the university
checkNumberAndEligibility(16);  // The number is odd, You can't enter
checkNumberAndEligibility(19);  // The number is even, You can't enter

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
