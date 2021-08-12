//addTwoNumbers
function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('addTwoNumbers Exercise:', sum);

//////////////////////////////////

//convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var product = convertHoursToMinutes(2)
console.log('convertHoursToMinutes Exercise:', product);

//////////////////////////////////

//getGreeting
function getGreeting(name) {
  return (name);
}

var name = getGreeting('Paul');
console.log('getGreeting Exercise: ' + 'Hello ' + name + '!')

//////////////////////////////////

//addAndMultiplyBy5
function addAndMultiplyBy5(x, y) {
  z = x + y;
  return z * 5;
}

var total = addAndMultiplyBy5(10, 5);
console.log('ddAndMultiplyBy5 Exercise:', total);

//////////////////////////////////

//multiplyAndDivideBy5
function multiplyAndDivideBy5(x, y) {
  z = x * y;
  return z / 5;
}

var result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', result);

//////////////////////////////////

//subtractTwoNumbers
function subtractTwoNumbers(x, y) {
  return x - y;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', difference);

//////////////////////////////////

//getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', circumference);

//////////////////////////////////

//getFullName
function getFullName(firstName, lastName) {
 return firstName + " " + lastName
}

var fullName = getFullName('Paul', 'Park');
console.log('getFullName Exercise:', fullName);

//////////////////////////////////

//cube
function cube(x) {
  return Math.pow(x, 3);
}

var output = cube(5);
console.log('cube Exercise:', output);
