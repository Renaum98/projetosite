let imagens = document.querySelector('#imagem');

imagens.addEventListener("click", () => {
    imagens.style.width = imagens.style.width === "200px" ? "600px" : "200px";
});



// Elemento do contador na página
const contadorTela = document.querySelector('.contador');

// Data objetivo: 8 de junho de 2025 às 00:00
const dataObjetivo = new Date(2025, 4, 8, 0, 0, 0);


function atualizarContador() {
    const dataAtual = new Date();
    const diferencaMs = dataObjetivo - dataAtual;

    if (diferencaMs > 0) {
        const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);

        contadorTela.textContent = `${dias}d ${horas}h ${minutos}min ${segundos}s ⏳`;
    } else {
        contadorTela.textContent = `Abrir Surpresa 🎁`;
        contadorTela.classList.add("contador-link");
        contadorTela.classList.remove("contador")
        contadorTela.onclick = () => {
            telaAniversario.style.display = "block"
            contadorTela.style.display = "none"    
        }
    }
}

const telaAniversario = document.querySelector("#aniversario")



// Atualiza imediatamente e depois a cada segundo
atualizarContador();
setInterval(atualizarContador, 1000); // 1000 ms = 1 segundo

// Log no console para verificação
console.log("Data objetivo:", dataObjetivo.toLocaleDateString('pt-BR'));

