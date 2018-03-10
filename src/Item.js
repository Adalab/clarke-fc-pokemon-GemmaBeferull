import React from 'react';

class Item extends React.Component{
		render(){
		return(
			<div className="container">
        <img src="{this.props.img}" alt="image pokemon"/>
				<h2>{ this.props.name }</h2>
        <p>{this.props.type}</p>
			</div>
		);
	}
}

export default Item
