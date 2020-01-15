// selectionSort by michael m.

const selectionSort = (arr) => {
    for (i = 0; i < arr.length; i++){
        var min = i
        for (j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(i != min){
            swap(arr, i, min)
        }
      
    }
    return arr
    
   
}
const swap = (items, firstIndex, secondIndex) => {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

