'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { Button } from './Button';
import { Info } from './Info';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleInfoMenu = () => {
    setVisible((prev) => !prev);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          className='object-contain'
          src='/search.svg'
          width={24}
          height={24}
          alt='search'
        />
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          METAVERSUS
        </h2>
        <Button className='w-[24px] h-[24px]' onClick={handleInfoMenu}>
          <Image
            className='object-contain'
            src='/menu.svg'
            width={24}
            height={24}
            alt='menu'
          />
        </Button>
        {visible && <Info position='absolute' />}
      </div>
    </motion.nav>
  );
};

export default Navbar;
