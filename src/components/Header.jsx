import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
// import { ReactComponent as LogoWhite } from '../assets/images/logos/materialprowhite.svg';
import user1 from '../assets/images/users/user4.jpg';
import { Button, Collapse, Container, Dropdown, Nav, Navbar, NavbarBrand, NavDropdown, NavItem } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { HiX, HiOutlineX, HiOutlineMenu, HiOutlineDotsVertical, HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp,HiOutlineChevronRight } from 'react-icons/hi';
import { useAuth } from '../contexts/authContext';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user } = useAuth();
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const Handletoggle = () => {
		setIsOpen(!isOpen);
	};
	const showMobilemenu = () => {
		document.getElementById('sidebarArea').classList.toggle('showSidebar');
	};
	return (
		<Navbar collapseOnSelect expand='lg' bg='primary' variant='dark' className='p-lg-0 shadow border-bottom-green'>
			<Container>
				<div className='d-flex align-items-center'>
					<Navbar.Brand href='/'>
						<div className='d-md-block d-none me-5 pe-3'>
							<Logo variant='dark' />
						</div>
						<div className='d-md-none '>
							<Logo variant='light' />
						</div>
					</Navbar.Brand>
					<Button
						color='primary'
						className='d-md-none'
						onClick={() => showMobilemenu()}
					>
						<HiOutlineChevronRight />
					</Button>
				</div>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link href='#deets'>More deets</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		// <Navbar bg='primary' variant='dark' expand='md' className='shadow-lg p-0'>
		// 	<div className='d-flex align-items-center'>
		// 		<NavbarBrand href='/'>
		// 			<div className='d-md-block d-none me-5 pe-3'>
		// 				<Logo variant='dark' />
		// 			</div>
		// 			<div className='d-md-none '>
		// 				<Logo variant='light' />
		// 			</div>
		// 			{/* <LogoWhite className=' d-lg-none' /> */}
		// 		</NavbarBrand>
		// 		<Button
		// 			color='primary'
		// 			className='d-md-none'
		// 			onClick={() => showMobilemenu()}
		// 		>
		// 			<HiOutlineMenu />
		// 		</Button>
		// 	</div>
		// 	<div className='hstack gap-2'>
		// 		<Button
		// 			className='d-block d-md-none'
		// 			onClick={Handletoggle}
		// 		>
		// 			{isOpen ? (
		// 				<HiOutlineX className='text-white' />
		// 			) : (
		// 				<HiOutlineDotsVertical className='text-white' />
		// 			)}
		// 		</Button>
		// 	</div>

		// 	<Navbar.Collapse className='justify-content-end' >
		// 		<Nav className='me-auto' navbar>
		// 			<NavItem>
		// 				<Link to='/starter' className='nav-link'>
		// 					Starter
		// 				</Link>
		// 			</NavItem>
		// 			<NavItem>
		// 				<Link to='/about' className='nav-link'>
		// 					About
		// 				</Link>
		// 			</NavItem>
		// 			<NavDropdown>
		// 				<Dropdown.Item>Option 1</Dropdown.Item>
		// 				<Dropdown.Item>Option 2</Dropdown.Item>
		// 			</NavDropdown>
		// 		</Nav>
		// 		<NavDropdown active={isOpen}>
		// 			<Dropdown.Toggle color='transparent'>
		// 				<img
		// 					src={user.avatar}
		// 					alt='profile'
		// 					className='rounded-circle'
		// 					width='30'
		// 				></img>
		// 			</Dropdown.Toggle>
		// 			<DropdownMenu show={isOpen}>
		// 				<Dropdown.Item header>Info</Dropdown.Item>
		// 				<Dropdown.Item>My Account</Dropdown.Item>
		// 				<Dropdown.Item>Edit Profile</Dropdown.Item>
		// 				<Dropdown.Item divider />
		// 				<Dropdown.Item>My Balance</Dropdown.Item>
		// 				<Dropdown.Item>Inbox</Dropdown.Item>
		// 				<Dropdown.Item>Logout</Dropdown.Item>
		// 			</DropdownMenu>
		// 		</NavDropdown>
		// 	</Navbar.Collapse>
		// </Navbar>
	);
};

export default Header;
