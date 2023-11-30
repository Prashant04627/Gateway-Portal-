 // Function to open the modal
 function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function submitAmount(){
    let amount = document.getElementById("amountInput").value;
    sessionStorage.setItem('amount', amount);
    
   
}
    let amount = sessionStorage.getItem('amount');

    // Display the amount below the h1 tag
    document.getElementById('amountOutput').innerText = amount+ " USD";



    function gatewayPanel(){
        let selectedGateway = document.querySelector('input[name="gateway"]:checked').value;
        sessionStorage.setItem('selectedGateway', selectedGateway);
        
    }
    const selectedGateway = sessionStorage.getItem('selectedGateway');
   
    function handleChange(){
        const number = document.getElementById("amountInput").value;
        console.log(number);
        if(number.toString().length < 10){
         document.getElementById('mobileError').innerText = 'Please enter a valid 10-digit mobile number.';
         
         
     } else {
         payment()
        }
    }
   


function payment(){
  
    
    let dialCode = document.getElementById("dialCode").value;
    sessionStorage.setItem("dialCode" , dialCode)
    let amountInput = document.getElementById("amountInput").value;
    sessionStorage.setItem("amountInput" , amountInput);

}

 
  const dialCode = sessionStorage.getItem("dialCode");
  const amountInput = sessionStorage.getItem("amountInput");
  
  
  
  document.getElementById('displayDialCode').innerText = dialCode;
  document.getElementById("displayPhoneNumber").innerHTML = amountInput
  




function showAlert(){
    const text = "Payment is successful."
    alert(text)
}