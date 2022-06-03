import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const FullLayout = () => {
	return (
		<main>
			{/********header**********/}
			{/* <div>cabecera</div> */}
			<Header />
			<div className="pageWrapper d-md-flex">
				{/********Sidebar**********/}
				<aside className="sidebarArea shadow" id="sidebarArea">
					<Sidebar />
				</aside>
				{/********Content Area**********/}
				<div className="contentArea">
					{/********Middle Content**********/}
					<Container className="p-4" fluid>
						<Outlet />
					</Container>
				</div>
			</div>
		</main>
	);
};

export default FullLayout;
