import styled from "styled-components";
import { StyledButtonProps } from "./";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside<StyledButtonProps>`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  &:hover {
    color: #15cdfc;
  }
`;

export const IconStyle = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin-top: 6rem;

  &:hover {
    color: #245ddd;
    transition: 0.2s ease-in-out;
  }
`;
