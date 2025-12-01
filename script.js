let btnAdd = document.querySelector('#btn-add');
let list = document.querySelector('#list');

btnAdd.addEventListener('click',(e)=>{
    const task = document.querySelector('#todo')?.value;
    
    let newLi = document.createElement('li');
    newLi.innerText = task;
    list.appendChild(newLi)

    document.querySelector('#todo').value = ''
})