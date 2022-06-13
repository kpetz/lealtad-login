import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const FullLayout = () => {
	return (
		<main>
			<Header />
			<div className='pageWrapper d-md-flex'>
				<aside className='sidebarArea shadow' id='sidebarArea'>
					<Sidebar />
				</aside>
				<div className='contentArea'>
					<Container className='p-4' fluid>
						<Breadcrumbs/>
						<Outlet />
					</Container>
				</div>
			</div>
		</main>
	);
};

export default FullLayout;
