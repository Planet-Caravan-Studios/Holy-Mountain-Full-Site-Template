import { PostContent } from "@src/lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import BlogListing from "@components/HolyMountain/Blog/BlogListing/BlogListing";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <BlogListing
    	postHeadline={post.title}
      postSnippet={post.snippet}
      postColumn={post.column}
    	postUrl={'/posts/' + post.slug}
    	postDate={parseISO(post.date)}
      postImage={post.image}
      postAlbumCredit={post.album_credit}
    />
  );
}
