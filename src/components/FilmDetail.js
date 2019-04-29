import React from 'react';
import PropTypes from 'prop-types';

const FilmDetail = ({item}) => {
	return (
	    <div className="film-detail-holder">
		    <div className="wrap">
			    <div className="film-detail">
					<h1 className="title">{item.title}</h1>
					<p className="description">{item.overview}</p>
			    </div>
		    </div>
	    </div>
	);    
}

FilmDetail.propTypes = {
	item: PropTypes.shape({
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

export default FilmDetail;