function somar(event){
    event.preventDefault()
    let campoA = parseFloat(document.getElementById('primeiro').value);
    let campoB = parseFloat(document.getElementById('segundo').value);
    let total = campoA + campoB
    if (campoB > campoA) {
        document.querySelector('.mensagem').innerHTML = "A soma total é: <strong>" + total + "</strong> e o número digitado no Campo B é <strong>"+ campoB +"</strong> ele é maior que o número digitado no Campo A que foi <strong>" + campoA +"</strong> \u{1F913}";
    } else if (campoA <= campoB) {
        document.querySelector('.mensagem').textContent = "Por favor, digite um número no Campo B maior que o número digitado no Campo A.";
    } else {
        document.querySelector('.mensagem').textContent ="Digite números válidos."
    }
    document.getElementById('primeiro').value = "";
    document.getElementById('segundo').value = "";
    
}
