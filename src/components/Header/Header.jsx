
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
    <header>
      <Container>
        <nav className="flex items-center justify-between p-4">
          <div className="mr-4">
            <Link to='/'>
              <Logo widht="70px" />
            </Link>
          </div>
          <ul className='flex px-4 items-center justify-center'>
            {
              navItems.map((items) => (
                items.active ? (
                  <li key={items.name} className='list-none text-center'>
                    <NavLink
                      to={items.slug}
                      onClick={() => navigate(items.slug)}
                      /* className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" */
                      className={({ isActive }) => `
                       ${isActive ? 'text-orange-700 bg-slate-200 rounded-sm border-sky-300' : 'text-gray-700'}  duration-200   hover:text-blue-500  px-4`}
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
