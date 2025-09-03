//Index - Atualizaçao de data e hora 

document.addEventListener('DOMContentLoaded', function() {
    function atualizarDataHora() {
        const agora = new Date();
        const dataHoraElement = document.getElementById('dataHoraAtual');
        if(dataHoraElement) {
          dataHoraElement.textContent = agora.toLocaleString('pt-BR');
        }
    }

    atualizarDataHora();
    setInterval(atualizarDataHora, 60000);

});

//Servicos - Cadastro e Agendamento Realizados com sucesso

document.getElementById("formCadastro").onsubmit = function() {
    alert("Cadastro realizado com sucesso!");
    return false; 
};

document.getElementById("formAgendamento").onsubmit = function() {
    alert("Agendamento confirmado com sucesso!");
    return false; 
};

//Contato - Mensagem enviada com sucesso
document.addEventListener('DOMContentLoaded', function () {
  const formContato = document.getElementById("formContato");
  const msgSucesso = document.getElementById("mensagemSucesso");

  if (formContato && msgSucesso) {
    formContato.addEventListener("submit", function (event) {
      event.preventDefault();
      msgSucesso.style.display = "block"; // mostra a mensagem
      formContato.reset();
      setTimeout(() => msgSucesso.style.display = "none", 4000); // some após 4s
    });
  }
});
