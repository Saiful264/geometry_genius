function getInputValue(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.value;
    const element = parseFloat(elementFieldString);
    return element;
}

// Triangle Area code
function triangleArea(b, h){
    const triangleArea = 0.5 * b * h;
    console.log(triangleArea);
}
document.getElementById("tri-calculate").addEventListener('click', function() {
    // get the value
    const b = getInputValue('tri-base');
    const h = getInputValue('tri-height');
    // get Triangle Area
    triangleArea(b, h);
    // set the value

})


function rectangleArea(w, l) {
    const rectangleArea = w * l;
    console.log(rectangleArea);
    return rectangleArea;
}

document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const w = getInputValue('rectangle-width');
    const l = getInputValue('rectangle-length');

    rectangleArea(w, l);
})
