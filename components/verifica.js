// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode";


function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);


    fetch('http://localhost:3000/auth-qr',{
     method: "POST",
     headers: {
      'Content-Type':'application/json'
     },
     body: JSON.stringify({decodedText})
    })
  }



  
  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }
  
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);