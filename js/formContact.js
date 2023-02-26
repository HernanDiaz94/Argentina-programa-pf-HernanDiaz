//$Nombrevariable es por que es un elemento del DOM
const $form = document.querySelector('#form')
const $buttonMailTo = document.querySelector('#emailSend')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailTo.setAttribute('href', 
    `mailto:hernan.diiaz@gmail.com
    ?subject=${form.get('nombre')} ${form.get('email')}
    &body=${form.get('consulta')}
    `);
    $buttonMailTo.click();
}