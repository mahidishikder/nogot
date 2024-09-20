document.getElementById('show-cash-out').addEventListener('click', function () {
  document.getElementById('cashout-from').classList.remove('hidden');
  document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('btn-add-moneys').addEventListener('click',function(){
  document.getElementById('add-money-form').classList.remove('hidden');
  document.getElementById('cashout-from').classList.add('hidden')
})