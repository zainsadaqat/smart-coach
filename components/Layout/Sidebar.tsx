'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <nav className="sidebar">
      <div className="flex items-center ml-2">
        <Image
          src={'/assets/images/SmartCoachLogo.jpg'}
          alt="Smart Coach Logo"
          width={28}
          height={28}
        />
        <span className="pl-[6px] font-semibold font-[22px]">Smart Coach</span>
      </div>

      {/* Menu Items Start */}
      <div className="flex flex-col justify-between min-h-[90vh]">
        <ul className="mt-[2rem]">
          <Link href={'/'}>
            <li
              className={
                pathName === '/'
                  ? `active my-[8px] py-[8px] px-[12px]`
                  : `my-[8px] py-[8px] px-[12px]`
              }
            >
              <div className="flex items-center">
                <Image
                  src={'/assets/icons/HomeIcon.png'}
                  alt="Home Icon"
                  width={18}
                  height={18}
                />
                <span className="ml-[12px] font-semibold font-[14px] hover:underline">
                  Home
                </span>
              </div>
            </li>
          </Link>

          {/* My Team menu item */}
          <Link href={'/players'}>
            <li
              className={
                pathName === '/players'
                  ? `active my-[8px] py-[8px] px-[12px]`
                  : `my-[8px] py-[8px] px-[12px]`
              }
            >
              <div className="flex items-center">
                <Image
                  src={'/assets/icons/MyTeamIcon.png'}
                  alt="Home Icon"
                  width={18}
                  height={18}
                />
                <span className="ml-[12px] font-semibold font-[14px] hover:underline">
                  My Team
                </span>
              </div>
            </li>
          </Link>

          {/* Events menu item */}
          <Link href={'/events'}>
            <li
              className={
                pathName === '/events'
                  ? `active my-[8px] py-[8px] px-[12px]`
                  : `my-[8px] py-[8px] px-[12px]`
              }
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Image
                    src={'/assets/icons/EventsIcon.png'}
                    alt="Home Icon"
                    width={18}
                    height={18}
                  />
                  <span className="ml-[12px] font-semibold font-[14px] hover:underline">
                    Events
                  </span>
                </div>
                <span className="events-tag">0</span>
              </div>
            </li>
          </Link>
        </ul>

        {/* Help menu item */}
        <div className="p-[8px]">
          <div className="flex items-center">
            <Image
              src={'/assets/icons/HelpIcon.png'}
              alt="Home Icon"
              width={18}
              height={18}
            />
            <span className="ml-[12px] font-semibold font-[14px] hover:underline">
              Help
            </span>
          </div>
        </div>
      </div>
      {/* Menu Items End */}
    </nav>
  );
};

export default Sidebar;
