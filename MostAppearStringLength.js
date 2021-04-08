function mostAppearStringLength(str_arr) {
    //array with element is string length from string array
    const str_length_arr = str_arr.map( x => x.length );

    //array with key is value of string length array and value is number of occurrences
    const count_str_length = str_length_arr.reduce((str_length, c) => {
        str_length[c] = (str_length[c] || 0) + 1;
        return str_length;
    }, {})

    //find string lengths that occur most
    const max_length = Object.keys(count_str_length).filter(x => {
        return count_str_length[x] == Math.max.apply(null, 
        Object.values(count_str_length));
    })

    //return result by filter strings that have length equal to max length
    const result = str_arr.filter(x => max_length.some(length => parseInt(length) === x.length));

    return result;
}

const arr1 = ["a", "ab", "abc", "cd", "def", "gh"];
const arr2 = ["a", "ab", "abc", "cd", "def", "gh", "abc"];
const arr3 = ["a", "ab", "abc", "abcd"];
const arr4 = ["a", "ab", "abc", "cd", "def", "abcde", "badce", "fbdca"];
const arr5 = [];

console.log(mostAppearStringLength(arr1));
console.log(mostAppearStringLength(arr2));
console.log(mostAppearStringLength(arr3));
console.log(mostAppearStringLength(arr4));
console.log(mostAppearStringLength(arr5));
