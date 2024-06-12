const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {

    let qrValue = qrInput.value;
    if(!qrValue) return; //if the input is empty then return from here
    // getting a QR code of user entered value using qrserver api and passing the api returned img src to qrImg
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => { //once the qr code img has been loaded succesfully, we want to be able to generate a new code

        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
    
});


//if there is no qr code being generated (i.e theres no longer text by the input box) 
//remove the active function and thus remove the current qr image
qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }

})
