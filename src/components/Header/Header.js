import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className="navbar bg-orange-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></Link>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/dashboard'>Dash Board</Link></li>
                        <li><Link to='/about'>About</Link ></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-40 mr-3' src={logo1} alt="" />
                    <span className='text-white'>EmaJon Cart</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li><Link to='/dashboard'>Dash Board</Link></li>
                    <li><Link to='/about'>About</Link ></li>

                    {/* <li><Link>About</Link></li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Link to='/login' className="btn bg-orange-800 mr-2">Log In</Link>
                {/* <Link to='/signUp' className="btn bg-orange-800">Sign Up</Link> */}
            </div>
        </div>
    );
};

export default Header;