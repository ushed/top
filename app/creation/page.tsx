import Image from "next/image";
import Link from "next/link";

export default function CreationPage() {
  return (
    <main id="main">
      {/* creation */}
      <section id="creations" className="wrapper">
        <h2 className="sec-title">
          Crea<span>tion</span>
        </h2>
        <ul>
          <li>
            <Link href="/creation/Cdetail_1">
              <Image src="/kuma.jpg" alt="kumamoto1" width={500} height={500} />
              <p>Cdetail_1</p>
            </Link>
          </li>
          {/* 他のリスト項目も同様に修正 */}
        </ul>
      </section>
    </main>
  );
}
