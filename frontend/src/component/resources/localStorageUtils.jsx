// localStorageUtils.js
export const saveCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

export const saveWishlistItems = (wishlistItems) => {
  localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
};

export const getWishlistItems = () => {
  const wishlistItems = localStorage.getItem('wishlistItems');
  return wishlistItems ? JSON.parse(wishlistItems) : [];
};