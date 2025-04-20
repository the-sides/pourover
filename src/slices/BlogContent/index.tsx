import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogContent`.
 */
export type BlogContentProps = SliceComponentProps<Content.BlogContentSlice>;

/**
 * Component for "BlogContent" Slices.
 */
const BlogContent: FC<BlogContentProps> = ({ slice }) => {
  return (
    <section
    className="py-12 md:py-[20vh]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="prose prose-headings:text-white md:prose-2xl !text-white border-l border-r px-4 border-amber-100 max-w-[600px] mx-auto">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default BlogContent;
