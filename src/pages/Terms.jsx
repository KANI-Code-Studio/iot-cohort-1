import { useSEO } from "../hooks";

const Terms = () => {
  useSEO({
    title: "Terms & Conditions - KANI Code Studio",
    description: "Terms &amp; Conditions - KANI Code Studio",
  });
  return (
    <main class="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-screen-xl mx-auto w-full">
      <header class="mb-section-gap text-left max-w-4xl">
        <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary mb-stack-md tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p class="font-technical-sm text-technical-sm text-on-surface-variant uppercase tracking-widest">
          Effective Date: May 28, 2026
        </p>
      </header>
      <article class="premium-surface p-stack-lg md:p-[64px] rounded-2xl">
        <div class="prose prose-invert max-w-none">
          <div class="text-on-surface font-body-md text-body-md leading-relaxed space-y-stack-lg">
            <section class="border-b border-surface-variant pb-stack-lg">
              <p class="font-technical-sm text-technical-sm text-on-surface-variant bg-surface-container-low p-stack-md rounded border border-surface-variant inline-block uppercase tracking-wider">
                Governing Law: Commonwealth of Australia / New South Wales
                Jurisdiction
              </p>
            </section>
            <div class="space-y-section-gap">
              <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-baseline">
                <h2 class="font-headline-md text-headline-md text-primary md:col-span-4 m-0">
                  Introduction
                </h2>
                <div class="md:col-span-8">
                  <p class="m-0 text-on-surface-variant text-body-lg">
                    These Terms &amp; Conditions govern enrollment and
                    participation in the <strong> KANI Code Studio </strong>{" "}
                    engineering curriculum. By accessing our platform or
                    enrolling in our courses, you consent to these operational
                    protocols, established to ensure academic rigor and
                    professional integrity.
                  </p>
                </div>
              </section>

              <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-baseline">
                <h2 class="font-headline-md text-headline-md text-primary md:col-span-4 m-0">
                  1. General Enrollment
                </h2>
                <div class="md:col-span-8">
                  <p class="m-0 text-on-surface-variant">
                    Enrollment is contingent upon technical assessment
                    parameters and seat allocation constraints. Candidates must
                    provision and maintain the hardware and software
                    environments delineated in the official syllabus to satisfy
                    learning objectives.
                  </p>
                </div>
              </section>

              <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
                <h2 class="font-headline-md text-headline-md text-primary md:col-span-4 m-0">
                  2. Intellectual Property &amp; Material Sharing
                </h2>
                <div class="md:col-span-8 space-y-stack-lg">
                  <div class="marker-success">
                    <p class="m-0 text-secondary-fixed font-technical-sm uppercase tracking-wider mb-unit">
                      Authorized Peer Exchange
                    </p>
                    <p class="m-0 text-on-surface-variant">
                      Students are permitted to exchange independently derived
                      code and architectural logic with peers exclusively for
                      educational review within the KANI ecosystem.
                    </p>
                  </div>
                  <div class="marker-error">
                    <p class="m-0 text-error font-technical-sm uppercase tracking-wider mb-unit">
                      Commercial Exploitation Prohibited
                    </p>
                    <p class="m-0 text-on-surface-variant">
                      Course materials, proprietary curriculum architectures,
                      and internal KANI tooling are strictly prohibited from
                      being sold, licensed, or otherwise commercialized by any
                      entity without express written authorization.
                    </p>
                  </div>
                </div>
              </section>

              <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-baseline">
                <h2 class="font-headline-md text-headline-md text-primary md:col-span-4 m-0">
                  3. Academic Integrity
                </h2>
                <div class="md:col-span-8">
                  <p class="m-0 text-on-surface-variant">
                    While peer review is supported, the submission of uncredited
                    external work (excluding standard library dependencies)
                    constitutes a violation of academic protocols. Automated
                    static analysis heuristics are deployed universally to
                    verify technical authenticity.
                  </p>
                </div>
              </section>
              <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-baseline">
                <h2 class="font-headline-md text-headline-md text-primary md:col-span-4 m-0">
                  4. Jurisdiction
                </h2>
                <div class="md:col-span-8">
                  <p class="m-0 text-on-surface-variant">
                    Any disputes arising under these terms shall be subject to
                    the exclusive jurisdiction of the courts in Kolkata or
                    Bardhaman, West Bengal, India, in accordance with
                    established arbitration procedures for educational entities.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Terms;
