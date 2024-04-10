
import { LogoutBtn, Container, Logo } from '../index'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
  const authStatus = useSelector(state => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
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
  return (
    <header className=' fixed w-screen'>
      <Container>
        <nav className="flex items-center  justify-between p-4 z-10">
          <div className="mr-4">
            <Link to='/'>
              <Logo
                widht="70px"
                LogoName='B.'
                className="text-white font-sans tracking-wider uppercase text-6xl text-stroke "
              />
            </Link>
          </div>
          <ul className='flex items-center text-center justify-between border-[2px] min-w-[28vw]  bg-[#c4c4c4]  dark:bg-[#1b2728] rounded-md py-3 px-2 h-full dark:border-[#dbdbdb] border-[#121e19]'>
            {
              navItems.map((items) => (
                items.active ? (
                  <li key={items.name} className='list-none text-center '>
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
  )
}

export default Header
