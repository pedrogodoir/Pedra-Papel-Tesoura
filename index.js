// Opções = Pedra, papel e tesoura
// Bot -> jogar após você lançar o comando (opcões acima)
//      O BOT vai jogar algo aleatório, escolhendo entre as opções
// No console, é exibido o resultado após o BOT jogar

function atribuiNome() {
    var htmlNome = document.querySelector(`[data-attr="player-name"`)
    var nome = "Pedro" || prompt("Digite seu nome?")
    htmlNome.textContent = ` ${nome}!`
}; atribuiNome()

var opcoes = ["Pedra", "Papel", "Tesoura"]

function jogarBOT() {
    var numeroAleatorio = Math.floor(Math.random() * opcoes.length)
    return opcoes[numeroAleatorio]
}

function jogar(opcao) {
    var jogadaBot = jogarBOT()
    var htmlResultado = document.querySelector(`[data-attr="result"]`)
    var htmlJogadaPlayer = document.querySelector(`[data-attr="jogada-player"]`)
    var htmlJogadaBot = document.querySelector(`[data-attr="jogada-bot"]`)
    
    if (opcao == jogadaBot) {
        var resultado = 2
    } else if ((opcao == 'Pedra') && (jogadaBot == 'Papel')) {
        var resultado = 0
    } else if ((opcao == 'Pedra') && (jogadaBot == 'Tesoura')) {
        var resultado = 1
    } else if ((opcao == 'Papel') && (jogadaBot == 'Tesoura')) {
        var resultado = 0
    } else if ((opcao == 'Papel') && (jogadaBot == 'Pedra')) {
        var resultado = 1
    } else if ((opcao == 'Tesoura') && (jogadaBot == 'Pedra')) {
        var resultado = 0
    } else if ((opcao == 'Tesoura') && (jogadaBot == 'Papel')) {
        var resultado = 1
    }

    switch (resultado) {
        case 0:
            htmlResultado.textContent = "Perdeu :("
            htmlResultado.style.color = 'red'
            break;
        case 1:
            htmlResultado.textContent = "Ganhou :)"
            htmlResultado.style.color = 'green'
            break;
        default:
            htmlResultado.textContent = "Empatou :|"
            htmlResultado.style.color = 'aqua'
            break;
    }
    
    htmlJogadaPlayer.textContent = opcao
    htmlJogadaBot.textContent = jogadaBot

}