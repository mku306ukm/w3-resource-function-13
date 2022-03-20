//Write a JavaScript function to compute the factors of a positive integer
function calculate(num) {
    var str = "0";
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
        }
    }
    console.log(str);
}

calculate(12);