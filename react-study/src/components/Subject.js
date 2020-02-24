import React from 'react';

function Subject(props) {
	return (
		<header>
			<h1><a href="/" onClick={(e)=>{
				e.preventDefault();
				props.onChangePage();
			}}>{props.title}</a></h1>
			<p>{props.sub}</p>
		</header>
	);
}

export default Subject;