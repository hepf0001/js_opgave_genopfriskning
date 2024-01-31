const minKnap = document.querySelector("#knapElement");

minKnap.addEventListener("click", funktionDerKaldesVedKlik);

const minKnap2 = document.querySelector("#knapElement2");

minKnap2.addEventListener("click", funktionDerKaldesVedKlik);

const minKnap3 = document.querySelector("#knapElement3");

minKnap3.addEventListener("click", funktionDerKaldesVedKlik);

const minKnap4 = document.querySelector("#knapElement4");

minKnap4.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log("du har klikket på knappen");

  //if (minKnap == minKnap2) {
  //console.log("alkoholfri");
  //} else if (minKnap3 == minKnap4) {
  //console.log("alkohol");
  //}

  if (minKnap == "alkoholfri") {
    console.log("indeholder ikke alkohol");
  } else if (minKnap3 != "alkoholfri") {
    console.log("indeholder alkohol");
  }
}
