'use client';

import Image from 'next/image';
import SupportBtnIcon from '@/assets/sidebarSvgIcons/SupportBtnIcon';
import HidePanelIcon from '@/assets/sidebarSvgIcons/HidePanelIcon';
import logo from '@/assets/logo.png';
import sidebarT from '@/app/types/sidebarT';
import routes from './routes';
import Button from '../button';
import ListItem from './RouteListItem';

function Sidebar({ setIsSidebarCollapsed, isSidebarCollapsed } : sidebarT) {
  const handleCollapseBtnClick = () => {
    setIsSidebarCollapsed((initialValue) => !initialValue);
  };

  return (
    <div className="w-full h-[100vh] sticky top-0 left-0 px-12 py-[30px] bg-klashaWhite">
      <div>
        <Image alt="Klasha logo" src={logo} width={84} height={26} />
      </div>
      <div className="pt-6">
        {routes.map((route) => (
          <div key={route.groupTitle} className="mt-8 text-base">
            <p
              data-testid="routeGroupText"
              className={`text-shades-black-400 transform truncate delay-1000 ${isSidebarCollapsed ? 'text-center' : 'text-start'}`}
            >
              {isSidebarCollapsed ? route.groupTitle.substring(0, 1) : route.groupTitle}
            </p>
            <ul>
              {route.pages.map((page) => (
                <ListItem key={page.pageName} page={page} isSidebarCollapsed={isSidebarCollapsed} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-28 space-y-[14px]">
        <Button
          leftIcon={<SupportBtnIcon />}
          className={`rounded-[39px] py-2 text-white bg-primary-pink-500 ${isSidebarCollapsed ? 'w-12' : 'w-[120px]'}`}
          text={isSidebarCollapsed ? '' : 'Support'}
        />
        <Button
          dataTestId="togglePannel"
          leftIcon={(
            <div className={isSidebarCollapsed ? 'rotate-180' : ''}>
              <HidePanelIcon />
            </div>
          )}
          onClick={handleCollapseBtnClick}
          className={`${isSidebarCollapsed ? 'w-12' : 'w-[120px]'} text-shades-black border-[#0A0A0A] border rounded-lg`}
          text={isSidebarCollapsed ? '' : 'Hide panel'}
        />
      </div>
    </div>
  );
}

export default Sidebar;
