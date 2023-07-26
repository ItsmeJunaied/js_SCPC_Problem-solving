const RomanNumeralsToInterger=(RomanNumerals)=>{
    // const I=parseInt(1);
    // const V=parseInt(5);
    // const X=parseInt(10);
    // const L=parseInt(50);
    // const C=parseInt(100);
    // const D=parseInt(500);
    // const M=parseInt(1000);

    sum=0;

    const RomanNumerals_Char=RomanNumerals.split("");
    for (let i=0; i<RomanNumerals_Char.length; i++){
        if(RomanNumerals_Char[i]==='I'){
            sum+= parseInt(1)
        }else if(RomanNumerals_Char[i]==='V'){
            sum+= parseInt(5)
        }else if(RomanNumerals_Char[i]==='X'){
            sum+= parseInt(10)
        }else if(RomanNumerals_Char[i]==='L'){
            sum+= parseInt(50)
        }else if(RomanNumerals_Char[i]==='C'){
            sum+= parseInt(100)
        }else if(RomanNumerals_Char[i]==='D'){
            sum+= parseInt(500)
        }else if(RomanNumerals_Char[i]==='M'){
            sum+= parseInt(1000)
        }
    }

    return sum
}

const value= RomanNumeralsToInterger('IX');
console.log(value);