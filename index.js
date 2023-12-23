function loginHandler(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  console.log(form.get("email"));

  alert("Hello World");
}
function signupHandler(event) {
  event.preventDefault();
  alert("Hello World");
}
