//encapisular a lógica que recupera a altura e a largura do palco do jogo dentro de uma função,para atualizar,sempre que o evento de redimensionamento ocorrer

//criar a variavel dentro do escopo global
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    //1500
    criarMosquitoTempo = 1500
    
}else if(nivel == 'dificil') {
    //1000
    criarMosquitoTempo = 1000
}else if (nivel === 'chuchnorris') {
    //750
    criarMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo() {
     altura = window.innerHeight
     largura = window.innerWidth

    console.log(altura, largura)

}

//chamar a função
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else {
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000)


function posicaoRandomica() {
   

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        //console.log('Elemento selecionado foi: v' + vidas)
        if(vidas > 3) {
           window.location.href = 'fim_de_jogo.html'
        }else {
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

        vidas++
        }

    }

    //ajustar posicão do mosquito
    //math.floor ira arredondar para baixo os numeros altura e largura

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)



    //criar o elemento html (img)
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    // atraves do objeto document acessar o body da nossa pagina
    //incluir nossa img dentro do body atraves do metodo appendChild
    document.body.appendChild(mosquito)

}


//tamanhos variados para o mosquito

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    //tomada de decisão
    switch(classe){
        //seclasse for 0 retorna mosquito1
        case 0:
            return 'mosquito1'
        
        case 1:
             //se for 1 retorna mosquito1
            return 'mosquito2'

        case 2: 
         //se for 2 retorna mosquito2
            return 'mosquito3'

    }
}

//fazer o mosquito olhar para lados diferentes

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    //tomada de decisão
    switch(classe){
        //seclasse for 0 retorna ladoA
        case 0:
            return 'ladoA'
        
        case 1:
             //se for 1 retorna ladoB
            return 'ladoB'


    }

}

//criar cenario do jogo
//bacground






