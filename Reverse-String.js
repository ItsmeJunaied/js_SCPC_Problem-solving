// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"


const ReverseString=(string)=>{
    const str= string.toString().split('');

    let reverseStr= '';
    for (let i= str.length -1; i >=0; i--){
        reverseStr = reverseStr+str[i];
        // console.log(append);
    }

    return reverseStr
}

const rtr=ReverseString('hello world');
console.log(rtr);
