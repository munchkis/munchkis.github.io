document.addEventListener('DOMContentLoaded', () => {
   const taxableIncomeInput = document.getElementById('taxableIncome');
   const calculateTaxButton = document.getElementById('calculateTax');
   const taxResult = document.getElementById('taxResult');
 
   const calculateTax = (income) => {
     let tax = 0;
 
     if (income <= 250000) {
       tax = 0;
     } else if (income <= 400000) {
       tax = (income - 250000) * 0.15;
     } else if (income <= 800000) {
       tax = 22500 + (income - 400000) * 0.20;
     } else if (income <= 2000000) {
       tax = 102500 + (income - 800000) * 0.25;
     } else if (income <= 8000000) {
       tax = 402500 + (income - 2000000) * 0.30;
     } else {
       tax = 2202500 + (income - 8000000) * 0.35;
     }
 
     return tax.toFixed(2);
   };
 
   calculateTaxButton.addEventListener('click', () => {
     const taxableIncome = parseFloat(taxableIncomeInput.value);
 
     if (isNaN(taxableIncome) || taxableIncome < 0) {
       taxResult.textContent = 'Please enter a valid positive income value.';
       taxResult.style.color = 'red';
       return;
     }
 
     const tax = calculateTax(taxableIncome);
     taxResult.textContent = `Income Tax Due: PHP ${tax}`;
     taxResult.style.color = 'green';
   });
 });
 