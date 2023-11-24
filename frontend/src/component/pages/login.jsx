import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

function LoginPage() {


    const togglePassword = function() {
      const password = document.getElementById('password');
      const togglePassword = document.getElementById('togglePassword');
        if(password.type === "password"){
            password.type = "text";
            togglePassword.className="bi bi-eye-slash position-absolute fs-4 mt-1";
        } else {
            password.type = "password";
            togglePassword.className="bi bi-eye position-absolute fs-4 mt-1";
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
                localStorage.setItem('token', result.token);
                toastLabel.innerText = "SUCCESS";
                toastLabel.style.color = "#FFFFFF";
                toastMessage.innerText = "Login Success";
                toastMessage.style.color = "green";
                toastLive.style.border = "2.5px solid green"
                toastHeader.style.background = "green";

                username.value = "";
                password.value = "";
                setTimeout(function() {
                    window.location.href = "/";
                }, 2000); // 2000 milliseconds (2 seconds) delay before redirecting

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
    <>
      <div className="login-container-div container-fluid d-flex align-items-center justify-content-center px-4 py-5">
        <div className="g-3 needs-validation form-container p-4 my-4 h-auto" noValidate>
            <div className="text-center">
                <img src="../images/spark_source_central_logo.svg" className="logo"/>
            </div>
            <h1  className="my-4 text-center fw-bolder heading">LOGIN ACCOUNT</h1>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" required/>
                    <div className="invalid-feedback">
                        You must input username.
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 mb-3">
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
            </div>


            <div className="text-center mt-2 mb-2">
              <button className="btn text-white fs-5 fw-semibold px-3 py-2 login-btn" type="submit" id="login" onClick = {login}>LOGIN</button>
            </div>

            <div className="text-center mt-3">
                <p className="text-white">Don't have an account yet? <Link to="/register" className="text-decoration-none register-link">Register instead.</Link></p>
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

export default LoginPage;