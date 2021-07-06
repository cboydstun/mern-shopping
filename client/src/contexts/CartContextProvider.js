import React, { createContext, useState, useContext } from 'react'
import Axios from 'axios'
import { LoginContext } from '../contexts/LoginContextProvider'
import { useHistory } from 'react-router-dom'

export const CartContext = createContext()

const CartContextProvider = (props) => {
	const { userID } = useContext(LoginContext)
	const [cartItems, setCartItems] = useState([])
	const history = useHistory()

	const emptyCart = () => {
		setCartItems([])
	}

	const buyProducts = () => {
		const total = cartItems.reduce((prev, cur) => {
			return prev + cur.price * cur.qty
		}, 0)

		Axios.post(`/order/create/`, {
			userID: userID,
			products: cartItems,
			total: total,
		}).then((res) => {})

		alert('order completed')
		setCartItems([])
		history.push('/')
	}

	const getTotalCartPrice = cartItems.reduce((prev, cur) => {
		return prev + cur.price * cur.qty
	}, 0)

	const getTotalCartItems = cartItems.reduce((prev, cur) => {
		return prev + cur.qty
	}, 0)

	const addToCart = (product) => {
		Axios.get(
			`/product/getById/${product._id}`,
			{}
		).then((res) => {
			const product = res.data

			if (cartItems) {
				const exist = cartItems.find((x) => x._id === product._id)

				if (exist) {
					// increases qty of prodct if it allready exists in the cart.
					setCartItems(
						cartItems.map((x) =>
							x._id === product._id
								? { ...exist, qty: exist.qty + 1 }
								: x
						)
					)
				} else {
					// adds item to cart and set qty to 1
					setCartItems([...cartItems, { ...product, qty: 1 }])
				}
			} else {
				product.qty = 1
				setCartItems([product])
			}
		})
	}

	const deleteFromCart = (product) => {
		const exist = cartItems.find((x) => x._id === product._id)

		// if only 1 qty of an item remains in the cart, we filter it out completely from the cart
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x._id !== product._id))
		} else {
			// just decrease the qty to -= 1

			setCartItems(
				cartItems.map((x) =>
					x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
				)
			)
		}
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				emptyCart,
				setCartItems,
				buyProducts,
				getTotalCartPrice,
				deleteFromCart,
				getTotalCartItems,
			}}
		>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider