var attInf, attArt, attTnk, attFtr, attBmr;

var defInf, defArt, defTnk, defFtr, defBmr;

var attTrp, attSub, attDes, attCru, attCar, attBbs, attFtrN, attBmrN;
var attBbd = 0;

var defTrp, defSub, defDes, defCru, defCar, defBbs, defFtrN, defBmrN;
var defBbd = 0;

var attHasDes, attHasSub;
var defHasDes, defHasSub;
var attHasUnits = true;
var defHasUnits = true;

function rollDice(numDice, pow) {
  // roll dice equal to i
  var hits = 0;
  var die;

  for (var i = 0; i < numDice; i++) {
    die = 1 + Math.floor(Math.random() * 6);
    // hit if less that power
    if (die <= pow) {
      hits++;
    }
  }
  // return hits
  return hits;
}

//If the user did not enter a valid number for a unit type, set the number of that unit to zero
function valUnitInput(input){
  if(isNaN(input)){
    return 0;
  } else if (input < 0){
    return 0;
  } else {
    return input;
  }
}

//reset ALL spinners to a value of zero
function resetSim(){
  $('.spinner').val(0);
}

// Selects casualties for the attacker
function getAttCasualties(hits) {
  while (hits > 0) {
    if (hits > attInf) {
      hits -= attInf;
      attInf = 0;
    } else if (hits <= attInf) {
      attInf -= hits;
      hits = 0;
    }
    if (hits > attArt) {
      hits -= attArt;
      attArt = 0;
    } else if (hits <= attArt) {
      attArt -= hits;
      hits = 0;
    }
    if (hits > attTnk) {
      hits -= attTnk;
      attTnk = 0;
    } else if (hits <= attTnk) {
      attTnk -= hits;
      hits = 0;
    }
    if (hits > attFtr) {
      hits -= attFtr;
      attFtr = 0;
    } else if (hits <= attFtr) {
      attFtr -= hits;
      hits = 0;
    }
    if (hits > attBmr) {
      hits -= attBmr;
      attBmr = 0;
    } else if (hits <= attBmr) {
      attBmr -= hits;
      hits = 0;
    }
    if (hits > 0 && attInf == 0 && attArt == 0 && attTnk == 0 && attFtr == 0 && attBmr == 0) {
      hits = 0;
    }
  }
  //alert('determined att casualties');
}

//Selcts casualties for the defenders
function getDefCasualties(hits) {
  //alert('made it into function'); //debugging alert
  while (hits > 0) {
    if (hits > defBmr) {
      hits -= defBmr;
      defBmr = 0;
    } else if (hits <= defBmr) {
      defBmr -= hits;
      hits = 0;
    }
    if (hits > defInf) {
      hits -= defInf;
      defInf = 0;
    } else if (hits <= defInf) {
      defInf -= hits;
      hits = 0;
    }
    if (hits > defArt) {
      hits -= defArt;
      defArt = 0;
    } else if (hits <= defArt) {
      defArt -= hits;
      hits = 0;
    }
    if (hits > defTnk) {
      hits -= defTnk;
      defTnk = 0;
    } else if (hits <= defTnk) {
      defTnk -= hits;
      hits = 0;
    }
    if (hits > defFtr) {
      hits -= defFtr;
      defFtr = 0;
    } else if (hits <= defFtr) {
      defFtr -= hits;
      hits = 0;
    }
    if (hits > 0 && defInf == 0 && defArt == 0 && defTnk == 0 && defFtr == 0 && defBmr == 0) {
      hits = 0;
    }
  }
  //alert('Determined Def Casualties'); //debugging alert
}

