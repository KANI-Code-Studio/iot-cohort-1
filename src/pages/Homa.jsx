import { Checkout } from "../components";
import { useSEO } from "../hooks";

const Homa = () => {
  useSEO({
    title: "KANI Code Studio | Master Full-Stack Web &amp; IoT Engineering",
    description: "",
  });
  return (
    <main>
      <section
        class="relative pt-[160px] pb-section-gap px-margin-mobile md:px-margin-desktop min-h-[90vh] flex items-center"
        id="hero-section"
      >
        <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div class="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]"></div>
          <div class="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[100px]"></div>
          <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-fixed/5 rounded-full blur-[100px]"></div>
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjQwLCAyNTUsIDAuMSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 opacity-50"></div>
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] opacity-50"></div>
        </div>
        <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          <div class="lg:col-span-6 flex flex-col gap-8">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-3">
                <div class="w-1 h-1 bg-secondary-fixed rounded-full"></div>
                <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest opacity-80">
                  Organized by KANI Group | KANI Code Studio
                </span>
              </div>
              <h1 class="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface leading-[1.1] tracking-tight">
                Master Full-Stack Web <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-blue-400">
                  &amp; IoT Engineering.
                </span>
              </h1>
            </div>
            <div class="flex flex-col gap-6 border-l border-primary-container/20 pl-6 ml-1">
              <p class="font-technical-sm text-technical-sm text-primary-container bg-primary-container/5 border border-primary-container/10 inline-block px-4 py-1.5 rounded w-fit tracking-wide">
                720 Hours. 14 Projects. Zero Theory.
              </p>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                The tech industry doesn't hire certificates; it hires engineers
                who can build. Go from writing your first line of Python to
                deploying a commercial-grade IoT hardware platform in 7 months.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                class="inline-flex justify-center items-center bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-8 py-4 rounded hover:bg-[#8aff6e] transition-all duration-300 shadow-[0_0_20px_rgba(121,255,91,0.2)] hover:shadow-[0_0_30px_rgba(121,255,91,0.4)] tracking-widest uppercase"
                href="#checkout-section"
              >
                Apply for the Cohort
              </a>
              <button
                class="inline-flex justify-center items-center border border-primary-container/30 text-primary-container font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary-container/5 hover:border-primary-container transition-all duration-300 tracking-widest uppercase"
                onClick={() => {
                  window.open(
                    "https://app.notion.com/p/Full-Stack-IoT-Bootcamp-362c5729e6cf804d8a2ce03424954788",
                    "_blank",
                  );
                }}
              >
                View Curriculum
              </button>
            </div>
          </div>
          <div class="lg:col-span-6 mt-12 lg:mt-0 relative">
            <div class="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-panel flex items-center justify-center p-1 border border-primary-container/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div class="absolute top-4 left-4 flex gap-2 z-20">
                <div class="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-secondary-fixed/80"></div>
              </div>
              <div class="absolute bottom-4 right-4 z-20 font-technical-xs text-[10px] text-primary-container/50 tracking-widest">
                SYS_VISUALIZATION_V2.4
              </div>
              <img
                alt="Complex IoT and Full Stack Web Development Environment Visualization"
                class="w-full h-full object-cover rounded-xl opacity-80 mix-blend-screen"
                src="https://ik.imagekit.io/rax/Kani%20Course%202026/Gemini_Generated_Image_6kc1yh6kc1yh6kc1.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#020b18] relative border-y border-outline-variant/10"
        id="glance-section"
      >
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cgk8L3N2Zz4=')]"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
            <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Engineered for Every Learner.
              <br />
              <span class="text-primary-container">
                Built for the Industry.
              </span>
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to bypass 'tutorial hell' and build a resume
              that stands out to top-tier technical recruiters.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="cyber-card p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group">
              <div class="w-10 h-10 rounded-lg bg-surface-bright/50 border border-primary-container/20 flex items-center justify-center text-primary-container">
                <span
                  class="material-symbols-outlined"
                  style="font-size: 20px;"
                >
                  timer
                </span>
              </div>
              <div>
                <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">
                  The Scale
                </h3>
                <p class="font-technical-sm text-technical-sm text-on-surface leading-relaxed">
                  <span class="text-primary-container">7 Months</span>
                  <br />
                  <span class="opacity-80">5 Days a Week</span>
                  <br />
                  <span class="opacity-80">4 Hours a Day</span>
                  <br />
                  <span class="text-on-surface-variant text-xs mt-4 block border-t border-outline-variant/20 pt-4">
                    720 HOURS TOTAL
                  </span>
                </p>
              </div>
            </div>
            <div class="cyber-card p-8 rounded-2xl flex flex-col gap-6 md:col-span-2 relative overflow-hidden group">
              <div class="absolute right-0 top-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[60px] -mr-10 -mt-10 transition-opacity duration-700 group-hover:opacity-100 opacity-30 pointer-events-none"></div>
              <div class="w-10 h-10 rounded-lg bg-surface-bright/50 border border-primary-container/20 flex items-center justify-center text-primary-container relative z-10">
                <span
                  class="material-symbols-outlined"
                  style="font-size: 20px;"
                >
                  developer_board
                </span>
              </div>
              <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest relative z-10">
                The Stack
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant relative z-10 max-w-xl">
                Master both domains simultaneously. We bridge the critical gap
                between embedded silicon and modern browser applications.
              </p>
              <div class="flex flex-wrap gap-3 mt-auto relative z-10 pt-6">
                <span class="px-4 py-1.5 bg-surface-container/50 border border-outline-variant/20 rounded font-technical-xs text-technical-xs text-on-surface tracking-wide">
                  FastAPI
                </span>

                <span class="px-4 py-1.5 bg-surface-container/50 border border-outline-variant/20 rounded font-technical-xs text-technical-xs text-on-surface tracking-wide">
                  Express
                </span>
                <span class="px-4 py-1.5 bg-surface-container/50 border border-outline-variant/20 rounded font-technical-xs text-technical-xs text-on-surface tracking-wide">
                  React
                </span>
                <span class="px-4 py-1.5 bg-surface-container/50 border border-outline-variant/20 rounded font-technical-xs text-technical-xs text-on-surface tracking-wide">
                  MongoDB
                </span>
                <span class="px-4 py-1.5 bg-secondary-fixed/5 border border-secondary-fixed/20 rounded font-technical-xs text-technical-xs text-secondary-fixed tracking-wide">
                  ESP8266
                </span>
                <span class="px-4 py-1.5 bg-secondary-fixed/5 border border-secondary-fixed/20 rounded font-technical-xs text-technical-xs text-secondary-fixed tracking-wide">
                  MicroPython
                </span>
              </div>
            </div>
            <div class="cyber-card p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group">
              <div class="w-10 h-10 rounded-lg bg-surface-bright/50 border border-primary-container/20 flex items-center justify-center text-primary-container">
                <span
                  class="material-symbols-outlined"
                  style="font-size: 20px;"
                >
                  folder_special
                </span>
              </div>
              <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                The Portfolio
              </h3>
              <div class="mt-auto border-t border-outline-variant/20 pt-6">
                <div class="flex items-baseline gap-2">
                  <span class="font-headline-xl text-[56px] text-primary-container leading-none font-bold">
                    14
                  </span>
                </div>
                <span class="font-technical-xs text-technical-xs text-on-surface-variant uppercase tracking-widest mt-2 block">
                  Enterprise Capstones
                </span>
              </div>
            </div>
            <div class="cyber-card p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group">
              <div class="w-10 h-10 rounded-lg bg-surface-bright/50 border border-primary-container/20 flex items-center justify-center text-primary-container">
                <span
                  class="material-symbols-outlined"
                  style="font-size: 20px;"
                >
                  headset_mic
                </span>
              </div>
              <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                The Support
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-auto pt-6 border-t border-outline-variant/20">
                Live debugging sessions, rigorous code reviews, and direct
                1-on-1 industry mentorship.
              </p>
            </div>
            <div class="cyber-card p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group">
              <div class="w-10 h-10 rounded-lg bg-surface-bright/50 border border-primary-container/20 flex items-center justify-center text-primary-container">
                <span
                  class="material-symbols-outlined"
                  style="font-size: 20px;"
                >
                  military_tech
                </span>
              </div>
              <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                The Proof
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-auto pt-6 border-t border-outline-variant/20">
                KANI Code Studio Certification &amp; a technically loaded,
                green-squared GitHub profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface relative"
        id="methodology-section"
      >
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="flex flex-col gap-10 order-2 lg:order-1">
            <div class="flex flex-col gap-4">
              <div class="inline-flex items-center gap-2 w-fit bg-surface-variant/50 border border-outline-variant/30 px-3 py-1.5 rounded-full">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
                <span class="font-technical-xs text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Pedagogy Kernel
                </span>
              </div>
              <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.15] tracking-tight">
                Stop Memorizing Syntax. <br />
                <span class="text-primary-container">Architect Systems.</span>
              </h2>
            </div>
            <div class="flex flex-col gap-6 text-on-surface-variant font-body-lg text-body-lg">
              <p class="leading-relaxed">
                Traditional technical education relies on delayed gratification.
                You learn detached theory for months before building anything
                functional. We engineer learning through{" "}
                <strong class="text-on-surface font-medium">
                  Dopamine Driven Development
                </strong>
                .
              </p>
              <p class="leading-relaxed">
                From Week 1, you write code and immediately witness physical
                hardware respond or web interfaces execute. This incredibly
                tight, optimized feedback loop hacks your brain's reward system,
                exponentially accelerating mastery.
              </p>
              <ul class="flex flex-col gap-5 mt-6 border-l border-primary-container/20 pl-6 py-2">
                <li class="tech-list-item text-on-surface">
                  Build → Break → Debug → Deploy
                </li>
                <li class="tech-list-item text-on-surface">
                  Operate under real-world constraints (Latency, Memory, Scale)
                </li>
                <li class="tech-list-item text-on-surface">
                  Execute industry-standard Git workflows from Day 0
                </li>
              </ul>
            </div>
          </div>
          <div class="order-1 lg:order-2 relative">
            <div class="glass-panel p-3 rounded-2xl relative z-10 border-primary-container/20 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <div class="bg-[#020b18] rounded-xl overflow-hidden aspect-[4/5] md:aspect-square flex items-center justify-center relative border border-outline-variant/20">
                <img
                  alt="Methodology Visualization"
                  class="w-full h-full object-cover opacity-70 mix-blend-screen"
                  data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist dark gallery space representing a hardware circuit board. The artwork relies on a sophisticated palette of deep blacks (#0A192F) and pristine whites, punctuated by intense accents of vibrant electric blue (#00F0FF) and neon green (#39FF14). The mood is highly technical and cyber-futuristic, visualizing Dopamine-Driven Development."
                  src="https://ik.imagekit.io/rax/Kani%20Course%202026/wmremove-transformed.png"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,19,41,0.4)_100%)] z-10 pointer-events-none"></div>
                <div class="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <div class="flex gap-2">
                    <div class="w-1.5 h-4 bg-primary-container/50"></div>
                    <div class="w-1.5 h-6 bg-primary-container/80"></div>
                    <div class="w-1.5 h-3 bg-primary-container/30"></div>
                  </div>
                  <div class="font-technical-xs text-[10px] text-primary-container/60 tracking-widest text-right">
                    FEEDBACK_LOOP_MS: 12
                    <br />
                    STATUS: OPTIMIZED
                  </div>
                </div>
                <div class="absolute bottom-6 left-6 z-20">
                  <div class="font-technical-xs text-xs text-secondary-fixed bg-surface/90 px-4 py-2 rounded border border-secondary-fixed/20 shadow-[0_0_15px_rgba(121,255,91,0.1)] flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div>
                    SYS.STATE == "ACTIVE"
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-container/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
          </div>
        </div>
      </section>


                
      <Checkout />


    </main>
  );
};

export default Homa;
