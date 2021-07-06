import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
	const [productList, setProductList] = useState([{}])
	const [searchVal, setSearchVal] = useState()

	useEffect(() => {
		getProducts()
	}, [])

	const getProducts = () => {
		axios.get('/product/getAll', {}).then((res) => {
			setProductList(res.data)
		})
	}

	const productSearch = () => {
		axios.get(`/product/search/${searchVal}`, {}).then(
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