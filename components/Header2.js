import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { HeaderContainer, Logo, Nav, DropdownMenu, MenuBar, MobileNav, ProfileLink } from '../styles/HeaderStyles';
import logoImage from '../img/logo.png';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Logo src={logoImage} onClick={() => navigate('/home2')} />
      <MenuBar onClick={toggleMenu}>
        &#9776;
      </MenuBar>
      <Nav>
        <ul>
          <li><a onClick={() => navigate('/home2')}>Home</a></li>
          <li><a onClick={() => navigate('/cari2/:id')}>Cari Kamar</a></li>
          <li><a onClick={() => navigate('/check-order')}>Cek Pesanan</a></li>
          <li><a onClick={() => navigate('/kontak2')}>Hubungi Kami</a></li>
          <li>
            <ProfileLink>
              <FaUserCircle style={{ marginRight: '8px' }} />
              Halo, RRQNovan
            </ProfileLink>
            <DropdownMenu>
              <a onClick={() => navigate('/profile')}>Profile</a>
              <a onClick={() => navigate('/')}>Logout</a>
            </DropdownMenu>
          </li>
        </ul>
      </Nav>
      {isOpen && (
        <MobileNav>
          <a onClick={() => navigate('/home2')}>Home</a>
          <a onClick={() => navigate('/cari2/:id')}>Cari Kos</a>
          <a onClick={() => navigate('/check-order')}>Cek Pesanan</a>
          <a onClick={() => navigate('/kontak2')}>Hubungi Kami</a>
          <a onClick={() => navigate('/profile')}>Edit Profile</a>
          <a onClick={() => navigate('/')}>Logout</a>
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header2;
