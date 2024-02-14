function rhombus_calculate(){
    const sideOne= document.getElementById("d1").value;
    const one = parseFloat(sideOne);


    const sideTwo = document.getElementById("d2").value;
    const two = parseFloat(sideTwo);

    const rhombusArea = 0.5 * one* two;

    document.getElementById("rhom-area").innerHTML= rhombusArea;
}