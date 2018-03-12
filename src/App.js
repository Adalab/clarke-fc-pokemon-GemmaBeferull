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
	}

  componentDidMount () {
     for (let i = 1; i <=25; i++) {
       fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
			 .then((response) => response.json())
       .then((json) => {
				 let pokemonJson = this.state.pokemons;
		 			pokemonJson.push(json)
          this.setState({
          pokemons: pokemonJson
         });
       });
     }
   }

  handleChange = (event) => {
		this.setState ({
			filtered: event.target.value
});
  }


  render() {
    let filterList = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes (this.state.filtered.toLowerCase())
    });

    return (
			<div>
       <Header />
			 <div className="greyBack" id="link">
			   <input className="nameInput" placeholder = "Busca tu pokemon"  onChange={ this.handleChange } value= {this.state.filtered} ></input>
         <div className="grid">

					 {filterList.sort((a,b) => a.id - b.id).map((pokemon, index) =>
						 <div key={index} >
							 <Item
								 key={index}
								 id={pokemon.id}
								 name={pokemon.name}
								 types= {pokemon.types.map((t) => t.type.name)}
							 />
						 </div>
					 )}

         </div>
        </div>
      </div>

    );
  }
}

export default App;
