// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const bubble_sort = (arr) => {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
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

const value = bubble_sort([5, 2, 6, 8, -1]);
console.log(value);
