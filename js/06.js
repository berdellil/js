alert("test");
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); //true
// == compare les valeurs

console.log(nb1 === nb2)// false
// === compare les valeurs et les types

console.log(nb1 != nb2) //false
// !=différent en valeur

console.log(nb1 !== nb2) //true
// !== différent en valeur et en  type//

// -------------Exercice------------------ /



var a = prompt(" age de la personne");
var prénom, monÄge, prénomLogin, âgeLogin,
prénom = " hind "
âge = 40;

pénomLogin = prompt(" quel est votre prénom");
if
    ( prénomLogin === prénom){
        âgeLogin = parseInt (prompt(" votre âge ?"));
        if ( âgeLogin === monÄge){
            alert("bienvenue" + prénomLogin);

        }
        else{
            alert(" votre âge n'est pas celui stockè en base de donnèe");
        }
    }else {
            alert("attention ,prénom non reconnu");
        }
   


