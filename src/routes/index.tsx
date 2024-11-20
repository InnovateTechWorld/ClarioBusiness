import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth/signin',
    element: <SignIn />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
