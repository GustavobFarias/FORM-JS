const form = document.getElementById('form-enviar')
const nomeUsuario = document.getElementById('usuario')
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeCompletoUsuario = nomeCompleto.split(' ')
    return nomeCompletoUsuario.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const idadeUsuario = document.getElementById('idade-usuario')
    const numeroFavorito = document.getElementById('numero-favorito')
    const deixaMessagemUsuario = document.getElementById('deixa-menssagem')
    const menssagemSucesso = `O ${nomeUsuario.value} tem ${idadeUsuario.value} anos e o número favorito dele é ${numeroFavorito.value} !`
     
    formValido = validaNome(nomeUsuario.value);
    if (formValido) {
        const menssagemUsuarioSucesso = document.querySelector('.menssagem-usuario');
        menssagemUsuarioSucesso.innerHTML = menssagemSucesso;
        menssagemUsuarioSucesso.style.display = 'block'

        nomeUsuario.value = '';
        idadeUsuario.value = '';
        numeroFavorito.value = '';
        deixaMessagemUsuario.value = '';
    } else {
        nomeUsuario.style.border = '1px solid red'
        document.querySelector('.menssagem-usuario').style.display = 'block'
    }
})

nomeUsuario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) {
        nomeUsuario.classList.add('error')
        document.querySelector('.error-nome').style.display = 'block'
    } else {
        nomeUsuario.classList.remove('error')
        document.querySelector('.error-nome').style.display = 'none'
    }
    
})