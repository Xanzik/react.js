import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { Layout } from './layout/Layout';
import { Menu } from './pages/Menu/Menu';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Menu /> },
			{ path: '/cart', element: <App /> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
