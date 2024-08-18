// app/creation/[slug]/page.tsx
import { notFound } from "next/navigation";

interface CreationDetailProps {
  id: string;
  date: string;
  text: string;
}

async function fetchCreationData(
  slug: string
): Promise<CreationDetailProps | null> {
  const res = await fetch(`http://localhost:3000/api/creation/${slug}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function CreationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchCreationData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>Creation Detail</h1>
      <p>ID: {data.id}</p>
      <p>Date: {data.date}</p>
      <p>{data.text}</p>
    </div>
  );
}
