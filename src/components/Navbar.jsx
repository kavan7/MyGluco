
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/contextprovider';
import { Position } from '@syncfusion/ej2/base';
import { bottomSpace } from '@syncfusion/ej2-react-kanban';


const NavButton = ( {title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position={'BottomLeft'}>

  </TooltipComponent>
  
)
const Navbar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
  return (
   <div className='flex justify-between padding-2 md:mx-6 relative'>

   </div>
    
  )
}

export default Navbar;


