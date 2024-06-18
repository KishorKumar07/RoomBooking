import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
import FixedHeaderTable from 'src/views/tables/FixedHeaderTable';
import BasicTable from 'src/views/tables/BasicTable';
import LoginGuest from 'src/views/authentication/auth2/LoginGuest';
import RegisterGuest from 'src/views/authentication/auth2/RegisterGuest';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));
const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));

/* ****Apps***** */
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));

const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));

// form layout
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));


// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/authentication/auth2/ForgotPassword2')),
);
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// landingpage
const Landingpage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/landingpage" /> },
      { path: '/owner/dashboard', exact: true, element: <ModernDash /> },
      { path: '/owner/myrooms', exact: true,element: <Ecommerce /> },
      { path: '/owner/room/detail/:id', element: <EcommerceDetail /> },
      { path: '/owner/create-room/', element: <FormLayouts /> },
      { path: '/owner/room-edit/', element: <FixedHeaderTable /> },
      { path: '/owner/Allguests/', element: <BasicTable /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/owner/404', element: <Error /> },
      { path: '/owner/login', element: <Login2 /> },
      
      { path: '/auth/register', element: <Register2 /> },
      { path: '/guest/login', element: <LoginGuest /> },
      
      { path: '/guest/register', element: <RegisterGuest /> },
      
     
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
