import { useState } from "react";
import ErrorAlert from "../components/errorAlert";
import SuccessAlert from "../components/successAlert";
import { fetchHookWithBody } from "../utils/fetchUtil";
const initialState = {
    name: '',
    email: '',
    password: ''
}
const SignUp = () => {
    const [signUpStateObj, setSignUpStateObj] = useState(initialState)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const handleInputChange = event => {
        setSignUpStateObj({
            ...signUpStateObj,
            [event.target.name]: event.target.value
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const signUpPromise = await fetchHookWithBody('users/create-user', { method: 'POST' }, signUpStateObj);
        if (signUpPromise.status === 'ERROR') {
            setError(signUpPromise.message)
        } else {
            setError(null)
            setSuccess('Registration Successful')
            setTimeout(() => {
                window.location.replace('/login')
            }, 2000);
        }
    }
    return (
        <div className="mt-10 flex flex-col items-center justify-center">
            <div className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md" >
                {
                    error && <ErrorAlert error={error} />
                }
                {
                    success && <SuccessAlert message={success} />
                }
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Welcome!!
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Please fill out the form below to sign up
                </div>

                <div className="mt-10">
                    <form action="#" onSubmit={handleFormSubmit}>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="name" className="mb-1 text-xs tracking-wide text-gray-600">Name:</label>
                            <div className="relative">
                                <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>
                                <input id="firstName" type="text" required value={signUpStateObj.name} onChange={handleInputChange} name="name" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your Full Name" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
                            <div className="relative">
                                <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>

                                <input id="email" type="email" required value={signUpStateObj.email} onChange={handleInputChange} name="email" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" >Password:</label>
                            <div className="relative">
                                <div
                                    className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <span>
                                        <i className="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>

                                <input id="password" type="password" required value={signUpStateObj.password} onChange={handleInputChange} name="password" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button type="submit" className=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in ">
                                <span className="mr-2 uppercase">Sign In</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <p className=" inline-flex items-center text-gray-700 font-medium text-xs text-center ">
                    <span className="ml-2">Already have an account?
                        <a href="/login" className="text-xs ml-2 text-blue-500 font-semibold" >Login now</a></span>
                </p>
            </div>
        </div>
    )
}

export default SignUp;
