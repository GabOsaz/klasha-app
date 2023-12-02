'use client';

import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import routes from '../sidebar/routes';
import ListItem from '../sidebar/RouteListItem';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="z-20">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </div>
      {isOpen
      && (
      <div className="pt-6 mt-2 slide bg-klashaWhite px-4 absolute h-[100vh] w-full">
        {routes.map((route) => (
          <div key={route.groupTitle} className="mt-8 text-base">
            <p className="text-shades-black-400">{route.groupTitle}</p>
            <ul>
              {route.pages.map((page) => (
                <ListItem key={page.pageName} setIsOpen={setIsOpen} page={page} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default MobileNavbar;
