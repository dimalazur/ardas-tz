import React from 'react';
import PropTypes from 'prop-types';

const FilmsSearch = ({onChangeSearchForm, searchTerms}) => {

  return (
    <div className="search-holder">
      <form onSubmit={onChangeSearchForm}>
        <div className="form-row">
          <input 
            type="text" 
            className="form-field"
            onChange={onChangeSearchForm} 
            value={searchTerms} 
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
}

FilmsSearch.propTypes = {
  searchTerms: PropTypes.string,
  onChangeSearchForm: PropTypes.func
};

export default FilmsSearch;