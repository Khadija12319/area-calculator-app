function pentagon_calculate(){
    const sideP= document.getElementById("pen-p").value;
    const p = parseFloat(sideP);


    const sideB = document.getElementById("pen-b").value;
    const b = parseFloat(sideB);

    const pentaArea = 0.5 * p* b;

    document.getElementById("pen-area").innerHTML= pentaArea;
}