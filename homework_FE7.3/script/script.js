const root = document.querySelector('#root');
const form = document.querySelector('.addInfo');

form.addEventListener('submit', function (event){
    event.preventDefault();
    const name = form.name;
    const lastname = form.lastname;

    const container = document.createElement('div');
    const pName = document.createElement('p');
    const pLastname = document.createElement('p');
    
    container.classList.add('item');
    
    pName.innerText = name.value;
    pLastname.innerText = lastname.value;
    
    container.append( pName, pLastname);
    root.append(container);

    name.value = '';
    lastname.value = '';
})


