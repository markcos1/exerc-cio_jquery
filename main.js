$(document).ready(function() {
    $('#botao-nova-tarefa').click(function(){
        $('#funcao-adicionar').slideDown();
    })
    $('#botao-resetar').click(function(){
        $('#funcao-adicionar').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeDaNovaAtividade = $('nova-tarefa').val();
        const novoItem = $('<li></li>');
        
    })

});

