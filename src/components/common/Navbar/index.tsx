import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { signOut } from "../../../redux/thunks/Users";

import { Nav, NavLink, MobileIcon, NavMenu, BarsIcon } from "./NavbarStyle";

type Props = {
  toggle: () => void;
};

const Navbar: FC<Props> = ({ toggle }) => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signOut());
  };

  return (
    <Nav>
      <NavLink to="/">Gallery APP</NavLink>
      <MobileIcon onClick={toggle}>
        <BarsIcon />
      </MobileIcon>
      <NavMenu>
        {!authenticated ? (
          <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/dashboard">My Gallery</NavLink>
            <NavLink to="/dashboard/new-content">New Content</NavLink>
            <NavLink to="/signin" onClick={logoutClickHandler}>
              Sign out
            </NavLink>
          </>
        )}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
