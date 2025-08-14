import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <div className='h-screen'>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
