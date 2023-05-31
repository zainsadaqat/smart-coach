import Image from 'next/image';
import React from 'react';

type CreateButtonProps = {
  text: String;
};

const CreateButton = ({ text }: CreateButtonProps) => {
  return (
    <>
      <div className="flex items-center py-[10px] px-[16px] border-2 border-[#53389E] rounded-[6px]">
        <div className="">
          <Image
            src={'/assets/icons/AddIcon.png'}
            alt="Add Icon"
            width={12}
            height={12}
          />
        </div>
        <span className="ml-[12px] font-bold text-[12px] text-[#53389E] hover:underline">
          {text}
        </span>
      </div>
    </>
  );
};

export default CreateButton;
