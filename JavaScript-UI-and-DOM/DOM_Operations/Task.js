/*Create a function that takes an id or DOM element and an array of contents

If an id is provided, select the element
Add divs to the element
Each div's content must be one of the items from the contents array
The function must remove all previous content from the DOM element provided
Throws if:
The provided first parameter is neither string or existing DOM element
The provided id does not select anything (there is no element that has such an id)
Any of the function params is missing
Any of the function params is not as described
Any of the contents is neither string nor number
In that case, the content of the element must not be changed*/

function getElement(element, contents) {

    if (typeof(element) === 'string') {
        element = document.getElementById(element);
        if (!element) {
            throw new Error('There is no element with this Id');
        }
    } else if (!(element === HTMLElement)) {
        throw new Error('Invalid HTML element');
    }

    if (!(contents instanceof Array)) {
        throw new Error('Must put an array');
    } else if (isNaN(contents.length)) {
        throw new Error('array is empty');
    }

    var docFrag = document.createDocumentFragment(),
        divElement = document.createElement('div');

    for (var i = 0; len = contents.length, i < len; i += 1) {
        var currentDiv = divElement.cloneNode(true);
        var content = contents[i];
        if (typeof(content) !== 'string' || typeof(content) !== 'number') {
            throw new Error('Invalid content');
        }
        currentDiv.innerHTML = content;
        docFrag.appendChild(currentDiv);
    }

    element.innerHTML = '';
    element.appendChild(docFrag);
}
