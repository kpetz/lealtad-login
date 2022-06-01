import React, { useContext, useEffect, useState } from 'react'
import verifyLogin from '../../api/login';
import NotificationModal from '../NotificationModal';
import { HiOutlineLockClosed, HiOutlineUserCircle, HiOutlineCheckCircle, HiOutlineBan } from 'react-icons/hi';
import { Button, Card, Col, Container, Form, Row, Spinner, Modal } from 'react-bootstrap';
import './login.scss';
import { InputField } from '../form/InputField';
import { useAuth } from '../../contexts/authContext';


const Login = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [thereAreErrors, setThereAreErrors] = useState(false);
	const [formFields, setFormField] = useState({});
	const { login, isAuthenticated, isDenied, setIsDenied } = useAuth();

	function handleChange(key, value) {
		setFormField(prevInfo => ({ ...prevInfo, [key]: value }))
	};
	const validateLogin = async () => {
		const response = await verifyLogin({
			username: 'karn.yong@mecallapi.com',
			password: 'mecallapi'
		});
		console.log(response);
	}
	function validarFomulario(e) {

		e.preventDefault();
		let isValid = true;
		if (!formFields['username'] || !formFields['password']) {
			isValid = false;
		}

		setFormSubmitted(true);
		if (!isValid) {
			setThereAreErrors(true);
			return;
		} else {
			login(formFields);
		}
		setThereAreErrors(false);
	}
	const handleClose = () => {
		setIsDenied(false);
		setFormSubmitted(false);
	};
	return (
		<>
			{/* <NotificationModal
				IconModal={HiOutlineCheckCircle}
				iconColorModal='#044f17'
				messageModal='Inicio de sesión exitoso'
				showModal={showModal}
				onHide={handleClose}
			/> */}
			<NotificationModal
				IconModal={HiOutlineBan}
				iconColorModal='#fb5000'
				title='Fallo el inicio de sesión.'
				messageModal='Por favor debe verificar su usuario y/o contraseña.'
				showModal={isDenied}
				onHide={handleClose}
			/>
			<div className='backgroundImage'>
				<Container
					className='py-5 verticalAlign'
				>
					<Row className='align-items-center'>
						<Col lg={8}>

						</Col>
						<Col lg={4}>
							<Card className='backgroundForm'>
								<Card.Body className='p-5 shadow text-primary'>
									<div className='text-center mb-4'>
										<div className='iconBackground mb-3 text-white'>
											{
												formSubmitted && !thereAreErrors ? <Spinner style={{
													width: '5rem',
													height: '5rem',
													marginTop: '3px'
												}} animation="border" variant="light" />
													: <HiOutlineLockClosed size='60' />
											}
											{
												isAuthenticated && <HiOutlineCheckCircle size='60' />
											}
										</div>
										<Card.Title className='font-weight-bold'>
											{
												formSubmitted && !thereAreErrors && !isAuthenticated && !isDenied ?
													'Iniciando sesión...'
													: !isDenied && 'Inicio de Sesión'
											}
										</Card.Title>
										{
											formSubmitted && thereAreErrors &&
											<div className='form-validation-message'>
												Los campos son obligatorios.
											</div>

										}
									</div>

									<Form noValidate onSubmit={validarFomulario} >
										<Row>
											<InputField
												controlId='username'
												label='karn.yong@mecallapi.com'
												type='text'
												placeholder='Ingrese su usuario'
												formSubmitted={formSubmitted}
												required={true}
												md={12}
												onFieldChange={handleChange}
											/>
										</Row>
										<Row>
											<InputField
												controlId='password'
												label='mecallapi'
												type='password'
												placeholder='Ingrese su contraseña'
												formSubmitted={formSubmitted}
												required={true}
												md={12}
												onFieldChange={handleChange}
											/>
										</Row>
										<Form.Group className='pt-2 mb-3 ' controlId='formBasicCheckbox'>
											<Form.Check className='text-primary' type='checkbox' label='Recuerdame' />
										</Form.Group>
										<div className='d-grid'>
											<Button variant='secondary' type='submit'>
												Ingresar
											</Button>
										</div>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container >
			</div>
		</>
	)
}

export default Login;