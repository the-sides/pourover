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
      <div className="prose-2xl p-12 bg-amber-700/20 rounded-2xl max-w-[600px] mx-auto">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default BlogContent;
