import { faCaretDown, faHome, faTableList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  // Get the location object using the useLocation hook
  const location = useLocation();
  return (
    <nav className="relative w-56 text-sm text-white leading-none border-2 border-gray-200 rounded-full inline-flex mt-5">
      {/* The first Link element for the Home page */}
      <Link to="/" className={`flex flex-col justify-center items-center focus:outline-none rounded-l-full px-4 py-2 w-full  relative backdrop-blur-xl bg-opacity-15 bg-purple-600`} id="grid">
        <FontAwesomeIcon icon={faHome} className=' h-5' />
        <span className='font-md font-medium text-base'>Home</span>
      </Link>
      {/* The second Link element for the Categories page */}
      <Link to="/categories" className={`flex flex-col justify-center items-center focus:outline-none rounded-r-full px-4 py-2 w-full  relative before:border-l-2 before:absolute before:h-1/2 before:left-0 before:top-1/4 bg-purple-600 backdrop-blur-xl bg-opacity-15 `} id="list">
        <FontAwesomeIcon icon={faTableList} className=' h-5' />
        <span className='font-md font-medium text-base'>Categories</span>
      </Link>
      {/* The arrow to toggle between Home and Categories*/}
      <FontAwesomeIcon icon={faCaretDown} className={` ease-linear duration-100 text-purple-700 absolute h-7 ${location.pathname === "/categories" ? "left-[71%]" : "left-[21%]"} top-[-28%] `} />
    </nav>
  )
}
