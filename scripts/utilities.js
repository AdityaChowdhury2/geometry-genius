function addToCalculationEntry(type, area) {
    if (area) {
        const calculationEntry = document.getElementById('calculation-entry');

        const count = calculationEntry.childElementCount;
        const div = document.createElement('div');

        div.innerHTML = `  
        <p>${count + 1}. ${type}</p>
        <p class='text-center'>${area}cm<sup>2</sup></p>
        <button onclick='convertToMeter(this)' class='btn btn-sm btn-info normal-case p-2 text-white text-[10px] inline-block'>Convert to m<sup>2</sup></button>
    `;
        div.classList.add('text-xs', 'grid', 'grid-cols-3', 'items-center',);
        calculationEntry.appendChild(div);
    }
}


function convertToMeter(target) {
    const areaInCentiMeterString = target.parentElement.children[1].innerText.split('c')[0];
    const areaInCentiMeterNumber = parseFloat(areaInCentiMeterString);
    const areaInMeter = areaInCentiMeterNumber * .01;
    target.parentElement.children[1].innerHTML = `
        ${areaInMeter.toFixed(4)}m<sup>2</sup>
    `;
    target.setAttribute('disabled', 'true');
    // target.removeAttribute('onclick');
    // target.onclick = null;
}

function getValueByElementId(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const value = parseFloat(elementValueString);
    if (isNaN(value)) {
        alert('Please enter a valid input');
        return;
    }
    else {
        return value;
    }
}

function setAndShowResult(elementId, value) {
    if (value) {
        const element = document.getElementById(elementId);
        element.innerText = value;
        element.parentElement.classList.remove('opacity-0');
    }
}
function hideResult(target) {
    target.parentElement.parentElement.children[3].classList.add('opacity-0');
}