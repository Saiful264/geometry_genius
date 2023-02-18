let serial = 0;
// get the value form the input field
function getInputValue(elementId) {
  const inputField = document.getElementById(elementId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// display the calculate value dynamicly
function setValue(nameof, calSum) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameof}</td>
    <td>${calSum}cm<sup>2</sup></td>
    <td>
    <button class="btn btn-primary">Covert to m<sup>2</sup></button></td>
    </td>
    `;
  container.appendChild(tr);
}

// Triangle Area code
function triangleArea(b, h) {
  const triangleArea = 0.5 * b * h;
  return triangleArea;
}
document.getElementById("tri-calculate").addEventListener("click", function () {
  // get the value
  const b = getInputValue("tri-base");
  const h = getInputValue("tri-height");

  // validation code
  if (isNaN(b, h) || b <= 0 || h <= 0 || isNaN(b) || isNaN(h)) {
    alert("Pleace give a valid number");
  } else {
    // get Triangle Area
    const triSum = triangleArea(b, h);
    // set the value
    serial += 1;
    setValue("Triangle", triSum);
  }
});

// Rectangle Area code
function rectangleArea(w, l) {
  const rectangleArea = w * l;
  console.log(rectangleArea);
  return rectangleArea;
}

document.getElementById("rectangle-calculate").addEventListener("click", function () {
    const w = getInputValue("rectangle-width");
    const l = getInputValue("rectangle-length");

    // validation code
    if (isNaN(w, l) || w <= 0 || l <= 0 || isNaN(w) || isNaN(l)) {
      alert("Pleace give a valid number");
    } else {
      const recSum = rectangleArea(w, l);
      serial += 1;
      // set the value
      setValue("Rectangle", recSum);
    }
  });

// Parallelogram Area code
function parallelogramArea(b, h) {
  const parallelogramArea = b * h;
  console.log(parallelogramArea);
  return parallelogramArea;
}

document.getElementById("parallelogram-calculate").addEventListener("click", function () {
    const b = getInputValue("paran-base");
    const h = getInputValue("paran-height");

    // validation code
    if (isNaN(b, h) || b <= 0 || h <= 0 || isNaN(b) || isNaN(h)) {
      alert("Pleace give a valid number");
    } else {
      serial += 1;
      const paraSum = parallelogramArea(b, h);
      // set the value
      setValue("Parallelogram", paraSum);
    }
  });

// Rhombus Aera code
document.getElementById("rhombus-calculate").addEventListener("click", function () {
    const d1 = getInputValue("diagonal-1");
    const d2 = getInputValue("diagonal-2");

    // validation code
    if (isNaN(d1, d2) || d1 <= 0 || d2 <= 0 || isNaN(d1) || isNaN(d2)) {
      alert("Pleace give a valid number");
    } else {
      serial += 1;
      const rhombusArea = 0.5 * d1 * d2;
      setValue("Rhombus", rhombusArea);
    }
  });
//   Pentagon Aera code
document.getElementById("pentagon-calculate").addEventListener("click", function () {
    const p = getInputValue("pentagon-p");
    const b = getInputValue("pentagon-b");

    // validation code
    if (isNaN(p, b) || p <= 0 || b <= 0 || isNaN(p) || isNaN(b)) {
      alert("Pleace give a valid number");
    } else {
      serial += 1;
      const pentagonArea = 0.5 * p * b;

      setValue("Pentagon", pentagonArea);
    }
  });
//   Ellipse Area
document.getElementById("ellipse-area").addEventListener("click", function () {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");

  // validation code
  if (isNaN(a, b) || a <= 0 || b <= 0 || isNaN(a) || isNaN(b)) {
    alert("Pleace give a valid number");
  } else {
    serial += 1;
    const ellipseAreaFlot = 3.1416 * a * b;
    const ellipseArea = ellipseAreaFlot.toFixed(2);
    setValue("Ellipse", ellipseArea);
  }
});

// blog page code
document.getElementById("blog-page").addEventListener("click", function(){
    console.log("he");
    window.location.href = 'blog.html';
})

let div = document.querySelector("#card-body");
  
        div.addEventListener(
            "mousemove", function (e) {
                x = e.offsetX;
                y = e.offsetY;
                div.style.backgroundColor
                    = `rgb(${x}, ${y}, ${x - y})`;
            });