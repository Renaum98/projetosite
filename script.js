
// Elementos da página
const contadorTela = document.querySelector('#contador');
const mensagemTela = document.querySelector('#mensagem');

// Data objetivo: 8 de junho de 2025 (mês 5, pois junho = 5 em JS)
const dataObjetivo = new Date(2025, 5, 8); 

function atualizarContador() {
    // Atualiza a data atual
    const dataAtual = new Date();
    
    // Calcula a diferença em milissegundos
    const diferencaMs = dataObjetivo - dataAtual;
    
    // Converte para dias (arredondando para baixo)
    const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
    
    // Atualiza o contador na tela
    contadorTela.innerHTML = `<p>${diferencaDias}</p>`;
    
    // Atualiza a mensagem
    if (diferencaDias === 0) {
        
    }
}

// Atualiza imediatamente e depois a cada 1 hora
atualizarContador();
setInterval(atualizarContador, 3600000); // 3600000 ms = 1 hora

// Log no console para verificação
console.log("Data objetivo:", dataObjetivo.toLocaleDateString('pt-BR'));
