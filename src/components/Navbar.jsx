import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-black-600" : "text-black" } >
        
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/home' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          3D
        </NavLink>
        
        

      </nav>
    </header>
  );
};

export default Navbar;