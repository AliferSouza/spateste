export default async function teste() {


  const state = () => {
    const perguntasERespostas = {
      "Qual a capital do Brasil?": "Brasília",
      "Qual o maior país do mundo?": "Rússia",
      "Quem foi o primeiro homem a pisar na Lua?": "Neil Armstrong",
      "Qual é o seu nome?": "Vivi",
      "Oi": "ola, posso ajudar?",
      "O que é massagem relaxante?":
        "A massagem relaxante é uma técnica terapêutica que utiliza movimentos suaves para promover relaxamento físico e mental. Ela alivia a tensão muscular, reduz o estresse e melhora a circulação sanguínea, proporcionando uma sensação de bem-estar e equilíbrio.",
      "Endereço": "Rua João José dos Reis, 108A. 32639348   São Salvador, Citrolandia. Betim,Mg",
        // Outras perguntas e respostas...
    };

    function encontrarPerguntaSimilar(frase, perguntasERespostas) {
      let melhorSimilaridade = 0;
      let perguntaSimilar = "";

      for (const pergunta in perguntasERespostas) {
        const similaridade = calcularSimilaridadeJaccard(frase, pergunta);

        if (similaridade > melhorSimilaridade) {
          melhorSimilaridade = similaridade;
          perguntaSimilar = pergunta;
        }
      }

      if (melhorSimilaridade < 0.5) {
        return "Desculpe, não tenho uma resposta para essa pergunta.";
      }

      return perguntasERespostas[perguntaSimilar];
    }

    function calcularSimilaridadeJaccard(frase1, frase2) {
      const set1 = new Set(frase1.split(" "));
      const set2 = new Set(frase2.split(" "));

      const intersection = new Set([...set1].filter((x) => set2.has(x)));
      const union = new Set([...set1, ...set2]);

      return intersection.size / union.size;
    }

    const fraseDesejada = "O que é massagem";
    const perguntaSimilar = encontrarPerguntaSimilar( fraseDesejada, perguntasERespostas );

    function addSubmitEvent() {
      const submitBtn = document.getElementById("submitBtn");
      submitBtn.addEventListener("click", handleQuestion);
    }

    // Função que trata o evento de clique no botão Enviar
    function handleQuestion() {
      const questionInput = document.getElementById("question");
      const responseOutput = document.getElementById("response");

      const question = questionInput.value;
      const answer = encontrarPerguntaSimilar(question, perguntasERespostas);
      responseOutput.textContent = answer;

      questionInput.value = "";
    }

    addSubmitEvent();
          
  }


  const html = () => {
    return `  
      <comp-menu> </comp-menu>
      <div class="containerbatepapo">      
       <div id="bate-papo">
        <img src="./src/public/img/icones/mascote.png" width="40">
        <h1>Perguntas e Respostas</h1>     
        </div>
        <label class="ia-label" for="question">Digite sua pergunta:</label>
        <input type="text" id="question">
        <button id="submitBtn">Enviar</button>
        <div class="output">
          <p id="response"></p>
        </div>
      </div> `
  }

  return {    
    html,
    
  }
}
