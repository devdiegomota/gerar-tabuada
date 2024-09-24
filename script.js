function tabuada() {
    let numero = document.getElementById('campo-numero')
    let tab = document.getElementById('select-tab')
    let erro = document.getElementById('campo-erro')
        if (numero.value == 0) {       
            erro.innerHTML = 'Digite um número!'
        } else {
            let valornum = Number(numero.value)
            let contador = 1
            tab.innerHTML = ''
            while (contador <= 10) {
                
                let opcao = document.createElement('option')
                opcao.text = `${valornum} x ${contador} = ${valornum*contador}`
                tab.appendChild(opcao)
                erro.innerHTML = ''
                contador++               
            }
            
        }
    
}