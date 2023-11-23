import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.css"
function RegisterPage() {

    const togglePassword = function(){
      const passwordInput = document.getElementById('password');
      const togglePassword = document.getElementById('togglePassword');
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            togglePassword.className="bi bi-eye-slash position-absolute fs-4 mt-1";
        } else {
            passwordInput.type = "password";
            togglePassword.className="bi bi-eye position-absolute fs-4 mt-1";
        }
    };

    const toggleConfirmPassword = function(){
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
        if(confirmPasswordInput.type === "password"){
            confirmPasswordInput.type = "text";
            toggleConfirmPassword.className="bi bi-eye-slash position-absolute fs-4 mt-1";
        } else {
            confirmPasswordInput.type = "password";
            toggleConfirmPassword.className="bi bi-eye position-absolute fs-4 mt-1";
          }
    };

    const register = function() {
        const registerBtn = document.getElementById('register');
        const toastLive = document.getElementById('liveToast');
        const toastLabel = document.getElementById('toastLabel');
        const toastMessage = document.getElementById('toastMessage');
        const toastHeader = document.getElementById('toastHeader');
    
        if (registerBtn) {
          registerBtn.addEventListener('click', function() {
            const toast = new window.bootstrap.Toast(toastLive);
    
            const firstName = document.getElementById('firstName');
            const lastName = document.getElementById('lastName');
            const email = document.getElementById('email');
            const phoneNumber = document.getElementById('phoneNumber');
            const username = document.getElementById('username');
            let password = document.getElementById('password');
            let confirmPassword = document.getElementById('confirmPassword');
            let passwordValidation = document.getElementById('password-validation');
    
            if (firstName.value === "" && lastName.value === "" && email.value === "" && phoneNumber.value === "" && username.value === "" && password.value === "") {
                toastLabel.innerText = "ERROR";
                toastLabel.style.color = "#FFFFFF";
                toastMessage.innerText = "No data inputted!";
                toastMessage.style.color = "red";
                toastLive.style.border = "2.5px solid #fe0039"
                toastHeader.style.background = "#fe0039";
            }
            else if (firstName.value === "" || lastName.value === "" || email.value === "" || phoneNumber.value === "" || username.value === "" || password.value === "") {
                toastLabel.innerText = "ERROR";
                toastLabel.style.color = "#FFFFFF";
                toastMessage.innerText = "Fill up all the necessary information";
                toastMessage.style.color = "red";
                toastLive.style.border = "2.5px solid #fe0039"
                toastHeader.style.background = "#fe0039";
            }
    
            else if (password.value !== confirmPassword.value) {
                passwordValidation.innerText = 'Passwords do not match';
                passwordValidation.style.color = '#fe0039';
    
                toastLabel.innerText = "ERROR";
                toastLabel.style.color = "#FFFFFF";
                toastMessage.innerText = "Passwords do not match!";
                toastMessage.style.color = "red";
                toastLive.style.border = "2.5px solid #fe0039"
                toastHeader.style.background = "#fe0039";
            }else {
                passwordValidation.innerText = 'Passwords matched';
                passwordValidation.style.color = 'green';
                fetch('http://localhost:4000/register', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value,
                    phoneNumber: phoneNumber.value,
                    username: username.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value
                })
            }).then(function(result){
                  return result.json()
              }).then(function(result){
                  console.log('result: ', result)
                if (result.success) {
                    toastLabel.innerText = "SUCCESS";
                    toastLabel.style.color = "#FFFFFF";
                    toastMessage.innerText = "Registration Successful";
                    toastMessage.style.color = "green";
                    toastLive.style.border = "2.5px solid green"
                    toastHeader.style.background = "green";
                    window.location.href = '/login';
    
                } else {
                    toastLabel.innerText = "ERROR";
                    toastLabel.style.color = "#FFFFFF";
                    toastMessage.innerText = "Username already taken!";
                    toastMessage.style.color = "red";
                    toastLive.style.border = "2.5px solid #fe0039"
                    toastHeader.style.background = "#fe0039";
                }
    
              })
            }
    
            toast.show()
        })
    };

}

return (
    <>
        <div className="register-container-div container-fluid h-auto d-flex align-items-center justify-content-center px-3 py-3 w-100">
                <div className="g-3 needs-validation form-container p-4 my-4 h-auto" noValidate>
                    <div className="text-center">
                        <img src="../images/spark_source_central_logo.svg" className="logo"/>
                    </div>
                    <h1  className="mb-4 text-center fw-bolder heading">REGISTER ACCOUNT</h1>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" required/>
                            
                        </div>
            
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
            
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="phoneNumber" required/>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required/>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="d-flex">
                                <input type="password" className="form-control" id="password" required/>
                                <span className="input-group-addon">
                                    <i className="bi bi-eye position-absolute fs-4 mt-1" id="togglePassword" onClick={togglePassword}></i>
                                </span>    
                            </div>            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <div className="d-flex">
                                <input type="password" className="form-control" id="confirmPassword" required/>
                                <span className="input-group-addon">
                                    <i className="bi bi-eye position-absolute fs-4 mt-1" id="toggleConfirmPassword" onClick={toggleConfirmPassword}></i>
                                </span>
                            </div>
                            <p id="password-validation"></p>
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-1">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label">
                            Agree to terms and conditions
                            </label>
                            
                        </div>
                    </div>

                    <div className="text-center mt-4 mb-2">
                    <button className="btn text-white fw-semibold px-3 py-2 register-btn" type="button" id="register" onClick={register}>REGISTER</button>
                    </div>

                    <div className="text-center mt-3">
                        <p className="text-white">Already have an account? <Link to="/login" className="text-decoration-none login-link">Login instead.</Link></p>
                    </div>

                    <div className="toast-container position-fixed top-0 p-2">
                        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header" id="toastHeader">
                                <strong className="me-auto" id="toastLabel"></strong>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body fw-medium" id="toastMessage">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    </>
  );   
 
}

export default RegisterPage;
