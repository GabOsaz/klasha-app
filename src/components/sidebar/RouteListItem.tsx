'use client';

import listItemT from '@/app/types/listItemT';
import useGetActiveRoute from '@/globalHooks/useGetActiveRoute';
import { useRouter } from 'next/navigation';

function ListItem({ page, setIsOpen, isSidebarCollapsed }: listItemT) {
  const { isActive } = useGetActiveRoute(page.to);
  const router = useRouter();
  const onClick = () => {
    router.push(page.to);
    if (setIsOpen) { setIsOpen(false); }
  };

  return (
    <li className="my-3">
      <button
        onClick={onClick}
        type="button"
        className={`flex space-x-2 ${!isActive ? 'transform hover:translate-x-1 transition ease-in-out duration-100' : ''} cursor-pointer`}
      >
        <span>{page.icon}</span>
        <span
          className={`${isActive
            ? 'text-primary-pink-500 font-semibold'
            : 'text-shades-black font-normal'} 
            ${isSidebarCollapsed ? 'hidden' : 'visible'} transform truncate delay-1000`}
        >
          {page.pageName}
        </span>
      </button>
    </li>
  );
}

export default ListItem;
