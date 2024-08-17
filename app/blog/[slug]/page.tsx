import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";

interface BlogDetailProps {
  data: {
    id: string;
    date: string;
    text: string;
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "public/BlogDetail",
    `${params.slug}.json`
  );

  let data;
  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileData);
  } catch (error) {
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
