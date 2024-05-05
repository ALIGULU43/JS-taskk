let yene_men_ALIGULU = "gece saat 1 di artiq";


function bitirecem() {


    let teze = yene_men_ALIGULU.split("");


    if (teze.length >= 10 && teze.length <= 20) {


        return true;

    } 


    else {


        return false;

    }

}

console.log(bitirecem());