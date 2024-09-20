

document.getElementById('btn-add-money').addEventListener('click', function (e) {
  e.preventDefault()

  let inputAddMoney = document.getElementById('input-add-money').value;
  let inputPin = document.getElementById('input-pin').value;
  
  // condition 
  if(inputPin === '1234'){
    let carrentAmount = document.getElementById('carrent-amount').innerText;
    
    let updateInputAddMoney = parseFloat(inputAddMoney);
    let updateCarrentAmount = parseFloat(carrentAmount)
    
    let updateAmount = updateCarrentAmount + updateInputAddMoney;
    document.getElementById('carrent-amount').innerText = updateAmount;

    inputAddMoney.value = '';
    inputPin.value = '';
  } else{
    alert('sorry please try again')
  }

})