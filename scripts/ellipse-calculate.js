function ellipse_calculate(){
    const pi= 3.1416;

    const sideA= document.getElementById("e-a").value;
    const el_a = parseFloat(sideA);


    const side_B = document.getElementById("e-b").value;
    const el_b = parseFloat(side_B);

    const ellipArea = pi * el_a* el_b;

    document.getElementById("ellipse-area").innerHTML= ellipArea;
}