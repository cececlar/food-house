import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = "d2703a5ee16aa3072211b1cfd0322040";

class Recipe extends React.Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = () => {
  const specificRecipe = this.props.location.state.recipe;
  const recipeUrl = `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${specificRecipe}`;
  axios.get(recipeUrl)
  .then(res => {
    this.setState({ activeRecipe: res.data.recipe });
    console.log(this.state.activeRecipe);
  })
}

render() {
  const recipe = this.state.activeRecipe;
  return (
    <div>
      <div className="header bg-primary">
        <h1>Recipe Info</h1>
      </div>
      <div className="container">
      { this.state.activeRecipe.length !== 0 &&
        <div className="col-md-8 col-lg-6 col-10 offset-md-2 offset-lg-3 offset-1 recipe-info">
          <img
          src={recipe.image_url} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <h4>
            Publisher: <span>{recipe.publisher}</span>
          </h4>
          <p>
            Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
          </p>
          <button>
            <Link to="/">Go Home</Link>
          </button>

        </div>
      }
      </div>
    </div>
  )
}

}

export default Recipe;
