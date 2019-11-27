import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilmsSearch from '../components/FilmsSearch';
import {
  filmsSearchRequest,
  getFilmsRequest,
  setDefaultRender
} from '../actions/actions';

class FilmsSearchWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ""
    }
  }

  onChangeSearchForm = (event)=> {
    event.preventDefault();
    const {onFilmsSearchRequest} = this.props;
    let searchTerms = event.target.value;
    this.setState({
      searchTerms
    });

    if( searchTerms.length > 0 ){
        onFilmsSearchRequest(searchTerms);
    } else {
      const { onSetDefaultRender, onGetFilmsRequest } = this.props;
      onSetDefaultRender();
      onGetFilmsRequest();
    }
  }

  render() {
    const {searchTerms} = this.state;
    return (
      <FilmsSearch 
        onChangeSearchForm={this.onChangeSearchForm} 
        searchTerms={searchTerms} />
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onFilmsSearchRequest: (payload) => {
      dispatch(filmsSearchRequest(payload))
    },
    onGetFilmsRequest: (payload) => {
      dispatch(getFilmsRequest(payload))
    },
    onSetDefaultRender: (payload) => {
      dispatch(setDefaultRender(payload))
    }
  }
};

FilmsSearchWrapper.propTypes = {
  onFilmsSearchRequest: PropTypes.func,
  onGetFilmsRequest: PropTypes.func,
  onSetDefaultRender: PropTypes.func
};

export default connect(null, mapDispatchToProps)(FilmsSearchWrapper);