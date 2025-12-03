import { auth,db} from "./firebase_config.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {collection, query,where,getDocs,addDoc,or,getDoc} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import {User} from "./entities.js";
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
signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
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
    const q = query(collection(db,"users"), 
  or(
    where("username","==",username.value),
    where("email","==",email.value)
    ));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=> ",doc.data);
      isDuplicated = true;
    })
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then( async (userCredential) => {
        // Signed up
        console.log(user)
        const user = userCredential.user;
        const newuser = new User(username.value,email.value,user.uid)
        const docRef = await addDoc(collection(db, "users"),newuser,toObject());
        // ...
        localStorage.setItem("currentUser", user.uid);
        alert("Dang ky thanh cong");
        location.href = "../index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
      if(isDuplicated){
        alert("email, username da duoc dang ky, vui long dang nhap")
        return;
      }
  }
});
