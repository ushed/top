export const runtime = "edge";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main">
      <picture>
        <Image src="/kuma.jpg" alt="kumamoto" width={500} height={500} />
      </picture>

      {/* about */}
      <section id="about" className="wrapper">
        <h2 className="sec-title">
          About <span>me</span>
        </h2>
        <ul>
          <li>
            <span>U</span>shed
          </li>
          <li>大学2年生</li>
          <li>エンジニアを目指してます</li>
        </ul>
        <p>
          基本月１更新になると思います
          <br />
          <Link href="/creations">
            <span>Creations</span>
          </Link>
          では創作物、
          <Link href="/blog">
            <span>Blog</span>
          </Link>
          では何かの動機になれば感覚で書いていくつもりです
          <br />
          これらを見ていて、皆さんの中にもチャレンジしてみたいことができたら、ぜひ自分のペースでやってみてください！！
        </p>
      </section>

      {/* creations */}
      <section id="creations" className="wrapper">
        <h2 className="sec-title">
          Crea<span>tions</span>
        </h2>
        <ul>
          <li>
            <Link href="/creations">
              <Image src="/kuma.jpg" alt="kumamoto1" width={500} height={500} />
              <p>
                ああああああああああああああああああああああああああああああああああああああああああああああ
                ああああああああああああああああああああああああああああああああああああああああああああああ
              </p>
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src="/kuma.jpg" alt="kumamoto2" width={500} height={500} />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src="/kuma.jpg" alt="kumamoto3" width={500} height={500} />
            </Link>
          </li>
          <li className="card_hide">
            <Link href="">
              <Image src="/kuma.jpg" alt="kumamoto4" width={500} height={500} />
            </Link>
          </li>
          <li className="card_hide">
            <Link href="">
              <Image src="/kuma.jpg" alt="kumamoto5" width={500} height={500} />
              <p>
                ああああああああああああああああああああああああああああああああああああああああああああああ
              </p>
            </Link>
          </li>
          <li className="card_hide">
            <Link href="">
              <Image src="/kuma.jpg" alt="kumamoto6" width={500} height={500} />
            </Link>
          </li>
        </ul>
        <Link href="/creation" className="btn_a">
          <div className="btn">
            <div className="btn_txt">more creations</div>
          </div>
        </Link>
      </section>

      {/* blog */}
      <section id="blog" className="wrapper">
        <h2 className="sec-title">
          Bl<span>og</span>
        </h2>
        <dl>
          <Link href="/blog-detail_0">
            <dt>2024/01/01</dt>
            <dd>何となくやっていく</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/02</dt>
            <dd>こんにちは、世界2</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/03</dt>
            <dd>こんにちは、世界3</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/04</dt>
            <dd>こんにちは、世界4</dd>
          </Link>
          <Link href="#">
            <dt>2024/01/05</dt>
            <dd>こんにちは、世界5</dd>
          </Link>
        </dl>
        <Link href="/blog" className="btn_a">
          <div className="btn">
            <div className="btn_txt">more blog</div>
          </div>
        </Link>
      </section>

      {/* contact */}
      <section id="contact" className="wrapper">
        <h2 className="sec-title">
          Conta<span>ct</span>
        </h2>
        <p>お問い合わせはこちら</p>
        <form action="https://api.staticforms.xyz/submit" method="post">
          <input
            type="hidden"
            name="accessKey"
            value="c73defff-f819-4205-98e2-3a94c387eee9"
          />
          <input type="text" name="honeypot" style={{ display: "none" }} />
          <dl>
            <dt>
              <label htmlFor="name">お名前</label>
            </dt>
            <dd>
              <input type="text" name="name" required />
            </dd>
            <dt>
              <label htmlFor="email">メールアドレス</label>
            </dt>
            <dd>
              <input type="text" name="email" required />
            </dd>
            <dt>
              <label htmlFor="content">内容</label>
            </dt>
            <dd>
              <textarea name="message" required cols={30} rows={10}></textarea>
            </dd>
          </dl>
          <input
            type="hidden"
            name="redirectTo"
            value="＜ここを遷移先のページのURLに置き換え＞"
          />
          <div className="btn">
            <input type="submit" value="送信" />
          </div>
        </form>
      </section>
    </main>
  );
}
