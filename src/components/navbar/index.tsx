/* eslint-disable jsx-a11y/control-has-associated-label */
import ProfileIcon from '@/assets/navbarIcons/ProfileIcon';
import Chevron from '@/assets/navbarIcons/Chevron';

function Navbar() {
  return (
    <nav className="flex justify-end py-4 px-8 border-b w-full">
      <div className="flex space-x-4 items-center">
        <button type="button">
          <ProfileIcon />
        </button>
        <button type="button" className="flex space-x-1 items-center">
          <span className="text-sm font-semibold">EN</span>
          <Chevron />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