function getNavyAttCasualties(hits) {
/*  if(defDes > 0){
    defHasDes = true;
  } else {
    defHasDes = false;
  }
  if(defSub > 0){
    defHasSub = true;
  } else {
    defHasSub = false;
  }*/
  while (hits > 0) {
    //console.log(hits);
    if (hits > attBbs) {
      hits -= attBbs;
      attBbd = attBbs;
      attBbs = 0;
    } else if (hits <= attBbs){
      attBbs -= hits;
      attBbd = hits;
      hits = 0;
    }
    if (hits > attSub){
      hits -= attSub;
      attSub = 0;
    } else if (hits <= attSub){
      attSub -= hits;
      hits = 0;
    }
    if (hits > attDes){
      hits -= attDes;
      attDes = 0;
    } else if (hits <= attDes){
      attDes -= hits;
      hits = 0;
    }
    if (hits > attCru){
      hits -= attCru;
      attCru = 0;
    } else if (hits <= attCru){
      attCru -= hits;
      hits = 0;
    }
    if (hits > attCar){
      hits -= attCar;
      attCar = 0;
    } else if (hits <= attCar){
      attCar -= hits;
      hits = 0;
    }
    if (hits > attFtrN){
      hits -= attFtrN;
      attFtrN = 0;
    } else if (hits <= attFtrN){
      attFtrN -= hits;
      hits = 0;
    }
    if(hits > attBmrN){
      hits -= attBmrN;
      attBmrN = 0;
    } else if (hits <= attBmrN){
      attBmrN -= hits;
      hits = 0;
    }
    if(hits > attBbd){
      hits -= attBbd;
      attBbd = 0;
    } else if(hits <= attBbd){
      attBbd -= hits;
      hits = 0;
    }
    if (hits > 0 && attSub <= 0 && attDes <= 0 && attCru <= 0 && attCar <= 0 && attBbs <= 0 && attBbd <= 0 && attFtrN <= 0 && attBmrN <= 0) {
      hits = 0;
      //console.log("manual override: hits = 0");
    }
  }
  //console.log("returning to main loop");
}

function getNavyDefCasualties(hits) {
  /*if(defDes > 0){
    attHasDes = true;
  } else {
    attHasDes = false;
  }
  if(defSub > 0){
    attHasSub = true;
  } else {
    attHasSub = false;
  */
  while (hits > 0) {
    //console.log("inside of defender casualties loop  -  " + hits);
    if (hits > defBbs) {
      hits -= defBbs;
      defBbd = defBbs;
      defBbs = 0;
    } else if (hits <= defBbs){
      defBbs -= hits;
      defBbd = hits;
      hits = 0;
    }
    if (hits > defSub){
      hits -= defSub;
      defSub = 0;
    } else if (hits <= defSub){
      defSub -= hits;
      hits = 0;
    }
    if (hits > defDes){
      hits -= defDes;
      defDes = 0;
    } else if (hits <= defDes){
      defDes -= hits;
      hits = 0;
    }
    if (hits > defCru){
      hits -= defCru;
      defCru = 0;
    } else if (hits <= defCru){
      defCru -= hits;
      hits = 0;
    }
    if (hits > defCar){
      hits -= defCar;
      defCar = 0;
    } else if (hits <= defCar){
      defCar -= hits;
      hits = 0;
    }
    if (hits > defFtrN){
      hits -= defFtrN;
      defFtrN = 0;
    } else if (hits <= defFtrN){
      defFtrN -= hits;
      hits = 0;
    }
    if(hits > defBmrN){
      hits -= defBmrN;
      defBmrN = 0;
    } else if (hits <= defBmrN){
      defBmrN -= hits;
      hits = 0;
    }
    if(hits > defBbd){
      hits -= defBbd;
      defBbd = 0;
    } else if(hits <= defBbd){
      defBbd -= hits;
      hits = 0;
    }
    if (hits > 0 && defSub <= 0 && defDes <= 0 && defCru <= 0 && defCar <= 0 && defBbs <= 0 && defBbd <= 0 && defFtrN <= 0) {
      hits = 0;
      //console.log("manual override: hits = 0");
    }
  }
  //console.log("returning to main loop");
}

