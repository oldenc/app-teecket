const containerQr = document.getElementById("container-qr");



function creaQr(ida) {


  //ida = id biglietto 

  const id = localStorage.getItem('uid-teecket')

  fetch("http://localhost:3000/crea-qr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, ida }),
  })
    .then((response) => response.json())
    .then((data) => {
      containerQr.src = data;
      console.log(data);
    });
}




function onload(){
    const token = localStorage.getItem('token-teecket')
    const uid = localStorage.getItem('uid-teecket')
    
    if (!token || !uid){    
    location.href = '/login.html'
    }

    fetch('http://localhost:3000/retrieve-tickets',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({uid})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      spawnBigliettiAttivi(data)
    })

}
function spawnBigliettiAttivi(array){
  const bigliettiParent = document.getElementById('biglietti-disponibili')


  array.forEach( biglietto => {
    const div = document.createElement('div')
    div.className = 'boxbox'
    div.innerHTML= 
    ` 
    <div>${biglietto.event}</div>
    <div>${biglietto.date}</div>
    <div>${biglietto.address}</div>
    <div>${biglietto._id}</div>
  
    `
    div.addEventListener('click', ()=>{
      creaQr(biglietto._id)
    })
    bigliettiParent.appendChild(div)
  })
}





onload()













