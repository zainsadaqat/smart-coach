import React from 'react';

type Heading1Props = {
  text: String;
};

const Heading1 = ({ text }: Heading1Props) => {
  return <h1 className="font-semibold text-[48px] text-[#101010]">{text}</h1>;
};

export default Heading1;
