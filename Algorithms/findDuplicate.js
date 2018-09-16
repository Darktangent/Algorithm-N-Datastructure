const findDup=(arr)=>{

    let i=0
    for (j=1;j<arr.length-1;j++){

        if(arr[i]!==arr[j]){
            i++
        } else if(arr[i]===arr[j]){
            return (arr[i],arr[j])
        }
        }
        return false
    }



findDup([1,2,3,7,4,5])
