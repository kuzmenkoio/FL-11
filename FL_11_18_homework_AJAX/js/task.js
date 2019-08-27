const URL = 'https://jsonplaceholder.typicode.com/users';
let list = document.getElementById('users-list');
let container = document.getElementById('container-users-list');

async function renderUsers() {
    loading();
    let response = await fetch(URL);
    let users = await response.json();
    
    let renderedUsers = '';
    users.forEach((user) => {
        renderedUsers += `
            <li id="${user.id}">
                ${user.name}
            </li>  
        `
        list.innerHTML = renderedUsers;
    })
}

function getUsers() {
    const btn = document.createElement('button');
    btn.innerText = 'load users'
    container.appendChild(btn)

    btn.addEventListener('click', renderUsers);
}

function loading() {

}

getUsers();