import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Layout } from './layout/Layout';
import { Menu } from './pages/Menu/Menu';
import { AuthLayout } from './layout/Auth/AuthLayout';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { RequireAuth } from './helpers/RequireAuth';
import { Cart } from './pages/Cart/Cart';
import { Success } from './pages/Success/Success.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
		children: [
			{ path: '/', element: <Menu /> },
			{ path: '/success', element: <Success /> },
			{ path: '/cart', element: <Cart /> },
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
