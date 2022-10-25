function timSo() {
    var n = 1;
    var tong = 0;
    while (tong < 10000) {
        tong += n;
        n++;
    }
    n=n-1;
    document.getElementById("txtKq").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}

timSo();