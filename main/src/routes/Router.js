import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
import RoomEditTable from 'src/views/tables/RoomEditTable';
import BookingRequestsTable from 'src/views/tables/BookingRequestsTable';
import LoginGuest from 'src/views/authentication/auth2/LoginGuest';
import RegisterGuest from 'src/views/authentication/auth2/RegisterGuest';
import LayoutGuest from 'src/layouts/full/LayoutGuest';
import RoomGuest from 'src/views/apps/Rooms/RoomGuest';
import EcommerceDetailGuest from 'src/views/apps/Rooms/EcommerceDetailsGuest';
import FbRoomEditForm from 'src/components/forms/form-layouts/FbRoomEditForm';
import BasicTableBookingStatus from 'src/views/tables/BasicTableBookingStatus';
import RoomCheckout from 'src/views/apps/Rooms/RoomCheckout';

const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const RoomMain = Loadable(lazy(() => import('../views/apps/Rooms/RoomMain')));
const RoomDetail = Loadable(lazy(() => import('../views/apps/Rooms/RoomDetails')));
const CreateRoom = Loadable(lazy(() => import('../views/forms/CreateRoom')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const ownername=localStorage.getItem('ownername')
const guestname=localStorage.getItem('guestname')

console.log("OwnerName,guestName:",ownername,guestname);
const Router = [
  {
    path: 'owner/',
    element: <FullLayout />,
    children: [
     
      { path:  `${ownername}/dashboard`, exact: true, element: <Dashboard /> },
      { path: `${ownername}/myrooms`, exact: true,element: <RoomMain /> },
      { path: `${ownername}/room/detail/:id`, element: <RoomDetail /> },
      { path: `${ownername}/create-room/`, element: <CreateRoom /> },
      { path: `${ownername}/room-edit/`, element: <RoomEditTable /> },
      { path: `${ownername}/booking-requests/`, element: <BookingRequestsTable /> },
      { path: `${ownername}/room-edit/edit/:id`, element: <FbRoomEditForm /> },

      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: 'guest/',
    element: <LayoutGuest />,
    children: [
     
      { path: `${guestname}/explore-rooms/`, exact: true, element: <RoomGuest /> },
 
      { path: `${guestname}/room/detail/${ownername}/:id/`, element: <EcommerceDetailGuest /> },
      { path: `${guestname}/booking-status/`, element: <BasicTableBookingStatus /> },
      { path: `${guestname}/booking/eco-checkout/`, element: <RoomCheckout /> },
  
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/404', element: <Error /> },
      { path: '/owner/login', element: <Login2 /> },
      
      { path: '/owner/register', element: <Register2 /> },
      { path: '/guest/login', element: <LoginGuest /> },
      
      { path: '/guest/register', element: <RegisterGuest /> },
      
     
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default Router;
