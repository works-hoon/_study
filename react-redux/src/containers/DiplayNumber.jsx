import DiplayNumber from "../components/DiplayNumber";
import { connect } from 'react-redux'

function mapReduxStateToProps(state) {
	return {
		number: state.number
	}
}

export default connect(mapReduxStateToProps,null)(DiplayNumber)



/* import React, { Component } from "react";
import store from '../store';
export default class extends Component {
	state = { number: store.getState().number }
	constructor(props) {
		super(props);
		store.subscribe(() => {
			this.setState({
				number: store.getState().number
			})
		})
	}
	render() {
		return <DiplayNumber number={this.state.number} />
	}
} */