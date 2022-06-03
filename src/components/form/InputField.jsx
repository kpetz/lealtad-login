import { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi';
import './form.scss';

export function InputField({
	controlId,
	label,
	type = 'text',
	placeholder = '',
	formSubmitted,
	required = false,
	md = 12,
	size = 'md',
	onFieldChange
}) {
	const [formValue, setFormValue] = useState('');
	const [showEye, setShowEye] = useState({
		showIcon: false,
		showPass: 'password'
	});
	const showPassword = (e) => {
		e.preventDefault();
		setShowEye({
			showIcon: !showEye.showIcon,
			showPass: showEye.showIcon ? 'password' : 'text'
		});
	}
	return <Form.Group as={Col} sm={md} controlId={controlId} className='mb-3 p-0'>
		<div className={(formSubmitted && !formValue ? 'field-required' : '')}>
			<Form.Label className='mb-1'>
				{label}
				{required && <span className='required'>{' '}*</span>}
			</Form.Label>
			{
				type === 'password' ?
					<InputGroup>
						<Form.Control className={(required && formSubmitted && !formValue ? 'is-invalid' : '')} size={size} type={showEye.showPass} placeholder={placeholder} onChange={(e) => {
							setFormValue(e.target.value);
							if (onFieldChange) {
								onFieldChange(controlId, e.target.value);
							}

						}} required={required} />
						<Button variant='secondary' onClick={(e) => showPassword(e)}>
							{
								showEye.showIcon ?
									<HiOutlineEye />
									: <HiOutlineEyeOff />
							}
						</Button>
					</InputGroup>
					: <Form.Control className={(required && formSubmitted && !formValue ? 'is-invalid' : '')} size={size} type={type} placeholder={placeholder} onChange={(e) => {
						setFormValue(e.target.value);
						if (onFieldChange) {
							onFieldChange(controlId, e.target.value);
						}
					}} required={required} />
			}
			{
				formSubmitted
				&& !formValue
				&& <div
					className='invalid-feedback'
					style={{
						display: 'block'
					}}
				>
					Este campo es obligatorio.
				</div>
			}
		</div>
	</Form.Group>
}
