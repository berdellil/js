


var nbre = prompt("Entrez le nombre:");

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("<p>" + i + "est pair</p>");
    } else {
        document.write("<p>" + i + "est impair</p>");
    }

}
document.write("<hr>");

//--------------------WHILE--------------------------//
var chiffre = parseInt(prompt("choisir un nombre entier "));
var chffreMax = (chiffre + 10);
while (chiffre <= chiffreMax) {
    if (chiffre % 2 === 0) {
        document.write("<p>" + i + "est pair</p>");
    } else {
        document.write("<p>" + i + "est impair</p>");
        chiffre++;
    }
    //-------------------------FOR----------------------//

    var nbUser = parseInt(prompt("Ton chiffre ?"));
    var nbUserMax = (nbUser + 11);
    for (var tour = nbUser; tour < nbUserMax; tour++) {
        if (tour % 2 === 0) {
            document.write("<p>" + tour + " est pair</p>")
        } else {
            document.write("<p>" + tour + " est impair</p>")
        }
    }


}








