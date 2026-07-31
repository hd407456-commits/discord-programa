const botao = document.getElementById('meuBotao');

// Guarda a frase original para usar depois
const fraseOriginal = "entre no nosso grupo de programadores";

// 1. Quando o mouse entra no botão
botao.addEventListener('mouseenter', function() {
  botao.innerText = "Clique aqui e mude de vida! 🚀";
});

// 2. Quando o mouse sai do botão (volta ao normal)
botao.addEventListener('mouseleave', function() {
  botao.innerText = fraseOriginal;
});
