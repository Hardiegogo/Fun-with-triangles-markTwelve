const sidesOfTriangle=document.querySelectorAll('.triangle-sides');
const calcAreaBtn=document.querySelector('#calculate-area');
const areaOutput=document.querySelector('.area-output')


function calcArea(a,b,c){
    a=Number(a.value);
    b = Number(b.value);
    c = Number(c.value);
    if(a+b>c && b+c>a && a+c>b){
        const s = (a + b + c) / 2;
        const result = Math.sqrt(s * (s - a) * (s - c) * (s - b));
        return result;
    }else{
        return false;
    }
    
}

function showArea(){
    const areaOfTriangle=calcArea(...sidesOfTriangle);
    if(areaOfTriangle){
        areaOutput.innerHTML = `Area of triangle using heron's formula is ${areaOfTriangle} cm²`;
    }else{
        areaOutput.innerHTML = `Please enter correct values!`;
    }
}

calcAreaBtn.addEventListener('click',showArea)