import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Routes from './components/Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Home from './components/Home/Home.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Blog from './components/Blog/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://italian-foodies-ali-ashraf-abir.vercel.app/chefs')

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chef/:id',
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader:()=> fetch('https://italian-foodies-ali-ashraf-abir.vercel.app/chefs')

      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/authprovider',
        element:<AuthProvider><ChefDetails></ChefDetails></AuthProvider>
      },
      {
        path:'/contact',
        element:<Contacts></Contacts>
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
