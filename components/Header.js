import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, MenuBar, MobileNav, LoginButton } from '../styles/HeaderStyles';
import logoImage from '../img/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src={logoImage} onClick={() => navigate('/')} />
      <MenuBar onClick={toggleMenu}>
        &#9776;
      </MenuBar>
      <Nav>
        <ul>
          <li><a onClick={() => navigate('/')}>Home</a></li>
          <li><a onClick={() => navigate('/cari/:id')}>Cari Kamar</a></li>
          <li><a onClick={() => navigate('/kontak')}>Hubungi Kami</a></li>
          <li>
            <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
          </li>
        </ul>
      </Nav>
      {isOpen && (
        <MobileNav>
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/cari/:id')}>Cari Kos</a>
          <a onClick={() => navigate('/kontak')}>Hubungi Kami</a>
          <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header;
