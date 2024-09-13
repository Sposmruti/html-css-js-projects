const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMessage = document.querySelector('p');
const listContainer = document.querySelector('.list-item');

button.addEventListener('click', () =>{
    if (input.value === '') {
        errorMessage.style.display = 'block';
        input.style.border = '1px solid red';
        input.style.outline ='none';
        input.style.backgroundColor = 'white';
    } else {
        errorMessage.style.display = 'none';
        input.style.border = 'none';
        input.style.backgroundColor = 'rgb(252, 247, 247)';
        input.style.color = 'rgb(145, 214, 41)';
        

        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';  
    saveData(); 
});
listContainer.addEventListener('click' , e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } 
    else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveData();  
    }
}, false);

function saveData() {
    localStorage.setItem('data' , listContainer.innerHTML);
}
function showList() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showList();
