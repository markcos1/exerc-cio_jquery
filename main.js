$(document).ready(function() {
    $('#botao-nova-tarefa').click(function(){
        $('form').slideDown();
        $('#botao-resetar').click(function(){
            $('form').slideUp();
        })
    })

    const tarefa = novo-item.val('nova-tarefa');
    const adicionarItem = botao-enviar.val('novo-item');

    $(adicionarItem).on('submit');

})
