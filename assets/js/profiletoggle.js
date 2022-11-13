const editButton = document.querySelector(".btn-edit");

editButton.addEventListener("click", toggleEditView);

function toggleEditView() {
  const viewprofile = document.querySelector(".viewprofile");
  const editprofile = document.querySelector(".editprofile");

  viewprofile.classList.toggle("d-none");
  editprofile.classList.toggle("d-none");
}
