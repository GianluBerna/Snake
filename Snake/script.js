const DIM = 20; //dimensione del nostro campo
var campo = ner Arrey(DIM); //Vettore del campo da gioco

var direzione = "dx"; //Direzione snake all'avvio

/* Constanti per colore */
const GRIGIO = #707070;
const BIANCO = #ffffff;
const ROSSO = #e80000;
const BLU = #041583;

/* Posizione cibo */
var xCibo, yCibo; // coordinate cibo
var nCibo;  //contatore cibo

/* Posizione cibo */
var posSn_x = 1;  //coordinata x Snake
var posSn_y = 1;  //coordinate y Snake
var coda = new Array(0);  //array contenente posizione coda


// funzione di avvio
function avvia() {
   initMatrice(); //inizializzazione matrice
   disegnaCampo();  //grafica campo
}

function initMatrice() {
    for(var i = 0; i < DIM; i++){
      campo[i] = new Array(DIM);
    }
    //inizializzazione matrice a  0
    for (var i = 0; i < DIM ; i++) {
        for (var j = 0; j < DIM; j++) {
          campo[i][j] = 0;
        }
}

function disegnaCampo() {
    var refBody = document.getElementsByTagName("body")[0];
    var tabella = document.createElement("table");
    var riga, cella, btn;

    refBody.appendChild(tabella);
}
