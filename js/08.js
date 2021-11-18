// console.log("ça fonctionne");
// alert("test");
/*
les boucles
*/
// la boucle FOR /*
/*
for( 3 argument ){
    code
}
1 .Initialise un comteur , par défaut on utilise i
2. condition à vèrifier (vrai)
3. "pas" d'ncrémentation => combien j'ajoute par tour (i++) 
*/
for ( var i = 1 ; i<= 10; i += 2 ){
    document.write("<p> Instruction exécutée : " + i + " fois.</p>");

}
// la boucle WHITLE ( tant que)
var j = 1 ;
while( j <= 10){
    document.write("<p> instruction exècutée : " + j + "fois .</p>");
    j++;

}
/* EXERCICE 
j'ai   1000€ sur mon compte ,chaque mois  j'ajoute 50€,
combien de temps me faut-il pour avoir 2000€ sur mon compte?*/
  

 //*correction*/
 
for ( var mois  = 1000 ;   mois<=2000 ; mois += 50 ){
     document.write("<p> instriction exécutée :" + mois +" fois.</p>");

     }

//-------------------FOR------------------------------//

var compte =1000;
var temps = 0.
while ( monCompte < 2000) {
    monCompte += 50;
    temps++
    
}
document.write("<p> sous sur mon compte  :" + monCompte  +".</p>");
document.write("<p>jusqu0 2000€? IL ME FAUT  :" + temps +" années.</p>");



//----------------- FOR-------------------//




var tps = 0;for(var mesSous = 1000; mesSous < 2000; mesSous += 50){
    document.write("<p> le mois suivant j'ai  :" + mesSous+" €.</p>");
    tps
}
document.write("<p> il m'aura fallu :" + tps +" années.</p>");
     
   
  