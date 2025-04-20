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
      <div className="flex items-center container mx-auto px-4">
        <div className="flex-1 h-full">
          <h1 className="text-5xl block font-bold"> {slice.primary.heading} </h1>
          {/* <p className="">{slice.primary.description}</p> */}
        </div>
        <PrismicNextImage className="flex-1 aspect-square object-cover w-1/2" field={slice.primary.image} />
      </div>
    </section>
  );
};

export default BlogHero;
