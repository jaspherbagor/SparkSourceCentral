import React from "react";

import { Link } from "react-router-dom";

function LoginPage() {


    const togglePassword = function() {
      const password = document.getElementById('password');
      const togglePassword = document.getElementById('togglePassword');
        if(password.type === "password"){
            password.type = "text";
            togglePassword.className="bi bi-eye-slash text-danger position-absolute fs-4 mt-1";
        } else {
            password.type = "password";
            togglePassword.className="bi bi-eye text-danger position-absolute fs-4 mt-1";
        }
    }
  
    const login = function() {

      const loginBtn = document.getElementById('login');
      const toastLive = document.getElementById('liveToast');
      const toastLabel = document.getElementById('toastLabel');
      const toastMessage = document.getElementById('toastMessage');
      const toastHeader = document.getElementById('toastHeader');

      if (loginBtn) {
        loginBtn.addEventListener('click', function() {
          const toast = new window.bootstrap.Toast(toastLive);
          const username = document.getElementById('username');
          const password = document.getElementById('password');

          if (username.value === "" && password.value === "") {
              toastLabel.innerText = "ERROR";
              toastLabel.style.color = "#FFFFFF";
              toastMessage.innerText = "No data inputted!";
              toastMessage.style.color = "red";
              toastLive.style.border = "2.5px solid #fe0039"
              toastHeader.style.background = "#fe0039";
          }
          
          else if(username.value === "" || password.value === "") {
              toastLabel.innerText = "ERROR";
              toastLabel.style.color = "#FFFFFF";
              toastMessage.innerText = "Fill up all the necessary information!";
              toastMessage.style.color = "red";
              toastLive.style.border = "2.5px solid #fe0039";
              toastHeader.style.background = "#fe0039";
          }else {
              fetch('http://localhost:4000/login', {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  username: username.value,
                  password: password.value,
              })
          }).then(function(result){
              return result.json()
          }).then(function(result){
              console.log('result: ', result)

              if (result.success) {
                  toastLabel.innerText = "SUCCESS";
                  toastLabel.style.color = "#FFFFFF";
                  toastMessage.innerText = "Login Success";
                  toastMessage.style.color = "green";
                  toastLive.style.border = "2.5px solid green"
                  toastHeader.style.background = "green";

                  username.value = "";
                  password.value = "";

              } else {
                  toastLabel.innerText = "ERROR";
                  toastLabel.style.color = "#FFFFFF";
                  toastMessage.innerText = "Invalid Credentials!";
                  toastMessage.style.color = "red";
                  toastLive.style.border = "2.5px solid #fe0039";
                  toastHeader.style.background = "#fe0039";
              }
          })
          }

          toast.show()
      })
    }
  
  };

  return (
    <div class="App">
      <div className="signup-container-div container-fluid vh-100 d-flex align-items-center justify-content-center px-3 py-3 w-100">
        <div className="g-3 needs-validation form-container p-4 my-4 h-auto" novalidate>

            <h1  className="mb-4 text-center fw-bolder heading">LOGIN ACCOUNT</h1>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" required/>
                    <div className="invalid-feedback">
                        You must input username.
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="col-md-12 mb-3">
                        <label for="password" className="form-label">Password</label>
                        <div className="d-flex">
                            <input type="password" className="form-control" id="password" required/>
                            <span className="input-group-addon">
                                <i className="bi bi-eye position-absolute fs-4 mt-1" id="togglePassword" onClick={togglePassword}></i>
                            </span>    
                        </div>            
                    </div>
                </div>
            </div>


            <div className="text-center mt-2 mb-2">
              <button className="btn text-white fw-semi-bold register-btn" type="submit" id="login" onClick = {login}>LOGIN</button>
            </div>

            <div className="text-center mt-3">
                <p className="text-white">Don't have an account yet? <Link to="/" className="text-decoration-none login-link">Register instead.</Link></p>
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
    </div>
  );
}

export default LoginPage;