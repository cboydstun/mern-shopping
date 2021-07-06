import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
	const [productList, setProductList] = useState([{}])
	const [searchVal, setSearchVal] = useState()

	useEffect(() => {
		getProducts()
	}, [])

	const getProducts = () => {
		Axios.get('/product/getAll', {}).then((res) => {
			setProductList(res.data)
		})
	}

	const productSearch = () => {
		Axios.get(`/product/search/${searchVal}`, {}).then(
			(res) => {
				setProductList(res.data)
			}
		)
	}

	return (
		<ProductContext.Provider
			value={{
				productList,
				productSearch,
				searchVal,
				setSearchVal,
				getProducts,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	)
}

export default ProductContextProvider