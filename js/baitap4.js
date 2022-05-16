function taoDiv() {
var taoThe = "";

    for (var i = 1; i <= 10; i++) {

        if (i % 2 == 0) {
            taoThe += taoThe.innerHTML = "<div style='background-color:red; color:#FFF'>Div chẵn</div>";
        } else {
            taoThe += taoThe.innerHTML = "<div style='background-color:blue; color:#FFF'>Div lẻ</div>";
        }
    }
    document.getElementById("ketQua").innerHTML = taoThe;
}