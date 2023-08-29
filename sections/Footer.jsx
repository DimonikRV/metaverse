"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { footerVariants } from "../utils/motion";
import { Info } from "../components/Info";
import { socials } from "../constants";
import styles from "../styles";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative mt-[120px] lg:mt-[40px]`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <Image
            src="/headset.svg"
            alt="headset"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mv-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Info />
          <p className="font-normal text-[14px] text-white opacity-50">
            METAVERUS Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex flex-col self-start p-2">
            <h3 className="font-bold text-[20px] text-white my-4">FOLLOW US</h3>
            <div className="flex gap-4 ">
              {socials.map((social) => (
                <Image
                  src={social.url}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
