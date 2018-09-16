// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const aCharMap=buildCharMap(stringA)
    const bcharMap=buildCharMap(stringB)

    if (Object.keys(aCharMap).length!=Object.keys(bcharMap).length){
        return false
    }else{
        for(let char in aCharMap){

            if(aCharMap[char]!=bcharMap[char]){
                return false
            }
            

        }
        return true


    }
    

}

function buildCharMap(str){


    const charMap={}
    for (char of str.replace(/[^\w]/g, '').toLowerCase()){

        charMap[char]=charMap[char]+1 || 1

    }
    return charMap

}


function anagram2(str1,str2){
  return  cleanStr(str1)===cleanStr(str2)



}
function cleanStr(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
