import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Container from '../components/Shared/Container'
import UserDashboard from '../layouts/UserDashboard'
import UserProfile from '../pages/Dashboard/UserDashboard/UserProfile'
import CreatePostForm from '../pages/Dashboard/UserDashboard/NewPost'
import ManagePosts from '../pages/Dashboard/UserDashboard/ManagePosts'
import Interactions from '../pages/Dashboard/UserDashboard/Interactions'
import StripePay from '../pages/Membership/StripePay'
import PrivateRoute from './PrivateRoute'
import ViewBlogs from '../pages/Blogs/ViewBlogs'
import ManageUsers from '../pages/AdminDashboard/ManageUsers'
import AdminRoute from './AdminRoute'
import Analytics from '../pages/AdminDashboard/Analytics'
import Announcement from '../pages/AdminDashboard/Annoucement'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },


    ],
  },

  {
    path: '/dash',
    element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dash/profile',
        element: <UserProfile></UserProfile>,
      },
      {
        path: '/dash/post',
        element: <CreatePostForm></CreatePostForm>,
      },
      {
        path: '/dash/manage',
        element: <ManagePosts></ManagePosts>,
      },
      {
        path: '/dash/interactions',
        element: <Interactions></Interactions>,
      },




      {
        path: '/dash/manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },

       {
        path: '/dash/makeannoucement',
        element: <AdminRoute><Announcement></Announcement></AdminRoute>,
      },
   
 {
        path: '/dash/analytics',
        element: <AdminRoute><Analytics></Analytics></AdminRoute>,
      },

    ],
  },


  { path: '/allblogs', element: <ViewBlogs></ViewBlogs> },

  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/membership', element: <StripePay></StripePay> },

])
