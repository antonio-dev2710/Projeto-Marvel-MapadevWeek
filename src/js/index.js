

const personagens = document.querySelectorAll(".personagem");
let mouseHover = "thor";
let selectedPlay1 = null;
let selectedPlay2 = null;

personagens.forEach((_personagem) => {
  _personagem.addEventListener("mouseover", () => {
      //Tratando efeitos jpogador 1
    if (!selectedPlay1) {
        //efeito de piscar em cima
      $("#" + mouseHover).toggleClass("selecionadoUm");
      _personagem.classList.toggle("selecionadoUm");

      //atualizando quem o mouse esta em cima
      mouseHover = _personagem.getAttribute("id");

        //Trocando imagem
      $("#personagem-jogador-1").attr("src", `./src/imagens/${mouseHover}.png`);

      //Trocando nome
      $("#nome-jogador-1").text(_personagem.getAttribute("data-name"));
    }
    //Tratando efeitos jpogador 2
     else if(!selectedPlay2){

        //efeito de piscar em cima
      $("#" + mouseHover).toggleClass("selecionadoDois");
      _personagem.classList.toggle("selecionadoDois");

      //atualizando quem o mouse esta em cima
      mouseHover = _personagem.getAttribute("id");

      //Trocando imagem
      $("#personagem-jogador-2").attr("src", `./src/imagens/${mouseHover}.png`);

      //Trocando nome
      $("#nome-jogador-2").text(_personagem.getAttribute("data-name"));
    }
  });

  _personagem.addEventListener("click", () => {
    if(!selectedPlay1) {
        selectedPlay1 = _personagem.getAttribute("data-name");
        $("#" + mouseHover).toggleClass("selecionadoDois");
        alert('Agora escolha o Play 2!')
    } else if(!selectedPlay2) {
        alert('GOGOGO')
        selectedPlay2 = _personagem.getAttribute("data-name");
    }

    //Trocando a label 1P para 2P , caso o player 1 ja foi selecionado e play 2 ainda não foi
    if(selectedPlay1 && !selectedPlay2){
        //Colocando texto 2P em todos os spans
        $(".tag").text("2P");
        //Deixando o texto 1P somente no persongem clicado na escolha do play 1
        $(`#${_personagem.getAttribute("id")}`).children([0]).text("1P");
    }
  });
});
