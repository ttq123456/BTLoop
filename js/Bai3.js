function tinhGT() {
    var n = Number(document.getElementById("num").value) ;
    var s = 1;
    for (var i=1; i<=n; i++){
        s= s*i;
    }
    document.getElementById("txtGiaiThua").innerHTML = n+"!= " + s;
}

    document.getElementById("btnGiaiThua").onclick = tinhGT;