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
