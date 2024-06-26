import React from "react";
import styled from "styled-components";
import { FaBell, FaUserCircle } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #efe7e7;
  background-color:#fff;
  `;
  // position: sticky;
  // top: 0;
  
const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #DC4A2D;
  background-color:#eae2e2;
  padding:15px 21px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;
  border: 2px solid #eae2e2;
  padding: 4px 5px;
  border-radius: 40px;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : "#b2a3a3")};
  border-radius: ${(props) => (props.active ? "40px" : "none")};
  padding: 1rem;
  background-color: ${(props) => (props.active ? "#DC4A2D" : "")};
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const NavIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;

const LogoIcons = styled.img`
  width: 35px;
  height: 35px;
`;
const Header = () => (
  <HeaderContainer>
    <Logo>Logo</Logo>
    <Nav>
      <NavItem active>
        <NavIcon src="/assets/briefcase-02.png" alt="Jobs" /> Jobs
      </NavItem>
      <NavItem>
        <NavIcon src="/assets/Icon.png" alt="Jobs" />
        Messages
      </NavItem>
      <NavItem>
        <NavIcon src="/assets/Icon (1).png" alt="Jobs" />
        Payments
      </NavItem>
    </Nav>
    <Icons>
      <Icon>
        <img src="/assets/bell.png" alt="Jobs" />
      </Icon>
      <Icon>
        <LogoIcons src="/assets/logo.png" alt="Jobs" />
      </Icon>
      <Icon>
        <img src="/assets/down.png" alt="Jobs" />
      </Icon>
    </Icons>
  </HeaderContainer>
);

export default Header;
