//Write a fn which takes in a string and returns counts of each character in the string
//

function charCount(str){
    var result={}
    for (var i=0; i<str.length; i++){
       var char=str[i].toLowerCase()
        if(result[char]>0){
            result[char]++
        }else {
            result[char]=1
        }
    }
    return result
}
console.log(charCount('hello there'))

function counts(str){
    let obj={}
    for (let char of str){

        if(isAlphaNumeric(char)){
            char=char.toLowerCase()
            obj[char]= ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if( ! (code >47 && code <58) && //[0-9]
        ! (code >64 && code <91) && //[A-Z]
        !(code >96 && code <123)) // [a-z]
        {return false}
        return true

}
console.log(counts('hello!'))
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
