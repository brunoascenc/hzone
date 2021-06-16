import {
  convertProductsSnapshotToMap,
  firestore,
} from '../../firebase/firebase-utils';
import ProductsActionTypes from './products-types';

export const fetchProductsStart = () => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (productsMap) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: productsMap,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});

export const fetchProductsStartAsync = () => {
  return (dispatch) => {
    const productsRef = firestore.collection('products');
    dispatch(fetchProductsStart());

    productsRef
      .get()
      .then((snapshot) => {
        const productsMap = convertProductsSnapshotToMap(snapshot);
        dispatch(fetchProductsSuccess(productsMap));
      })
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  };
};
