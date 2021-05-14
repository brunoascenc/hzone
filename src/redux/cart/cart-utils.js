export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//Items Quantity
export const decrementQuantity = (cartItem, id) => {
  cartItem.forEach((item) => {
    if (item.id === id) {
      item.count === 1 ? (item.count = 1) : (item.count -= 1);
    }
  });
  return [...cartItem];
};

export const incrementQuantity = (cartItem, id) => {
  cartItem.forEach((item) => {
    if (item.id === id) {
      item.count += 1;
    }
  });
  return [...cartItem];
};
