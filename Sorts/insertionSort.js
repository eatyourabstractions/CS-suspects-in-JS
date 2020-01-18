// insertionSort by michael m.

const swap = (items, firstIndex, secondIndex) => {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


function insertionSort(a) {
    const n = a.length;
    // Iteration of array till last element 
    for (i = 0; i < n; i++) {
        let j = i;
        // Iterate over the sorted part of array and insert the element
        while (j >= 0 && a[j] < a[j - 1]) {
            swap(a, j, j-1)
            j--;
        }
    }
    return a;
}
