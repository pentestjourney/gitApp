const toggleSwitch = document.querySelector('input[type="checkbox"]');
if (localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    toggleSwitch.checked = true;

}
toggleSwitch.addEventListener('click', function (e) {
    const { checked } = toggleSwitch;
    if (checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');

    }
    document.body.className = toggleSwitch.checked ? 'dark' : ''
})



const h1 = document.querySelector('h1');
setInterval(function () {
    h1.classList.toggle('big');
    h1.classList.toggle('small');

}, 5000)

const form = document.querySelector('#add-reminder');
const input = document.querySelector('#todo');
const reminder = document.querySelector('#things-to-do');
//Event delagation
reminder.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})
//Extracting values from inputs
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'done';

    newTodo.innerText = input.value;
    newTodo.appendChild(removeBtn);
    input.value = ''
    reminder.appendChild(newTodo);

});