import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
import FixedHeaderTable from 'src/views/tables/FixedHeaderTable';
import BasicTable from 'src/views/tables/BasicTable';
import LoginGuest from 'src/views/authentication/auth2/LoginGuest';
import RegisterGuest from 'src/views/authentication/auth2/RegisterGuest';
import LayoutGuest from 'src/layouts/full/LayoutGuest';
import EcommerceGuest from 'src/views/apps/eCommerce/EcommerceGuest';
import EcommerceDetailGuest from 'src/views/apps/eCommerce/EcommerceDetailsGuest';
import FbRoomEditForm from 'src/components/forms/form-layouts/FbRoomEditForm';
import BasicTableAllGuests from 'src/views/tables/BasicTableAllGuests';
import BasicTableBookingStatus from 'src/views/tables/BasicTableBookingStatus';
import EcommerceCheckout from 'src/views/apps/eCommerce/EcommerceCheckout';

const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const ownername=localStorage.getItem('ownername')
const guestname=localStorage.getItem('guestname')
const Router = [
  {
    path: '/owner',
    element: <FullLayout />,
    children: [
     
      { path:  `${ownername}/dashboard`, exact: true, element: <ModernDash /> },
      { path: `${ownername}/myrooms`, exact: true,element: <Ecommerce /> },
      { path: `${ownername}/room/detail/:id`, element: <EcommerceDetail /> },
      { path: `${ownername}/create-room/`, element: <FormLayouts /> },
      { path: `${ownername}/room-edit/`, element: <FixedHeaderTable /> },
      { path: `${ownername}/Allguests/`, element: <BasicTableAllGuests /> },
      { path: `${ownername}/booking-requests/`, element: <BasicTable /> },
      { path: `${ownername}/room-edit/edit/:id`, element: <FbRoomEditForm /> },

      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/guest',
    element: <LayoutGuest />,
    children: [
     
      { path: `${guestname}/explore-rooms/`, exact: true, element: <EcommerceGuest /> },
 
      { path: `${guestname}/room/detail/${ownername}/:id/`, element: <EcommerceDetailGuest /> },
      { path: `${guestname}/booking-status/`, element: <BasicTableBookingStatus /> },
      { path: `${guestname}/booking/eco-checkout/`, element: <EcommerceCheckout /> },
  
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/owner/404', element: <Error /> },
      { path: '/owner/login', element: <Login2 /> },
      
      { path: '/owner/register', element: <Register2 /> },
      { path: '/guest/login', element: <LoginGuest /> },
      
      { path: '/guest/register', element: <RegisterGuest /> },
      
     
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default Router;
