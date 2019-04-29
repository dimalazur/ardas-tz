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
    this.onChangeSearchForm= this.onChangeSearchForm.bind(this);
  }

  onChangeSearchForm(event){
    event.preventDefault();
    const {onFilmsSearchRequest} = this.props;
    let searchTerms = event.target.value;
    this.setState({
      searchTerms
    });

    if( searchTerms.length > 0 ){
      setTimeout(()=> {
        onFilmsSearchRequest(searchTerms);
      },450);

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
}

const FilmsSearchWrapperConnect = connect(
  null,
  mapDispatchToProps
)(FilmsSearchWrapper);

FilmsSearchWrapper.propTypes = {
  onFilmsSearchRequest: PropTypes.func,
  onGetFilmsRequest: PropTypes.func,
  onSetDefaultRender: PropTypes.func
};

export default FilmsSearchWrapperConnect;