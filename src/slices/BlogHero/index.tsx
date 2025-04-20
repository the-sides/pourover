import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `BlogHero`.
 */
export type BlogHeroProps = SliceComponentProps<Content.BlogHeroSlice>;

/**
 * Component for "BlogHero" Slices.
 */
const BlogHero: FC<BlogHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex min-h-[70vh] justify-center items-center container mx-auto px-4">
        <div className="w-fit h-fit m-auto">
          <h1 className="text-8xl w-fit font-bold text-center"> {slice.primary.heading} </h1>
          {/* <p className="">{slice.primary.description}</p> */}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
