const form = document.getElementById('formulario')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const campoValorA = Number(campoA.value)
    const campoValorB = Number(campoB.value)

    const menssagemError = `[ERROR] O número do campo <b>A</b> precisa ser maior! Tente novamente.`
    const menssagemSucesso = `Parabéns o campo <b>A</b> ${campoValorA} está maior que o campo <b>B</b> ${campoValorB}!`

    if (campoValorA <= campoValorB) {
        const campoFalse = document.querySelector('.error-menssagem')
        campoA.classList.add('error')
        campoFalse.innerHTML = menssagemError;
        campoFalse.style.display = 'block'
        document.querySelector('.sucesso').style.display = 'none';
    } else {
        campoA.classList.remove('error')
        const campoVerdadeiro = document.querySelector('.sucesso');      
        campoVerdadeiro.innerHTML = menssagemSucesso;
        campoVerdadeiro.style.display = 'block';
        document.querySelector('.error-menssagem').style.display = 'none'

        campoA.value = '';
        campoB.value = '';
    }
})
    
