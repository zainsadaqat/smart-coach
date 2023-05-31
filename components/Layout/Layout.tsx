'use client';
import Home from '@/app/page';
import React from 'react';
import './Layout.css';
import Menubar from './Menubar';
import Sidebar from './Sidebar';
const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        <aside className="child">
          <Sidebar />
        </aside>
        <main className="child">
          <Menubar />
          <Home />
        </main>
      </div>
    </div>
  );
};

export default Layout;
