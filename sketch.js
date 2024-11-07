//esporte Físico, Esporte com Mão, Esporte com Pé

//volei
//handboll
//futebol
//xadrez
//futvolei

let campoFísico;
let campoMão;
let campoPé;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de esportes");
  campoFísico = createCheckbox("Gosta de esporte físico?")
  campoMão = createCheckbox("Gosta de esporte com a mão?");
  campoPé = createCheckbox("Gosta de esporte com o Pé?");
}

function draw() {
  background("#27576F");
  let gostaDeEsporteFísico = campoFísico.checked();
  let gostaDeEsporteMão = campoMão.checked();
  let gostaDeEsportePé = campoPé.checked();
  let recomendacao = geraRecomendacao(gostaDeEsporteFísico, gostaDeEsporteMão, gostaDeEsportePé);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(gostaDeEsporteFísico, gostaDeEsporteComMão, gostaDeEsporteComPé) {
  if (gostaDeEsporteFísico) {
    if (gostaDeEsporteFísico) {
      return "volei";
    } else {
      if (gostaDeEsporteFísico) {
        if(gostaDeEsporteFísico || gostaDeEsporteComPé) {
          return "futvolei";          
        } else{
         return "xadrez";
        }
      } else {
        if (gostaDeEsporteComMão || gostaDeEsporteFísico) {
          return "Handebol";
        } else {
          return "xadrez";
        }
      }
    }
  } else {
    if (gostaDeEsporteComMão) {
      return "xadrez";
    } else {
      return "futebol";
    }
  }
}
