// quicksort by michael m.


const mySplitter = (pivot, anArr) => {
        var res = {
         less:[],
         more:[]
        }

    for (const num of anArr) {
        num <= pivot ? res.less.push(num) : res.more.push(num)
    }
    return res
}

const quicksort = (xs) =>{
    var myArray = [...xs]
    if(myArray.length <= 1){
        return myArray
    }
    var pivot = myArray.shift()
    var {less, more} = mySplitter(pivot, myArray)
    return [...quicksort(less), pivot, ...quicksort(more)]

}