import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3 rounded-xl   bg-slate-700   text-gray-100">
            <h1 className="text-2xl font-bold text-center">Sign in</h1>
            <form className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block   text-gray-400">
                        Phone Number
                    </label>
                    <input
                        // type="number"
                        name="number"
                        id="number"
                        placeholder="0170000000"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                    />
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block   text-gray-400">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="**********"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                    />
                    <span
                        className="absolute right-4 top-1/2"
                    >
                    </span>
                </div>
                <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300">
                    Sign in
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16   bg-gray-400 "></div>
                <p className="px-3 text-sm   text-gray-400">
                    Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
            </div>
            <div className="flex justify-between space-x-4">
                <h2
                    className="bg-red-500 text-2xl w-full rounded-full flex justify-center py-2 cursor-pointer"
                >
                    <FaGoogle />
                </h2>
                <h2
                    className="bg-black text-2xl w-full rounded-full flex justify-center py-2 cursor-pointer"
                >
                    <FaGithub />
                </h2>
            </div>
            <p className="text-xs text-center sm:px-6   text-gray-400">
                Don't have an account?
                <Link to="/signUp" className="ml-2 underline   text-gray-100">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;