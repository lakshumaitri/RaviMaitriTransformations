import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        {/* LOGO */}

        <div className="leading-tight">

          <div className="text-orange-500 text-xl sm:text-2xl md:text-3xl font-extrabold">

            Ravi Maitri

          </div>

          <div className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold">

            Transformations

          </div>

        </div>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">

          <a
            href="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </a>

          <a
            href="/services"
            className="hover:text-orange-500 transition"
          >
            Services
          </a>

          <a
            href="/transformations"
            className="hover:text-orange-500 transition"
          >
            Transformations
          </a>

          <Link
            to="/community"
            className="hover:text-orange-500 transition"
          >
            Community
          </Link>

          <Link
            to="/session-booking"
            className="hover:text-orange-500 transition"
          >
            Book Session
          </Link>

          <Link
            to="/register"
            className="hover:text-orange-500 transition"
          >
            Join
          </Link>

          <a
  href="/contact"
  className="hover:text-orange-500 transition"
>
  Contact
</a>

          <Link
            to="/client-login"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl transition"
          >
            Client Login
          </Link>
 

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50"
        >

          {
            menuOpen
              ? <X size={30} />
              : <Menu size={30} />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (

          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-6 text-lg font-medium">

            <a
              href="/"
              onClick={closeMenu}
              className="hover:text-orange-500 transition"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="hover:text-orange-500 transition"
            >
              Services
            </a>

            <a
              href="#transformations"
              onClick={closeMenu}
              className="hover:text-orange-500 transition"
            >
              Transformations
            </a>

            <Link
              to="/community"
              onClick={closeMenu}
              className="hover:text-orange-500 transition"
            >
              Community
            </Link>

            <Link
              to="/session-booking"
              onClick={closeMenu}
              className="hover:text-orange-500 transition"
            >
              Book Session
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="hover:text-orange-500 transition"
            >
              Join
            </Link>
            <a
  href="/contact"
  className="hover:text-orange-500 transition"
>
  Contact
</a>

            <Link
              to="/client-login"
              onClick={closeMenu}
              className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl transition text-center"
            >
              Client Login
            </Link>
            

          </div>

        )
      }

    </nav>

  );

}

export default Navbar;