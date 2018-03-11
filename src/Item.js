import React from 'react';

class Item extends React.Component{
		render(){
		return(
			<div className="container">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt= {this.props.name}/>
				<h2>{ this.props.name }</h2>
        <p>{this.props.type}</p>
			</div>
		);
	}
}

export default Item
