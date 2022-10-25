var divBlue = "<div style='background-color: blue;'>Div lẻ</div>"
var divRed = "<div style='background-color: red;'>Div chẵn</div>"

function taoDiv(){
    var noiDung = "";
    for (var i=1; i<=10; i++){
        if (i %2 ==0) {
            noiDung = noiDung + "<div style='background-color: red;padding: 10px 0'>Div chẵn " + i +"</div>";       
         }
        else {
            noiDung = noiDung +  "<div style='background-color: blue;padding: 10px 0'>Div lẻ " + i +"</div>";        ;  
        }
    }
    document.getElementById("content").innerHTML = noiDung;
}

document.getElementById("btnDiv").onclick = taoDiv;