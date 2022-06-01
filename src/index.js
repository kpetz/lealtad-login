import App from './App';
import './styles/style.scss';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Loader from './components/loader/Loader';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Suspense fallback={<Loader />}>
		<App />
	</Suspense>,
);