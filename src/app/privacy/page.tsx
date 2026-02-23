import {
  privacyPolicyEstablishedDate,
  privacyPolicySections,
} from "@/components/Landing/legalContent";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-[#E6EAF8] bg-white/85 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-[#2D3450]">プライバシーポリシー</h1>
        <p className="mt-2 text-sm text-[#5F6789]">制定日: {privacyPolicyEstablishedDate}</p>

        <div className="mt-6 space-y-4">
          {privacyPolicySections.map((section) => (
            <article key={section.title} className="rounded-2xl bg-[#F8FAFF] p-4">
              <h2 className="text-base font-semibold text-[#334064]">{section.title}</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#4F587B]">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
