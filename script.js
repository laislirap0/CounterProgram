function contar() {
    let ini = document.getElementById('txt-i')
    let fim = document.getElementById('txt-f')
    let passo = document.getElementById('txt-p')
    let res  = document.getElementById('resultado')

    // Verificação de dados
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERROR] Faltam dados.')
        
    } else {
        res.innerHTML = "Contando: "

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <=0 ) {
            window.alert ('Passo inválido.')
        }

        // Contagem crescente
        if (i < f ) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
            }

         // Contagem regressiva
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}`
            }
        }
        
    }
}