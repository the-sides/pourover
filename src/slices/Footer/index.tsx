import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import MountainImg from '@/app/static/mountain.png'

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  return (
    <section
    className="w-full pt-[40vh] mt-auto relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Image className="w-full fade-top-mask" alt="Mountains" src={MountainImg}/>

    </section>
  );
};

export default Footer;
