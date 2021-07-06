import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import ProductList from './ProductList'
import MyAccount from './MyAccount'
import Purchase from './Purchase'
import SignUp from './SignUp'
import { LoginContext } from '../contexts/LoginContextProvider'

const Main = () => {
	const { isUserLoggedIn } = useContext(LoginContext)

	return (
		<Switch>
			{isUserLoggedIn ? (
				<Route exact path='/' component={ProductList}></Route>
			) : (
				<Route exact path='/' component={Login}></Route>
			)}
			<Route path='/account' component={MyAccount}></Route>
			<Route path='/purchase' component={Purchase}></Route>
			<Route path='/signup' component={SignUp}></Route>
		</Switch>
	)
}

export default Main