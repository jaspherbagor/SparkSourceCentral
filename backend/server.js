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

  const myQuery = `SELECT id, username, first_name, last_name, email, password FROM sparksource_central_db.users_information where username = "${usernameFromFrontEnd}"`;
    
  connection.query(myQuery, function (err, result) {
    if (err) throw err;

    if (result && result[0] && result[0].id) {
      const hashedPassword = result[0].password;
      
      console.log('passwordFromFrontEnd: ' + passwordFromFrontEnd);
      console.log('hashedPassword: ' + hashedPassword);

      const check = bcrypt.compareSync(passwordFromFrontEnd, hashedPassword);
      
      if (check) {
        const { id, username, first_name, last_name, email } = result[0];
        const user = { id, username, first_name, last_name, email };
        const token = jwt.sign({ user }, 'shhhhh', { expiresIn: '1h' });
        
        response.send({ success: true, token: token });
      } else {
        response.send({ success: false, error: "invalid credentials" });
      }

      console.log('checkPassword: ', check);
      console.log('Login Successful!')
    } else {
      response.send({ success: false, error: "invalid credentials" });
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
    console.log('decoded token: ', decoded)
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

app.post('/cart', authenticateToken, (req, res) => {
  const userId = req.user && req.user.user.id; // Extract user ID from decoded token
  const cartItems = req.body.cartItems; // Extract cart items from the request body

  // Clear existing user's cart items
  connection.query('DELETE FROM sparksource_central_db.user_cart WHERE user_id = ?', [userId], (deleteError, deleteResults) => {
    if (deleteError) {
      console.error('Error clearing existing cart items:', deleteError);
      return res.status(500).json({ message: 'Error clearing cart items.' });
    }

    // Insert the updated cart items into the user_cart table associating them with the user
    const values = cartItems.map(item => [userId, item.Title]); // Assuming 'Title' is the field containing the item name

    if (values.length === 0) {
      return res.status(400).json({ message: 'No items provided.' });
    }

    connection.query(
      'INSERT INTO sparksource_central_db.user_cart (user_id, item_name) VALUES ?',
      [values],
      (insertError, insertResults) => {
        if (insertError) {
          console.error('Error adding items to cart:', insertError);
          return res.status(500).json({ message: 'Error adding items to cart.' });
        }
        res.status(200).json({ message: 'Cart items updated successfully.' });
      }
    );
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
app.get('/user', authenticateToken, (req, res) => {
  // Access user details from req.user
  res.json({ success: true, data: req.user });
});


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
