import React, { Component } from 'react'
import './ListesStyle.css'

export default class ListeArticles extends Component {
  render() {
    return (
      <div>
        <h4>Liste des produits disponibles: </h4>
          { this.props.list.map( article =>
            <div 
            className='listeGrid'
            key={ article.id } >
                <p><b>Article:</b> { article.nom }</p>
                <p>Prix: { article.prix } $</p>
                <button
                onClick={ () => this.props.addArticle( article ) }
                >Ajouter
                </button>
            </div>        
        )}
      </div>
    )
  }
}
