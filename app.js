function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("off"))
    {
        img.src="Bulb onn.jfif";

    }
    else{
        img.src="bulb off.jfif";
    }
}
