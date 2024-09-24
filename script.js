function tabuada() {
    let numero = document.getElementById('campo-numero')
    let erro = document.getElementById('campo-erro')
        if (numero.value == 0) {       
            erro.innerHTML = 'Digite um número!'
        } else {
            let resultado = document.getElementById('resultado')
            let valornum = Number(numero.value)
            resultado.innerHTML = ''
            
            for (let contador = 1; contador <= 10; contador += 1) {  
                resultado.innerText += `${valornum} x ${contador} = ${valornum*contador}`
                resultado.innerHTML += '<br>'
                erro.innerHTML = ''
                          
            }
            
        }
    
}