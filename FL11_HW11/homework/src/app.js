let rootNode = document.getElementById('root');

let title = document.createElement('h1');
title.innerText = 'TODO Cat List';
rootNode.appendChild(title);

let mainInput = document.createElement('input');
rootNode.appendChild(mainInput);
mainInput.setAttribute('placeholder', 'Add new action');
mainInput.setAttribute('class', 'main-input');

let plusButton = document.createElement('button');
rootNode.appendChild(plusButton);
plusButton.innerHTML = '<i class="material-icons">add</i>';

let hr = document.createElement('hr');
rootNode.appendChild(hr);

if (mainInput.value === '') {
    plusButton.setAttribute('disabled', 'disabled');
}