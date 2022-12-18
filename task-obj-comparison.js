var obj1 = { standard: 'XII' , name: 'person 1', age: 5 };
var obj2 = { age: 5, name: 'person 1', standard: 'XII' };

var flag = true; // assume both are same initially

for (var key in obj1) {
  if (obj1[key] !== obj2[key]) {
    flag = false;
    break;
  }
}

console.log(flag);