var output = "";
for (var i = 0, len = myarray.length; i<len; i++){
    output += myarray[i];
}
//revise the function

function join(sep) {
    var res = '';
    if (this.length) {
        res += this[0];
        for (var i = 1; i < this.length; i++) {
            res += sep + this[i];
        }
    }
    return res;
}
