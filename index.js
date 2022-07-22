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

  insereRegistro(estado);
}

function insereRegistro(estado) {
  let idLista;
  if (estado.idade < 18) {
    idLista = "listaJuniors";
  } else if (estado.idade > 40) {
    idLista = "listaSeniors";
  } else {
    idLista = "listaMasters";
  }

  console.log(idLista);
}
