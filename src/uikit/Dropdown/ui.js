import React from 'react';

import Column from '../Column';
import Row from '../Row';
import ChevronIcon from '../../icons/ChevronIcon';

import { styleComponent } from 'components/Utils';

import {
  dropdownContainer,
  dropdownItemWrapper,
  dropdownOptionsContainer,
  dropdownArrowIcon,
} from './Dropdown.module.css';

export const DropdownContainer = styleComponent(Row, dropdownContainer);
export const ItemWrapper = styleComponent('div', dropdownItemWrapper);
export const DropdownLabelContainer = styleComponent(Row);

export const DropdownOptionsContainer = ({ children, align, hideTip = false, ...props }) => (
  <Column className={`${dropdownOptionsContainer} ${hideTip ? '' : 'showTip'}`} {...props}>
    {children}
  </Column>
);

export const DropdownArrowIcon = ({ isOpen = false, ...props }) => (
  <ChevronIcon className={`${dropdownArrowIcon} ${isOpen ? 'open' : ''}`} {...props} />
);

export const DropdownExpandedContainer = styleComponent('div');
