function convertToBinary(num) {
    var binary = "";
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}
var input = prompt("Enter a number to convert to binary");
console.log(convertToBinary(input));