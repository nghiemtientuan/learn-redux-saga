import React, { Component } from 'react';
import './App.css';
import routes from './routes/routes';
import {Switch, Route, HashRouter} from 'react-router-dom';

const App = (props) => {
	const showContentMenu = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				)
			});
		}

		return <Switch>{result}</Switch>
	};

	return (
		<HashRouter>
			<div className="container">
				<div className="row">
					{ showContentMenu(routes) }
				</div>
			</div>
		</HashRouter>
	);
};

App.propTypes = {
	
};

export default App;