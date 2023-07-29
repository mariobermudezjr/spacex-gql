import React from 'react';

// components
import SpaceXSvgLogo from './../Logo';
import MenuLinks from './../MenuLinks';
import MenuButton from './../MenuButton';

//style
import './style.scss';

const TopMenu = ({ rockets, isMenuOpen, isMobileView, toggleMenu }) => (
    <div className="col d-flex justify-content-between align-items-center position-absolute custom-margin">
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {!isMobileView && <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />}
        <SpaceXSvgLogo />
    </div>
);

export default TopMenu;
