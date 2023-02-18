let serial = 0;

function getInputValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function setValue(nameof, calSum, ) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameof}</td>
    <td>${calSum}cm<sup>2</sup></td>
    <td>
    <button class="btn btn-primary">Covert to m<sup>2</sup></button></td>
    </td>
    `;
    container.appendChild(tr);
    // document.getElementById()
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
     const triSum = triangleArea(b, h);
     serial +=1;
    // set the value
    setValue("Triangle", triSum);

})

// Rectangle Area code
function rectangleArea(w, l) {
    const rectangleArea = w * l;
    console.log(rectangleArea);
    return rectangleArea;
}

document.getElementById('rectangle-calculate').addEventListener('click', function(){
    serial +=1;
    const w = getInputValue('rectangle-width');
    const l = getInputValue('rectangle-length');

    const recSum = rectangleArea(w, l);
    // set the value
    setValue("Rectangle", recSum);
})


// Parallelogram Area code
function parallelogramArea(b, h) {
    const parallelogramArea = b * h;
    console.log(parallelogramArea);
    return parallelogramArea;
}

document.getElementById("parallelogram-calculate").addEventListener('click', function() {
    serial +=1;
    const b = getInputValue('paran-base');
    const h = getInputValue('paran-height');
    
    const paraSum = parallelogramArea(b, h)

    // set the value
    setValue("Parallelogram", paraSum);
})


function rhombusArea(d1, d2) {
   
    console.log(rhombusArea);
    return rhombusArea;
}
document.getElementById("rhombus-calculate").addEventListener('click', function () {
    serial +=1;
    const d1 = getInputValue("diagonal-1");
    const d2 = getInputValue("diagonal-2");
    
    const rhombusArea = 0.5 * d1 * d2;

    setValue("Rhombus", rhombusArea);
})



document.getElementById('pentagon-calculate').addEventListener('click', function(){
    serial +=1;
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');

    const pentagonArea = 0.5 * p * b;
    
    setValue("Pentagon", pentagonArea);
})


document.getElementById('ellipse-area').addEventListener('click', function(){
    serial +=1;
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    const ellipseAreaFlot = 3.1416 * a * b;
    const ellipseArea = ellipseAreaFlot.toFixed(2);
    
    setValue('Ellipse', ellipseArea)
})