
let jogador = "X";
let casa1 = document.getElementById("casa1");
let casa2 = document.getElementById("casa2")
let casa3 = document.getElementById("casa3");
let casa4 = document.getElementById("casa4");
let casa5 = document.getElementById("casa5");
let casa6 = document.getElementById("casa6");
let casa7 = document.getElementById("casa7");
let casa8 = document.getElementById("casa8");
let casa9 = document.getElementById("casa9");

 
let pontX = 0
let pontO = 0
function jogada(casa) {
    if (casa.innerHTML === ""){
        casa.innerHTML  = jogador;
        verifica_gamhador();
    }
    alterna_jogador();

}

function alterna_jogador() {
    if (jogador ==="X"){
        jogador = "O";
    } else{
        jogador = "X";
    }
}
function verifica_gamhador() {
    if (casa1.innerHTML != "" && casa1.innerHTML === casa2.innerHTML && casa1.innerHTML === casa3.innerHTML){
        alert(`Temos um ganhador: ${casa1.innerHTML}`)
        totaliza_placar(casa1.innerHTML);
    } else if( casa1.innerHTML != "" && casa1.innerHTML === casa5.innerHTML && casa1.innerHTML === casa9.innerHTML){
        alert(`Temos um ganhador: ${casa1.innerHTML}`)
    } else if (casa1.innerHTML != "" && casa1.innerHTML === casa4.innerHTML && casa1.innerHTML === casa7.innerHTML){
        alert(`Temos um ganhador: ${casa1.innerHTML}`)
    } else if (casa2.innerHTML != "" && casa2.innerHTML === casa5.innerHTML && casa5.innerHTML === casa8.innerHTML){
        alert(`Temos um ganhador: ${casa2.innerHTML}`)
    } else if (casa3.innerHTML != "" && casa3.innerHTML === casa6.innerHTML && casa3.innerHTML === casa9.innerHTML){
        alert(`Temos um ganhador: ${casa3.innerHTML}`)
    } else if (casa3.innerHTML != "" && casa3.innerHTML === casa5.innerHTML && casa3.innerHTML === casa7.innerHTML){
        alert(`Temos um ganhador: ${casa3.innerHTML}`)
    } else if (casa4.innerHTML != "" && casa4.innerHTML === casa5.innerHTML && casa4.innerHTML === casa6.innerHTML){
        alert(`Temos um ganhador: ${casa4.innerHTML}`)
    } else if (casa7.innerHTML != "" && casa7.innerHTML === casa8.innerHTML && casa7.innerHTML === casa9.innerHTML){
        alert(`Temos um ganhador: ${casa7.innerHTML}`)
    }
}
function totaliza_placar(ganhador) {
    
    if (ganhador === "X"){
        pontX = pontX + 1
        document.getElementById(`pX`).innerHTML = `Pontos X: ${pontX}`
    } else if (ganhador === "O"){
        document.getElementById(`pO`).innerHTML = `Pontos O: ${pontO + 1}`
    }
    
}
function reset_jogo() {
    casa1.innerHTML = ""
    casa2.innerHTML = ""
    casa3.innerHTML = ""
    casa4.innerHTML = ""
    casa5.innerHTML = ""
    casa6.innerHTML = ""
    casa7.innerHTML = ""
    casa8.innerHTML = ""
    casa9.innerHTML = ""

}