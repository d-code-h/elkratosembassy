import clsx from 'clsx';
import React from 'react';

const Header = ({ caption, text }: { caption: string; text: string }) => {
  return (
    <header
      className={clsx(
        `space-y-4 h-[409px] flex flex-col justify-center max-sm:text-center px-4 sm:px-12 md:pl-28 bg-no-repeat bg-cover bg-bottom`,
        caption === 'About us'
          ? 'bg-hero-about'
          : caption === 'Sermon'
          ? 'bg-hero-sermon'
          : 'bg-hero-contact',
      )}
    >
      <p className="uppercase">{caption}</p>
      <h2 className="text-h2 font-bold">{text}</h2>
    </header>
  );
};

export default Header;
