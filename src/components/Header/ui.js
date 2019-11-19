import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'uikit/Row';
import { DropdownContainer, DropdownOptionsContainer } from 'uikit/Dropdown';
import { DropdownLabelContainer } from 'uikit/Dropdown/ui';
import ExternalLink from 'uikit/ExternalLink';

import {
  navLink,
  linkButtonActive,
  linkAsButton,
  navBarList,
  navbarDropdownOptionsContainer,
  navbarDropdownWrapper,
  navbarDropdownRow,
  dropdownLink,
  menuLabelContainer,
} from './Header.module.css';

export const NavLink = ({ children, className = '', to, currentPathName, ...props }) => {
  const classNames = `${className} ${navLink} ${currentPathName === to ? linkButtonActive : ''}`;
  return (
    <Link className={classNames} to={to} {...props}>
      {children}
    </Link>
  );
};

export const NavBarList = ({ children, style = {} }) => (
  <ul className={navBarList} style={{ ...style }}>
    {children}
  </ul>
);

export const LinkAsButton = ({ children, className, ...props }) => (
  <Link className={`${linkAsButton} ${className}`} {...props}>
    {children}
  </Link>
);

export const NavbarDropdownOptionsContainer = ({ children, className = '', ...props }) => (
  <DropdownOptionsContainer className={`${navbarDropdownOptionsContainer} ${className}`} {...props}>
    {children}
  </DropdownOptionsContainer>
);

export const NavbarKidsFirstDropdown = ({ children, style = {}, ...props }) => (
  <NavbarDropdownOptionsContainer style={{ ...style, left: '-40px' }} {...props}>
    {children}
  </NavbarDropdownOptionsContainer>
);

export const NavbarDropdownWrapper = ({ children, ...props }) => (
  <DropdownContainer className={navbarDropdownWrapper} {...props}>
    {children}
  </DropdownContainer>
);

export const DropdownLink = ({ children, separated = false, ...props }) => (
  <Link className={`${dropdownLink} ${separated ? 'separated' : ''}`} {...props}>
    {children}
  </Link>
);

export const DropdownExternalLink = ({ children, separated = false, ...props }) => (
  <ExternalLink className={`${dropdownLink} ${separated ? 'separated' : ''}`} {...props}>
    {children}
  </ExternalLink>
);

export const DropdownRow = ({ children, className = '', ...props }) => (
  <Row className={`${navbarDropdownRow} ${className}`} {...props}>
    {children}
  </Row>
);

export const MenuLabelContainer = ({ children, className = '', isOpen = false, ...props }) => (
  <DropdownLabelContainer
    className={`${menuLabelContainer} ${className} ${isOpen ? 'open' : ''}`}
    {...props}
  >
    {children}
  </DropdownLabelContainer>
);
