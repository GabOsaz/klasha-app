'use client';

import Image from 'next/image';
import useGetActiveRoute from '@/globalHooks/useGetActiveRoute';
import Link from 'next/link';
import SupportBtnIcon from '@/assets/sidebarSvgIcons/SupportBtnIcon';
import HidePanelIcon from '@/assets/sidebarSvgIcons/HidePanelIcon';
import logo from '@/assets/logo.png';
import listItemT from '@/app/types/listItemT';
import routes from './routes';
import Button from '../button';

function ListItem({ page }: listItemT) {
  const { isActive } = useGetActiveRoute(page.to);
  return (
    <li className="my-3">
      <Link href={page.to} className="flex space-x-2 cursor-pointer">
        <span>{page.icon}</span>
        <span
          className={`${isActive
            ? 'text-primary-pink-500 font-semibold'
            : 'text-shades-black font-normal'}`}
        >
          {page.pageName}
        </span>
      </Link>
    </li>
  );
}

function Sidebar() {
  return (
    <div className="w-full h-[100vh] sticky top-0 left-0 px-12 py-[30px] bg-klashaWhite">
      <div>
        <Image alt="Klasha logo" src={logo} width={84} height={26} />
      </div>
      <div className="pt-6">
        {routes.map((route) => (
          <div key={route.groupTitle} className="mt-8 text-base">
            <p className="text-shades-black-400">{route.groupTitle}</p>
            <ul>
              {route.pages.map((page) => (
                <ListItem key={page.pageName} page={page} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-28 space-y-[14px]">
        <Button
          leftIcon={<SupportBtnIcon />}
          className="rounded-[39px] py-2 text-white bg-primary-pink-500 w-[120px]"
          text="Support"
        />
        <Button
          leftIcon={<HidePanelIcon />}
          className="w-[120px] text-shades-black border-[#0A0A0A] border rounded-lg"
          text="Hide panel"
        />
      </div>
    </div>
  );
}

export default Sidebar;
