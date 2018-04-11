(function(){

  function genererTableau(mois){

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    myid.appendChild(table);
    tableid = document.getElementById("table");
    var numerojour = 1;

    if((mois-1) == 0){
      offsetJours = 0;
    }
    else{
      offsetJours = calculOffsetJour(mois-1);
    }

    for (var i = 0; i < 7; i++){

      rows[i] = document.createElement("tr");
      br = document.createElement("br");

      for (var j = 0; j < 7; j++){
        cols[j] = document.createElement("td");
        cols[j].setAttribute("class", "cells");
        var texte = document.createElement("span");
        switch (i) {
          case 0:            
            texte.appendChild(document.createTextNode(jours[j]));
            cols[j].appendChild(texte);
            break;
          case 1:
            if(j >= offsetJours){
              texte.appendChild(document.createTextNode(numerojour));
              cols[j].appendChild(texte);
              numerojour++;
            }
            else{
              texte.appendChild(document.createTextNode(""));
              cols[j].appendChild(texte);
            }
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            if (numerojour <= nbJourDansMois[mois-1]) {
              texte.appendChild(document.createTextNode(numerojour));
              cols[j].appendChild(texte);
              numerojour++;
            }
            break;
          default:
            // statements_def
            break;
        }
        rows[i].appendChild(cols[j]);
      }
      tableid.appendChild(rows[i]);
    }

    offsetJours = calculOffsetJour(mois);

  };

  function genererHeader(){

    var prev = document.createElement("button");
    prev.setAttribute("id", "prev");
    prev.setAttribute("class", "button");
    prev.appendChild(document.createTextNode("<"));
    myid.appendChild(prev);

    var next = document.createElement("button");
    next.setAttribute("id", "next");
    next.setAttribute("class", "button");
    next.appendChild(document.createTextNode(">"));
    myid.appendChild(next);

  };

  function calculOffsetJour(mois){

    console.log("Mois = " + mois);

    for (var i = 0; i < mois; i++) {
      console.log("offsetJours = " + offsetJours);
      console.log(nbJourDansMois[mois-1] + "+ " + offsetJours + " % " + 7 + "=");
      offsetJours = ((parseInt(nbJourDansMois[mois-1]) + offsetJours)%7);
      console.log("Résultat obtenu = " + offsetJours);
      console.log("offsetJours = " + offsetJours);
    }

    return offsetJours;
  };

  var myid = document.getElementById("myid");
  var rows = new Array();
  var cols = new Array();
  var jours = new Array("L", "M", "M", "J", "V", "S", "D");
  var nbJourDansMois = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
  var tableid;
  var offsetJours = 0;
  var moisAAfficher;

  genererHeader();
  genererTableau(4);
  myid.appendChild(tableid);

})();