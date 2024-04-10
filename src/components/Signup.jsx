import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/appwrite_auth';
import { login } from '../features/authSlice/authSlice';
import { useForm } from 'react-hook-form';
import { Logo, Input, Button } from './index'


export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data);
            console.log(userData)
            if (userData) {
                const user = await authService.getCurrentUser();
                if (user) {
                    dispatch(login(user))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center ">
            <div className={`border-[2px] border-black dark:border-cyan-100 mx-auto w-full max-w-lg dark:bg-zinc-800 rounded-xl p-10 bg-slate-300`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo 
                        width="100%"
                        
                         />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-blue-400 pb-4">Sign up to create account</h2>
                
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            className=""
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                        <p className="mt-2 text-center text-base dark:text-slate-400">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-blue-400 decoration-transparent"
                    >
                        Sign In
                    </Link>
                </p>
                    </div>
                </form>
            </div>

        </div>
    )
}
