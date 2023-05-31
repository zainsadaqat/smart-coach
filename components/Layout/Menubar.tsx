import Image from 'next/image';
import React from 'react';
import CreateButton from '../Buttons/CreateButton';
import Heading1 from '../Headings/Heading1';

const Menubar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="p-[32px]">
        <Heading1 text="Hello, John Doe!" />
      </div>
      <div className="flex items-center">
        <div className="mr-[24px]">
          <CreateButton text="Create event" />
        </div>
        <div className="flex items-center border-2 border-[#D0D5DD] rounded-[80px]">
          <div className="p-[8px]">
            <Image
              src={'/assets/icons/HamburgerIcon.png'}
              alt="Hamburger Icon"
              width={18}
              height={12}
            />
          </div>
          <div className="pl-[10px]">
            <Image
              src={'/assets/images/ProfilePicture.jpg'}
              alt="Profile Picture"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
