const triangleSides=document.querySelectorAll('.sides-triangle')
const calcHypotenuseBtn=document.querySelector('#calculate-hypotenuse')
const hypotenuseOutput=document.querySelector('.hypotenuse-output')

function calcHypotenuse(side1,side2){
    if(Number(side1.value)>0 && Number(side2.value)>0){
        const result =
          Number(side1.value) * Number(side1.value) +
          Number(side2.value) * Number(side2.value);
        return result;

    }else{
        return false;
    }
    
}

const showHypotenuse=function(){
    const result=calcHypotenuse(...triangleSides);
    if (result){
        const lengthOfHypotenuse = Math.sqrt(result).toFixed(2);
        hypotenuseOutput.innerHTML = `Length of the hypotenuse is ${lengthOfHypotenuse}!`;
    }else{
        hypotenuseOutput.innerHTML = 'Please enter positive values';
    }
}

calcHypotenuseBtn.addEventListener('click',showHypotenuse);