function calcular() {
  const folhaInicial = parseInt(document.getElementById("folhaInicial").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (isNaN(folhaInicial) || isNaN(quantidade)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const folhaFinal = folhaInicial + quantidade - 1;

  document.getElementById("folhaFinal").textContent = folhaFinal;
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

  const query = `SELECT numero_protocolo, numero_paginas AS quantidade_paginas, folha_inicial, folha_final
  FROM documentos
  WHERE documento_antigo = 'N' AND numero_livro = ${numeroLivro} AND letra_livro = '${letraLivro}'
  ORDER BY data_registro`;

  document.getElementById("querySQL").value = query;
  document.getElementById("resultadoConsulta").classList.remove("d-none");
}

function copiarQuery() {
  const textarea = document.getElementById("querySQL");
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Compatibilidade com mobile
  document.execCommand("copy");

  alert("Query copiada para a área de transferência!");
}
