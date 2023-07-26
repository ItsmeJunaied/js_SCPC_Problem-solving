// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const jsCalculator = (value1, value2, operator) =>{
    output='';

    if(operator== '+'){
        output= parseInt(value1)+parseInt(value2);
    }else if(operator== '-'){
        output= parseInt(value1)-parseInt(value2);
    }else if(operator== '*'){
        output= parseInt(value1)*parseInt(value2);
    }else if(operator== '/'){
        output= parseInt(value1)/parseInt(value2);
    }

    return output;

}
const value1 = '96';
const value2 = '2';
const operator = '*';

const funct = jsCalculator(value1, value2, operator);
console.log(funct);
