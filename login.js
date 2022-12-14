const btnSub = document.getElementById('btn-submit')
let user = document.querySelector('#txtUser')
let pass = document.querySelector('#txtSenha')
let erro = document.getElementById('errobox')

btnSub.addEventListener('click', function(event) {
    if (user.value.length == 0 || pass.value.length == 0){
        alert('ERRO! Preencha seus dados') 
        event.preventDefault();
    } else {
        window.alert('Pagina ainda nao esta pronta')
    }
});