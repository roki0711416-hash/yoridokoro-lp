import { SUPPORT_EMAIL } from "@/components/Landing/legalContent";

export default function ContactPage() {
  const subject = encodeURIComponent("[よりどころ] お問い合わせ");
  const body = encodeURIComponent(
    [
      "カテゴリ：ご意見",
      "",
      "本文：",
      "",
      "---",
      "このアプリは法律/金融/医療相談ではありません。",
      "氏名・住所・電話番号などの個人情報は入力しないでください。",
    ].join("\n"),
  );

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-[#E6EAF8] bg-white/85 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-[#2D3450]">お問い合わせ</h1>
        <p className="mt-3 text-sm leading-7 text-[#4F587B]">
          不明点や気になることがあれば、無理のない範囲でご連絡ください。
        </p>

        <div className="mt-6 rounded-2xl bg-[#F8FAFF] p-4 text-sm text-[#4F587B]">
          <p className="font-semibold text-[#334064]">連絡先</p>
          <p className="mt-1">{SUPPORT_EMAIL}</p>
        </div>

        <ul className="mt-5 space-y-1 text-sm text-[#5A6388]">
          <li>・このアプリは法律/金融/医療相談ではありません。</li>
          <li>・氏名・住所・電話番号などの個人情報は入力しないでください。</li>
        </ul>

        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#566391] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#46527d]"
        >
          メールで送る
        </a>
      </section>
    </main>
  );
}
