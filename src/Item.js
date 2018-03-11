import React, {Component} from 'react';

class Item extends Component{
		render(){
		return(
			<div className="container">
        <img className="styleImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt={this.props.name}/>
				<h2>{this.props.name}</h2>
          {this.props.types.map((type, index) =>
            <p key={index} className={`${type.toLowerCase()}`}>
              {type}
            </p>)}
			</div>
		);
	}
}

export default Item;
