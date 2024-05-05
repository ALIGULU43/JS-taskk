let verilmis_array = [10,30,5,15,30];


 function edediOrta() {


    let cem = 0;


    for (let i = 0; i < verilmis_array.length; i++) {

    
        cem = cem + verilmis_array[i];

    }
    return cem / verilmis_array.length;


}

console.log(edediOrta());
