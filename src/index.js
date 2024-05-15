
// Calcular vitórias - derrotas
function calculoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

// Retornar o nível do Herói a partir do saldo de Rankeadas
function verificarNivel(saldo) {
    if (saldo <= 10) {
        nivel = "Ferro"
    } else if (saldo > 11 && saldo <= 20) {
        nivel = "Bronze"
    } else if (saldo > 21 && saldo <= 50) {
        nivel = "Prata"
    } else if (saldo > 51 && saldo <= 80) {
        nivel = "Ouro"
    } else if (saldo > 81 && saldo <= 90) {
        nivel = "Diamante"
    } else if (saldo > 91 && saldo <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    return nivel
}

// input de número de vitórias e de derrotas
let saldoVitorias = calculoVitorias(100, 20)
verificarNivel(saldoVitorias)

// O que mostra para o usuário 
console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)