/* eslint-disable max-len */
import useGetActiveRoute from '@/globalHooks/useGetActiveRoute';

function Analytics({ route }) {
  const { iconColor } = useGetActiveRoute(route);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4019_635)">
        <rect x="2.25" y="12.75" width="4.5" height="7.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9.75" y="9" width="4.5" height="11.25" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="17.25" y="3.75" width="4.5" height="16.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_4019_635">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

export default Analytics;
