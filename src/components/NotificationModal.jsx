import { Button, Modal, Spinner } from 'react-bootstrap';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const NotificationModal = ({
	IconModal = HiOutlineCheckCircle,
	iconColorModal = '#044f17',
	title = '',
	messageModal = 'Inicio de sesión exitoso',
	showModal = false,
	onHide
}) => {
	return (
		<Modal
			show={showModal}
			onHide={onHide}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			className='text-center'
			centered
		>
			<Modal.Body >
				<IconModal size='60' color={iconColorModal} />
				<h4 className='pt-3'>{title}</h4>
				<p>
					{messageModal}
				</p>
				<div className='border-top pt-3'>
					<Button className='text-center' onClick={onHide}>Ok</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default NotificationModal;