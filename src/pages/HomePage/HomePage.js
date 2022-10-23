import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Types from '../../constants/ActionTypes';

const HomePage = (props) => {
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const [selectedTask, setSelectedTask] = useState(null);

	const handleAddTask = () => {
		const newTask = {
			...selectedTask,
			id: Date.now()
		};

		dispatch({
			type: Types.ADD_TASK,
			product: newTask
		});

		setSelectedTask(null);
	};

	const handleRemoveTask = (taskId) => {
		dispatch({
			type: Types.DELETE_TASK,
			id: taskId
		});
	};

	const handleChange = (e) => {
		const {target} = e;
		const {name, value} = target;
		setSelectedTask({
			[name]: value
		});
	};

	return (
		<div className="container">
			<div id="myDIV" className="header">
				<h2>My To Do List</h2>
				<input
					type="text"
					name="name"
					id="myInput"
					placeholder="Title..."
					onChange={handleChange}
					value={selectedTask ? selectedTask.name : ''}
				/>
				<span className="addBtn" onClick={handleAddTask}>Add</span>
			</div>
		
			<ul id="myUL">
				{
					tasks && tasks.map(task => (
						<li key={task.id}>
							{task.name}
							<span className="close" onClick={() => handleRemoveTask(task.id)}>×</span>
						</li>
					))
				}
			</ul>
		</div>	
	);
};

export default HomePage;
