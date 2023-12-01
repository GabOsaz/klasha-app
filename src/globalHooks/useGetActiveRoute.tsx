import { usePathname } from 'next/navigation';

function useGetActiveRoute(route: string) {
  const pathname = usePathname();
  const isActive = route === pathname;
  const iconColor = isActive ? '#EF2C5A' : '#0A0A0A';
  return {
    isActive, iconColor,
  };
}

export default useGetActiveRoute;
