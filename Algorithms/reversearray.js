
const revBySort = (array) => array.sort((a, b) => a < b);

//better way
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
