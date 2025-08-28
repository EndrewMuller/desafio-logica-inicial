//Desafio Classificador de nível de Herói

let nomeHeroi = "Endrew"
//Minha XP atual na DIO
let experiencia = 1520
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

switch(true){
    case experiencia <= 1000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[0])
    break
    case experiencia <= 2000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[1])
    break
    case experiencia <= 5000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[2])
    break
    case experiencia <= 7000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[3])
    break
    case experiencia <= 8000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[4])
    break
    case experiencia <= 9000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[5])
    break
    case experiencia <= 10000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[6])
    break
    case experiencia > 10000:
        console.log("O Herói chamado " + nomeHeroi + " está no ranking " + nivelHeroi[7])
    break
}