import React, { Component } from 'react'
import './ListesStyle.css'

export default class ListePanier extends Component {
  render() {
    return (
      <div>
        <h4>Liste des articles dans le panier: </h4>
          { this.props.panier.map( article =>
            <div 
            className='listeGrid'
            key={ article.id } >
                <p><b>Article:</b> { article.nom }</p>
                <p>Stock: { article.stock } </p>
                <button
                onClick={ () => this.props.removeArticle( article ) } >
                Supprimer
                </button>
            </div>        
        )}      
      </div>
    )
  }
}