function runSim() {
  var result = document.querySelector(".output");
  result.innerHTML = '';
  var outcome = '';
  var round = 1;
  attHasUnits = true;
  defHasUnits = true;
  //alert('button clicked'); //debugging alert
  //access info from text fields
  attInf = valUnitInput(parseInt(document.getElementById("attInf").value));
  attArt = valUnitInput(parseInt(document.getElementById("attArt").value));
  attTnk = valUnitInput(parseInt(document.getElementById("attTnk").value));
  attFtr = valUnitInput(parseInt(document.getElementById("attFtr").value));
  attBmr = valUnitInput(parseInt(document.getElementById("attBmr").value));

  defInf = valUnitInput(parseInt(document.getElementById("defInf").value));
  defArt = valUnitInput(parseInt(document.getElementById("defArt").value));
  defTnk = valUnitInput(parseInt(document.getElementById("defTnk").value));
  defFtr = valUnitInput(parseInt(document.getElementById("defFtr").value));
  defBmr = valUnitInput(parseInt(document.getElementById("defBmr").value));
  //alert('read fields'); //debugging alert
  do { //while(attHasUnits && defHasUnits);
    //alert('beginning loop'); //debugging alert
    //accumulates total hits for a single round of combat
    var attHits = 0;
    var defHits = 0;

    //get the attackers power
    var att1 = 0;
    var att2 = 0;
    if (attInf >= attArt) {
      att1 = attInf - attArt;
      att2 = attArt * 2;
      //alert('more inf'); //debugging alert
    } else if (attInf < attArt) {
      att2 = attInf + attArt;
      att1 = 0;
      //alert('less Inf'); //debugging alert
    }
    var att3 = attTnk + attFtr;
    var att4 = attBmr;

    //get the defenders power
    var def1 = defBmr;
    var def2 = defInf + defArt;
    var def3 = defTnk;
    var def4 = defFtr;
    //alert('Determined army composition'); //debugging alert
    // get hits
    attHits = rollDice(att1, 1) + rollDice(att2, 2) + rollDice(att3, 3) + rollDice(att4, 4);
    defHits = rollDice(def1, 1) + rollDice(def2, 2) + rollDice(def3, 3) + rollDice(def4, 4);
    //alert("The dice hav been rolled"); //debugging alert
    //select casualties
    getAttCasualties(defHits);
    //alert('got att casaulties'); //debugging alert
    getDefCasualties(attHits);
    //alert('got def casaulties'); //debugging alert

    var isChecked = document.getElementById("showRoundResults").checked;
    if (isChecked == true) { // move the conditional out of the loop, if you want to record the information, but not display it.
      outcome += '<strong>Round: ' + round + '</strong><br>The attacker got ' + attHits + ' hit(s)<br>The attacker has ' + attInf + ' inf and ' + attArt + ' art and ' + attTnk + ' tanks and ' + attFtr +
        ' Fighters and ' + attBmr + ' bombers<br>The defender got ' + defHits + ' hit(s)<br>The defender has ' + defInf + ' Inf and ' + defArt + ' art and ' + defTnk +
        ' tanks and ' + defFtr + ' Fighters and ' + defBmr + ' bombers<br>';
    }
    //math stop me from making a ton of diffent tests in the if statement. It fixed a bug somewhere
    var numAttUnits = attInf + attArt + attTnk + attFtr + attBmr;
    var numDefUnits = defInf + defArt + defTnk + defFtr + defBmr;
    if (numAttUnits <= 0) {
      attHasUnits = false;
      //alert('The Defender won!'); //debugging alert
    }
    if (numDefUnits <= 0) {
      defHasUnits = false;
      //alert('The Attacker won!'); //debugging alert
    }
    round++;
  } while (attHasUnits == true && defHasUnits == true);
  //put the output here
  //alert('left loop'); //debugging alert
  //console.log(result);
  if (attHasUnits == false) {
    outcome = 'The Defender won! The defender has ' + defInf + ' Infantry, ' + defArt + ' Artillery, ' + defTnk + ' Tanks, ' + defFtr + ' Fighters, and ' + defBmr + ' Bombers remaining.<br>' + outcome;
    //alert(outcome);
    result.innerHTML += outcome;
    //console.log(result);
  } else if (defHasUnits == false) {
    outcome = 'The Attacker won! The attacker has ' + attInf + ' Infantry, ' + attArt + ' Artillery, ' + attTnk + ' Tanks, ' + attFtr + ' Fighters, and ' + attBmr + ' Bombers remaining.<br>' + outcome;
    //alert(outcome);
    result.innerHTML += outcome;
    //console.log(result);
  }
} // end land battle simulation

