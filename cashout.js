

document.getElementById('btn-cash-out').addEventListener('click',function(e){
e.preventDefault();

let inputCashOut = document.getElementById('input-cash-out').value;

let inputCashoutPin = document.getElementById('input-cashout-pin').value;

if(inputCashoutPin === '1234'){
  let carrentBalance = document.getElementById('carrent-amount').innerText;

  let convartAmount = parseFloat(carrentBalance); 
  let convartCashout = parseFloat(inputCashOut);
  let newBalance = convartAmount - convartCashout;
  document.getElementById('carrent-amount').innerText = newBalance;
  


} else{
  alert('Please Try Again')
}


})
