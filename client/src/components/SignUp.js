import React, { useContext } from 'react'
import { RegisterContext } from '../contexts/RegisterUserContextProvider'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
	const {
		register,
		setUserName,
		setPassword,
		setPasswordRepeat,
		setEmail,
		setFirstName,
	} = useContext(RegisterContext)

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
			<input
				type='password'
				placeholder='Repeat Password'
				onChange={(e) => {
					setPasswordRepeat(e.target.value)
				}}
			/>
			<input
				type='text'
				placeholder='Name'
				onChange={(e) => {
					setFirstName(e.target.value)
				}}
			/>
			<input
				type='text'
				placeholder='Email'
				onChange={(e) => {
					setEmail(e.target.value)
				}}
			/>
			<button onClick={register} className='firstPageBtn'>
				Sign Up
			</button>
			<NavLink to='/'>
				<button className='firstPageBtn'>Back to start</button>
			</NavLink>
		</div>
	)
}

export default SignUp