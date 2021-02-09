const accordeon=document.querySelector('#accordeon');
const change=document.querySelector('#change');

accordeon.addEventListener('click',() => {
    change.classList.toggle("change");
    console.log(accordeon);
});