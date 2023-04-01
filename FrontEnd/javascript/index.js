let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let sendEmailButton = document.getElementById('sendEmailButton')
let returnButton = document.getElementById('returnButton')
let containerLogin = document.querySelector('.wraper-login')
let containerAlertVerifyEmail = document.querySelector('.container-alert')
let containerAlertErrorSendEmail = document.querySelector('.container-error')


sendEmailButton.addEventListener('click', (e) => {
  e.preventDefault()
  let destinatario = userEmail.value
  if (userName.value != '' && userEmail.value != '') {
    fetchAPISendMail(destinatario)
  }
})


async function fetchAPISendMail(destinatario) {
  await fetch('http://localhost:3000/sendMail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: destinatario,
      subject: 'Token Cube Club 🔥'
    })
  })
    .then(response => response.text())
    .then(result => returnPositiveResponseForSendMail())
    .catch(error => returnErrorResponseForSendMail());
}

function returnPositiveResponseForSendMail() {
  containerAlertErrorSendEmail.style.display = 'none'
  containerAlertVerifyEmail.style.display = 'flex'
  containerLogin.style.display = 'none'
}

function returnErrorResponseForSendMail() {
  containerAlertErrorSendEmail.style.display = 'flex'
  containerAlertVerifyEmail.style.display = 'none'
  containerLogin.style.display = 'none'
}