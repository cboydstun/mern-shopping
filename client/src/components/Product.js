import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContextProvider'

const Product = ({ item }) => {
	const { addToCart } = useContext(CartContext)

	return (
		<div className='product'>
			<p className='productName'>{item.productName}</p>
			<p className='productDescription'>{item.description}</p>
			<p className='productPrice'>$ {item.price}</p>
			<button className='firstPageBtn' onClick={() => addToCart(item)}>
				Add to cart
			</button>
		</div>
	)
}

export default Product