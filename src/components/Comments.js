import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
	constructor(){
		super();
		this.state = {comments: ['I love talking.']};
	}

	handleAddComment(e){
		e.preventDefault();

		var newcomment = this.input.value, state = this.state;

		this.setState({
			comments: state.comments.concat([newcomment])
		}, function(){ 
			this.input.value = '';
		}.bind(this));
	}

	handleDeleteComment(c){
		// /console.log(c);

		this.setState({
			comments: this.state.comments.filter((v) => v !== c)
		});
	}

    render() {
        var commslist = this.state.comments.map((v,i) => <Comment handleDelete={this.handleDeleteComment.bind(this)} key={i} comment={v} />);

        return (
          <div>
          	<form>
			  <div className="form-group">
			    <input type="text" className="form-control" id="comment-input" ref={(ta) => {this.input = ta;}} placeholder="Enter Comment" />
			  </div>
			  
			  <button type="submit" onClick={this.handleAddComment.bind(this)} className="btn btn-primary">Add</button>
			</form>
			<hr />

          	<ul className="comments list-group">
            	{commslist}
          	</ul>
          </div>
        );
    }
}

export default Comments;