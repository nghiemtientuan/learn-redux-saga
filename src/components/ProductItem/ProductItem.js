import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm('Bạn chắc chắn muốn xóa không?')){ //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }

	render() {
        var {product, no} = this.props;
        var titleStatus = product.status ? 'Còn hàng' : 'Hết hàng';
        var classStatus = product.status ? 'success' : 'warning';
		return (
            <tr>
                <td>{no}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} VNĐ</td>
                <td>{product.description}</td>
                <td>
                    <span className={"label label-"+classStatus}>{titleStatus}</span>
                </td>
                <td>
                    <Link 
                        to={'product/edit/'+product.id}
                        type="button" 
                        className="btn btn-success mr-10"
                    >Edit</Link>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => {this.onDelete(product.id)}}
                    >Remove</button>
                </td>
            </tr>
		);
	}
}

export default ProductItem;
