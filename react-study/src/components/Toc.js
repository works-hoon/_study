import React, { Component } from 'react';

class Toc extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.data === this.props.data){
			return false;
		}
		return true;
	}
	render() {
		const lists = [];
		const data = this.props.data;
		let i = 0;
		while (i < data.length) {
			const _id = data[i].id;
			const _className = this.props.selected_id === _id;
			lists.push(
				<li key={_id}>
					<a href={"/content/" + _id}
						onClick={e => {
							e.preventDefault();
							this.props.onChangePage(_id);
						}} 
						className={_className ? 'selected' : null}
					>{data[i].title}</a>
				</li>
			);
			i += 1;
		}
		return (
			<nav>
				<ul>
					{lists}
				</ul>
			</nav>
		);
	}
}

export default Toc;