const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

let element = document.createElement('div');
element.setAttribute('data-component', 'todo-app');
rootNode.appendChild(element);

let input = document.createElement('input');
input.setAttribute('data-element', 'new-item-text');
element.appendChild(input);

let button = document.createElement('button');
button.setAttribute('data-element', 'add-item-button');
button.innerHTML = `Add to do`;
element.appendChild(button);

let ul = document.createElement('ul');
ul.setAttribute('data-element', 'items-list');

let li = document.createElement('li');
li.setAttribute('data-element', 'item');
ul.appendChild(li);

let innerInput = document.createElement('input');
innerInput.setAttribute('type', 'checkbox');
innerInput.setAttribute('data-element', 'item-checkbox');
li.appendChild(innerInput);

let text = document.createElement('span');
text.setAttribute('data-element', 'item-text');
li.appendChild(text);


element.appendChild(ul);

let todoApp = new TodoApp({
    element: document.querySelector('[data-component="todo-app]')
});

class TodoApp {
    constructor({ element }) {
        this._element = element;
        this._render();
    }

    _render() {
        this._element.innerHTML = `

        `;
    }
}

