import React, { Component } from 'react';
import reduxlogo from '../images/redux-logo.png'
import './App.css';

import { connect } from 'react-redux'

import ListeArticles from '../components/ListeArticles'
import ListePanier from '../components/ListePanier'

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={ reduxlogo } className="App-logo" alt="logo" />
          <h1 className="App-title">PANIER BASKET</h1>
        </header>

        <ListeArticles
        addArticle={ this.props.addArticle }
        list= { this.props.list}
        />

        <p>Prix total: { Math.round(this.props.totaux) } $</p>

        <ListePanier
        removeArticle={ this.props.removeArticle }
        panier={ this.props.newList }
        />

      </div>

    );
  }
}

const mapStateToProps = state  => {
  return {
    newList: state.panier,
    totaux: state.total,
    list: state.list,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addArticle: (article) => dispatch (
      { type: 'ADD_ARTICLE', articleInfo: article }
    ),
    removeArticle: (article) => dispatch (
      { type: 'REMOVE_ARTICLE', articleInfo2: article }
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
