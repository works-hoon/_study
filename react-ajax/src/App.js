import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Nav extends Component {
	render() {
		let listTag = [];
		for (const i in this.props.list) {
			const li = this.props.list[i];
			listTag.push(
				<li key={li.id}>
					<a href={'#' + li.title} data-id={li.id} onClick={e => {
						e.preventDefault();
						this.props.onClick(e.target.dataset.id);
					}}>
						{li.title}
					</a>
				</li>
			)
		}
		return (
			<nav>
				<ul>
					{listTag}
				</ul>
			</nav>
		)
	}
}

class Article extends Component {
	render() {
		return (
			<article>
				<h2>{this.props.title}</h2>
				<p>{this.props.desc}</p>
			</article>
		)
	}
}

class NowLoading extends Component{
	render(){
		return(
			<div>Now Loading.....</div>
		)
	}
}

class App extends Component {
	state = {
		article: {
			item:{
				title: 'Welcome',
				desc: 'Hello, React & Ajax'
			},
			isLoading: false
			
		},
		list:{
			items: [],
			isLoading: false
		}
	}
	componentDidMount() {
		const newList = Object.assign({}, this.state.list, {isLoading:true});
		this.setState({
			list:newList
		})
		fetch('list.json')
			.then(result => {
				return result.json();
			})
			.then(json => {
				this.setState({
					list:{
						items: json,
						isLoading: false
					}
				})
			})
	}
	render() {
		let NavTag = <NowLoading />;
		if(!this.state.list.isLoading){
			NavTag = <Nav list={this.state.list.items}
				onClick={id => {
					const newArticle = Object.assign({}, this.state.article, { isLoading: true });
					this.setState({
						article: newArticle
					})
					fetch(id + '.json')
						.then(result => {
							return result.json()
						})
						.then(json => {
							this.setState({
								article: {
									item: {
										title: json.title,
										desc: json.desc
									},
									isLoading: false
								}
							})
						})
				}}
			/>
		}

		let ArticleTag = <NowLoading />;
		if (!this.state.article.isLoading) {
			ArticleTag = <Article
				title={this.state.article.item.title}
				desc={this.state.article.item.desc}
			/>
		}

		return (
			<div className="App">
				<h1>WEB</h1>
				{NavTag}
				{ArticleTag}
			</div>
		)
	}
}

export default App;
