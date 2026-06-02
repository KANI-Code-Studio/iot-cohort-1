import ContactForm from "../components/ContactForm";
import { useSEO } from "../hooks";

const Contact = () => {
  useSEO({ title: "Contact & Support - KANI Code Studio ", description: "" });

  return (
    <main class="flex-grow w-full min-h-full max-w-screen-2xl mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile py-section-gap flex flex-col gap-section-gap">
      <section class="max-w-3xl">
        <h1 class="font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile text-primary mb-stack-lg">
          Contact &amp; Support
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          Need assistance? Have questions about our curriculum? Reach out to our
          technical support team for prompt resolutions.
        </p>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-stack-lg flex flex-col gap-stack-md transition-all duration-300 hover:border-primary-container/40 group relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-full bg-primary-container/20 group-hover:bg-primary-container transition-colors"></div>
          <div class="w-10 h-10 flex items-center justify-center text-primary-container/80 group-hover:text-primary-container transition-colors">
            <span class="material-symbols-outlined text-3xl">
              alternate_email
            </span>
          </div>
          <h3 class="font-headline-md text-headline-md text-primary">
            Official Support
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant flex-grow">
            For direct inquiries and curriculum support, ping our servers
            directly:
          </p>
          <div class="flex flex-col gap-2 mt-auto">
            <div class="font-technical-xs text-technical-xs text-outline-variant uppercase tracking-wider flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
              Est. Latency: &lt; 24h
            </div>
            <a
              class="inline-block bg-[#02060d] border border-outline-variant/30 px-4 py-3 font-technical-sm text-technical-sm text-primary-container hover:border-primary-container/50 hover:bg-primary-container/5 transition-all group/link"
              href="mailto:ka9i@myyahoo.com"
            >
              $ ping ka9i@myyahoo.com
              <span class="opacity-0 group-hover/link:opacity-100 animate-pulse">
                _
              </span>
            </a>
          </div>
        </div>

        {/* <ContactForm /> */}
      </section>
    </main>
  );
};

export default Contact;
