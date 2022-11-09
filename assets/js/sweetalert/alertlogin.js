const continueButton = document.querySelector("#continue");

continueButton.addEventListener("click", showAlert);

function showAlert() {
  new swal({
    text: "Logged in successfully",
    icon: "success",
  });
}
