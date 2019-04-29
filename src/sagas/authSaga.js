import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
  GET_FILMS_PAGE_REQUEST,
  GET_FILMS_PAGE_SUCCESS,
  GET_FILMS_PAGE_FAILURE,
  FILMS_SEARCH_REQUEST,
  FILMS_SEARCH_SUCCESS,
  FILMS_SEARCH_FAILURE
} from '../actions/actions';
import { authApi } from '../API';

function* getFilms(actions) {
  const success = payload => ({ type: GET_FILMS_SUCCESS, payload });
  const failure = payload => ({ type: GET_FILMS_FAILURE, payload });

  try {
    const res = yield call(authApi.getFilms);
      
    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}

function* getFilmsPage(actions) {
  const success = payload => ({ type: GET_FILMS_PAGE_SUCCESS, payload });
  const failure = payload => ({ type: GET_FILMS_PAGE_FAILURE, payload });

  try {
    const res = yield call(()=> authApi.getFilmsPage(actions.payload));
    yield put(success(res.data,actions.payload));
  } catch (e) {
    yield put(failure(e));
  }
}

function* getSearchFilms(actions) {
  const success = payload => ({ type: FILMS_SEARCH_SUCCESS, payload });
  const failure = payload => ({ type: FILMS_SEARCH_FAILURE, payload });

  try {
    const searchTerms = actions.payload.replace(" ", "+");
    const res = yield call(()=> authApi.searchFilms(searchTerms));
    if (res.data.total_results){
      yield put(success(res.data));
    }

  } catch (e) {
    yield put(failure(e));
  }
}

function* notesSaga() {
  yield takeEvery(GET_FILMS_REQUEST, getFilms);
  yield takeEvery(GET_FILMS_PAGE_REQUEST, getFilmsPage);
  yield takeEvery(FILMS_SEARCH_REQUEST, getSearchFilms);

}

export default notesSaga;