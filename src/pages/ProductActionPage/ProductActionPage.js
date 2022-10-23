import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getProductEditingRequest, updateProductRequest, addProductRequest} from './../../actions/index';

class ProductActionPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			id: '',
			name: '',
			price: '',
			description: '',
			status: ''
		}
	}

	componentDidMount(){
		var {match} = this.props;
		if(match){
			var id = match.params.id;
			this.props.onEditProduct(id);
		}
	}

	//co props moi chay componen nay
	componentWillReceiveProps(nextProps){
		if(nextProps && nextProps.editingProduct){
			var {editingProduct} = nextProps;
			this.setState({
				id: editingProduct.id,
				name: editingProduct.name,
				price: editingProduct.price,
				description: editingProduct.description,
				status: editingProduct.nastatusme
			});
		}
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		var {id, name, price, description, status} = this.state;
		var {history} = this.props;
		if(id !== ''){ //edit
			this.props.onUpdateProduct({id, name, price, description, status});
		}else{ //add
			this.props.onAddProduct({name, price, description, status});
		}
		//history.goback();
		history.push('/product-list');
	}

	render() {
		var {id, name, price, description, status} = this.state;
		var title = id === '' ? "ADD" : ("EDIT - " + name);
		return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form onSubmit={this.onSubmit}>
					<legend><h1>{title}</h1></legend>
				
					<div className="form-group">
						<label htmlFor="name">Tên sản phẩm</label>
						<input 
							name="name"
							type="text" 
							className="form-control" 
							id="name" 
							placeholder="Enter name product" 
							value={name}
							onChange={this.onChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="price">Giá sản phẩm</label>
						<input 
							name="price"
							type="number" 
							className="form-control" 
							id="price" 
							placeholder="Enter name product" 
							value={price}
							onChange={this.onChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="description">Mô tả sản phẩm</label>
						<input 
							name="description"
							type="text" 
							className="form-control" 
							id="description" 
							placeholder="Enter name product"
							value={description}
							onChange={this.onChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="description">Trạng thái sản phẩm</label>
					</div>
					
					<div className="checkbox">
						<label>
							<input 
								type="checkbox"
								name="status"
								value={status}
								checked={status}
								onChange={this.onChange}
							/>
							Còn hàng
						</label>
					</div>
					<Link to="/product-list" className="btn btn-success mr-10">Back</Link>
					<button type="submit" className="btn btn-primary">Gửi</button>
				</form>
			</div>	
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		editingProduct: state.editingProduct
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onAddProduct: (product) =>{
			dispatch(addProductRequest(product));
		},
		onEditProduct: (id) => {
			dispatch(getProductEditingRequest(id));
		},
		onUpdateProduct: (product) => {
			dispatch(updateProductRequest(product));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
