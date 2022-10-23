import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        to: '/',
        label: 'Trang chủ',
        exact: true
    },
    {
        to: '/product-list',
        label: 'Quản lý sản phẩm',
        exact: false
    },
];

const MenuLink = ({label, to, exact}) => {
    return (
        <Route 
            path={to}
            exact={exact}
            children={({match}) => {
                var active=match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
	render() {
		return (
            <div className="navbar navbar-default">
                <label className="navbar-brand">Title</label>
                <ul className="nav navbar-nav">
                    {this.showMenuLink(menus)}
                </ul>
            </div>		
		);
    }
    
    showMenuLink = (menus) => {
        let result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index} 
                        label={menu.label}
                        to={menu.to}
                        exact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;
