document.getElementsByTagName("ShowSoNguyenTo")

function testSoNguyenTo(z) {
    for (let i = 2; i < z; i++) {
        if (z % i == 0) return false;
    }
    return true;
}

function ShowSoNguyenTo() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let arrSoNguyenTo = [];
    console.log(a, b);
    for (let x = Number(a); x <= Number(b); x++) {
        console.log(x);
        console.log(testSoNguyenTo(x));
        if (testSoNguyenTo(x)) {
            arrSoNguyenTo.push(x);
        }
    }

    let sum = arrSoNguyenTo.reduce(function (acc, value) {
        return acc + value;
    }, 0);
    document.getElementById("hienthi").innerHTML = "Các số nguyên tố nằm giữa a và b: " + arrSoNguyenTo.toString();
    document.getElementById("result").innerHTML = "Tổng: " + sum;
}