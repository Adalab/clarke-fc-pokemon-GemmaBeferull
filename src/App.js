import React, { Component } from 'react';
import Item from './Item';
import Header from './Header';

class App extends Component {
	constructor(props){
		super(props);
    this.state = {
			pokemons: [],
			filtered: ""

		}
    this.handleChange = this.handleChange.bind(this);
	}

  componentDidMount () {
     for (let i = 1; i <=25; i++) {
       fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
       .then(response => response.json())
       .then(json => {
          this.setState({
          pokemons: json
         });
       })
     }
   }


  handleChange = (event) => {
		this.setState ({
			filtered: event.target.value
});
  }

  render() {
    const filterList = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes (this.state.filtered.toLowerCase())
    });
    return (
			<div>
      <Header />
			<div className="greyBack" id="link">
			<input className="nameInput" placeholder = "Busca tu pokemon"  onChange={ this.handleChange } value= {this.state.filter} ></input>
      <div className="grid"> {
        filterList.map((character,index) =>
           <Item
           img= {character.sprites.back_default}
					 name={character.forms.name}
           type={character.types.type.name}
           />
        )
      }
			</div>
      </div>
			</div>
    );
  }
}

export default App;
