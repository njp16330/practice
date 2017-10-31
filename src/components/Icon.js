import React, { Component } from 'react';

class Icon extends Component {
	constructor(){
		super();
		this.state = {};
	}
	render() {
		return (
		  	<li>
		  		{this.props.icon.name}
		  	</li>
		);
	}
}

export default Icon;