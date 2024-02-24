const array = [10, 20, 30];
array[2] = 99;
console.log(array);

function getLastvalue(array) {
  const myLastValue = array.length - 1;
  return array[myLastValue];
}

console.log(getLastvalue([1, 20, 22, 24, 5]));
console.log(getLastvalue(["hi", "hello", "hey"]));
