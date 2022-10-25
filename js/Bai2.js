function tinhTong() {
    var x = Number(document.getElementById("soX").value) ;
    var n = Number(document.getElementById("soN").value) ;
    var tong = 0;

    for (var i=1; i<=n; i++){
        tong = tong + Math.pow(x,i);
    }

    document.getElementById("txtThongbao").innerHTML = tong;
}

document.getElementById("btnTinh").onclick = tinhTong;
