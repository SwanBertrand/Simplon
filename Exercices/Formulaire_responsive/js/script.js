function surligne(champ, erreur){
      if(erreur){
         champ.style.backgroundColor = "#fba";
      }
      else{
         champ.style.backgroundColor = "";
      }
   };

function verifChamp(champ){
   var regex = /^.{2,}$/;
   if(!regex.test(champ.value)){
      surligne(champ, true);
      return false;
   }
   else{
       surligne(champ, false);
       return true;
    }
 };

function verifDate(champ){
  var regex = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;
  console.log(champ.value);
  if(!regex.test(champ.value)){
    surligne(champ, true);
    return false;
  }
  else{
    surligne(champ, false);
    return true;
  }
};

function verifMail(champ){
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
   if(!regex.test(champ.value)){
      surligne(champ, true);
      return false;
      }
   else{
   surligne(champ, false);
   return true;
      }
};

function verifPostcode(champ){
   var regex = /^[0-9]{5}$/;
   if(!regex.test(champ.value)){
      surligne(champ, true);
      return false;
   }
   else{
       surligne(champ, false);
       return true;
    }
};

function verifPhone(champ){
   var regex = /^[0-9]{10}$/;
   if(!regex.test(champ.value)){
      surligne(champ, true);
      return false;
   }
   else{
       surligne(champ, false);
       return true;
    }
};

function verifNpole(champ){
   var regex = /^[0-9]{7}[A-Z]{1}$/;
   if(!regex.test(champ.value)){
      surligne(champ, true);
      return false;
   }
   else{
       surligne(champ, false);
       return true;
    }
};

function verifNsecu(champ){
   var regex = /^[0-9]{13}$/;
   if(!regex.test(champ.value)){
      surligne(champ, true);
      return false;
   }
   else{
       surligne(champ, false);
       return true;
    }
};

function checkStatus(champ){
   var model = "En recherche d'emploi";
   if(String(champ.value) == model){
      affichageNsecu(champ, true);
      return true;
   }
   else{
      affichageNsecu(champ, false);
      return false;
   }
};

function affichageNsecu(champ, flag){
   if(flag){
      form.insertBefore(brnpolesuppr, brnsecu);
      form.insertBefore(labelnpolesuppr, brnsecu);
      form.insertBefore(npolesuppr, brnsecu);
      npole.style.height = "20px";
   }
   else{
      npole.value="";
      brnpolesuppr = form.removeChild(brnpole);
      labelnpolesuppr = form.removeChild(labelnpole);
      npolesuppr = form.removeChild(npole);
   }
};

function magicButton(){

    var option = document.createElement("option");
    var textToAdd = document.createElement("SPAN");
    var sexeToAdd = prompt("Veuillez entrer le sexe à ajouter :");
    var flag = true;
    for(var i = 0 ,l = sexe.options.length; i< l;i++ ){
      if(sexe.options[i].value == sexeToAdd){
        flag = false;
        break;
      }
      else{
        flag = true;
      }
    };
    if (flag == true){
      option.text = sexeToAdd;
      sexe.add(option);

      var baliseToAdd = document.createElement("INPUT");
      baliseToAdd.setAttribute("type", "radio");
      baliseToAdd.setAttribute("id", "qpv3");
      baliseToAdd.setAttribute("name", "qpv1");
      baliseToAdd.setAttribute("checked", "");
      form.insertBefore(baliseToAdd, brqpv);
      flag = true;
    }

    textToAdd.setAttribute("id", "spanradio");
    var text = document.createTextNode("Peut-être");
    textToAdd.appendChild(text);
    form.insertBefore(textToAdd, brqpv);
};

(function(){
   
   var brnpolesuppr;
   var labelnpolesuppr;
   var npolesuppr;
   var lastname = document.getElementById("lastname");
   var firstname = document.getElementById("firstname");
   var mail = document.getElementById("mail");
   var birthdate = document.getElementById("birthdate");
   var nationality = document.getElementById("nationality");
   var adress = document.getElementById("adress");
   var postcode = document.getElementById("postcode");
   var city = document.getElementById("city");
   var phone = document.getElementById("phone");
   var npole = document.getElementById("npole");
   var labelnpole = document.getElementById("labelnpole");
   var brnpole = document.getElementById("brnpole");
   var nsecu = document.getElementById("nsecu");
   var brnsecu = document.getElementById("brnsecu");
   var brbirthdate = document.getElementById("brbirthdate");
   var sexe = document.getElementById("sexe");
   var brqpv = document.getElementById("brqpv");

   var status = document.getElementById("status");

   var form = document.getElementById("form");

   var magic = document.getElementById("magic");

   lastname.addEventListener("blur", function(e){verifChamp(lastname)});
   firstname.addEventListener("blur", function(e){verifChamp(firstname)});
   nationality.addEventListener("blur", function(e){verifChamp(nationality)});
   adress.addEventListener("blur", function(e){verifChamp(adress)});
   city.addEventListener("blur", function(e){verifChamp(city)});

   mail.addEventListener("blur", function(e){verifMail(mail)});

   postcode.addEventListener("blur", function(e){verifPostcode(postcode)});

   phone.addEventListener("blur", function(e){verifPhone(phone)});

   npole.addEventListener("blur", function(e){verifNpole(npole)});

   nsecu.addEventListener("blur", function(e){verifNsecu(nsecu)});

   birthdate.addEventListener("blur", function(e){verifDate(birthdate)});

   status.addEventListener("change",function(e){checkStatus(status)});

   magic.addEventListener("click",function(e){magicButton(magic)},{once: true});

})();

