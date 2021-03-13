// tady je místo pro náš program

let ctverec = document.querySelector(".ctverecek");
function prebarvi() {
  ctverec.style.backgroundColor = "green";
}
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  ctverec.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  ctverec.style.fontSize = "8px";
  
}