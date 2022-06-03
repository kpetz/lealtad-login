import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import './form.scss';

export function CheckBoxField({
	controlId,
	label,
	formSubmitted,
	required = false,
	md = 12,
	onFieldChange }) {
	const [formValue, setFormValue] = useState(false);
	return <div className={(required && formSubmitted && !formValue ? 'field-required' : '')}>
		<Form.Group controlId={controlId} as={Col} md={md} className='mb-3 p-0'>
			
			<Form.Check
				inline
				label={label}
				value='false'
				checked={formValue === true}
				onChange={() => { setFormValue(!formValue); onFieldChange(controlId, !formValue); }}
			/>
			<Form.Label className='mb-1'>
				{required && <span className='required'>*</span>}
			</Form.Label>
		</Form.Group >
		{required && formSubmitted && !formValue && <div className='validation-message'>Este campo es obligatorio.</div>}
	</div >
}
