import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logOutHandler = () => {
    setIsOpen(false);
  };
  const user = { id: "sarthak", role: "admin" };
  return (
    <nav className="header">
      <Link to={"/"} onClick={() => setIsOpen(false)}>
        {" "}
        HOME
      </Link>
      <Link to={"/search"} onClick={() => setIsOpen(false)}>
        <FaSearch />
      </Link>
      <Link to={"/cart"} onClick={() => setIsOpen(false)}>
        <FaShoppingCart />
      </Link>
      {user?.id ? (
        <>
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to="/admin/dashboard" onClick={() => setIsOpen(false)}>
                  admin
                </Link>
              )}
              <Link to={"/orders"} onClick={() => setIsOpen(false)}>
                Orders
              </Link>
              <FaSignOutAlt onClick={logOutHandler}>Sign Out</FaSignOutAlt>
            </div>
          </dialog>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        </>
      )}
    </nav>
  );
};
