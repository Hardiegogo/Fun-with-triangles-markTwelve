const triangleSides=document.querySelectorAll('.sides-triangle')
const calcHypotenuseBtn=document.querySelector('#calculate-hypotenuse')
const hypotenuseOutput=document.querySelector('.hypotenuse-output')

function calcHypotenuse(side1,side2){
    const result= Number(side1.value)*Number(side1.value)+Number(side2.value)*Number(side2.value);
    return result;
}

const showHypotenuse=function(){
    const result=calcHypotenuse(...triangleSides);
    const lengthOfHypotenuse=Math.sqrt(result);
    hypotenuseOutput.innerHTML=`Length of the hypotenuse is ${lengthOfHypotenuse}!`
}

calcHypotenuseBtn.addEventListener('click',showHypotenuse);