const signupForm = document.getElementById("signup-form");

function validateSignupForm(email, username, password, confirmPassword) {
  if (username.length < 6) {
    alert("User name phai co 6 ki tu tro len");
    return false;
  }
  if (username.includes(" ")) {
    alert("user name khong dc co space");
    return false;
  }
  if (password.length < 6) {
    alert("password phai co 6 ki tu tro len");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Mat khau xac nhan khong dung");
    return false;
  }
  return true;
}
signupForm.addEventListener("submit", () => {
  const username = signupForm.getElementsById("signupUsername");
  const email = signupForm.getElementsById("signupEmail");
  const password = signupForm.getElementsById("signupPassword");
  const confirmPassword = signupForm.getElementsById("signupConfirmPassword");
  if (
    validateSignupForm(
      username.value,
      email.value,
      password.value,
      confirmPassword.value
    )
  ) {
  }
});
