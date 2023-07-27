// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const second_smallest = (arr) => {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr[1]; //second smallest
}

const value = second_smallest([5, 2, 6, 8, -1]);
console.log(value);
