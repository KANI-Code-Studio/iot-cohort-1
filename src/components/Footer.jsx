import { h } from "preact";
import { Link } from "preact-router/match";

const Footer = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  // Define the active styles once to keep your JSX clean
  // Using '!' ensures these styles override the base text colors
  // The arbitrary [text-shadow:...] creates the glowing effect
  const activeStyles =
    "!text-green-400 underline underline-offset-4 decoration-2 [text-shadow:0_0_10px_rgba(74,222,128,0.8)]";
  const baseLinkStyles =
    "hover:text-primary-container transition-all duration-300";

  return (
    <footer class="bg-[#020b18] text-on-surface-variant font-body-md text-sm w-full py-16 border-t border-outline-variant/10">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center px-margin-mobile md:px-margin-desktop gap-10 max-w-7xl mx-auto">
        <div class="flex flex-col gap-3">
          <a
            href={`${base}/`}
            title="KANI Code Studio Home"
            class="font-headline-md text-xl text-on-surface font-semibold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div
              class="h-8 w-8 bg-primary-container [mask-image:url('./kani_icon_black.svg')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
              aria-hidden="true"
            ></div>
            KANI Code Studio
          </a>

          <div class="text-on-surface-variant/70 font-technical-xs text-xs tracking-wide">
            © 2026 KANI | KANI Code Studio. Engineered for Excellence.
          </div>
        </div>

        <nav
          aria-label="Footer Navigation"
          class="flex flex-wrap gap-8 font-technical-xs text-xs tracking-widest uppercase"
        >
          <Link
            class={baseLinkStyles}
            activeClassName={activeStyles}
            href={`${base}/privacypolicy`}
            title="Read our Privacy Policy"
          >
            Privacy Policy
          </Link>
          <Link
            class={baseLinkStyles}
            activeClassName={activeStyles}
            href={`${base}/terms`}
            title="Read our Terms of Service"
          >
            Terms of Service
          </Link>
          <Link
            class={baseLinkStyles}
            activeClassName={activeStyles}
            href={`${base}/cookiepolicy`}
            title="Read our Cookie Policy"
          >
            Cookie Policy
          </Link>
          <Link
            class={baseLinkStyles}
            activeClassName={activeStyles}
            href={`${base}/refundpolicy`}
            title="Read our Refund Policy"
          >
            Refund Policy
          </Link>
          <Link
            class={baseLinkStyles}
            activeClassName={activeStyles}
            href={`${base}/contact`}
            title="Contact our Support Team"
          >
            Contact Support
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
