
import { LogoutBtn, Container, Logo } from '../index'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import blogLogo from "../../assets/blog.png"


function Header() {
  const authStatus = useSelector(state => state.auth.status);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  /* return (
    <header className=' fixed w-full '>
      <Container>
        <nav className="flex items-center  justify-between p-4 z-10">
          <div className="mr-4">
            <Link to='/'>
              <Logo
                widht="70px"
                LogoName='B.'
                className="text-white font-sans tracking-wider uppercase text-stroke "
              />
            </Link>
          </div>
          <ul className='flex items-center text-center justify-between border-[2px] min-w-[28vw]  bg-[#c4c4c4]  dark:bg-[#1b2728] rounded-md  py-3 dark:border-[#dbdbdb] border-[#121e19] sm:bg-none flex-wrap '>
            {
              navItems.map((items) => (
                items.active ? (
                  <li key={items.name} className='list-none text-center mx-4'>
                    <NavLink
                      to={items.slug}
                      onClick={() => navigate(items.slug)}

                      className={({ isActive }) => `
                       ${isActive ? 'dark:bg-[#228663] rounded-sm  py-2 px-5 dark:hover:bg-[#228663]  bg-slate-900 text-white ' : 'dark:hover:bg-slate-500 hover:bg-slate-500'}  py-2 px-5 rounded-sm text-[1.1rem] text-slate-900 dark:text-slate-50 `}
                    >{items.name}</NavLink>
                  </li>

                ) : null
              ))
            }
            {
              authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  ) */


  return (
    <>


      <nav className="bg-zinc-200 border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4   relative">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" >
            <img src={blogLogo} className="h-full absolute top-0 left-2 xl:left-4" alt=" Logo" />
          </Link>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>


              </div>

              {/* Here use Input components */}
              {<input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />}

              
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">


              {
                navItems.map((items) => (
                  items.active && (
                    <li key={items.slug}>
                      <NavLink
                        onClick={() => navigate(items.slug)}
                        to={items.slug} className={({ isActive }) => ` block py-2 px-3 border-[2px] duration-100 dark:text-slate-200 border-slate-100 rounded-md ${isActive ? "dark:bg-green-900 bg-stone-500 text-zinc-300" : " hover:bg-gray-400 "}`} aria-current="page" >{items.name}</NavLink>
                    </li>
                  )
                ))
              }

              {
                authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )
              }




            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
