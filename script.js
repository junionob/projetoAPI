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
        mostraImagem1(data.message[0])
        mostraImagem2(data.message[1])
        mostraImagem3(data.message[2])
        mostraImagem4(data.message[3])
        mostraImagem5(data.message[4])
    

    })
    .catch(function(error){
        console.log("Retornou um erro" + error);
    });
}

function mostraImagem1(imagem_url){
        document.getElementById('imagem1').src = imagem_url;
}
function mostraImagem2(imagem_url){
    document.getElementById('imagem2').src = imagem_url;
}
function mostraImagem3(imagem_url){
    document.getElementById('imagem3').src = imagem_url;
}
function mostraImagem4(imagem_url){
    document.getElementById('imagem4').src = imagem_url;
}
function mostraImagem5(imagem_url){
    document.getElementById('imagem5').src = imagem_url;
}