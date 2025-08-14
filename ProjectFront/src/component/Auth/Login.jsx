import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch("https://project-backend-lmfh.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (res.ok) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("user", JSON.stringify(result.user)); // add this
                alert("Login successful!");
                navigate('/Dashboard');
            }

            else {
                alert(result.message || result.msg || "Login failed.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong.");
        }
    };


    return (
        <div className="font-serif flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-4">
            <div className="w-full max-w-md bg-slate-100 rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">
                        Login
                    </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            className={`mt-1 w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md focus:outline-none focus:ring focus:ring-blue-400`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 4,
                                    message: 'Password must be at least 4 characters'
                                },
                                maxLength: {
                                    value: 8,
                                    message: 'Password must be at most 8 characters'
                                }
                            })}
                            className={`mt-1 w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md focus:outline-none focus:ring focus:ring-blue-400`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button + Link */}
                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white rounded-md hover:opacity-90 transition"
                        >
                            Login
                        </button>

                        <p className="mt-4 text-sm text-black">
                            Don't have an account?{' '}
                            <Link to="/Registration" className="text-blue-600 hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
