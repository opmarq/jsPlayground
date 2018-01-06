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

function merge(arr1,arr2)
{
    let result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length)
    {
        if(arr1[i] < arr2[j])
        {
            result.push(arr1[i]);
            i++;
        }else{

            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length)
    {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length)
    {
        result.push(arr2[j]);
        j++;
    }

    return result;

}

function mergeSort(array)
{
    
    if(array.length < 2)
        return array;

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);

    return merge(mergeSort(left),mergeSort(right));

}

function quickSort(array)
{

    if(array.length < 2)
        return array;
  
    let pivot = array[array.length - 1];

    let right = [];
    let left = [];

    for(let i = 0; i < array.length - 1; i++)
    {
        if(array[i] <= pivot)
        {
            left.push(array[i]);
        }else{

            right.push(array[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];

}
