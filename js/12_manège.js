
// alert('test');

//----------------------QUESTION 1--------------------//


//----------------------WHILE
    var manege = 0;
    while(manege <10){
        manege++;
        document.write("C'est le tour n° " + manege + "<br>");

    }
    document.write("<hr>");

    //--------------------------FOR
    for( var i = 1; i <= 10; i++){

        document.write("C'est le tour n° " + manege + "<br>");
    }
    document.write("<hr>");      
    
    
    //----------------QUESTION  2 ---------------------------//


    //-------------------------prompt while------------------//
    var question = parseInt(prompt("combien de tours voulez vous faire?"));
    var compteur = 1;
    while(compteur <= question){
        document.write(" C'est le tour n°  " + compteur  + "<br>");
        compteur++;
    }
    document.write("<hr>");


//--------------------POMPT WHILE--------------------//


    var nbTours =  parseInt(prompt("combien de tour voulez vous faire ?"));
    for (var tour = 1; tour <= nbTours ; tour++){
        document.write(" C'set le tour n°  " + compteur  + "<br>");
    }