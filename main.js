

let number = parseInt(prompt("Enter a number between 0 and 1 million."));
let Sum = 0;
if (number > 0 && number <= 1000000) {
    for (let i = 1; i <= number; i++) {
        Sum += i;
    } document.write(`Sum of numbers up to ${number} is ${Sum}`)

} else {
    alert("Number is Invalid Please Refresh the page")
}
