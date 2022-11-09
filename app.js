let firstName;
let telefon;
let besked;

document.getElementById("minKnap").onclick = function() {
    firstName = document.getElementById("fname").value;
    document.getElementById("fnameParagraph").innerHTML = firstName;

    telefon = document.getElementById("tlf").value;
    document.getElementById("tlfParagraph").innerHTML = telefon;

    besked = document.getElementById("besked").value;
    document.getElementById("beskedParagraph").innerHTML = besked;
}