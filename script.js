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

function adicionarFoto(){
    
}

