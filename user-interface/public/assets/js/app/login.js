$(document).ready(function(){

  $("#login").click(function(e){
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    if(username == 'dambrosio' && password == '123') {
      window.location.href = 'resource-schedule.html';
    } else {
      toastr.error('Não foi possível concluir a autenticação.', 'Usuário ou Senha inválido')
    }
  });

});
