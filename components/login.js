const form = document.getElementById('login-form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const u = username.value
    const p = password.value

fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({u, p})
})
.then(response => response.json())
.then(data => {
if(data.error) return
location.href='/index'
localStorage.setItem('token-teecket', data.token)
localStorage.setItem('uid-teecket', data.uid)
}
)
})
