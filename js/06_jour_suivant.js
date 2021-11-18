var jour = propmt("quel jour sommes-nous ?");

if (jour === "lundi") {
    document.write("demain nous serons mardi....");
} else if (jour === "mardi") {
    document.write("demain nous serons mercredi....");
} else if (jour === "mercredi") {
    document.write("demain nous serons jeudi...");
} else if (jour === "jeudi") {
    document.write("demain nous serons vendredi....");
} else if (jour === "vendredi") {
    document.write("demain nous serons samedi....");
} else if (jour === "samedi") {
    document.write("demain nous serons dimanche....");
} else if (jour === "dimanche") {
    document.write("demain jour inconnu....");

}

/*----------------autre------------------*/
switch(jour){
    case"lundi":
    console.log(" demain nous serons mardi...");
    break;
    case"mardi":
    console.log(" demain nous serons mercredi...");
    break;
    case"mercredi":
    console.log(" demain nous serons jeudi..");
    break;
    case"jeudi":
    console.log(" demain nous serons vendredi..");
    break;
    case"vendredi":
    console.log(" demain nous serons samedi..");
    break;
    case"samedi":
    console.log(" demain nous serons dimanche..");
    break;
    case"dimanche":
    console.log(" demain nous serons lundi..");
    break;
    default:
        console.log("jour inconnu..");
}