function runNavySim(){ //DOES NOT support sneak attacks
  var result = document.querySelector(".outputNavy");
  result.innerHTML = '';
  var outcome = '';
  var round = 1;
  attHasUnits = true;
  defHasUnits = true;
  attBbd = 0;
  defBbd = 0;

  //Get Attacking units from the DOM
  attTrp = valUnitInput(parseInt(document.getElementById("attTrp").value));
  attSub = valUnitInput(parseInt(document.getElementById("attSub").value));
  attDes = valUnitInput(parseInt(document.getElementById("attDes").value));
  attCru = valUnitInput(parseInt(document.getElementById("attCru").value));
  attCar = valUnitInput(parseInt(document.getElementById("attCar").value));
  attBbs = valUnitInput(parseInt(document.getElementById("attBbs").value));
  attFtrN = valUnitInput(parseInt(document.getElementById("attFtrN").value));
  attBmrN = valUnitInput(parseInt(document.getElementById("attBmrN").value));

  //Get Defending units from the DOM
  defTrp = valUnitInput(parseInt(document.getElementById("defTrp").value));
  defSub = valUnitInput(parseInt(document.getElementById("defSub").value));
  defDes = valUnitInput(parseInt(document.getElementById("defDes").value));
  defCru = valUnitInput(parseInt(document.getElementById("defCru").value));
  defCar = valUnitInput(parseInt(document.getElementById("defCar").value));
  defBbs = valUnitInput(parseInt(document.getElementById("defBbs").value));
  defFtrN = valUnitInput(parseInt(document.getElementById("defFtrN").value));
  //defBmrN = valUnitInput(parseInt(document.getElementById("defBmrN").value));  //Its actually impossible to have a defending bomber at sea

  do{//while(attHasUnits && defHasUnits);
    var attHits = 0;
    var defHits = 0;

    //Get Attackers power
    var att1 = attCar;
    var att2 = attSub + attDes; //This is where I would use if/else to separate subs for sneak attack or perhaps it would need done before setting defenders power
    var att3 = attCru + attFtrN;
    var att4 = attBbs + attBbd + attBmrN;

    //Get Defenders power
    var def1 = defSub;
    var def2 = defDes + defCar;
    var def3 = defCru;
    var def4 = defBbs + defBbd + defFtrN;

    //Roll the dice
    attHits = rollDice(att1, 1) + rollDice(att2, 2) + rollDice(att3, 3) + rollDice(att4, 4);
    defHits = rollDice(def1, 1) + rollDice(def2, 2) + rollDice(def3, 3) + rollDice(def4, 4);
    //console.log("Attacker hits: " + attHits + "<br>Defender hits: " + defHits + " _ Round: " + round);
    //get casualties
    getNavyAttCasualties(defHits);
    //console.log("Returned from getting Attacker Casualties");
    getNavyDefCasualties(attHits);
    //console.log("Returned from getting Defender Casualties");

    var isChecked = document.getElementById("showRoundResultsNavy").checked;
    if (isChecked == true) { // move the conditional out of the loop, if you want to record the information, but not display it.
      outcome += '<strong>Round: ' + round + '</strong><br>The attacker got ' + attHits + ' hit(s)<br>'+
        'The attacker has ' + attTrp + ' transports and ' + attSub + ' submarines and ' + attDes + ' destroyers and ' + attCru + ' cruisers and ' +
        attCar + ' aircraft carriers and ' + attBbs + ' full-health battleships and ' + attBbd + ' damaged battleships and ' + attFtrN + ' fighters and ' +
        attBmrN + ' bombers<br>'+
        'The defend got ' + defHits + ' hit(s)<br>' +
        'The defender has ' + defTrp + ' transports and ' + defSub + ' submarines and ' + defDes + ' destroyers and ' + defCru + ' cruisers and ' +
        defCar + ' aircraft carriers and ' + defBbs + ' full-health battleships and ' + defBbd + ' damaged battleships and ' + defFtrN + ' fighters<br>';
      }
        var numAttUnits = attSub + attDes + attCru + attCar + attBbs + attBbd + attFtrN + attBmrN;
        var numDefUnits = defSub + defDes + defCru + defCar + defBbs + defBbd + defFtrN;
        if (numAttUnits <= 0) {
          attHasUnits = false;
          //alert('The Defender won!'); //debugging alert
        }
        if (numDefUnits <= 0) {
          defHasUnits = false;
          //alert('The Attacker won!'); //debugging alert
        }
        round++;

  }while(attHasUnits && defHasUnits);
  if (attHasUnits == false) {
    outcome = 'The Defender won! The defender has ' + defTrp + ' transports and ' + defSub + ' submarines and ' + defDes + ' destroyers and ' + defCru + ' cruisers and ' +
    defCar + ' aircraft carriers and ' + defBbs + ' full-health battleships and ' + defBbd + ' damaged battleships and ' + defFtrN + ' fighters<br>' + outcome;
    //alert(outcome);
    result.innerHTML += outcome;
    //console.log(result);
  } else if (defHasUnits == false) {
    outcome = 'The Attacker won! The attacker has ' + attTrp + ' transports and ' + attSub + ' submarines and ' + attDes + ' destroyers and ' + attCru + ' cruisers and ' +
    attCar + ' aircraft carriers and ' + attBbs + ' full-health battleships and ' + attBbd + ' damaged battleships and ' + attFtrN + ' fighters and ' +
    attBmrN + ' bombers<br>' + outcome;
    //alert(outcome);
    result.innerHTML += outcome;
    //console.log(result);
  }
} // end naval battle simulation
