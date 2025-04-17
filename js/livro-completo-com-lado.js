function calcular() {
  const folhaInicial = parseInt(document.getElementById("folhaInicial").value);
  const ladoInicial = document.getElementById("ladoInicial").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (isNaN(folhaInicial) || isNaN(quantidade)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const folhasUsadas = Math.ceil(quantidade / 2);
  const folhaFinal = folhaInicial + folhasUsadas - 1;
  const ladoFinal =
    quantidade % 2 === 1
      ? ladoInicial
      : ladoInicial === "Frente"
      ? "Verso"
      : "Frente";

  document.getElementById("folhaFinal").textContent = folhaFinal;
  document.getElementById("ladoFinal").textContent = ladoFinal;
}

function gerarConsulta() {
  const numeroLivro = document.getElementById("numeroLivro").value.trim();
  const letraLivro = document
    .getElementById("letraLivro")
    .value.trim()
    .toUpperCase();

  if (!numeroLivro || !letraLivro) {
    alert("Preencha o número e a letra do livro.");
    return;
  }

  const query = `SELECT numero_protocolo, numero_paginas AS quantidade_paginas, folha_inicial, lado_inicial, folha_final, lado_final
  FROM documentos
  WHERE documento_antigo = 'N' AND numero_livro = ${numeroLivro} AND letra_livro = '${letraLivro}'
  ORDER BY data_registro`;

  document.getElementById("querySQL").value = query;
  document.getElementById("resultadoConsulta").classList.remove("d-none");
}

function copiarQuery() {
  const textarea = document.getElementById("querySQL");
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Para mobile
  document.execCommand("copy");

  alert("Query copiada para a área de transferência!");
}
