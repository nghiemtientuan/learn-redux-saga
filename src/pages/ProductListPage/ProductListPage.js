import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProductsRequest, actDeleteProductsRequest} from './../../actions/index';

class ProductListPage extends Component {
	// sau khi render duoc goi thi componentDidMout se duoc goi va thuc hien goi len server de lay du lieu
	//sau do render chay lai sau moi lan render
	componentDidMount(){
		this.props.fetchAllProducts();
	}

	render() {
		//var {products} = this.props;
		var {products} = this.props;

		return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to='/product/add' className="btn btn-success mb-10">
					Thêm sản phẩm
				</Link>
				
				<ProductList>
					{this.showProductList(products)}
				</ProductList>
			</div>	
		);
	}

	findIndex = (products, id) => {
		var result = -1;
		products.forEach((product, index) => {
			if(product.id === id){
				result = index;
			}
		});
		return result;
	}

	onDeleteProduct = (id) => {
		this.props.actDeleteProduct(id);
	}

	showProductList = (products) => {
		let result = null;
		if(products.length > 0){
			result = products.map((product, index) => {
				return (
					<ProductItem 
						key={index}
						no={index+1}
						product={product}
						onDeleteProduct={this.onDeleteProduct}
					/>
				)
			});
		}
		return result;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchAllProducts: () => {
			dispatch(fetchProductsRequest())
		},
		actDeleteProduct: (id) => {
			dispatch(actDeleteProductsRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
