// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

type BlogType = {
  title: string;
  date: string;
  text: any;
};

const fetchBlogData = async (slug: string): Promise<BlogType> => {
  try {
    const mdxFilePath = path.join(
      process.cwd(),
      `public/BlogDetail/${slug}.mdx`
    );
    const mdxSource = fs.readFileSync(mdxFilePath, "utf-8");

    const serializedContent = await serialize(mdxSource, {
      parseFrontmatter: true,
    });

    const frontmatter = serializedContent.frontmatter || {};

    return {
      title: (frontmatter.title as string) || "",
      date: (frontmatter.date as string) || "",
      text: serializedContent,
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw new Error("Failed to fetch blog data");
  }
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlogData(params.slug);

  // BlogContent コンポーネントのクライアントサイド動的インポート
  const BlogContent = (await import("./BlogContent")).default;

  return (
    <main id="main">
      <BlogContent slug={params.slug} blog={blog} />
    </main>
  );
};

export default BlogPage;
