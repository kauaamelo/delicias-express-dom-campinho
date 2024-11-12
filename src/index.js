const calcularTotal = document.getElementById('calcular-conta');
const resultado = document.getElementById("resultado");

calcularTotal.addEventListener("click", botaoCalcular)

function botaoCalcular() {

    const valorTotalInput = document.getElementById("dinheiro");
    const taxaServicoSelect = document.getElementById("taxaServico");
    const dividirContaSelect = document.getElementById("pagantes");

    const valorTotal = parseFloat(valorTotalInput.value)

    const incluirTaxa = taxaServicoSelect.value === "sim";
    const valorComTaxa = incluirTaxa ? valorTotal * 1.10 : valorTotal;

    const pessoasDividir = parseInt(dividirContaSelect.value, 10);

    const valorPorPessoa = valorComTaxa / pessoasDividir;

    resultado.textContent = `Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`;
}