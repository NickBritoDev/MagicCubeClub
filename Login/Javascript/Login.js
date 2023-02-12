
let token = '12345'
function sendEmail(){
    let params ={
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        message: token
    }

    const serviceID = 'service_phgtdhh'
    const tamplateID = 'template_eb2j6bl'

    emailjs.send(serviceID, tamplateID, params).then((res) => {
        document.getElementById('userName').value = ''
        document.getElementById('userEmail').value = ''
        token
        console.log(res)
        alert('foi')
    }).catch((err) => console.log(err))
}