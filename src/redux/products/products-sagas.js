import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  convertProductsSnapshotToMap,
  firestore,
} from '../../firebase/firebase-utils';

import { fetchProductsFailure, fetchProductsSuccess } from './products-actions';

import ProductsActionTypes from './products-types';

export function* fetchProductsAsync() {
  try {
    const productRef = firestore.collection('products');
    const snapshot = yield productRef.get();
    const productsMap = yield call(convertProductsSnapshotToMap, snapshot);
    yield put(fetchProductsSuccess(productsMap));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* fetchProductsStart() {
  yield takeLatest(
    ProductsActionTypes.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* productSagas() {
  yield all([call(fetchProductsStart)]);
}
