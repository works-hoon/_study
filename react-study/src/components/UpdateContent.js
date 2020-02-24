import React, { Component } from 'react';

class UpdateContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.data.id,
			title: this.props.data.title,
			desc: this.props.data.desc
		}
		this.inputFormHandler = this.inputFormHandler.bind(this)
	}
	inputFormHandler(e){
		this.setState({[e.target.name]:e.target.value })
	}
	render() {
		return (
			<article>
				<h2>Update</h2>
				<form action="/create_process" method="post"
					onSubmit={e => {
						e.preventDefault();
						this.props.onSubmit(
							this.state.id,
							this.state.title,
							this.state.desc
						);
					}}
				>
					<input type="hidden" name="id" value={this.state.id} />	
					<p>
						<input
							type="text"
							name="title"
							placeholder="title"
							required
							value={this.state.title}
							onChange={this.inputFormHandler}
						/>
					</p>
					<p>
						<textarea
							name="desc"
							placeholder="description"
							required
							value={this.state.desc}
							onChange={this.inputFormHandler}
						/>
					</p>
					<p><button type="submit">Submit</button></p>
				</form>
			</article>
		);
	}
}

/* function UpdateContent(props) {
	return (
		<article>
			<h2>Update</h2>
			<form action="/create_process" method="post"
				onSubmit={e=>{
					e.preventDefault();
					const tar = e.target;
					props.onSubmit(tar.title.value,tar.desc.value);
				}}
			>
				<p><input type="text" name="title" placeholder="title" required value={props.data.title} /></p>
				<p><textarea name="desc" placeholder="description" required value={props.data.desc} ></textarea></p>
				<p><button type="submit">Submit</button></p>
			</form>
		</article>
	);
} */

export default UpdateContent;