import React, { Component } from 'react';
export default class DiplayNumber extends Component {
	render() {
		return (
			<div>
				<h1>Diplay Number</h1>
				<input type="text" value={this.props.number} readOnly />
			</div>
		);
	}
}