const findMid=(arr)=>{

    arr.sort()
    console.log(arr)
    const middle=arr[Math.floor(arr.length/2)]

    return middle

}

findMid([1,2,3,5,6,7,8,4,9])
