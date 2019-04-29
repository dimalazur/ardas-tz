import axios from 'axios';
import {url} from '../settings';
axios.defaults.baseURL = url;

const getFilms = () => (
  axios.get('movie/upcoming?api_key=ecf3df1e1fe08ef8e784a5c4f9bd68da&language=en-US&page=1')
);

const getFilmsPage = (indexPage) => (
  axios.get('movie/upcoming?api_key=ecf3df1e1fe08ef8e784a5c4f9bd68da&language=en-US&page='+indexPage)
);

const searchFilms = (searchTerms) => (
  axios.get('search/movie?api_key=ecf3df1e1fe08ef8e784a5c4f9bd68da&query='+searchTerms)
);

export default {
  getFilms,
  getFilmsPage,
  searchFilms
};