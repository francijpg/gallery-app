import React, { FC, useEffect } from "react";
import utils from "../../../utils";
import {
  SidebarContainer,
  IconStyle,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarStyle";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../redux/thunks/Users";
import { RootState } from "../../../redux/store";

export type StyledButtonProps = {
  isOpen: any;
};

type Props = {
  toggle: () => void;
};

const Sidebar: FC<Props & StyledButtonProps> = ({ isOpen, toggle }) => {
  const { disableScroll, enableScroll } = utils;
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    }
    return () => {
      enableScroll();
    };
  }, [disableScroll, enableScroll, isOpen]);

  const logoutClickHandler = () => {
    dispatch(signOut());
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <IconStyle onClick={toggle}>
        <CloseIcon />
      </IconStyle>
      <SidebarMenu>
        {!authenticated ? (
          <>
            <SidebarLink to="/signup" onClick={toggle}>
              Sign Up
            </SidebarLink>
            <SidebarLink to="/signin" onClick={toggle}>
              Sign In
            </SidebarLink>
          </>
        ) : (
          <>
            <SidebarLink to="/dashboard" onClick={toggle}>
              My Gallery
            </SidebarLink>
            <SidebarLink to="/dashboard/new-content" onClick={toggle}>
              New Content
            </SidebarLink>
            <SidebarLink to="/signin" onClick={logoutClickHandler}>
              Sign out
            </SidebarLink>
          </>
        )}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
