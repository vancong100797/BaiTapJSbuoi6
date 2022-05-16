function timSND() {
    var n = 0;
    var sum = 0;
    while (sum < 10000) {

        sum += n;
        n++;
    }
    document.getElementById("timSoND").innerHTML = "số nguyên dương nhỏ nhất: " + n;
}
timSND();