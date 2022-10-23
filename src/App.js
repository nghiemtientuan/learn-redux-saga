import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes/routes';
import {Switch, Route, HashRouter} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Menu />
					
					<div className="container">
						<div className="row">
							{ this.showContentMenu(routes) }
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}

	showContentMenu = (routes) => {
		let result = null;
		if(routes.length > 0){
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
	}
}

export default App;
