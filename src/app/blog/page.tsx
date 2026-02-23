import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-[#E6EAF8] bg-white/85 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-[#2D3450]">ブログ</h1>
        <p className="mt-2 text-sm text-[#5F6789]">
          お知らせ、アップデート、運営からの案内を掲載します。
        </p>

        <div className="mt-6 space-y-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-[#F8FAFF] p-4">
              <p className="text-xs text-[#6A7193]">{post.publishedAt}</p>
              <h2 className="mt-1 text-base font-semibold text-[#334064]">{post.title}</h2>
              <p className="mt-2 text-sm text-[#4F587B]">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-flex text-sm font-medium text-[#4A5B95] hover:underline"
              >
                記事を読む
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
