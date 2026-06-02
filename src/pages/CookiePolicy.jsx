import { useSEO } from "../hooks/useSEO";

const CookiePolicy = () => {
  useSEO({ title: "Cookie Policy - KANI Code Studio", description: "" });
  return (
    <main class="flex-grow pt-section-gap pb-section-gap px-margin-mobile md:px-margin-desktop max-w-screen-lg mx-auto w-full">
      <header class="mb-stack-lg border-b border-outline-variant/20 pb-stack-lg">
        <span class="font-technical-xs text-technical-xs text-primary-container uppercase tracking-widest block mb-stack-sm">
          Legal Documentation
        </span>
        <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Cookies Policy
        </h1>
      </header>
      <article class="space-y-stack-lg font-body-md text-body-md text-on-surface-variant">
        <section>
          <h2 class="font-headline-md text-headline-md text-primary mb-stack-md">
            What Are Cookies?
          </h2>
          <p class="mb-stack-md leading-relaxed max-w-3xl">
            Cookies are small text files placed on your device when you visit
            the KANI Group website. They help us provide a seamless
            browsing experience.
          </p>
        </section>
        <section class="mt-section-gap">
          <h2 class="font-headline-md text-headline-md text-primary mb-stack-md">
            How We Use Them
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div class="p-stack-lg border border-outline-variant/20 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300">
              <span class="material-symbols-outlined text-primary-container mb-stack-sm text-3xl">
                shield_lock
              </span>
              <strong class="font-technical-sm text-technical-sm text-on-surface block mb-2">
                Essential Cookies
              </strong>
              <p class="opacity-80 text-sm">
                Required for the website to function, such as keeping you logged
                in and processing your enrollment securely via Cashfree.
              </p>
            </div>
            <div class="p-stack-lg border border-outline-variant/20 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300">
              <span class="material-symbols-outlined text-primary-container mb-stack-sm text-3xl">
                monitoring
              </span>
              <strong class="font-technical-sm text-technical-sm text-on-surface block mb-2">
                Analytics Cookies
              </strong>
              <p class="opacity-80 text-sm">
                We track how users navigate our landing page to understand what
                content performs best.
              </p>
            </div>
            <div class="p-stack-lg border border-outline-variant/20 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300">
              <span class="material-symbols-outlined text-primary-container mb-stack-sm text-3xl">
                ads_click
              </span>
              <strong class="font-technical-sm text-technical-sm text-on-surface block mb-2">
                Marketing Cookies
              </strong>
              <p class="opacity-80 text-sm">
                We may use cookies to track advertising conversions to see how
                many users enroll after viewing our promotional content.
              </p>
            </div>
          </div>
          <p class="mt-stack-lg leading-relaxed text-on-surface-variant max-w-3xl">
            By continuing to use our website, you consent to the use of these
            cookies. You can disable cookies in your browser settings, but doing
            so may break the checkout process.
          </p>
        </section>
      </article>
    </main>
  );
};

export default CookiePolicy;
