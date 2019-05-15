const DIM = 20; //dimensione del nostro campo
var campo = new Array(DIM); //Vettore del campo da gioco

var direzione = "dx"; //Direzione snake all'avvio

/* Constanti per colore */
const GRIGIO = "#707070";
const BIANCO = "#ffffff";
const ROSSO = "#e80000";
const BLU = "#041583";

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


   //
   coda.push(posSn_x + "," + posSn_y);

   document.getElementById("btn_" + posSn_x + "_" + posSn_y).style.backgroundColor = BLU;
   muoviSnake();
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
}

function disegnaCampo() {
    var refBody = document.getElementsByTagName("body")[0];
    var tabella = document.createElement("table");
    var riga, cella, btn;

    refBody.appendChild(tabella);
    tabella.style.margin = "20px auto";
    tabella.style.borderSpaccing = "0";
    tabella.style.border = "blu";
    for (var i = 0; i < DIM; i++) {
        riga = document.createElement("tr");
        tabella.appendChild(riga);
        for (var j = 0; j < DIM; j++) {

            //creo cella
            cella = document.createElement("td");
            cella.style.width = "20px";
            riga.appendChild(cella);

            //creo pulsanti
            btn = document.createElement("input");
            cella.appendChild(btn);
            btn.type = "button";
            btn.id = "btn_"+ i + "_" + j;
            btn.style.width = "18px";
            btn.style.height = "15px"

            btn.setAttribute("onClick", "get_coord(this)");
          }
    }
}
function get_coord(btn) {
    var vect = btn.id.split("_");
    alert(vect[1] + " " + vect[2]);
}

function changeDirection(event){
  var code = event.keyCode;
  if(codice == 37);{
      direzione = "sx";
      }
  if(codice == 38);{
      direzione = "up";
      }
  if(codice == 39);{
      direzione = "dx";
      }
  if(codice == 40);{
      direzione = "dw";
      }
}
