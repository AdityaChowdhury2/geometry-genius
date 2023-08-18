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
    addToCalculationEntry('Triangle', area);
}
function calculateRectangleArea() {
    const length = getValueByElementId('rectangle-length');
    const width = getValueByElementId('rectangle-width');
    const area = length * width;
    setAndShowResult('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea() {

    const base = getValueByElementId('parallelogram-base');
    const height = getValueByElementId('parallelogram-height');
    const area = base * height;
    setAndShowResult('parallelogram-area', area);
    addToCalculationEntry("Parallelogram", area);
}
function calculateRhombusArea() {
    console.log("Rhombus area calculation");
    const rhombusFirstDiagonal = getValueByElementId('rhombus-first-diagonal');
    const rhombusSecondDiagonal = getValueByElementId('rhombus-second-diagonal');
    const area = rhombusFirstDiagonal * rhombusSecondDiagonal * .5;
    setAndShowResult('rhombus-area', area);
    addToCalculationEntry("Rhombus", area);
}
function calculateEllipseArea() {
    const firstAxis = getValueByElementId('ellipse-first-axis');
    const secondAxis = getValueByElementId('ellipse-second-axis');
    const area = 3.1416 * firstAxis * secondAxis;
    const areaFixed = area.toFixed(2);
    setAndShowResult('ellipse-area', areaFixed);
    addToCalculationEntry('Ellipse', areaFixed);
}

function calculatePentagonArea() {
    const side = getValueByElementId('pentagon-side');
    const area = 1.72 * side;
    const areaFixed = area.toFixed(2);
    setAndShowResult('pentagon-area', areaFixed);
    addToCalculationEntry('Pentagon', areaFixed);
}