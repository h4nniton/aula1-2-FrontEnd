'use strict'

// 3 var
// 2 let
// 1 const

function trocarTitulo () {

    const tituloAtual = document.getElementById('titulo')
    const tituloNovo = prompt('Digite o nome da escola! >.<')
    const corEscolhida = prompt('Digite sua cor !')
    tituloAtual.textContent = `Escola ${tituloNovo}`

    if (corEscolhida == 'amarelo') {
        tituloAtual.classList.add('amarelo')
    } else if (corEscolhida == 'verde') {
        tituloAtual.classList.add('verde')
    }

}