// mergeSort by michael m


const merge = (left, right) => {
    var anArr = []
    while(left.length > 0 && right.length > 0){
        anArr.push((left[0] <= right[0]) ? left.shift() : right.shift())
    }
    return anArr.concat(left).concat(right)
}


const mergeSort = (myArr) => {
    if(myArr.length <= 1){
        return myArr
    }
    var half = parseInt(myArr.length / 2)
    var left = mergeSort(myArr.slice(0, half))
    var right = mergeSort(myArr.slice(half, myArr.length))

    return merge(left, right)

}

const compareArr = (a1, a2) =>{
    if(a1.length != a2.length){
        return "lengths are diff"
    }

    for (i = 0; i < a1.length; i++){
        if(a1[i] != a2[i]){
            return "no theyre not"
        }
    }
    return "you made it"
}