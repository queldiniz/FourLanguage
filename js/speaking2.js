let currentContainerIndex = 0;

// Função para ocultar todos os elementos com a classe 'container-question'
function esconderContainers(className) {
    document.querySelectorAll('.' + className).forEach(container => {
        container.style.display = "none";
    });
}

// Função para exibir o elemento com o índice especificado e ocultar o anterior
function mostrarContainer(className, index) {
    const containers = document.getElementsByClassName(className);
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = (i === index) ? "block" : "none";
    }
}

// Oculta todos os elementos iniciais
esconderContainers('container-question');
esconderContainers('container-question2');
esconderContainers('container-question3');
esconderContainers('container-question4');
esconderContainers('container-question5');
esconderContainers('container-question6');

// Exibe o primeiro elemento
mostrarContainer('container-question', 0);
mostrarContainer('container-question2', 0);
mostrarContainer('container-question3', 0);
mostrarContainer('container-question4', 0);
mostrarContainer('container-question5', 0);
mostrarContainer('container-question6', 0);

// Função para avançar para o próximo elemento
function next(id) {
    mostrarContainer('container-question', id);
    mostrarContainer('container-question2', id);
    mostrarContainer('container-question3', id);
    mostrarContainer('container-question4', id);
    mostrarContainer('container-question5', id);
    mostrarContainer('container-question6', id);
}
function nextContainer(className) {
    const containers = document.getElementsByClassName(className);
    currentContainerIndex = (currentContainerIndex + 1) % containers.length;
    mostrarContainer(className, currentContainerIndex);
    
}
//Array que contém todas as respostas corretas para completar as frases/diálogos
const phrases = ["receive", "mean", "again", "card", "tea", "one more time", "could", "can", "book",
                "works", "lives", "get", "have", "has", "making", "taking", "boarding", "having", "running",
                "arrive", "seat", "return", "reservation", "rented", "was", "went", "stayed", "left",
                "most", "faster", "cheaper", "longer", "best"];

const resultMessage = document.querySelectorAll('result');

// pegar frases aleatórias
let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recog = new window.SpeechRecognition();

recog.addEventListener('result', captarAudio);
recog.addEventListener('end', () => recog.start());
recog.lang = 'en-US';

document.getElementById('record').addEventListener('click', () => {
    document.getElementById('btnGravar1').innerText = 'Recording';
    recog.start();
    document.getElementById('record').classList.add('record-clicked');
});
document.getElementById('record2').addEventListener('click', () => {
    document.getElementById('btnGravar2').innerText = 'Recording';
    recog.start();
    document.getElementById('record2').classList.add('record-clicked');
});
document.getElementById('record3').addEventListener('click', () => {
    document.getElementById('btnGravar3').innerText = 'Recording';
    recog.start();
    document.getElementById('record3').classList.add('record-clicked');
});
document.getElementById('record4').addEventListener('click', () => {
    document.getElementById('btnGravar4').innerText = 'Recording';
    recog.start();
    document.getElementById('record4').classList.add('record-clicked');
});
document.getElementById('record5').addEventListener('click', () => {
    document.getElementById('btnGravar5').innerText = 'Recording';
    recog.start();
    document.getElementById('record5').classList.add('record-clicked');
});
document.getElementById('record6').addEventListener('click', () => {
    document.getElementById('btnGravar6').innerText = 'Recording';
    recog.start();
    document.getElementById('record6').classList.add('record-clicked');
});

// Pegando o áudio do usuário através do microfone
function captarAudio(e) {
    let mensagem = e.results[0][0].transcript;
    let firstWord = mensagem.split(' ')[0]; // Capturar apenas a primeira palavra
    mostrarMensagem(firstWord);
}


    function  mostrarMensagem(mensagem) {
        checarFrase(mensagem);
    }

    //variável para somar acertos
    let correctGuesses = 0;
    let wordsUsed = [];
  
    function checarFrase(mensagem) { 
        if (wordsUsed.includes(mensagem.toLowerCase())) {
            console.log('A palavra já foi usada: ' + mensagem);
            return; // Não computar acerto se a palavra já foi usada
        } 
                 
        //verificar se o que p usuário falou está dentro do array de respostas corretas
        let palpiteCorreto = false;
        
        phrases.forEach(phrase => {
            if (mensagem.toLowerCase().includes(phrase.toLowerCase())) {
                palpiteCorreto = true;
            }
        });
        

        if (palpiteCorreto) {
             // Atualizar o container atual com a palavra capturada, e computar os acertos
            const containers = document.getElementsByClassName('container-question');
            if (containers[currentContainerIndex]) {
                containers[currentContainerIndex].textContent = mensagem;
                wordsUsed.push(mensagem.toLowerCase());
                correctGuesses += 100;
                console.log('Acertos: ' + correctGuesses);
                console.log('Palavras usadas: ' + wordsUsed.join(', '));
                nextContainer('container-question');
            }
                             
        
            function mostrarRespostaCorreta(mensagem) {
                // Reproduz o efeito sonoro para o áudio
                const correctAudio = document.getElementById('correctAudio');
                correctAudio.play().catch(error => {
                    console.error('Erro ao reproduzir o áudio incorreto:', error);
                });

                const messageElements = document.querySelectorAll('.result'); // Seleciona todos os elementos com a classe 'result'
                messageElements.forEach(element => {
                    element.innerHTML = `<span style="color: #01C929;">${mensagem}</span><br>`;
                });              
                
            }
        
            mostrarRespostaCorreta(mensagem);
        
            // atualizar o score do usuário
            function updateScore(score) {
                const scoreElements = document.querySelectorAll('.score-div, .pontos-div'); // Seleciona todos os elementos com as classes 'score-div' e 'pontos-div'
                scoreElements.forEach(element => {
                    element.innerText = `Score: ${score}`;
                });
            }
        
            updateScore(correctGuesses);
            
        } else {
            function mostrarRespostaErrada(mensagem) {
                
                const incorrectAudio = document.getElementById('incorrectAudio');
                incorrectAudio.play().catch(error => {
                    console.error('Erro ao reproduzir o áudio incorreto:', error);
                });
            
                const messageElements = document.querySelectorAll('.result'); // Seleciona todos os elementos com a classe 'result'
                messageElements.forEach(element => {
                    element.innerHTML = `<span style="color: #F54A19;">${mensagem}</span><br>`;
                });
            }
            mostrarRespostaErrada(mensagem);
        }
        
    }


    document.querySelectorAll('.botao-proximo').forEach(button => {
        button.addEventListener('click', () => {

        const messageText = document.querySelectorAll('.result');
        messageText.forEach(texto => {
            texto.innerHTML =  '';
        });

    });
});             

function reiniciarJogo() {
  
    var urlPartes = window.location.href.split("/");
    var ultimaParteUrl = urlPartes[urlPartes.length - 1];

    window.location.href = ultimaParteUrl;
}
