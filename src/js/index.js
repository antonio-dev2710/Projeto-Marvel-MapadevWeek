const characters = document.querySelectorAll(".personagem");
let mouseHover = "thor";
let selectedPlay1 = null;
let selectedPlay2 = null;

characters.forEach((_character) => {
  _character.addEventListener("mouseover", () => {
    //Tratando efeitos jpogador 1
    if (!selectedPlay1) {
      //efeito de piscar em cima
      $("#" + mouseHover).toggleClass("selecionadoUm");
      //retira oq tem e bota a classe no q n tem
      _character.classList.toggle("selecionadoUm");

      //atualizando quem o mouse esta em cima
      //pegando o nome de cada character
      mouseHover = _character.getAttribute("id");

      //Trocando imagem
      $("#personagem-jogador-1").attr("src", `./src/imagens/${mouseHover}.png`);

      //Trocando nome
      $("#nome-jogador-1").text(_character.getAttribute("data-name"));
    }
    //Tratando efeitos jpogador 2
    else if (!selectedPlay2) {

      //efeito de piscar em cima
      $("#" + mouseHover).toggleClass("selecionadoDois");
      _character.classList.toggle("selecionadoDois");

      //atualizando quem o mouse esta em cima
      mouseHover = _character.getAttribute("id");

      //Trocando imagem
      $("#personagem-jogador-2").attr("src", `./src/imagens/${mouseHover}.png`);

      //Trocando nome
      $("#nome-jogador-2").text(_character.getAttribute("data-name"));

    }
  });

  _character.addEventListener("click", () => {
    if (!selectedPlay1) {
      alert('Agora escolha o Play 2!');
      selectedPlay1 = _character.getAttribute("data-name");
      $("#" + mouseHover).toggleClass("selecionadoDois");
      console.log(selectedPlay1);

    } else if (!selectedPlay2) {
      alert("Let's go!");
      selectedPlay2 = _character.getAttribute("data-name");
      PageLoad();
    }

    //Trocando a label 1P para 2P , caso o player 1 ja foi selecionado e play 2 ainda não foi
    if (selectedPlay1 && !selectedPlay2) {
      //Colocando texto 2P em todos os spans
      $(".tag").text("2P");
      //Deixando o texto 1P somente no persongem clicado na escolha do play 1
      $(`#${_personagem.getAttribute("id")}`).children([0]).text("1P");



    }


    function PageLoad() {
      sessionStorage.setItem("recarregou", "true"); // antes de atualizar, você seta uma variável no sessionStorage como true
      window.location.reload(); // atualiza a página
    }

  });
});

