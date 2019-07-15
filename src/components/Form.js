import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getRecipe}>
        <input type="text" name="recipeName"></input>
        <button>Search</button>
      </form>
    )
  }
}

export default Form;
