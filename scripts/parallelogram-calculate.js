function parallelogram_calculate(){
    const para_base= document.getElementById("p-base").value;
    const p_base = parseFloat(para_base);

    const para_height= document.getElementById("p-height").value;
    const p_height = parseFloat(para_height);


    const para_area = (p_base*p_height);

    document.getElementById("pa-area").innerHTML= para_area;
}