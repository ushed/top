// app/creation/page.tsx
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllCreations, CreationType } from "./data";

const CreationPage: FC = async () => {
  const creationPosts: CreationType[] = await getAllCreations();

  return (
    <main id="main">
      <section id="creations" className="wrapper">
        <h2 className="sec-title">
          Crea<span>tion</span>
        </h2>
        <ul>
          {creationPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/creation/${post.id}`}>
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={500}
                  height={500}
                />
                <p>{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CreationPage;
