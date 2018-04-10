(function(){

  function genererTableau(){

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    myid.appendChild(table);
    tableid = document.getElementById("table");
    var jours = new Array("L", "M", "M", "J", "V", "S", "D");
    var numerojour = 1;

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
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            if (numerojour < 31) {
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
  };

  var myid = document.getElementById("myid");
  var rows = new Array();
  var cols = new Array();
  var tableid;

  genererTableau();
  myid.appendChild(tableid);

})();