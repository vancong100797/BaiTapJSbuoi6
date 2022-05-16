function tinhTong() {
    var x = document.getElementById("numX").value;
    var n = document.getElementById("numN").value;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.getElementById("tinh").innerHTML = "Tổng S(n) = " + sum;
}
