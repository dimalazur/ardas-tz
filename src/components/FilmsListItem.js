import React, { Component } from 'react';
import PropTypes from 'prop-types';
  import {Link} from 'react-router-dom';

class FilmsListItem extends Component {
  render() {
    const {srcImage, title, description, onSetFilmDetail, id} = this.props;

    return (
      
      <div className="film-item">
        <div className="poster-holder">
          { (srcImage) ?
              <img src={"https://image.tmdb.org/t/p/w500/"+srcImage} className="poster" alt={title} />
            : 
              <span className="empty-img">empty image</span>
          }
        </div>
        
        <div className="info-holder">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <div className="btn-row">
            <Link to="/film-detail" className="btn-more" onClick={ ()=> onSetFilmDetail(id)}>More info</Link>
          </div>
        </div>
      </div>
    );
  }
}


FilmsListItem.propTypes = {
  onSetFilmDetail: PropTypes.func,
  srcImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number
};

export default FilmsListItem;
