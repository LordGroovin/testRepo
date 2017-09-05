/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);
*/

// Lecture variables 2

/* var name = "John";
var age = "26";

//console.log(name + " " + age);
//console.log(age + age);

var job, isMarried;
//console.log(job);
job = "teacher";
isMarried = false;
lastName = "Williams";

console.log(name + " " + lastName + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");

var lastName = prompt("What is the last name?");

console.log(name + " " +lastName + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");
alert(name + " " + lastName + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");
*/

// Operators
/*
var now = 2017;
var birthYear = now - 45;

console.log(birthYear);
*/

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + " is married.");
} else {
    console.log(name + " is not married.")
}
*/

///////////////////////////////////
//Lecture: boolean logic and switch
/*
var age = 25;

if (age < 20) {
    console.log("John is a teenager");
} else {
    console.log("John is a man");
}
*/
/*
var johnAge = 40;
var maryAge = 40;
var billAge = 39;

var johnHeight = 1000;
var maryHeight = 1000;
var billHeight = 1000;

var johnScore = johnHeight + (5 * johnAge);
var maryScore = maryHeight + (5 * maryAge);
var billScore = billHeight + (5 * billAge);

console.log("John's score is " + johnScore);
console.log("Bill's score is " + billScore);
console.log("Mary's score is " + maryScore);

if (johnScore > maryScore && billScore) {
    console.log("John wins!!!");
} else if (maryScore > johnScore && billScore) {
    console.log("Mary wins!!!");
} else if (billScore > maryScore && johnScore) {
    console.log("Bill wins!!!")

} else if ((maryScore === billScore) && (maryScore > johnScore)){
    console.log("Mary and Bill tie for first!!");
} else if ((maryScore === johnScore) && (maryScore > billScore)) {
    console.log("Mary and John tie for first!!");
} else if ((johnScore == billScore) && (johnScore > maryScore)) {
    console.log("John and Bill tie for first!!")
} else {
    console.log ("THREE WAY TIE!!!")
}
*/

////////////////////////////////////////
// Lecture: Functions

/*
function calculateAge (yearOfBirth) {
    var age = 2017 - yearOfBirth;
return age;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);
*/

////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane' , 'Mark']
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(years);

names[1] = "Ben";
console.log(names);

var john = ['John', "Smith", 1990, 'designer', false];

john.push("Blue"); // adds to the end

console.log(john);
john.unshift("Mr."); // adds to the beginning
console.log(john);
console.log(john.pop()); // removes from the end and holds that value as john.pop()
console.log(john);
john.shift();
console.log(john);
if (john.indexOf('teacher') === -1) {
    console.log("John is not a teacher")
}

*/

////////////////////////////
//  Levture: Objects
/*
var arr = [1,2,3];
arr[0];
*/
/*
var john = {
    name: 'john',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
}
console.log(john);
console.log(john.lastName);
console.log(john['lastName']);
var xyz = "job";
console.log(john[xyz]);

john.lastName = 'Jones';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yeatOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/
///////////////////////////////
// Lecture: Objects and Methods
/*
var john ={
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function (birthYear) {  //function expression
        return 2017 - birthYear;
    }
};
console.log(john);
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge(1991));
*/
/*
var john ={
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function (yearOfBirth) {  //function expression
        return 2017 - this.yearOfBirth;
    }
};
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/
/*
var john ={
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function (birthYear) {
        //return 2017 - birthYear;
        this.age = 2016 - this.yearOfBirth;
    }
};
john.calculateAge();
console.log(john);
*/
/*
var john ={
    yearOfBirth: 1990,
    calculateAge: function (yearOfBirth) {
        this.age = 2016 - this.yearOfBirth;
    }
};

var mike ={
    yearOfBirth: 1972,
    calculateAge: function (yearOfBirth) {
        this.age = 2016 - this.yearOfBirth;
    }
};
john.calculateAge();
mike.calculateAge();
console.log(john);
console.log(mike);
*/

////////////////////////////////
// Lecture: Loops
/*
for (var i =0; i < 10; i++) {
    console.log(i);
} */
/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var i =0; i < names.length; i++){
    console.log(names[i])
} 
for (var i=names.length-1; i>=0; i-- ) {
    console.log(names[i]);
}
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++
}

for (var i = 1; i<=5; i++) {
    console.log(i);
    if (i===3) {
        break;
    }
}
*/
for (var i = 1; i<=5; i++) {
    if (i===3) {
        continue;
    }
    console.log(i);
       
}




