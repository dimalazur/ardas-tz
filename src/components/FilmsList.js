import React from 'react';
import FilmsListItem from './FilmsListItem';
import PropTypes from 'prop-types';

const FilmsList = ({list, onSetFilmDetail}) => {
  return (
      <div className="films-list-holder">
        {  
          <ul className="films-list">
            {list.map( item=> (
              <FilmsListItem 
                key={item.id}
                id={item.id} 
                onSetFilmDetail={onSetFilmDetail} 
                title={item.title} 
                description={item.overview} 
                srcImage={item.poster_path} 
              />))
            }
          </ul>  
        }
      </div>    
  );
}

FilmsList.propTypes = {
  onSetFilmDetail: PropTypes.func,
  list: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  )
};

export default FilmsList;