function tinhGiaiThua() {
    var numN = document.getElementById("n").value;
    var tinh = 1;

    for(var i =1; i<=numN; i++){
        tinh *= i;  
    }
    document.getElementById("kQua").innerHTML=tinh;
}
