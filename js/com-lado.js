function calcular() {
  const folhaInicial = parseInt(document.getElementById("folhaInicial").value);
  const ladoInicial = document.getElementById("ladoInicial").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (isNaN(folhaInicial) || isNaN(quantidade)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  let folhasUsadas = Math.ceil(quantidade / 2);
  let folhaFinal = folhaInicial + folhasUsadas - 1;
  let ladoFinal =
    quantidade % 2 === 1
      ? ladoInicial
      : ladoInicial === "Frente"
      ? "Verso"
      : "Frente";

  document.getElementById("folhaFinal").textContent = folhaFinal;
  document.getElementById("ladoFinal").textContent = ladoFinal;
}
