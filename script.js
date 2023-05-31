const racas = document.getElementById("racas");
const listItems = JSON.parse(localStorage.getItem('data')) || [];

function recebeFoto(){

    let racaSelecionada = racas.value; 
    let urlAPI = `https://dog.ceo/api/breed/${racaSelecionada}/images/random/3`;

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

function salvarImagem(i) {
    let itemSalvo = {
        id: Math.floor(Math.random() * 200000), //cria o id
        raca: racas.value,
        imagem: document.getElementById('imagem' + i).src 
    }
    salvarNoLocalStorage(itemSalvo);       
}

function salvarNoLocalStorage(itemSalvo){
    listItems.push(itemSalvo);
    localStorage.setItem("data" , JSON.stringify(listItems));
    exibirImagemSalva();
}

function exibirImagemSalva(){
    let listarFotos = document.getElementById('lista_imagens');
    listarFotos.innerHTML = "";
    for (let i = 1; i < listItems.length; i++) {
        var imagemLocalStorage = listItems[i].imagem;
        let criaTag = `
                    <div class="item">
                        <img src="${imagemLocalStorage}" alt="" class="img_lista">
                        <button onclick="excluir(${listItems[i].id})" >X</button>
                    </div>` //parou aqui 
        listarFotos.innerHTML += criaTag;
    }

}

function excluir(i){
    let index = listItems.findIndex(dog => dog.id == i);
    listItems.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(listItems));
    exibirImagemSalva();
}

exibirImagemSalva();