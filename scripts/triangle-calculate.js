function triangle_calculate(){
    const triangleBase= document.getElementById("t-base");
    const triBase = triangleBase.value;
    const b = parseFloat(triBase);


    const triangleHeight = document.getElementById("t-height");
    const triHeight = triangleHeight.value;
    const h = parseFloat(triHeight);

    const triArea = 0.5 * b* h;

    document.getElementById("t-area").innerHTML= triArea;
}