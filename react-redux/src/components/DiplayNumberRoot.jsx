import React, { Component } from 'react';
import DiplayNumber from '../containers/DiplayNumber';

export default class DiplayNumberRoot extends Component {
	render() {
		return (
			<div>
				<h1>Diplay Number Root</h1>
				<DiplayNumber/>
			</div>
		)
	}
}