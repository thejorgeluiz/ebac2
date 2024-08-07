function formatarTelefone() {
    var telefone = document.getElementById("telefone");
    var valor = telefone.value;

    valor = valor.replace(/\D/g, '');

    valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);

    telefone.value = valor;
}

function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    if (nome === '' || telefone === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    var tabela = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}