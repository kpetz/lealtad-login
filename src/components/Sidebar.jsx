import { Link, useLocation } from 'react-router-dom';
import probg from '../assets/images/bg/bg-profile.jpg';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
	HiMinus,
	HiOutlineChevronRight,
	HiOutlineChevronDown,
	HiOutlineChevronUp,
	HiOutlinePresentationChartBar,
	HiOutlineUserGroup,
	HiOutlineIdentification,
	HiOutlineShoppingBag,
	HiOutlineChevronLeft
} from 'react-icons/hi';
import { useAuth } from '../contexts/authContext';
import { routes } from '../helpers/routes';
import { role } from '../helpers/roles';
import { useState } from 'react';

const DropNavItem = ({
	name,
	path,
	Icon,
	children,
	location
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<Nav.Item className='sidenav-bg border-bottom'>
			<Link onClick={() => setIsExpanded(!isExpanded)} to={path} className={`py-3 d-flex flex-row justify-content-between ' ${location.pathname === path ? ' active nav-link' : 'nav-link text-primary'}`
			}>
				<div>
					<Icon />
					<span className='ms-3'>{name}</span>
				</div>
				<div>
					{
						isExpanded ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
					}
				</div>
			</Link>
			<Navbar expand='true' expanded={isExpanded} className='p-0' collapseOnSelect={1} >
				<Navbar.Collapse>
					<Nav>
						{
							children.map((child, index) => {
								if (!child.path) {
									return null;
								}
								return (
									<Nav.Item key={child.name + index}>
										<Link to={path + '/' + child.path} className={`p-0 py-1 px-4 nav-link ${location.pathname === path + '/' + child.path
											? 'itemActive'
											: 'text-primary '}
								`}>
											<span style={{ fontSize: '14px' }}><HiMinus /> {child.name}</span>
										</Link>
									</Nav.Item>
								)
							})
						}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Nav.Item>
	)
}
const MenuSidebar = ({ location, user }) => {
	return <div className='mb-3'>
		<Nav className='flex-column'>
			{
				routes.map(({ isProtected, inMenu, name, path, Icon, children }, index) => {
					if (inMenu) {
						if (isProtected && user.fname !== role.admin) {
							return null;
						}
						if (children && children.length > 0) {
							// return null;
							return <div key={name + index} >
								<DropNavItem path={path} name={name} Icon={Icon} children={children} location={location} />
							</div>
						}
						return <Nav.Item key={name + index} className='sidenav-bg border-bottom'>
							<Link
								to={path}
								className={
									location.pathname === path
										? 'active nav-link py-3'
										: 'nav-link text-primary py-3'
								}
							>
								<Icon />
								<span className='ms-3 d-inline-block'>{name}</span>
							</Link>
						</Nav.Item>
					}
					return null;
				})
			}
			<Button
				variant='primary'
				tag='a'
				target='_blank'
				className='mt-3'
				href='https:\\www.google.com'
			>
				Salir
			</Button>
		</Nav>
	</div>
}

const Sidebar = () => {
	const { user } = useAuth();
	const location = useLocation();
	const showMobilemenu = () => {
		document.getElementById('sidebarArea').classList.toggle('showSidebar');
	};
	return (
		<div>
			<div className='d-flex align-items-center'></div>
			<div
				className='profilebg'
				style={{ background: `url(${probg}) no-repeat` }}
			>
				<div className='justify-content-center p-3 d-flex'>
					<div className=''>
						<img src={user.avatar} alt='user' width='60' className='border border-secondary shadow rounded-circle' />
					</div>
					<Button
						color='white'
						className='ms-auto text-white d-lg-none btn-transparent'
						onClick={() => showMobilemenu()}
					>
						<HiOutlineChevronLeft />
					</Button>
				</div>
				<div className='bg-secondary text-center text-primary p-2'>{user.fname} {' '} {user.lname}</div>
			</div>
			<div className='p-3'>
				<MenuSidebar location={location} user={user} />
			</div>
		</div>
	);
};

export default Sidebar;
