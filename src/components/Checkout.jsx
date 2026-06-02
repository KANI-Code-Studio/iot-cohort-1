import { useState, useEffect } from "preact/hooks";

const Checkout = () => {
  // Target: 2nd July 2026, 00:00:00 IST (+05:30)
  const targetDate = new Date("2026-07-01T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    isEnded: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", mins: "00", isEnded: true });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          mins: mins.toString().padStart(2, "0"),
          isEnded: false,
        });
      }
    };

    // Run immediately, then update every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      class="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#020b18] border-t border-outline-variant/10 relative overflow-hidden"
      id="checkout-section"
    >
      <div
        class="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style="background-image: radial-gradient(#00f0ff 1px, transparent 1px); background-size: 40px 40px;"
      ></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="cyber-card elite-glow rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-10 border border-secondary-fixed/20 bg-surface/80 backdrop-blur-md relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-fixed/50 to-transparent"></div>

          <div class="flex flex-col gap-4 items-center">
            {/* Status Badge */}
            {timeLeft.isEnded ? (
              <div class="inline-flex items-center gap-3 justify-center bg-[#93000a]/10 border border-[#93000a]/20 px-4 py-1.5 rounded-full mb-2">
                <span class="relative flex h-2 w-2">
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-[#93000a]"></span>
                </span>
                <span class="font-technical-xs text-[10px] text-[#93000a] uppercase tracking-widest font-medium">
                  Enrollment Ended
                </span>
              </div>
            ) : (
              <div class="inline-flex items-center gap-3 justify-center bg-secondary-fixed/10 border border-secondary-fixed/20 px-4 py-1.5 rounded-full mb-2">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed"></span>
                </span>
                <span class="font-technical-xs text-[10px] text-secondary-fixed uppercase tracking-widest font-medium">
                  Secure Enrollment Active
                </span>
              </div>
            )}

            <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Cohort 01 Admissions are Open.
            </h2>
          </div>

          <div class="bg-surface border border-outline-variant/20 rounded-2xl p-8 w-full max-w-2xl shadow-inner relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
            <p class="font-technical-xs text-[10px] text-on-surface-variant mb-6 uppercase tracking-widest">
              Time Remaining Until Close
            </p>

            {/* Countdown Clock */}
            <div
              class={`font-headline-lg text-[40px] md:text-[56px] ${timeLeft.isEnded ? "text-[#93000a]" : "text-primary-container"} font-[JetBrains_Mono] tracking-tight flex justify-center items-center gap-4 md:gap-8 leading-none transition-colors duration-500`}
            >
              <div class="flex flex-col items-center gap-2">
                <span>{timeLeft.days}</span>
                <span class="text-[10px] text-on-surface-variant font-technical-xs uppercase tracking-widest">
                  Days
                </span>
              </div>
              <span
                class={`${timeLeft.isEnded ? "text-[#93000a]/40" : "text-outline-variant/40"} pb-6 font-light transition-colors duration-500`}
              >
                :
              </span>
              <div class="flex flex-col items-center gap-2">
                <span>{timeLeft.hours}</span>
                <span class="text-[10px] text-on-surface-variant font-technical-xs uppercase tracking-widest">
                  Hours
                </span>
              </div>
              <span
                class={`${timeLeft.isEnded ? "text-[#93000a]/40" : "text-outline-variant/40"} pb-6 font-light transition-colors duration-500`}
              >
                :
              </span>
              <div class="flex flex-col items-center gap-2">
                <span>{timeLeft.mins}</span>
                <span class="text-[10px] text-on-surface-variant font-technical-xs uppercase tracking-widest">
                  Mins
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div class="flex flex-col gap-2 items-center mt-2">
            <div class="font-headline-md text-[36px] text-on-surface font-semibold tracking-tight">
              Tuition: ₹24,999
            </div>
            <div class="font-technical-xs text-xs text-on-surface-variant/70 uppercase tracking-widest">
              (Included GST)
            </div>
          </div>

          <div class="w-full max-w-md flex flex-col gap-4 mt-4">
            {!timeLeft.isEnded && (
        <>
                <button
                  class="w-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-sm px-12 py-5 rounded-lg hover:bg-[#8aff6e] transition-all duration-300 shadow-[0_0_20px_rgba(121,255,91,0.2)] hover:shadow-[0_0_30px_rgba(121,255,91,0.4)] scale-100 active:scale-95 transition-transform uppercase tracking-widest font-bold"
                  onClick={() => {
                    window.open(
                      "https://payments.cashfree.com/forms?code=kani-iot",
                      "_blank",
                    );
                  }}
                >
                  Secure Your Seat Now
                </button>
                <div class="flex items-center justify-center gap-2 text-on-surface-variant/60 font-technical-xs text-[10px] uppercase tracking-widest">
                  <span
                    class="material-symbols-outlined"
                    style="font-size: 14px;"
                  >
                    lock
                  </span>
                  <span>256-bit Secure Checkout</span>
                </div>
              </>
            )}
          </div>

          <p class="font-body-md text-sm text-on-surface-variant max-w-md mt-2 text-center opacity-80 leading-relaxed">
            Seats are strictly limited to maintain a high{" "}
            <strong> mentor to student </strong>
            ratio. Admission is on a rolling basis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
