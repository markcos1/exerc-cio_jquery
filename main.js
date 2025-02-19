$(document).ready(function() {
    $('#botao-nova-tarefa').click(function(){
        $('#funcao-adicionar').slideDown();
    })
    $('#botao-resetar').click(function(){
        $('#funcao-adicionar').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeDaNovaAtividade = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li> ${nomeDaNovaAtividade}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
        $(novoItem).click(function(){
            $(this).css('text-decoration', 'line-through');
        })
    })

});

