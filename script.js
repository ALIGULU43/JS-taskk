let str = "enene enene ssss kkk";

function polindrom(str) {


    let yeni_array = [];


    let Array = str.split("");

    

    for (let k = Array.length - 1; k >= 0; k--) {


        yeni_array.push(Array[k]);

    }
    return str === yeni_array.join("");

}
if (polindrom(str)) {


    console.log( "Daxil etdiyiniz  string bir polindromdur.");
}


else {

    console.log("Diresme  polindrom  deyil:)");
}