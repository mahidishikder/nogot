

document.getElementById('login').addEventListener('click', function (e) {
  e.preventDefault()


  let phoneNumber = document.getElementById('phone-number').value;
  let pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber);


  // condition
  if(phoneNumber === '01965177257' && pinNumber === '1234'){
    window.location.href = './home.html'
    console.log('your login successfull')
  }else{alert('wrong number and pin')}


})