import React, { Component } from 'react';

class Comment extends Component {
	constructor(){
		super();
		this.state = {};
	}
	handleDelete(){
		this.props.handleDelete(this.props.comment);
	}
	render() {
		return (
		  	<li className="list-group-item">
		  		{this.props.comment}
		  		<span style={{cursor: 'pointer'}} onClick={this.handleDelete.bind(this)} className="badge badge-primary badge-pill">X</span>
		  	</li>
		);
	}
}

export default Comment;