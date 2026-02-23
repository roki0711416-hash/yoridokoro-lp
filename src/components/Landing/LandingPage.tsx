import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/components/Landing/legalContent";

const targetUsers = [
  {
    title: "手続き前で気持ちが落ち着かない人",
    description: "不安や混乱を、うまく整理できなくてもそのまま書ける場所です。",
  },
  {
    title: "結果を待つ時間が長く感じる人",
    description: "待っているあいだの揺れや疲れを、言葉にして置いていけます。",
  },
  {
    title: "手続き後も心が追いつかない人",
    description: "区切りのあとに残る気持ちを、比較せずに残せる場です。",
  },
];

const rooms = [
  {
    title: "免責前",
    description: "手続き前の不安や混乱を、そのまま置いていけるルーム。",
  },
  {
    title: "免責待ち",
    description: "結果を待つ時間に揺れる気持ちを残せるルーム。",
  },
  {
    title: "免責後",
    description: "区切りのあとに残る感覚を静かに整理できるルーム。",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "よりどころ",
  url: "https://yoridokoro.blog",
  inLanguage: "ja",
  description: "ひとりで抱えない。気持ちを置ける場所。",
};

export function LandingPage() {
  const appStoreUrl =
    process.env.NEXT_PUBLIC_APPSTORE_URL ?? "https://apps.apple.com/jp/app/id0000000000";

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_rgba(86,99,145,0.14)] backdrop-blur-sm sm:p-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <p className="inline-block rounded-full bg-[#E8EDFF] px-3 py-1 text-xs font-medium text-[#5260A1]">
              iOSアプリ
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#2A2F43] sm:text-5xl">
              よりどころ
            </h1>
            <p className="text-lg leading-relaxed text-[#4D5576] sm:text-xl">
              ひとりで抱えない。気持ちを置ける場所。
            </p>
            <p className="text-sm leading-7 text-[#5A6388]">
              自己破産・免責の経験や途中にある気持ちを、安心して置けるコミュニティアプリです。
              正しさよりも、いまの感覚を大切にします。
            </p>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#566391] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#46527d]"
            >
              App Storeで見る
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#FFF7EE] p-4 shadow-inner">
              <Image
                src="/yoridokoro-icon.png"
                alt="よりどころ アプリアイコン"
                width={520}
                height={520}
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
            <div className="rounded-3xl bg-[#EEF2FF] p-4 shadow-inner">
              <Image
                src="/app-screenshot.svg"
                alt="よりどころ アプリ画面イメージ"
                width={760}
                height={1440}
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-[#E6EAF8] bg-white/80 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#2D3450]">よりどころとは</h2>
        <p className="mt-3 text-sm leading-8 text-[#4F587B] sm:text-base">
          つらさを比べたり、答えを急いだりしなくていい場所です。
          <br />
          誰かに解決してもらうためではなく、
          <br />
          今この瞬間の気持ちを、そっと置いておくための居場所。
          <br />
          <br />
          同じ時間を生きる人の存在を、
          <br />
          静かに感じられる空間です。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-[#2D3450]">どんな人のための場所か</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {targetUsers.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#E6EAF8] bg-white/80 p-5"
            >
              <h3 className="text-base font-semibold text-[#2E3551]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#576084]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[#2D3450]">3つのルーム</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.title}
              className="rounded-2xl border border-[#E3E9FC] bg-[#F9FBFF] p-5"
            >
              <h3 className="text-base font-semibold text-[#334064]">{room.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5A648A]">{room.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-[#E8EDFF] bg-[#F8FAFF] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#2D3450]">安心のルール</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-[#4F587B]">
          <li>・匿名で投稿できます。</li>
          <li>・誰かを否定したり、責めたりしません。</li>
          <li>・助言や指導ではなく、気持ちの共有を大切にします。</li>
        </ul>
        <p className="mt-4 text-xs leading-6 text-[#69729A]">
          ※医療・法律のアドバイスを提供するサービスではありません。
        </p>
      </section>

      <section className="mt-14 rounded-3xl bg-white/85 p-6 text-center sm:p-8">
        <h2 className="text-2xl font-semibold text-[#2D3450]">iOSアプリで使う</h2>
        <p className="mt-3 text-sm leading-7 text-[#4F587B]">
          まずはApp Storeからインストールして、いまの気持ちをひとことだけでも残してみてください。
        </p>
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#566391] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#46527d]"
        >
          App Storeで見る
        </a>
      </section>

      <footer className="mt-14 mb-4 rounded-3xl border border-[#E6EBF9] bg-white/80 px-6 py-5 text-sm text-[#5A6388]">
        <p className="text-sm text-[#4F587B]">運営者: よりどころ運営</p>
        <p className="mt-2 text-xs leading-6 text-[#6C7498]">
          本サイトおよびアプリは、自己破産・免責に関する体験共有と気持ちの置き場を提供するものであり、
          法律・医療その他の専門的助言を行うものではありません。
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link href="/terms" className="hover:text-[#394468]">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-[#394468]">
            プライバシー
          </Link>
          <Link href="/contact" className="hover:text-[#394468]">
            お問い合わせ
          </Link>
          <Link href="/blog" className="hover:text-[#394468]">
            ブログ
          </Link>
          <span className="text-xs text-[#7B84A6]">連絡先: {SUPPORT_EMAIL}</span>
        </div>
      </footer>
    </main>
  );
}
