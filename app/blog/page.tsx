// app/blog/page.tsx
import { FC } from "react";
import Link from "next/link";
import { getBlogData, BlogPost } from "./data";

const BlogPage: FC = async () => {
  const blogPosts: BlogPost[] = await getBlogData();

  return (
    <main id="main">
      <section id="blog" className="wrapper">
        <h2 className="sec-title">
          Bl<span>og</span>
        </h2>
        <dl>
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <dt>{post.date}</dt>
              <dd>{post.title}</dd>
            </Link>
          ))}
        </dl>
      </section>
    </main>
  );
};

export default BlogPage;
