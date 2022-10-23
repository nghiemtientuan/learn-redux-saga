import React from 'react';

const HomePage = (props) => {
	return (
		<div className="container">
			<div id="myDIV" className="header">
				<h2>My To Do List</h2>
				<input type="text" id="myInput" placeholder="Title..." />
				<span className="addBtn">Add</span>
			</div>
		
			<ul id="myUL">
				<li>Hit the gym <span class="close">×</span></li>
				<li className="checked">Pay bills<span class="close">×</span></li>
				<li>Meet George<span class="close">×</span></li>
				<li>Buy egg<span class="close">×</span></li>
				<li>Read a book<span class="close">×</span></li>
				<li>Organize office<span class="close">×</span></li>
			</ul>
		</div>	
	);
};

export default HomePage;
