import React, { createContext, useState } from 'react'
import Axios from 'axios'

export const LoginContext = createContext()

const LoginContextProvider = (props) => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [userID, setUserID] = useState('')
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

	const toggleLoginState = () => {
		setIsUserLoggedIn(!isUserLoggedIn)
	}

	const login = () => {
		Axios.post('/user/login', {
			userName,
			password,
		}).then((res) => {
			if (res.data.length > 0) {
				toggleLoginState()
				setPassword('')
				setUserName('')
				setUserID(res.data[0]._id)
			} else {
				alert('Wrong username or pass')
			}
		})
	}

	return (
		<LoginContext.Provider
			value={{
				login,
				setUserName,
				setPassword,
				isUserLoggedIn,
				toggleLoginState,
				setIsUserLoggedIn,
				userID,
			}}
		>
			{props.children}
		</LoginContext.Provider>
	)
}

export default LoginContextProvider