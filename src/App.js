import { AuthProvider } from './contexts/authContext';
import { AppRouter } from './routes/AppRouter'

const App = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	)
}

export default App