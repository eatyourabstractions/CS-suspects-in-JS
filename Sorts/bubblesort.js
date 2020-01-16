// bubbleSort by michael m.

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                swap(inputArr, j, j + 1)
            }
        }
    }
    return inputArr;
};

const swap = (items, firstIndex, secondIndex) => {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
