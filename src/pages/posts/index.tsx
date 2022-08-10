import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "@components/HolyMountain/Layout/Layout/Layout";
import BasicMeta from "@components/TopLevel/meta/BasicMeta";
import OpenGraphMeta from "@components/TopLevel/meta/OpenGraphMeta";
import TwitterCardMeta from "@components/TopLevel/meta/TwitterCardMeta";
import PostList from "@components/TopLevel/PostList";
import config from "@src/lib/config";
import { countPosts, listPostContent, PostContent } from "@src/lib/posts";
import { listTags, TagContent } from "@src/lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
