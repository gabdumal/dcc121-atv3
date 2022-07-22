let estado = {
  nome: "",
  idade: 0,
};

// Captura elementos do DOM
const formulario = document.querySelector("#registro");

// Adiciona ouvinte ao formulário
formulario.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();

  // Captura dados
  estado.nome = registro.nome.value;
  estado.idade = Number(registro.idade.value);

  console.log(estado.nome);
  console.log(estado.idade);
}
