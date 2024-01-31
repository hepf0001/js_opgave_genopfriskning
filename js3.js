//document.querySelector("#tal").value;

tal = Math.round(Math.random() * 11);

// Generer et tilfældigt tal mellem 1 og 10
var rigtigtTal = Math.floor(Math.random() * 10) + 1;

// Bed brugeren om at gætte tallet
var brugerGæt = prompt("Gæt et tal mellem 1 og 10:");

// Konverter brugerens indtastning til et heltal
var brugerGætSomTal = parseInt(brugerGæt);

// Tjek om brugeren har gættet rigtigt
if (brugerGætSomTal === rigtigtTal) {
  alert("Du gættede rigtigt!");
} else {
  alert("Du gættede ikke rigtigt. Det rigtige tal var " + rigtigtTal + ".");
}

document.querySelector("#tal").value;

// Generer et tilfældigt tal mellem 1 og 10
var rigtigtTal = Math.floor(Math.random() * 10) + 1;

// Bed brugeren om at gætte tallet
//var brugerGæt = prompt("Gæt et tal mellem 1 og 10:");

// Konverter brugerens indtastning til et heltal
//var brugerGætSomTal = parseInt(brugerGæt);

// Tjek om brugeren har gættet rigtigt
if (value === rigtigtTal) {
  alert("Du gættede rigtigt!");
} else {
  alert("Du gættede ikke rigtigt. Det rigtige tal var " + rigtigtTal + ".");
}
