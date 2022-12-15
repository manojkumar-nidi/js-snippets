const arr1 = [1,2,3,4,5];
const words = ['abc', 'xyz', 'jklfmnop', 'opqrs'];
/*
map() : This method creates new modified array with the results of calling a provided function on each element of calling array.
It doesn't change the original array but returns a new array
See example below
*/
const mapArr = arr1.map( item => item*5 );
console.log(`Map example : ${mapArr}`);

/* filter() : Filter's an array by calling a provided function which filters the elements of calling array
It returns a new array
*/
const filterArr = mapArr.filter( item => item % 2 )
console.log(`Filter example ${filterArr}`);

/* reduce() : Reduces an array of values down to just one value.
To get the output value, it runs a reducer function on each element of the array,
passing in the return value from the calculation on the preceding element.
*/

const sum = mapArr.reduce( (accumulator, currentValue) => accumulator+currentValue, 0);
console.log(`Reduce example sum : ${sum}`);

/* find() : returns the value of the first array element that satisfies the provided test condition
*/

const findVal = mapArr.find( item => item > 10);
console.log(`Find example : ${findVal}`);

/* findIndex() : Same as above but returns the index instead of array element
Also check findLast()
*/
const findIndex = mapArr.findIndex( item => item > 10);
console.log(`Find example : ${findIndex}`);

/*
push() : Adds one or more elements to the end of array and returns length of new array
pop() : Removes and returns the last element of array. It changes length of array
shift() : Removes and returns the first element of array
unshift() : Adds one or more elements to the begining of array and returns the length of new array
*/
const length = mapArr.push(20);
const popItem = mapArr.pop();
const firstItem = mapArr.shift();
const length1 = mapArr.unshift(35)



