const sidesOfTriangle=document.querySelectorAll('.triangle-sides');
const calcAreaBtn=document.querySelector('#calculate-area');
const areaOutput=document.querySelector('.area-output')


function calcArea(a,b,c){
    a=Number(a.value);
    b = Number(b.value);
    c = Number(c.value);
    const s = (a+b+c)/2;
    const result= Math.sqrt((s*(s-a)*(s-c)*(s-b)))
    return result;
}

function showArea(){
    const areaOfTriangle=calcArea(...sidesOfTriangle);
    areaOutput.innerHTML = `Area of triangle using heron's formula is ${areaOfTriangle} cm²`;
}

calcAreaBtn.addEventListener('click',showArea)