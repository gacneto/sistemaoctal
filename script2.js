// Função para converter decimal para octal
function decimalToOctal(decimal) {
    return decimal.toString(8);
}

// Função principal para lidar com a entrada do usuário e exibir o resultado
function calcularOctal() {
    // Obter o valor decimal do usuário
    var decimalInput = document.getElementById("decimal");
    var decimal = parseFloat(decimalInput.value);

    // Verificar se a entrada é um número válido
    if (isNaN(decimal)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Converter decimal para octal
    var octal = decimalToOctal(decimal);

    // Exibir o resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "O número em octal é: " + octal;
}