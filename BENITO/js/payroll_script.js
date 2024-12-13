document.addEventListener('DOMContentLoaded', () => {
   const employeeForm = document.getElementById('employeeForm');
   const tableBody = document.getElementById('tablebody');
   const tGrossPay = document.getElementById('tGrossPay');
   const tDeduction = document.getElementById('tDeduction');
   const tNetPay = document.getElementById('tNetPay');
   const dlgConfirmSubmit = document.getElementById('dlgConfirmSubmit');
   const dlgAreYouSure = document.getElementById('dlgAreYouSure');
 
   let employeeNo = 1;
 
   const calculateTotals = () => {
     let totalGrossPay = 0;
     let totalDeduction = 0;
     let totalNetPay = 0;
 
     Array.from(tableBody.rows).forEach(row => {
       totalGrossPay += parseFloat(row.cells[4].textContent) || 0;
       totalDeduction += parseFloat(row.cells[5].textContent) || 0;
       totalNetPay += parseFloat(row.cells[6].textContent) || 0;
     });
 
     tGrossPay.textContent = totalGrossPay.toFixed(2);
     tDeduction.textContent = totalDeduction.toFixed(2);
     tNetPay.textContent = totalNetPay.toFixed(2);
   };
 
   const addEmployeeToTable = (name, daysWorked, dailyRate, deduction) => {
     const grossPay = daysWorked * dailyRate;
     const netPay = grossPay - deduction;
 
     const row = tableBody.insertRow();
     row.innerHTML = `
       <td>${employeeNo++}</td>
       <td>${name}</td>
       <td>${daysWorked}</td>
       <td>${dailyRate.toFixed(2)}</td>
       <td>${grossPay.toFixed(2)}</td>
       <td>${deduction.toFixed(2)}</td>
       <td>${netPay.toFixed(2)}</td>
     `;
 
     calculateTotals();
   };
 
   employeeForm.addEventListener('submit', (event) => {
     event.preventDefault();
 
     const name = document.getElementById('name').value;
     const daysWorked = parseInt(document.getElementById('daysworked').value, 10);
     const dailyRate = parseFloat(document.getElementById('dailyrate').value);
     const deduction = parseFloat(document.getElementById('deduction').value);
 
     dlgConfirmSubmit.showModal();
 
     dlgConfirmSubmit.querySelector('#btnSubmitConfirm').onclick = () => {
       addEmployeeToTable(name, daysWorked, dailyRate, deduction);
       employeeForm.reset();
       dlgConfirmSubmit.close();
     };
 
     dlgConfirmSubmit.querySelector('#btnSubmitCancel').onclick = () => {
       dlgConfirmSubmit.close();
     };
   });
 
   document.getElementById('btndeleteall').addEventListener('click', () => {
     dlgAreYouSure.querySelector('#dlgmsg2').textContent = 'Are you sure you want to delete all records?';
     dlgAreYouSure.showModal();
 
     dlgAreYouSure.querySelector('#btnYes').onclick = () => {
       tableBody.innerHTML = '';
       calculateTotals();
       dlgAreYouSure.close();
     };
 
     dlgAreYouSure.querySelector('#btnNo').onclick = () => {
       dlgAreYouSure.close();
     };
   });
 
   document.getElementById('btndelete').addEventListener('click', () => {
     const empNo = parseInt(document.getElementById('delemployee').value, 10);
 
     const rowToDelete = Array.from(tableBody.rows).find(row => parseInt(row.cells[0].textContent, 10) === empNo);
 
     if (rowToDelete) {
       dlgAreYouSure.querySelector('#dlgmsg2').textContent = `Are you sure you want to delete record for Employee No. ${empNo}?`;
       dlgAreYouSure.showModal();
 
       dlgAreYouSure.querySelector('#btnYes').onclick = () => {
         rowToDelete.remove();
         calculateTotals();
         dlgAreYouSure.close();
       };
 
       dlgAreYouSure.querySelector('#btnNo').onclick = () => {
         dlgAreYouSure.close();
       };
     } else {
       alert('Employee not found!');
     }
   });
 });
 