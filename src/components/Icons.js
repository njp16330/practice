import React, { Component } from 'react';
import Icon from './Icon';

class Icons extends Component {
	constructor(){
		super();
		this.state = {};
	}
    render() {
        var iconslist = this.props.icons.map(v => <Icon icon={v} />);
        return (
          <ul className="icons">
            {iconslist}
          </ul>
        );
    }
}

export default Icons;