function parOuImpar() {
    let digiteNumero = document.getElementById("number").value

    if (digiteNumero % 2 == 0){
        window.alert(`${digiteNumero} é um número par`);
    }
    else {
        window.alert(`${digiteNumero} é um número ímpar`);
    }
}