import React from "react";
import "./loader.scss";
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => (
	<div className='loading'>
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Cargando...</span>
		</Spinner>
	</div>
);
export default Loader;
