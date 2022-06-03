import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/bg-profile.jpg";
import { Button, Nav, NavItem } from "react-bootstrap";
import { HiOutlineX, HiOutlineMenu, HiOutlinePresentationChartBar, HiOutlineUserGroup, HiOutlineIdentification, HiOutlineShoppingBag,HiOutlineChevronLeft } from 'react-icons/hi';
import { useAuth } from "../contexts/authContext";

const navigation = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: HiOutlinePresentationChartBar,
	},
	{
		title: "Comercios",
		href: "/commerce",
		icon: HiOutlineShoppingBag,
	},
	{
		title: "Clientes",
		href: "/clients",
		icon: HiOutlineUserGroup,
	},
	{
		title: "Cupones",
		href: "/coupons",
		icon: HiOutlineIdentification,
	}
];

const Sidebar = () => {
	const { user } = useAuth();
	const showMobilemenu = () => {
		document.getElementById("sidebarArea").classList.toggle("showSidebar");
	};
	let location = useLocation();

	return (
		<div>
			<div className="d-flex align-items-center"></div>
			<div
				className="profilebg"
				style={{ background: `url(${probg}) no-repeat` }}
			>
				<div className="justify-content-center p-3 d-flex">
					<div className=''>
						<img src={user.avatar} alt="user" width="60" className="border border-secondary shadow rounded-circle" />
					</div>
					<Button
						color="white"
						className="ms-auto text-white d-lg-none btn-transparent"
						onClick={() => showMobilemenu()}
					>
						<HiOutlineChevronLeft />
					</Button>
				</div>
				<div className="bg-secondary text-center text-primary p-2">{user.fname} {' '} {user.lname}</div>
			</div>
			<div className="p-3 mt-2">
				<Nav className="flex-column">
					{navigation.map((navi, index) => (
						<Nav.Item key={index} className="sidenav-bg border-bottom">
							<Link
								to={navi.href}
								className={
									location.pathname === navi.href
										? "active nav-link py-3"
										: "nav-link text-primary py-3"
								}
							>
								<navi.icon />
								<span className="ms-3 d-inline-block">{navi.title}</span>
							</Link>
						</Nav.Item>
					))}
					<Button
						variant="primary"
						tag="a"
						target="_blank"
						className="mt-3"
						href="https:\\www.google.com"
					>
						Salir
					</Button>
				</Nav>
			</div>
		</div>
	);
};

export default Sidebar;
