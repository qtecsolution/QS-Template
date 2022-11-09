const btnOTP = document.querySelector("#send-otp");

btnOTP.addEventListener("click", showAlert);

function showAlert() {
  new swal({
    text: "OTP has been successfully sent",
    icon: "success",
  });
}
