// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {

//     return str.split("").reverse().join("")
// }
// function reverse1(str){
//     let newStr = ""
//     for (let i=str.length-1; i>=0; i--){
//     newStr +=str[i]
//     }
//     return newStr

// }

// function reverse2(str) {

//     let reversed = ""
//     for (let char of str){
//         reversed=char + reversed
//     }
//     return reversed
// }
function reverse3(str){
   
   return str.split('').reduce((reversed,character)=>{
        return character+ reversed
    }, '')

}
reverse3('hello')
module.exports = reverse3;
