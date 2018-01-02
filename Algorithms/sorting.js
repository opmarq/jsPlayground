function findMax(array, size) {
    let posMax = 0;

    for (let i = 1; i < size; i++) {
        if (arr[i] > array[posMax]) {
            posMax = i;
        }
    }

    return posMax;
}

function bubbleSort(array) {
    let swaped = true;

    while (swaped) {

        swaped = false;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {

                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;

                swaped = true;
            }
        }
    }
    return array;
}

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        k = i;

        while (k >= 1) {
            if (array[k] < array[k - 1]) {
                let tmp = array[k];
                array[k] = array[k - 1];
                array[k - 1] = tmp;
            }

            k--;
        }
    }

    return array;

}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let maxPos = findMax(array, array.length - i)

        let tmp = array[maxPos];

        array[maxPos] = array[array.length - i - 1];

        array[array.length - i - 1] = tmp;

    }

    return array;
}
