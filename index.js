const perguntas = [
    {
      pergunta: "O que é Machine Learning?",
      respostas: [
        "Um tipo de café especial",
        "Um conjunto de técnicas para ensinar máquinas a aprender padrões",
        "Uma linguagem de programação popular",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o objetivo principal do pré-processamento de dados em Machine Learning?",
      respostas: [
        "Tornar os dados mais bonitos visualmente",
        "Remover informações irrelevantes ou redundantes",
        "Aumentar o tamanho dos dados",
      ],
      correta: 1
    },
    {
      pergunta: "O que é overfitting em Machine Learning?",
      respostas: [
        "Quando o modelo se ajusta muito bem aos dados de treinamento, mas não generaliza bem para novos dados",
        "Quando o modelo é muito simples e não consegue aprender padrões",
        "Quando o modelo atinge a precisão máxima",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre aprendizado supervisionado e não supervisionado?",
      respostas: [
        "No aprendizado supervisionado, o modelo é treinado com rótulos; no não supervisionado, não há rótulos",
        "No aprendizado supervisionado, não há rótulos; no não supervisionado, o modelo é treinado com rótulos",
        "Não há diferença entre eles",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma matriz de confusão?",
      respostas: [
        "Uma matriz que mostra a confusão do modelo",
        "Uma matriz que contém apenas zeros",
        "Uma matriz que mostra a precisão do modelo",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um hiperparâmetro em Machine Learning?",
      respostas: [
        "Um parâmetro importante para treinar o modelo",
        "Um parâmetro que não afeta o desempenho do modelo",
        "Um parâmetro usado apenas em problemas específicos",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o propósito da validação cruzada?",
      respostas: [
        "Aumentar o tempo de treinamento do modelo",
        "Avaliar o desempenho do modelo em dados não vistos durante o treinamento",
        "Garantir que o modelo memorize os dados de treinamento",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o algoritmo K-Means utilizado para fazer?",
      respostas: [
        "Classificação de dados",
        "Agrupamento de dados",
        "Regressão linear",
      ],
      correta: 1
    },
    {
      pergunta: "O que é a função de ativação em uma rede neural?",
      respostas: [
        "Uma função matemática que define a saída de uma rede neural",
        "Um termo usado apenas em redes neurais convolucionais",
        "Uma função usada apenas em aprendizado não supervisionado",
      ],
      correta: 0
    },
    {
      pergunta: "O que é underfitting em Machine Learning?",
      respostas: [
        "Quando o modelo se ajusta muito bem aos dados de treinamento, mas não generaliza bem para novos dados",
        "Quando o modelo é muito simples e não consegue aprender padrões",
        "Quando o modelo atinge a precisão máxima",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length 
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //arrow fuction
      dt.querySelector('input').onchange = (event) => {
  
  
        corretas.delete(item)
        // == é comparação
        const estaCorreta = event.target.value == item.correta //true 
        if(estaCorreta) {
          corretas.add(item) 
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
      quizItem.querySelector('dl dt').remove()
  
    //coloca a prgunta na tela
    quiz.appendChild(quizItem)
  }