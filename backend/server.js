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
    database: "sparksource_central_db"
});

app.post('/login', function (request, response) {
  const usernameFromFrontEnd = request.body.username;
  const passwordFromFrontEnd = request.body.password;

  console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);

  const myQuery = `SELECT * FROM sparksource_central_db.users_information where username = "${usernameFromFrontEnd}"`;
    
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

// Middleware function to handle user authentication
const authenticateToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader && authorizationHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing.' });
  }

  try {
    const decoded = jwt.verify(token, 'shhhhh');
    req.user = decoded; // Set decoded token data into req.user

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Token is invalid or expired.' });
  }
};

// Endpoint to add an item to the user's wishlist using authenticateToken middleware
app.post('/wishlist', authenticateToken, (req, res) => {
  const userId = req.user && req.user.userId; // Extract user ID from decoded token
  const newItem = req.body.item;

  // Insert the new item into the user_wishlist table associating it with the user
  connection.query('INSERT INTO sparksource_central_db.user_wishlist (user_id, item_name) VALUES (?, ?)', [userId, newItem], (error, results) => {
    if (error) {
      console.error('Error adding item to wishlist:', error);
      return res.status(500).json({ message: 'Error adding item to wishlist.' });
    }
    res.send('Item added to wishlist!');
  });
});

// // Endpoint to add an item to the user's cart using authenticateToken middleware
// app.post('/cart', authenticateToken, (req, res) => {
//   const userId = req.user && req.user.userId; // Extract user ID from decoded token
//   const newItem = req.body.item;

//   // Insert the new item into the user_cart table associating it with the user
//   connection.query('INSERT INTO sparksource_central_db.user_cart (user_id, item_name) VALUES (?, ?)', [userId, newItem], (error, results) => {
//     if (error) {
//       console.error('Error adding item to cart:', error);
//       return res.status(500).json({ message: 'Error adding item to cart.' });
//     }
//     res.send('Item added to cart!');
//   });
// });

app.post('/cart', authenticateToken, (req, res) => {
  const userId = req.user && req.user.userId; // Extract user ID from decoded token
  const newItem = req.body.item; // Extract the new item from the request body

  // Insert the new item into the user_cart table associating it with the user
  connection.query('INSERT INTO sparksource_central_db.user_cart (user_id, item_name) VALUES (?, ?)', [userId, newItem], (error, results) => {
    if (error) {
      console.error('Error adding item to cart:', error);
      return res.status(500).json({ message: 'Error adding item to cart.' });
    }
    res.send('Item added to cart!');
  });
});

// Endpoint to handle the checkout process using authenticateToken middleware
app.post('/checkout', authenticateToken, (req, res) => {
  const userId = req.user && req.user.userId; // Extract user ID from decoded token

  // Fetch user's cart items from the database
  connection.query('SELECT * FROM sparksource_central_db.user_cart WHERE user_id = ?', [userId], (error, cartItems) => {
    if (error) {
      console.error('Error fetching cart items:', error);
      return res.status(500).json({ message: 'Error fetching cart items.' });
    }

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty. Add items to proceed with checkout.' });
    }

    // Process the checkout: Add cart items to the checkout table or perform necessary operations
    const checkoutItems = cartItems.map(item => [userId, item.item_name]);

    // Insert cart items into the user_checkout table for checkout
    connection.query('INSERT INTO user_checkout (user_id, item_name) VALUES ?', [checkoutItems], (err, results) => {
      if (err) {
        console.error('Error adding items to checkout:', err);
        return res.status(500).json({ message: 'Error processing checkout.' });
      }

      // Clear the user's cart after successful checkout
      connection.query('DELETE FROM sparksource_central_db.user_cart WHERE user_id = ?', [userId], (deleteErr, deleteResults) => {
        if (deleteErr) {
          console.error('Error clearing cart after checkout:', deleteErr);
          return res.status(500).json({ message: 'Error processing checkout.' });
        }

        res.send('Checkout successful!');
      });
    });
  });
});


// Other routes requiring authentication can use the authenticateToken middleware similarly
// For example:
app.get('/user', authenticateToken, (req, res) => {
  // Access user details from req.user
  res.json({ success: true, data: req.user });
});


// app.get('/user', function(request, response) {
//   try {
//     const header = request.headers;
//     const authorizationHeader = header.authorization;
//     if(authorizationHeader !== 'undefined'){
//       const token = authorizationHeader.split(' ')[1];
//       const decoded = jwt.verify(token, 'shhhhh');

//       console.log('decoded token: ', decoded)
//       response.send({'success': true, 'data': decoded})
//     }
//   } catch(err) {
//     // err
//     response.send({'success': false})
//   }
// })

// // Endpoint to add an item to the user's wishlist
// app.post('/wishlist/add', decoded, (req, res) => {
//   const userId = req.user.id;
//   const newItem = req.body.item;

//   // Insert the new item into the user_wishlist table associating it with the user
//   connection.query('INSERT INTO user_wishlist (user_id, item_name) VALUES (?, ?)', [userId, newItem], (error, results) => {
//     if (error) throw error;
//     res.send('Item added to wishlist!');
//   });
// });



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

  const checkUsernameQuery = `SELECT * FROM sparksource_central_db.users_information
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
    
        const myQuery = `INSERT INTO sparksource_central_db.users_information (first_name, last_name, email, phone, username, password) VALUES ("${firstNameFromFrontEnd}", "${lastNameFromFrontEnd}", "${emailFromFrontEnd}", "${phoneNumberFromFrontEnd}", "${usernameFromFrontEnd}", "${hash}")`;
    
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
