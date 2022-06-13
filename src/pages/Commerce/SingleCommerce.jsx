import React from 'react'
import { useParams } from 'react-router-dom';

const SingleCommerce = () => {
	const {id} = useParams();
	return (
		<div>SingleCommerce {id}</div>
	)
}

export default SingleCommerce