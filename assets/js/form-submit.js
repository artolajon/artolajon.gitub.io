const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("form-contact");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
        alert("Form successfully submitted");
        myForm.reset();
    })
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);