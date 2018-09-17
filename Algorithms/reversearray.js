
const revBySort = (array) => array.sort((a, b) => a < b);

//better way
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
//number reverse
var x = [-3,5,1,3,2,10];

function reverse (a) {
var b = [], counter = 0;
for (var i = a.length-1; i >= 0; i -= 1) {
b[counter] = a[i];
counter += 1;
}
return b;
}

console.log(reverse(x));
