import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContextProvider'
import { CartContext } from '../contexts/CartContextProvider'
import { BiCart } from 'react-icons/bi'

const Header = () => {
	const { isUserLoggedIn, toggleLoginState } = useContext(LoginContext)
	const { cartItems, emptyCart, getTotalCartItems } = useContext(CartContext)

	const logOut = () => {
		emptyCart()
		toggleLoginState()
	}

	return (
		<div className='header'>
			<div className='logo'>
				<NavLink to='/'>
					<p>MERN Shopping</p>
				</NavLink>
			</div>

			{isUserLoggedIn ? (
				<>
					<div className='loginButtons'>
						<NavLink to='/purchase' className='navBtn'>
							<BiCart />
							{cartItems ? getTotalCartItems : <></>}
						</NavLink>
						<NavLink to='/account' className='navBtn'>
							My Profile
						</NavLink>
						<NavLink onClick={logOut} to='/' className='navBtn'>
							Sign Out
						</NavLink>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default Header