function rectangle_calculate(){
    const rec_width= document.getElementById("r-width");
    const width = rec_width.value;
    const r_width = parseFloat(width);

    const rec_length= document.getElementById("r-length");
    const re_length = rec_length.value;
    const r_length = parseFloat(re_length);


    const rec_area = (r_width*r_length);

    document.getElementById("r-area").innerHTML= rec_area;


}