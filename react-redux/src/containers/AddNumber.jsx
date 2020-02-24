import AddNumber from "../components/AddNumber";
import { connect } from 'react-redux'

function mapReduxDispatchToProps(dispatch) {
	return {
		onClick: _size => {
			dispatch({
				type: 'INCREMENT',
				size: _size
			})
		}
	}
}

export default connect(null, mapReduxDispatchToProps)(AddNumber)

/* import React, { Component } from "react";
import store from '../store';
export default class extends Component{
	render(){
		return <AddNumber onClick={_size => {
			store.dispatch({
				type: 'INCREMENT',
				size: _size
			})
		}} />
	}
} */