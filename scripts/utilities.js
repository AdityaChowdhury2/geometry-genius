function getValueByElementId(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const value = parseFloat(elementValueString);
    if (!value) {
        alert('Please enter a valid input')
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