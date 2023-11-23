// export const saveCartItems = (cartItems) => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };
  
// export const getCartItems = () => {
//   const savedCart = localStorage.getItem('cartItems');
//   return savedCart ? JSON.parse(savedCart) : [];
// };

// localStorageUtils.js
export const saveCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};