const sideAngles = document.querySelectorAll('.angles');
const isTriangleBtn=document.querySelector('.is-triangle');
const outputArea=document.querySelector('.output');

function calculateSumOfAngles(angle1,angle2,angle3){
    if(Number(angle1.value)>0 && Number(angle3.value)>0 && Number(angle2.value)>0){
        const sumOfAngles =
          Number(angle1.value) + Number(angle3.value) + Number(angle2.value);
        return sumOfAngles;
    }else{
        return false;
    }
    
}

function checkIsTriangle(){
    const sumOfAngles=calculateSumOfAngles(...sideAngles);
    

    if(sumOfAngles===180){
        outputArea.innerHTML="Yes the Angles form a triangle!😎"
    }else if(!sumOfAngles){
        outputArea.innerHTML = "Please enter valid inputs.";
    } else{
        outputArea.innerHTML = "These angles do not form a triangle! 😐";
    }
}

isTriangleBtn.addEventListener('click',checkIsTriangle);