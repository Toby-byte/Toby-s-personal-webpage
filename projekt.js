// kg pris kode
let vægt
let pris
let kg_pris

document.getElementById("kgPrisKnap").onclick = function() {
    vægt = document.getElementById("vægt").value;
    pris = document.getElementById("pris").value;

    kg_pris = (1000 / vægt) * pris;
    console.log(kg_pris);

    document.getElementById("kg-pris-resultat").innerHTML = kg_pris;
}