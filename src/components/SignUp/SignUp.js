import React from 'react';
import { Link } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";

const SignUp = () => {
    return (
        <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3   bg-slate-700   text-gray-100">
            <h1 className="text-2xl font-bold text-center">Sign up</h1>
            <form
                className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block   text-gray-400">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block   text-gray-400">
                        Phone Number
                    </label>
                    <input
                        // type="number"
                        name="number"
                        id="number"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block   text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block   text-gray-400">
                        Profile photo URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        id="photo"
                        placeholder="profile photo url"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
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
                        placeholder="Password"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                    <span
                        className="absolute right-4 top-1/2"

                    >

                    </span>
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="confirm" className="block   text-gray-400">
                        Confirm Password
                    </label>
                    <input
                        type="confirm"
                        name="confirm"
                        id="confirm"
                        placeholder="confirm password"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                    <span
                        className="absolute right-4 top-1/2"

                    >

                    </span>
                </div>
                <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300">
                    Sign up
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
                <p className="px-3 text-sm   text-gray-400">
                    Signup with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
            </div>
            <div className="flex justify-between space-x-10">
                <h2
                    className="bg-red-500 text-2xl w-full  flex justify-center py-2 cursor-pointer"
                >

                </h2>
                <h2
                    className="bg-black text-2xl w-full  flex justify-center py-2 cursor-pointer"
                >
                </h2>
            </div>
            <p className="text-xs text-center sm:px-6   text-gray-400">
                Already have an account?
                <Link to="/login" className="ml-2 underline   text-gray-100">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default SignUp;