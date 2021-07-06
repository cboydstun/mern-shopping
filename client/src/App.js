import React from 'react'

//import components
import Header from './components/Header'
import Main from './components/Main'

//import contexts
import LoginContext from './contexts/LoginContextProvider'
import CartContext from './contexts/CartContextProvider'
import ProductContext from './contexts/ProductContextProvider'
import RegisterContext from './contexts/RegisterUserContextProvider'

//import styling
import './App.css'

//SPRINT CHALLENGE - combine all of the contexts using reducers
function App() {
	return (
		<div className='App'>
			<LoginContext>
				<RegisterContext>
					<ProductContext>
						<CartContext>
							<Header />
							<Main />
						</CartContext>
					</ProductContext>
				</RegisterContext>
			</LoginContext>
		</div>
	)
}

export default App