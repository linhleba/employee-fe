import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Paths from '../../Paths';
import { Routes, Route, Outlet } from 'react-router-dom';
import './Layout.css';

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <div className="layout_content-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
