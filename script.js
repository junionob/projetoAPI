const racas = document.getElementById("racas");


function recebeFoto(){
    var racaSelecionada = racas.value; 
    var mensagemUrl; 

    urlAPI = `https://dog.ceo/api/breed/${racaSelecionada}/images/random/6`;

    fetch (urlAPI)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(data){
        for(let i = 1; i <= 6; i++){
                mostraImagem(data.message[i - 1], i)
        }
    })
    .catch(function(error){
        console.log("Retornou um erro" + error);
    });

}

function mostraImagem(imagem_url, i){
    document.getElementById('imagem' + i).src = imagem_url;
}