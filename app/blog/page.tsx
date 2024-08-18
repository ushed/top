import Link from "next/link";

export default function BlogPage() {
  return (
    <main id="main">
      {/* blog */}
      <section id="blog" className="wrapper">
        <h2 className="sec-title">
          Bl<span>og</span>
        </h2>
        <dl>
          <Link href="/blog/1">
            <dt>2024/01/05</dt>
            <dd>何となくやっていく</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界9</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界8</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界7</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界6</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界5</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界4</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界3</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界2</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界1</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界0</dd>
          </Link>
        </dl>
      </section>
    </main>
  );
}
