import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContextProvider'
import { NavLink } from 'react-router-dom'

const Login = () => {
	const { login, setUserName, setPassword } = useContext(LoginContext)

	return (
		<div className='loginForm'>
			<input
				type='text'
				placeholder='Username'
				onChange={(e) => {
					setUserName(e.target.value)
				}}
			/>
			<input
				type='password'
				placeholder='Password'
				onChange={(e) => {
					setPassword(e.target.value)
				}}
			/>
			<button onClick={login} className='firstPageBtn'>
				<p>Login</p>
			</button>
			<NavLink to='/signup'>
				<button className='firstPageBtn'>Sign Up</button>
			</NavLink>
		</div>
	)
}

export default Login