// Captura elementos do DOM
const formulario = document.querySelector("#registro");

// Adiciona ouvinte ao formulário
formulario.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();

  // Captura dados
  const nome = registro.nome.value;
  const idade = Number(registro.idade.value);

  console.log(nome);
  console.log(idade);
}
