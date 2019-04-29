import { combineReducers } from 'redux';
import _ from 'lodash';
import {
  GET_FILMS_SUCCESS,
  SET_FILM_DETAIL,
  GET_FILMS_PAGE_SUCCESS,
  FILMS_SEARCH_SUCCESS,
  SET_DEFAULT_RENDER
} from '../actions/actions';

const initialState = {
  filmsList: [],
  searchResult: [],
  renderFlag: true,
  filmDetail: null,
  pageNumber: 1,
  pageTotal: 1,
}

function filmsStore (state = initialState, action)  {
  switch (action.type) {
    case GET_FILMS_SUCCESS: {
      return {
        ...state,
        filmsList: [...action.payload.results],
        pageNumber: action.payload.page,
        pageTotal: action.payload.total_pages,
      };
    }
    case SET_DEFAULT_RENDER:{
      return{
        ...state,
        renderFlag: true
      }
    }
    case SET_FILM_DETAIL: {
      let indexItem = _.findIndex(state.filmsList, function(item) { return item.id === action.payload });
      return{
        ...state,
        filmDetail: {...state.filmsList[indexItem]}
      }
    }
    case GET_FILMS_PAGE_SUCCESS:{
      return {
        ...state,
        filmsList: [ ...action.payload.results],
        pageNumber: action.payload.page,
      };
    }
    case FILMS_SEARCH_SUCCESS: {
      return{
        ...state,
        searchResult: [ ...action.payload.results],
        renderFlag: false,
        pageNumber: action.payload.page,
        pageTotal: action.payload.total_pages,
      }
    }
    default: {
      return state;
    }
  }
};

const filmsReducers = combineReducers({
  filmsStore
})

export default filmsReducers