import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
//Token import
import jwt from "jsonwebtoken";
// Token import
const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "jaspherbagor", 
    password: "Jaspher@123", 
    database: "register_database"
});

app.post('/login', function (request, response) {
  const usernameFromFrontEnd = request.body.username;
  const passwordFromFrontEnd = request.body.password;

  console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);

  const myQuery = `SELECT * FROM register_database.users_information where username = "${usernameFromFrontEnd}"`;
    
  connection.query(myQuery, function (err, result) {
    if (err) throw err; 
      console.log("id result from database: ", result);
      if(result && result[0] && result[0].id){
        const hashedPassword = result[0].password;
        
        console.log('passwordFromFrontEnd: ' + passwordFromFrontEnd);
        console.log('hashedPassword: ' + hashedPassword);

        const check = bcrypt.compareSync(passwordFromFrontEnd, hashedPassword);
        //Token
        if(check){
          const token = jwt.sign({ foo: 'bar' }, 'shhhhh', { expiresIn: '1h' });
          console.log('token: ', token)
          response.send({"success": true, token: token})
        }else{
          response.send({"success": false, error: "invalid credentials"})
        }
        // Token

        console.log('checkPassword: ', check);
        console.log('Login Successful!')
      }else{
        response.send({"success": false, "error": "invalid credentials"});
        console.log('Login Unsuccessful!')
      }

  });
})

app.post('/register', function (request, response) {
  const firstNameFromFrontEnd = request.body.firstName;
  const lastNameFromFrontEnd = request.body.lastName;
  const emailFromFrontEnd = request.body.email;
  const phoneNumberFromFrontEnd = request.body.phoneNumber;
  const usernameFromFrontEnd = request.body.username;
  const passwordFromFrontEnd = request.body.password;

  console.log('firstNameFromFrontEnd: ', firstNameFromFrontEnd);
  console.log('lastNameFromFrontEnd: ', lastNameFromFrontEnd);
  console.log('emailFromFrontEnd: ', emailFromFrontEnd);
  console.log('phoneNumberFromFrontEnd: ', phoneNumberFromFrontEnd);
  console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);

  //Logic to check whether the username already exists in the database or not

  const checkUsernameQuery = `SELECT * FROM register_database.users_information
  where username = "${usernameFromFrontEnd}"`;
  
  connection.query(checkUsernameQuery, function(err, result) {
    if (err) throw err;

    if (result.length > 0) {
      response.send({"success": false, "error": "Username is already taken!"})
    } else {
      bcrypt.hash(passwordFromFrontEnd, 10, function(error, result){
        if (error) throw error;
    
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(passwordFromFrontEnd, salt);
    
        const myQuery = `INSERT INTO register_database.users_information (first_name, last_name, email, phone, username, password) VALUES ("${firstNameFromFrontEnd}", "${lastNameFromFrontEnd}", "${emailFromFrontEnd}", "${phoneNumberFromFrontEnd}", "${usernameFromFrontEnd}", "${hash}")`;
    
        console.log('hash:', hash);
    
        const testCheck = bcrypt.compareSync(passwordFromFrontEnd, hash);
        console.log('testCheck: ', testCheck);
        
        connection.query(myQuery, function (err, result) {
          if (err) throw err;
              console.log("id result from database: ", result);
          response.send({'success': true})
        });
    
      })
        
    }

  })

})

connection.connect(function(err) {
    if (err) throw err;
    console.log("MySQL DB Connection Established...");
    app.listen(4000);
    console.log("App is now running on port:", 4000)
}); 
