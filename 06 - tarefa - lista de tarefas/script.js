$(document).ready(function() {
    $('#cadastrar-tarefa').on('click', function() {
        var tarefaTexto = $('#nome-tarefa').val();
        if (tarefaTexto.trim() !== '') {
            $('#lista-tarefas').append('<tr><td>' + tarefaTexto + '</td></tr>');
            $('#nome-tarefa').val('');
        }
    });
    $('#lista-tarefas').on('click', 'tr', function() {
        $(this).toggleClass('riscado');
    });
    $('#nome-tarefa').on('keypress', function(e) {
        if (e.which === 13) {
            $('#cadastrar-tarefa').click();
        }
    });
});

