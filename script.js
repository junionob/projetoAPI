
function recebeFoto(){

    var racas = document.getElementById("racas");
    var racaSelecionada = racas.value; 

    var urlAPI = `https://dog.ceo/api/breed/${racaSelecionada}/images/random`;

    fetch (urlAPI)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(data){
        mostraImagem(data.message)
    })
    .catch(function(error){
        console.log("Retornou um erro" + erro);
    });

    
}

function mostraImagem(imagem_url){
    document.getElementById('imagem').src = imagem_url;
}




//var imgElemento = document.getElementById('imagemAPI');

//imgElemento.src = urlAPI;

/*async function buscaRacas(){

    try {
        var consultaRacas = await fetch(`https://dog.ceo/api/breed/Pug/images/random`);
        var consultaInvertida = await consultaRacas.json()
    }
}*/