import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/appwrite_auth";
import { login, logout } from "./features/authSlice/authSlice";
import { Header, Footer } from './components/index'
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch();



  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoader(false))
  }, [dispatch])

  return !loader ? (
    <div className="max-h-full min-h-screen  w-screen  dark:bg-slate-800 bg-[#cfcfcf] ">

      {/* Header section is start here */}
      <header>
        <Header />
      </header>

      {/* Main Section is Start here */}
      <main className="mx-auto py-28">
        <Outlet />
      </main>

      {/* Footer Section is start here */}
      <footer className="">
        <Footer />
      </footer>

    </div>
  )
    :
    (
      <div role="status" className="animate-pulse mt-10">
        <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div className="h-4 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div className="flex items-center justify-center mt-4">
          <svg className="w-11 h-5 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div className="w-20 h-4 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-full dark:bg-gray-700 relative">

          </div>

          {/* <span className="text-gray-600 font-bold text-3xl pl-3">Loading...</span> */}

        </div>

      </div>
    );
}
