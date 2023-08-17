// function calculateTriangleArea() {
//     // Get Triangle base
//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);


//     // Get Triangle Height
//     const heightField = document.getElementById('triangle-height');
//     const heightFieldText = heightField.value;
//     const height = parseFloat(heightFieldText);
//     if (!height || !base) {
//         alert('Please enter valid input value');
//     }
//     else {
//         const result = height * base * .5;
//         const triangleArea = document.getElementById('triangle-area');
//         triangleArea.parentElement.classList.remove('opacity-0')
//         triangleArea.innerText = result;
//     }

// }
// function calculateRectangleArea() {
//     // Get Triangle Width
//     const widthField = document.getElementById('rectangle-width');
//     const widthValueText = widthField.value;
//     const width = parseFloat(widthValueText);


//     // Get Triangle Length
//     const lengthField = document.getElementById('rectangle-length');
//     const lengthFieldText = lengthField.value;
//     const length = parseFloat(lengthFieldText);

//     if (!width || !length) {
//         alert('Please enter valid input value');
//     }
//     else {
//         const result = length * width;
//         const triangleArea = document.getElementById('rectangle-area');
//         triangleArea.parentElement.classList.remove('opacity-0')
//         triangleArea.innerText = result;
//     }
// }
function calculateTriangleArea() {
    const base = getValueByElementId('triangle-base');
    const height = getValueByElementId('triangle-height');
    const area = base * height * .5;
    setAndShowResult('triangle-area', area);
}
function calculateRectangleArea() {
    const length = getValueByElementId('rectangle-length');
    const width = getValueByElementId('rectangle-width');
    const area = length * width;
    setAndShowResult('rectangle-area', area);
}

function calculateParallelogramArea() {
    const base = getValueByElementId('parallelogram-base');
    const height = getValueByElementId('parallelogram-height');
    const area = base * height;
    setAndShowResult('parallelogram-area', area);
}
function calculateEllipseArea() {
    const firstAxis = getValueByElementId('ellipse-first-axis');
    const secondAxis = getValueByElementId('ellipse-second-axis');
    const area = 3.1416 * firstAxis * secondAxis;
    setAndShowResult('ellipse-area', area);
}