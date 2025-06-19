const cartas = [
  "Te amo mais a cada amanhecer.",
  "Seus olhos são meu lugar seguro.",
  "Até os dias difíceis são mais fáceis contigo.",
  "Não existe ninguém que me faça sorrir como você.",
  "Tua voz acalma meu coração.",
  "Seus abraços são meu melhor lugar no mundo.",
  "Com você, até o silêncio é confortável.",
  "Nosso amor é meu destino favorito.",
  "Lembro de ti em cada música bonita.",
  "És o meu milagre preferido.",
  "O tempo com você voa… mas as lembranças ficam.",
  "És a razão dos meus suspiros bobos.",
  "Estar contigo é como respirar: essencial.",
  "Cada mensagem tua é um raio de sol no meu dia.",
  "Tu és poesia viva no meio do caos.",
  "Mesmo quando brigas comigo… continuo te amando.",
  "Você é a parte mais bonita da minha rotina.",
  "Queria te guardar num potinho… e abraçar sempre.",
  "Nosso amor não tem explicação, só sentimento.",
  "És o meu 'final feliz' favorito."
];

const caixaCartas = document.getElementById("caixaCartas");
const mensagemEl = document.getElementById("mensagem");

// Criar cartas dinamicamente
cartas.forEach((texto, i) => {
  const carta = document.createElement("div");
  carta.className = "carta";
  carta.innerText = `📩 Carta ${i + 1}`;
  carta.onclick = () => abrirCarta(i);
  caixaCartas.appendChild(carta);
});

function abrirCarta(indice) {
  const texto = cartas[indice];
  mensagemEl.textContent = texto;
  mensagemEl.style.display = "block";
  lerCarta(texto);
}

function lerCarta(texto) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = 'pt-BR';
    utter.rate = 1;
    utter.pitch = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  }
}
