import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='text-xl font-old'><Link to='/dashboard'>Customer List</Link></li>
                        <li className='text-xl font-old'><Link to='/dashboard/orderlist'>Order List</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;