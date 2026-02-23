import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-[#E6EAF8] bg-white/85 p-6 sm:p-8">
        <p className="text-xs text-[#6A7193]">{post.publishedAt}</p>
        <h1 className="mt-2 text-2xl font-bold text-[#2D3450]">{post.title}</h1>
        <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#4F587B]">
          {post.excerpt}
          {"\n\n"}
          ※このページはブログ機能拡張用の土台です。今後、記事本文データ（MDX/CMS）を接続予定です。
        </p>
      </article>
    </main>
  );
}
