
const initialState = {
    panier: [],
    total: 0,
    list : [
      { id: 0, nom: 'Banane', prix: 2.10},
      { id: 1, nom: 'Ananas', prix: 4.20},
      { id: 2, nom: 'Kiwi', prix: 1.75},
      { id: 3, nom: 'Sainte-Grenade', prix: 210},
    ],
};

const reducers = ( state = initialState, action ) => {

    switch ( action.type ) {
        case 'ADD_ARTICLE':

        const presentArticle = state.panier.find( found => 
            found.nom === action.articleInfo.nom );

        if (presentArticle) {
          const stock = presentArticle.stock + 1;
          state.panier = state.panier.map(( article ) => {
            if ( article.nom === action.articleInfo.nom ) {
              return {
                ...article,
                stock,
                
              };
            } else {
                return article;
            }
          });

        } else {
          state.panier.push({
            id: action.articleInfo.id,
            nom: action.articleInfo.nom,
            prix: action.articleInfo.prix,
            stock: 1,
          });
        }

        state.total += action.articleInfo.prix;
            
        return {
            ...state,
            panier: state.panier,
            total: state.total,
        }
        
        case 'REMOVE_ARTICLE':

          const itemIndex = state.panier.findIndex(i => i.id === action.articleInfo2.id);
          let panierCopy = state.panier.filter((item, index) => index !== itemIndex);
        

        while ( state.total >= 0 ) {
            state.total -= action.articleInfo2.prix * action.articleInfo2.stock;
        
        return {
            ...state,
            panier: panierCopy,
            total: state.total,
        }}
        
        default: 
            return state;
        }

        
}

export default reducers;