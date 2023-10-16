import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 left-0 right-0 bg-white shadow dark:bg-gray-800 ">
        <div className="container  flex items-center   justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <NavLink to="/" className="hover-navbar active-navbar ">
            Agregar / Editar
          </NavLink>

          <NavLink to="/list-data" className="hover-navbar active-navbar">
            Listar directores
          </NavLink>
        </div>
      </nav>
    </>
  );
};
