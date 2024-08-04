document.addEventListener('DOMContentLoaded', function() {
    let sumButton = document.getElementById('sum');
    sumButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        let num1 = document.getElementById('number1').value;
        let num2 = document.getElementById('number2').value;

        num1 = parseInt(num1); // Convert to number
         num2 = parseInt(num2); // Convert to number

        let result1 = num1 + num2;

        let result = document.getElementById('result');
        result.innerHTML = result1;
 });
 let sumButton1 = document.getElementById('sub');
 sumButton1.addEventListener('click', function (event) {
     event.preventDefault(); // Prevent form submission

     let num1 = document.getElementById('number1').value;
     let num2 = document.getElementById('number2').value;

     num1 = parseInt(num1); // Convert to number
      num2 = parseInt(num2); // Convert to number

     let result1 = num1 - num2;

     let result = document.getElementById('result');
     result.innerHTML = result1;
});
let sumButton2 = document.getElementById('mul');
sumButton2.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;

    num1 = parseInt(num1); // Convert to number
     num2 = parseInt(num2); // Convert to number

    let result1 = num1 * num2;

    let result = document.getElementById('result');
    result.innerHTML = result1;
});
let sumButton3 = document.getElementById('div');
sumButton3.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;

    num1 = parseInt(num1); // Convert to number
     num2 = parseInt(num2); // Convert to number

    let result1 = num1 / num2;

    let result = document.getElementById('result');
    result.innerHTML = result1;
});

});
