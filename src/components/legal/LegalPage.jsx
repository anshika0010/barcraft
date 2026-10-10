import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";

// Shared layout for legal pages (privacy, cookies): numbered sections with
// optional intro paragraphs, a bullet list and closing paragraphs.
export default function LegalPage({ title, lastUpdated, sections }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black px-4 pb-[80px] pt-[130px] sm:px-6 lg:px-[28px] lg:pb-[110px] lg:pt-[170px]">
        {/* =====================================================
            HEADING
        ====================================================== */}
        <h1
          className="
            text-center
            font-movault
            text-[42px]
            font-normal
            uppercase
            leading-[0.9]
            text-brand-yellow
            sm:text-[60px]
            lg:text-[88px]
            xl:text-[120px]
          "
        >
          {title}
        </h1>

        <p className="mt-5 text-center font-sf-pro text-[13px] text-white/50 sm:text-[14px]">
          Last updated: {lastUpdated}
        </p>

        {/* =====================================================
            POLICY CONTENT
        ====================================================== */}
        <div className="mx-auto mt-10 flex w-full max-w-[826px] flex-col gap-10 lg:mt-[65px] lg:gap-12">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="font-sf-pro text-[20px] font-bold leading-[1.25] text-white sm:text-[24px]">
                <span className="mr-2 text-brand-yellow">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {section.title}
              </h2>

              <div className="mt-4 flex flex-col gap-4 font-sf-pro text-[15px] leading-[1.65] text-white/70 sm:text-[16px]">
                {section.body?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {section.list && (
                  <ul className="flex flex-col gap-3 pl-5 marker:text-brand-yellow [list-style:disc]">
                    {section.list.map((item, i) => (
                      <li key={i} className="[&_code]:text-white [&_strong]:font-medium [&_strong]:text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.after?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
