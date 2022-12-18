// Array Methods


// slice 
        // 0 1 2 3 4   
// var arr = [1,2,3,4,5];

// // create an array [2,3,4] from above array

// console.log( arr.slice(1, 4) );

// // splice

// var arr = [1,2,3,4,5];

// console.log( arr.splice(1, 2) ); // deletes the all the elements from index 1 ([2,3])

// console.log(arr); // [ 1, 4, 5 ]

// arr = [1,2,3,4,5];
// // replace with splice
// console.log( arr.splice(1, 2, 9, 8) ); // replaces 2, 3 with 9, 8

// console.log(arr); // [1, 9, 8, 4, 5]


// find ---> used to find an element with the condition (finds the first element)

var arr = [ 12, 13, 14, 15, 16, 20 ];

// find the element which is divisible by 5

// iteration
// for(var i=0;i<arr.length;i++) {
//   if (arr[i] % 5 === 0) {
//     console.log(arr[i]);
//     break;
//   }
// }


// predicate ---> a function which returns true or false
var res = arr.find( function ( num ) {
  return num % 5 === 0;
} );

// 

console.log(res);

// find first index
var resIndex = arr.findIndex( function ( num ) {
  return num % 5 === 0;
} );


console.log(resIndex);


var resLast = arr.findLast( function ( num ) {
  return num % 5 === 0;
} );

// 

console.log(resLast);

// find first index
// var resLastIndex = arr.findLastIndex( function ( num ) {
//   return num % 5 === 0;
// } );

var resLastIndex = arr.findLastIndex( ( num ) => {
  return num % 5 === 0;
} );
// 

console.log(resLastIndex);








