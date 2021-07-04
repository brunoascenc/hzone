import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart-reducer';
import productsReducer from './products/products-reducer';

import userReducer from './user/user-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']['products'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
