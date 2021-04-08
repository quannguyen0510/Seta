function secondLargestSum(arr) {
    //sort given array in ascending array
    const sort_arr = arr.sort((a, b) => {
        return a - b
    })

    //get last two elements
    const top_two = sort_arr.slice(-2)

    //sum of two elements
    const sum = top_two.reduce((a, b) => a + b, 0)

    return sum
}

const arr = [1, 4, 2, 3, 5];
const arr1 = [1, 3, 4];
const arr2 = [1];
const arr3 = [];
const arr4 = [1, 5, 5, 3];

console.log(secondLargestSum(arr));
console.log(secondLargestSum(arr1));
console.log(secondLargestSum(arr2));
console.log(secondLargestSum(arr3));
console.log(secondLargestSum(arr4));
