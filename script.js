const racas = document.getElementById("racas");
var imagemSalva = [];


function recebeFoto(){
    var racaSelecionada = racas.value; 

    urlAPI = `https://dog.ceo/api/breed/${racaSelecionada}/images/random/3`;

    fetch (urlAPI)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(imagem){
            for(var i = 1; i < 4; i++){
                mostraImagem(imagem.message[i - 1], i)
            }
        })
        .catch(function(error){
            console.log("Retornou um erro" + error);
        });
}

function mostraImagem(imagem_url, i){
    document.getElementById('imagem' + i).src = imagem_url;
}

function salvarImagem() {
    for (let i = 1; i < 4; i++) {
        var imagem_url = document.getElementById('imagem' + i).src;
        salvarNoLocalStorage(imagem_url, i);       
    }
}

function salvarNoLocalStorage(imagem_url, i){
    var chave = `imagem${i}`;
    localStorage.setItem(chave, imagem_url);
}

function exibirImagemSalva(){
    for (let i = 1; i < 4; i++) {
        var chave = `imagem${i}`;
        var imagem_url = localStorage.getItem(chave);
        if(imagem_url){
            document.getElementById('foto_adicionada' + i).src = imagem_url
        }
    }
}

exibirImagemSalva()