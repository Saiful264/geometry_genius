function getInputValue(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.value;
    const element = parseFloat(elementFieldString);
    return element;
}

function setValue(params) {
    
}

// Triangle Area code
function triangleArea(b, h){
    const triangleArea = 0.5 * b * h;
    console.log(triangleArea);
    return triangleArea;
}
document.getElementById("tri-calculate").addEventListener('click', function() {
    // get the value
    const b = getInputValue('tri-base');
    const h = getInputValue('tri-height');
    // get Triangle Area
    triangleArea(b, h);
    // set the value

})

// Rectangle Area code
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


// Parallelogram Area code
function parallelogramArea(b, h) {
    const parallelogramArea = b * h;
    console.log(parallelogramArea);
    return parallelogramArea;
}

document.getElementById("parallelogram-calculate").addEventListener('click', function() {
    const b = getInputValue('paran-base');
    const h = getInputValue('paran-height');
    
    parallelogramArea(b, h)
})


function rhombusArea(d1, d2) {
    const rhombusArea = 0.5 * d1 * d2;
    console.log(rhombusArea);
    return rhombusArea;
}
document.getElementById("rhombus-calculate").addEventListener('click', function () {
    const d1 = getInputValue("diagonal-1");
    const d2 = getInputValue("diagonal-2");
    rhombusArea(d1, d2);
})



document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');

    const pentagonArea = 0.5 * p * b;
    console.log(pentagonArea);
})


document.getElementById('ellipse-area').addEventListener('click', function(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    const ellipseAreaFlot = 3.1416 * a * b;
    const ellipseArea = ellipseAreaFlot.toFixed(2);
    console.log(ellipseArea);
})