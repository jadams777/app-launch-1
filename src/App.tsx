import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.page';
import AuthRedirect from './pages/AuthRedirectPage/AuthRedirectPage.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/auth-redirect',
		element: <AuthRedirect />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
