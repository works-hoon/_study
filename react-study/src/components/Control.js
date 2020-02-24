import React from 'react';

function Control(props) {
	return (
		<ul>
			<li><a href="/create" onClick={e=>{
				e.preventDefault();
				props.onChangeMode('create');
			}}>create</a></li>
			<li><a href="/update" onClick={e => {
				e.preventDefault();
				props.onChangeMode('update');
			}}>update</a></li>
			<li><button type="button" onClick={e => {
				props.onChangeMode('delete');
			}}>delete</button></li>
		</ul>
	);
}

export default Control;