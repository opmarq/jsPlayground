let binarySearch = function(array,num){

    let middle = Math.floor(array.length / 2);

    if(array[middle] == num)
    {
        console.log(`found`);
        return;

    }else if(array[middle] > num) 
    {
        let left = array.slice(0,middle);
        
        binarySearch(left,num);

    }else if(array[middle] < num)
    {
        let right = array.slice(middle);
        
        binarySearch(right,num);
    }
}
