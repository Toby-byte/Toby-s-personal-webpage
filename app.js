let firstName;
let telefon;

document.getElementById("minKnap").onclick = function() {
    firstName = document.getElementById("fname").value;
    document.getElementById("fnameParagraph").innerHTML = firstName;

    telefon = document.getElementById("tlf").value;
    document.getElementById("tlfParagraph").innerHTML = telefon;
}