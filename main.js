$(document).ready(function() {
    $('#botao-nova-tarefa').click(function(){
        $('#funcao-adicionar').slideDown();
    })
    $('#botao-resetar').click(function(){
        $('#funcao-adicionar').slideUp();
    })

    let nomeDaTarefa = ('#nova-tarefa');

    $('#nova-tarefa').ready(function(){
        $('#nova-tarefa').val();
    });
  //click ou submit//
    $('#botao-enviar').submit(function(){
        

    });
});

