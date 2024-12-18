$(document).ready(function() {
    $('#botao-nova-tarefa').click(function(){
        $('form').slideDown();
        $('#botao-resetar').click(function(){
            $('form').slideUp();
        })
    })

    $(form).ready(` <input type="text"  id="nova-tarefa"  placeholder="Nome da tarefa">`);


})
