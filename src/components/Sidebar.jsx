import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/contextprovider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-gray-700 text-md m-2';
  const inactiveLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 bg-gray text-md m-2 hover:bg-gray-300 dark:hover:bg-white ';
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className="flex justify-between items-center">
        <Link to="/" 
        onClick={() => setActiveMenu(false) } className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 "><SiShopware /> <span>Glucose</span></Link>
        <TooltipComponent content="Menu" position="BottomCenter"> 
        <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        className='text-xl rounded-full bg-gray-700 p-3 hover:bg-gray-300 mt-4 block md:block'>
          <MdOutlineCancel />
        </button>
        </TooltipComponent>

      </div>
      <div className='mt-10 '>
        {links.map((item) => (
          <div key={item.title}>
            <p className='text-gray-600 m-2 mt-4 uppercase'>
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink
              to={`/${link.name}`}
              key={link.name}
              onClick={() =>{}}
              className={({isActive }) => 
              isActive ? activeLink : inactiveLink}>
                {link.icon}
                <span className='ml-3 capitalize'>
                  {link.name}

                </span>
              </NavLink>
            ))}
          </div>
          
          
        ))}

      </div>
      
      </>)}

    </div>
  )
}

export default Sidebar