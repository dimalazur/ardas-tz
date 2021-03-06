import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilmsList from '../components/FilmsList';
import FilmsSearchWrapper from './FilmsSearchWrapper';
import ReactPaginate from 'react-paginate';
import Spiner from '../components/Spiner';
import {
  getFilmsRequest,
  setFilmDetail,
  getFilmsPageRequest
} from '../actions/actions';

class FilmsListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeStatus:''
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    const { onGetFilmsRequest } = this.props;
    onGetFilmsRequest();
  }

  changePage(event){
    const {onGetFilmsPageRequest} = this.props;
    onGetFilmsPageRequest(event.selected+1);
  }

  render() {

    const { 
        filmsList,
        pageTotal,
        onSetFilmDetail,
        searchResult,
        renderFlag,
        isPending,
        error
    } = this.props;
    const renderFilms = (renderFlag) ? filmsList : searchResult;

    return (
      <React.Fragment>
        <div className="header">
          <FilmsSearchWrapper />
        </div>
        { (!isPending) ?
            <div className="wrap">
                {(!error)?
                    <>
                        <FilmsList list={renderFilms} onSetFilmDetail={onSetFilmDetail}/>
                        <div className="paginate-holder">
                            <ReactPaginate
                                containerClassName="paginate"
                                pageClassName="item"
                                pageCount={pageTotal}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={2}
                                onPageChange={this.changePage}
                            />
                        </div>
                    </>
                    :
                    <div className="error">Error requesting movies</div>
                }

            </div>
          :
          <Spiner/>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filmsList: state.filmsStore.filmsList,
    pageTotal: state.filmsStore.pageTotal,
    searchResult: state.filmsStore.searchResult,
    renderFlag: state.filmsStore.renderFlag,
      isPending: state.filmsStore.isPending,
      error: state.filmsStore.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFilmsRequest: (payload) => {
      dispatch(getFilmsRequest(payload))
    },
    onGetFilmsPageRequest: (payload) => {
      dispatch(getFilmsPageRequest(payload))
    },
    onSetFilmDetail: (payload) => {
      dispatch(setFilmDetail(payload))
    }
  }
};

FilmsListWrapper.propTypes = {
  filmsList: PropTypes.arrayOf(
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
  ),
  pageTotal: PropTypes.number,
  searchResult: PropTypes.arrayOf(
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
  ),
  renderFlag: PropTypes.bool,
  onGetFilmsRequest: PropTypes.func,
  onGetFilmsPageRequest: PropTypes.func,
  onSetFilmDetail: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsListWrapper);