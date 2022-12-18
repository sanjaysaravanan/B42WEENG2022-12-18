// using destructure
var arrThree = [99, 89, 79];

// store the value 79 into X using destructure
var [ , , X ] = [99, 89, 79];

// console.log(X);

// Nested array
            //   0          1          2
            //0  1  2    0  1  2    0  1  2
const arr = [[1, 2, 3], [9, 8, 7], [4, 5, 6]];

// take the value 8 and assign it to Z

// without destructure accessing the values of nested array
var Z = arr[1][1];

// console.log(Z);

// using destructure the array of nested array
var [ , arrIndexTwo ] = arr;

// console.log(arrIndexTwo);


// take the 8 and give it to P
var [, [ , P ] ] = [[1, 2, 3], [9, 8, 7], [4, 5, 6]];

// console.log(P);

// const nestedArr = [[[], [], []], [ [], [], [ [1, [999], []] ] ]];

// // without desturcture
// var R = nestedArr[1][2][0][1][0];
// console.log(R);


// // // store 999 into Q using destructure
// // var [,[ , , [ [ , [ Q ] ] ] ] ]  = nestedArr;
// // console.log(Q);


// Object Nesting
const resume = {
  name: 'B42WEENG',
  DOB: 'mm-dd-yyyy',
  education: {
    isGraduated: true,
    isIndian: false,
    percentage: 90,
    subjects: ['ENG', 'MATH', 'SCI']
  }
};

// with destructure get DOB
const { DOB } = resume;
// console.log(DOB);
 
// education
const { education } = resume;
// console.log(education);

// withotu destructure take the values of subjects
// create a varaible subjects
// var subjects = resume.education.subjects;


// with destructure
var { education: { subjects } } = resume;

// console.log(subjects);

var { education: { subjects: [ , secondSub ] } }  = resume;


// console.log(secondSub);


// student info
var studentInfo = { name: 'SAM', age: '17', standard: 'XII', section: 'A' }
/**
 * Student Name: SAM
 * Age: 17
 * Class: XII
 * Section: A
 */

// no destrucutre direct access
function displayInfo (info) {
  console.log('Student Name:', info['name']); // sqaure access
  console.log('Age:', info.age); // dot access
  console.log('Class:', info['standard']);
  console.log('Section:', info.section);
}

// displayInfo(studentInfo);

var { name, age, standard, section } = studentInfo;

// console.log(name, age, standard, section)

function displayInfoDest( { name, age, standard, section } ) { // LHS
  console.log('Student Name:', name); // sqaure access
  console.log('Age:', age); // dot access
  console.log('Class:', standard);
  console.log('Section:', section);
}

displayInfoDest(studentInfo); // passing argument to be RHS

var marks = { eng: '100', maths: '99', science: '75' };

/**
 * Student Name: SAM
 * Age: 17
 * Class: XII
 * Section: A
 * Marks:
 * Maths: 99
 * English: 100
 * Science: 75
 */

function displayInfoArguments( { name, age, standard, section }, { eng, maths, science } ) { // LHS
  console.log('Student Name:', name);
  console.log('Age:', age);
  console.log('Class:', standard);
  console.log('Section:', section);
  console.log('Maths:', maths);
  console.log('English:', eng);
  console.log('Science:', science);
}

displayInfoArguments(studentInfo, marks);

var marks = { eng: '100', maths: '99', science: '75' };

var displayMarks = ({ maths, eng, science }) => {
  console.log('Maths:', maths);
  console.log('English:', eng);
  console.log('Science:', science);
}

displayMarks(marks);
