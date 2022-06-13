import Clients from "../pages/Clients";
import CommerceIndex from "../pages/Commerce/CommerceIndex";
import EditCommerce from "../pages/Commerce/EditCommerce";
import ListCommerce from "../pages/Commerce/ListCommerce";
import NewCommerce from "../pages/Commerce/NewCommerce";
import SingleCommerce from "../pages/Commerce/SingleCommerce";
import Coupons from "../pages/Coupons";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import { HiOutlineUserCircle, HiOutlinePresentationChartBar, HiOutlineUserGroup, HiOutlineIdentification, HiOutlineShoppingBag } from 'react-icons/hi';

export const routes = [
	{
		name: 'Dashboard',
		path: "/dashboard",
		isProtected: false,
		inMenu: true,
		Component: Dashboard,
		Icon: HiOutlinePresentationChartBar
	},
	{
		name: 'Comercio',
		path: "/commerce",
		Component: CommerceIndex,
		isProtected: true,
		inMenu: true,
		Icon: HiOutlineShoppingBag,
		children: [
			{
				index: true,
				name: 'Listado',
				isProtected: true,
				inMenu: false,
				Component: ListCommerce,
			},
			{
				name: 'Nuevo',
				isProtected: true,
				path: 'new',
				inMenu: true,
				Component: NewCommerce,
				Icon: HiOutlineShoppingBag,
			},
			{
				name: 'Editar',
				isProtected: true,
				path: 'edit',
				inMenu: true,
				Component: EditCommerce,
			},
			{
				name: 'Detalle',
				isProtected: true,
				inMenu: false,
				path: ':id',
				Component: SingleCommerce,
			}
		]
	},
	{
		name: 'Clientes',
		path: "/clients",
		Component: Clients,
		isProtected: false,
		inMenu: true,
		Icon: HiOutlineUserGroup
	},
	{
		name: 'Cupones',
		path: "/coupons",
		Component: Coupons,
		isProtected: false,
		inMenu: true,
		Icon: HiOutlineIdentification
	},
	{
		name: 'Perfil',
		path: "/profile",
		inMenu: false,
		Component: Profile,
		isProtected: false,
		Icon: HiOutlineUserCircle
	},
];