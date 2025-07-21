

// Função principal da calculadora
function calculadora() {
  console.log("Bem-vindo à Calculadora Personalizada!");
  console.log("Escolha uma operação:");
  console.log("1: Soma");
  console.log("2: Subtração");
  console.log("3: Multiplicação");
  console.log("4: Divisão");
  console.log("5: Soma de múltiplos de um número");
  console.log("6: Calcular fatorial");
  console.log("0: Sair");

  // Leitura da operação escolhida
  let escolha = parseInt(prompt("Digite o número da operação desejada: "));

  while (escolha !== 0) {
    switch (escolha) {
      case 1: {
        let a = parseFloat(prompt("Digite o primeiro número: "));
        let b = parseFloat(prompt("Digite o segundo número: "));
        console.log(`Resultado da soma: ${a + b}`);
        break;
      }
      case 2: {
        let a = parseFloat(prompt("Digite o primeiro número: "));
        let b = parseFloat(prompt("Digite o segundo número: "));
        console.log(`Resultado da subtração: ${a - b}`);
        break;
      }
      case 3: {
        let a = parseFloat(prompt("Digite o primeiro número: "));
        let b = parseFloat(prompt("Digite o segundo número: "));
        console.log(`Resultado da multiplicação: ${a * b}`);
        break;
      }
      case 4: {
        let a = parseFloat(prompt("Digite o primeiro número: "));
        let b = parseFloat(prompt("Digite o segundo número: "));
        if (b !== 0) {
          console.log(`Resultado da divisão: ${a / b}`);
        } else {
          console.log("Erro: Divisão por zero não é permitida.");
        }
        break;
      }
      case 5: {
        let limite = parseInt(prompt("Até qual número somar múltiplos? "));
        let divisor = parseInt(prompt("Digite o número divisor: "));
        let soma = 0;

        for (let i = 1; i <= limite; i++) {
          if (i % divisor === 0) soma += i;
        }

        console.log(`A soma dos múltiplos de ${divisor} até ${limite} é: ${soma}`);
        break;
      }
      case 6: {
        let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
        function calcularFatorial(n) {
          if (n === 0 || n === 1) return 1;
          return n * calcularFatorial(n - 1);
        }
        console.log(`Fatorial de ${numero}: ${calcularFatorial(numero)}`);
        break;
      }
      default:
        console.log("Operação inválida. Tente novamente.");
    }

    console.log("\nEscolha outra operação ou digite 0 para sair:");
    escolha = parseInt(prompt("Digite o número da operação desejada: "));
  }

  console.log("Obrigado por usar a Calculadora Personalizada!");
}

calculadora();
