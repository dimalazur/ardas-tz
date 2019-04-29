export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';
export const SET_FILM_DETAIL = 'SET_FILM_DETAIL';
export const SET_DEFAULT_RENDER = 'SET_DEFAULT_RENDER';

export const GET_FILMS_PAGE_REQUEST = 'GET_FILMS_PAGE_REQUEST';
export const GET_FILMS_PAGE_SUCCESS = 'GET_FILMS_PAGE_SUCCESS';
export const GET_FILMS_PAGE_FAILURE = 'GET_FILMS_PAGE_FAILURE';

export const FILMS_SEARCH_REQUEST = 'FILMS_SEARCH_REQUEST';
export const FILMS_SEARCH_SUCCESS = 'FILMS_SEARCH_SUCCESS';
export const FILMS_SEARCH_FAILURE = 'FILMS_SEARCH_FAILURE';

export const getFilmsRequest = payload => ({
  type: GET_FILMS_REQUEST,
  payload,
});

export const getFilmsSuccess = payload => ({
  type: GET_FILMS_SUCCESS,
  payload,
});

export const getFilmsFailure = payload => ({
  type: GET_FILMS_FAILURE,
  payload,
});

export const setFilmDetail = payload => ({
  type: SET_FILM_DETAIL,
  payload,
});

export const getFilmsPageRequest = payload => ({
  type: GET_FILMS_PAGE_REQUEST,
  payload,
});

export const getFilmsPageSuccess = payload => ({
  type: GET_FILMS_PAGE_SUCCESS,
  payload,
});

export const getFilmsPageFailure = payload => ({
  type: GET_FILMS_PAGE_FAILURE,
  payload,
});

export const filmsSearchRequest = payload => ({
  type: FILMS_SEARCH_REQUEST,
  payload,
});

export const filmsSearchSuccess = payload => ({
  type: FILMS_SEARCH_SUCCESS,
  payload,
});

export const filmsSearchFailure = payload => ({
  type: FILMS_SEARCH_FAILURE,
  payload,
});

export const setDefaultRender = payload => ({
  type: SET_DEFAULT_RENDER,
  payload,
});