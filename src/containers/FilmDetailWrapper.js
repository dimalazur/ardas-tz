import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilmDetail from '../components/FilmDetail';

const FilmDetailWrapper = ({filmDetail}) => {  
  return (
    <FilmDetail item={filmDetail} />
  );
}

const mapStateToProps = (state) => {
  return {
    filmDetail: state.filmsStore.filmDetail
  }
}

const FilmDetailWrapperConnect = connect(
  mapStateToProps,
  null
)(FilmDetailWrapper);

FilmDetailWrapper.propTypes = {
  filmDetail: PropTypes.shape({
    id: PropTypes.number,
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  })
};

export default FilmDetailWrapperConnect;