import React from 'react';
import { Link } from 'react-router-dom';

class Recipes extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
        {this.props.recipes.map((recipe) => {
          return (
            <div
            key={recipe.title}

      //Parvati use this
      // When the browser is small the div will take up 8 columns
      // offset
            className="col-md-4 col-lg-3 col-8 offset-lg-0 offset-md-0 offset-2 recipes-info"

            >
              <div>
                <img
                src={recipe.image_url}
                alt={recipe.title} />
                <div>

                // Parvati Intersting. Look into this
                  <h5>
                  {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 20)}...`}

                  </h5>
                  <p>Publisher: <span>{recipe.publisher}</span></p>
                </div>

                <button>
                  <Link to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.recipe_id }
                    }}>
                    View Recipe
                  </Link>
                </button>


              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }

}

export default Recipes;
