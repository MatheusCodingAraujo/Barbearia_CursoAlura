function Alterou(){
    var select = document.getElementById("pedido")
    var opcaoValor = select.options[select.selectedIndex].value
    var preco
    switch(opcaoValor){
        case "barba": preco = 18
            break; 
        case "cabelo": preco = 25
            break;
        case "cabelo+barba": preco = 35
            break;
        default:00
    }
    document.querySelector(".card").innerHTML=`<img src='./imagens/${opcaoValor}.jpg' alt="" /> <p>R$ ${preco},00</>
    <input type="text">`

}

