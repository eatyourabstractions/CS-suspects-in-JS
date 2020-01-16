// Extra utilities

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


const swap = (items, firstIndex, secondIndex) => {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArr(len, min, max){
    myArr = []
    for(i = 0; i <= len; i++){
        myArr.push(getRandomInt(min, max))
    }
    return myArr

}

