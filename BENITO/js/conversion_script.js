document.addEventListener('DOMContentLoaded', () => {
   const operationSelect = document.getElementById('operation');
   const numberInput = document.getElementById('num1');
   const resultInput = document.getElementById('result');
   const convertButton = document.getElementById('convert');
 
   const conversions = {
     CTF: (num) => (num * 9 / 5) + 32,
     FTC: (num) => (num - 32) * 5 / 9,
     MTF: (num) => num * 3.28084,
     FTM: (num) => num / 3.28084
   };
 
   convertButton.addEventListener('click', () => {
     const operation = operationSelect.value;
     const num = parseFloat(numberInput.value);
 
     if (!operation) {
       alert('Please select a conversion operation.');
       return;
     }
 
     if (isNaN(num)) {
       alert('Please enter a valid number.');
       return;
     }
 
     const conversionFunction = conversions[operation];
 
     if (conversionFunction) {
       const result = conversionFunction(num);
       resultInput.value = result.toFixed(2);
     } else {
       alert('Invalid operation selected.');
     }
   });
 });
 