import Product from './Product'
import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContextProvider'
import { BiSearchAlt2 } from 'react-icons/bi'

const ProductList = () => {
	const {
		productList,
		productSearch,
		setSearchVal,
		searchVal,
		getProducts,
	} = useContext(ProductContext)

	const search = () => {
		if (!searchVal) {
			getProducts()
		} else {
			productSearch()
		}
		setSearchVal('')
	}

	return (
		<>
			<div className='search-field'>
				<input
					type='text'
					className='search'
					placeholder='Search'
					onChange={(e) => {
						setSearchVal(e.target.value)
					}}
				/>
				<button className='btn-search' onClick={search}>
					<BiSearchAlt2 />
				</button>
			</div>
			<div className='productList'>
				{productList.map((item) => (
					<Product id={item._id} item={item} key={item._id} />
				))}
			</div>
		</>
	)
}

export default ProductList