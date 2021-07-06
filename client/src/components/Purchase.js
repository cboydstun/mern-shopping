import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContextProvider'
import { useHistory } from 'react-router-dom'

const Purchase = () => {
	const {
		cartItems,
		buyProducts,
		getTotalCartPrice,
		deleteFromCart,
		addToCart,
	} = useContext(CartContext)
	const history = useHistory()

	return (
		<div className='purchaseSection'>
			{cartItems.map((item) => (
				<div className='cartItem' key={item._id}>
					{item.productName} {item.qty} x $ {item.price} 
					<button
						onClick={() => deleteFromCart(item)}
						className='removeCartItemBtn'
					>
						-
					</button>
					<button
						onClick={() => addToCart(item)}
						className='addCartItemBtn'
					>
						+
					</button>
				</div>
			))}
			<div className='purchaseNavigation'>
				<p>Total: $ {getTotalCartPrice}</p>
				<button onClick={buyProducts} className='btn'>
					Place Order
				</button>
				<br />
				<button
					onClick={() => {
						history.push('/')
					}}
					className='btn-back'
				>
					Back
				</button>
			</div>
		</div>
	)
}

export default Purchase