document.addEventListener('DOMContentLoaded', () => {
   const operationSelect = document.getElementById('operation');
   const numberInput = document.getElementById('num1');
   const resultInput = document.getElementById('result');
   const calculateButton = document.getElementById('calculate');
 
   const calculateFactorial = (n) => {
     if (n === 0 || n === 1) return 1;
     let factorial = 1;
     for (let i = 2; i <= n; i++) {
       factorial *= i;
     }
     return factorial;
   };
 
   const calculateSum = (n) => {
     return (n * (n + 1)) / 2;
   };
 
   const calculateAverage = (n) => {
     return calculateSum(n) / n;
   };
 
   calculateButton.addEventListener('click', () => {
     const operation = operationSelect.value;
     const num = parseInt(numberInput.value, 10);
 
     if (!operation) {
       alert('Please select an operation.');
       return;
     }
 
     if (isNaN(num) || num < 0) {
       alert('Please enter a valid positive number.');
       return;
     }
 
     let result;
 
     switch (operation) {
       case 'F':
         result = calculateFactorial(num);
         break;
       case 'S':
         result = calculateSum(num);
         break;
       case 'A':
         result = calculateAverage(num);
         break;
       default:
         alert('Invalid operation selected.');
         return;
     }
 
     resultInput.value = result;
   });
 });
 