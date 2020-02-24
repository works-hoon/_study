import React from 'react';

function CreatContent(props) {
	return (
		<article>
			<h2>Creat</h2>
			<form action="/create_process" method="post"
				onSubmit={e=>{
					e.preventDefault();
					const tar = e.target;
					props.onSubmit(tar.title.value,tar.desc.value);
				}}
			>
				<p><input type="text" name="title" placeholder="title" required /></p>
				<p><textarea name="desc" placeholder="description" required></textarea></p>
				<p><button type="submit">Submit</button></p>
			</form>
		</article>
	);
}

export default CreatContent;