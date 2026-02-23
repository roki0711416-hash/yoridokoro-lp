export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

// 将来はCMSやMDX連携へ差し替え可能
export const blogPosts: BlogPostSummary[] = [
  {
    slug: "welcome",
    title: "よりどころ公式ブログを始めます",
    excerpt: "アプリのアップデート情報や運営からのお知らせを掲載します。",
    publishedAt: "2026-02-22",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
