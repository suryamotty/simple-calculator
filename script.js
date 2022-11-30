function displayValue(num){
    display.value+=num;
}

function allClear(){
    display.value='';
}
function evaluateOut(){
    display.value= eval(display.value);
}

function back(){
    display.value= display.value.slice(0,-1);
}