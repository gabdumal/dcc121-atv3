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

  // Cria registro e o adiciona à lista
  const lista = document.getElementById(idLista);
  const itemLista = criaItemLista(estado);
  lista.appendChild(itemLista);

  formulario.reset();
  formulario.nome.focus();
}

function criaItemLista(estado) {
  const itemLista = document.createElement("li");
  const spanNome = document.createElement("span");
  const spanIdade = document.createElement("span");

  spanNome.textContent = estado.nome;
  spanIdade.textContent = estado.idade;

  itemLista.appendChild(spanNome);
  itemLista.appendChild(spanIdade);

  return itemLista;
}
