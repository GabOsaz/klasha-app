/* eslint-disable max-len */
import useGetActiveRoute from '@/globalHooks/useGetActiveRoute';

function PaymentLinks({ route }) {
  const { iconColor } = useGetActiveRoute(route);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4019_664)">
        <path d="M11.4662 6.69381L13.3225 4.83756C14.1084 4.12124 15.1401 3.73529 16.2032 3.7599C17.2663 3.78451 18.279 4.2178 19.0309 4.96972C19.7829 5.72164 20.2161 6.73438 20.2408 7.79747C20.2654 8.86057 19.8794 9.89227 19.1631 10.6782L16.51 13.3219C16.1276 13.7057 15.6732 14.0103 15.1729 14.2181C14.6725 14.4259 14.1361 14.5328 13.5943 14.5328C13.0526 14.5328 12.5161 14.4259 12.0158 14.2181C11.5155 14.0103 11.0611 13.7057 10.6787 13.3219" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5344 17.3048L10.6782 19.1611C9.89228 19.8774 8.86057 20.2634 7.79748 20.2387C6.73438 20.2141 5.72164 19.7808 4.96972 19.0289C4.2178 18.277 3.78451 17.2643 3.7599 16.2012C3.73529 15.1381 4.12124 14.1064 4.83756 13.3205L7.49069 10.6767C7.87306 10.2929 8.32744 9.98837 8.82778 9.78058C9.32811 9.57279 9.86455 9.46582 10.4063 9.46582C10.9481 9.46582 11.4845 9.57279 11.9849 9.78058C12.4852 9.98837 12.9396 10.2929 13.3219 10.6767" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_4019_664">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

export default PaymentLinks;
