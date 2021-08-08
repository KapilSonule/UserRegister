const loginForm=document.getElementById("login-form");
const loginSubmit=document.getElementById("login-form-submit");
const errorMsg=document.getElementById("login-error-msg");

loginSubmit.addEventListener("click",(e) => {
    e.preventDefault();
const uName= loginForm.username.value;
const pass= loginForm.password.value;

if(uName === "Kapil" && pass ==="123"){
    alert("You have successfully logged in.");
    location.reload();
}
else{
    errorMsg.style.opacity=1;
}
})