const Navbar = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ease-in-out">
      <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md max-w-screen-2xl mx-auto">
        <a
          href={`${base}/`}
          aria-label="KANI Home"
          class="flex items-center gap-3 no-underline group cursor-pointer   "
        >
          {/* LOGO ICON */}
          {/* Note: Gave it a specific width (w-8) so the mask has a canvas to render on */}
          <div
            class="h-12 w-12 bg-[#dbfcff] [mask-image:url('/course/iot-cohort-1/kani_icon_black.svg')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] "
            aria-hidden="true"
          ></div>

          {/* BRAND TEXT */}
          <span class="font-headline-sm  font-bold text-primary text-3xl dark:text-primary-fixed-dim tracking-tight ">
            KANI
          </span>
        </a>

        <div class="hidden md:flex items-center gap-gutter">
          <a
            class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high/50 px-3 py-2 rounded-DEFAULT"
            href="https://app.notion.com/p/Full-Stack-IoT-Bootcamp-362c5729e6cf804d8a2ce03424954788" target="_blank" 

          >
            Curriculum
          </a>
          <a
            class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high/50 px-3 py-2 rounded-DEFAULT"
            href={`${base}/#methodology-section`}
          >
            Methodology
          </a>
          <a
            class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high/50 px-3 py-2 rounded-DEFAULT"
            href={`${base}/contact`}
          >
            Contact Us
          </a>
        </div>
        <div class="hidden md:block">
          <button
            class="bg-secondary-fixed text-black font-label-caps text-label-caps px-6 py-3 hover:bg-secondary transition-colors uppercase tracking-widest"
            onClick={() => {
              window.open(
                "https://payments.cashfree.com/forms?code=kani-iot",
                "_blank",
              );
            }}
          >
            Apply Now
          </button>
        </div>

          <button
            class=" md:hidden mr-8 bg-secondary-fixed text-black font-label-caps text-label-caps px-6 py-3 hover:bg-secondary transition-colors uppercase tracking-widest"
            onClick={() => {
              window.open(
                "https://payments.cashfree.com/forms?code=kani-iot",
                "_blank",
              );
            }}
          >
            Apply Now
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
