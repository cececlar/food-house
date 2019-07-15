import React from 'react';
import Form from './components/Form';
import './App.css';
import axios from 'axios';
import Recipes from './components/Recipes'

const API_KEY = "d2703a5ee16aa3072211b1cfd0322040";

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    recipes: []
  }
}

componentDidMount = () => {
  const json = localStorage.getItem("recipes");
  const recipes = JSON.parse(json);
  this.setState({ recipes: recipes })
}

componentDidUpdate = () => {
  const recipes = JSON.stringify(this.state.recipes)
  localStorage.setItem("recipes", recipes)
}



  getRecipe = (event) => {
  const recipeName = event.target.elements.recipeName.value;
  event.preventDefault();
  const url = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
  axios.get(url)
  .then(res => {
  this.setState({recipes: res.data.recipes});
  console.log(this.state.recipes);
})

}


render() {
return (
  <div>
    <div className="header bg-primary">
      <h1>Recipe Search</h1>
    </div>
    <div className="form-container">
      <Form className="recipe-form" getRecipe={this.getRecipe}/>
    </div>
    <Recipes recipes={this.state.recipes}/>
  </div>
)
}

}

export default App;
