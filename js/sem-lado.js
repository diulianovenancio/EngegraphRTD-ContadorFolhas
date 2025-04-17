function calcular() {
  const folhaInicial = parseInt(document.getElementById("folhaInicial").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (isNaN(folhaInicial) || isNaN(quantidade)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // Cada página usa uma folha (sem verso), então soma direta
  const folhaFinal = folhaInicial + quantidade - 1;

  document.getElementById("folhaFinal").textContent = folhaFinal;
}
