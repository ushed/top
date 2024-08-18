// app/creation/[slug]/page.tsx
import { notFound } from "next/navigation";

interface BlogDetailProps {
  id: string;
  date: string;
  text: string;
}

async function fetchBlogData(slug: string): Promise<BlogDetailProps | null> {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchBlogData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>Blog Detail</h1>
      <p>ID: {data.id}</p>
      <p>Date: {data.date}</p>
      <p>{data.text}</p>
    </div>
  );
}
