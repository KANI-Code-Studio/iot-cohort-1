// import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import {route} from 'preact-router'

const Default = () => {
  const terminalOutputRef = useRef(null);
  const cursorLineRef = useRef(null);
  const typingTextRef = useRef(null);
  const dataStreamContainerRef = useRef(null);
  const particleContainerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let particleInterval;

    const terminalScripts = [
      { type: "input", text: "ping 404_resource_origin", prompt: "$" },
      {
        type: "log",
        text: "PING 404_resource_origin (127.0.0.1): 56 data bytes",
        class: "text-on-surface-variant/70",
      },
      { type: "error", text: "Request timeout for icmp_seq 0" },
      { type: "error", text: "Request timeout for icmp_seq 1" },
      { type: "error", text: "Request timeout for icmp_seq 2" },
      {
        type: "info",
        text: "Analyzing local repository structure...",
        class: "text-[#00F0FF] mt-4",
      },
      {
        type: "log",
        text: "Searching patterns in /root/production/pages/*",
        class: "text-on-surface-variant/40",
      },
      {
        type: "log",
        text: "Comparing hash map identifiers... [FAILED]",
        class: "text-on-surface-variant/40",
      },
      { type: "input", text: "await recovery_init()", prompt: "$" },
    ];

    async function typeWriter(text, element, speed = 40) {
      for (let i = 0; i < text.length; i++) {
        if (!isMounted) return;
        element.textContent += text.charAt(i);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }

    async function runTerminal() {
      const terminalOutput = terminalOutputRef.current;
      const cursorLine = cursorLineRef.current;
      const typingText = typingTextRef.current;

      if (!terminalOutput || !cursorLine || !typingText) return;

      terminalOutput.innerHTML = "";

      for (const line of terminalScripts) {
        if (!isMounted) return;

        if (line.type === "input") {
          cursorLine.style.display = "flex";
          typingText.textContent = "";
          await typeWriter(line.text, typingText, 60);
          if (!isMounted) return;
          await new Promise((resolve) => setTimeout(resolve, 500));
          if (!isMounted) return;

          const finishedLine = document.createElement("div");
          finishedLine.className = "flex gap-2";
          finishedLine.innerHTML = `<span class="text-secondary">${line.prompt}</span><span class="text-on-surface">${line.text}</span>`;
          terminalOutput.appendChild(finishedLine);
          cursorLine.style.display = "none";
        } else if (line.type === "error") {
          const errDiv = document.createElement("div");
          errDiv.className = "text-error/80 flex items-center gap-2";
          errDiv.innerHTML = `<span class="material-symbols-outlined text-[14px]">error</span> ${line.text}`;
          terminalOutput.appendChild(errDiv);
          await new Promise((resolve) => setTimeout(resolve, 300));
        } else {
          const logDiv = document.createElement("div");
          logDiv.className = line.class || "text-on-surface";
          logDiv.textContent = line.text;
          terminalOutput.appendChild(logDiv);
          await new Promise((resolve) => setTimeout(resolve, 400));
        }
      }

      if (isMounted) {
        cursorLine.style.display = "flex";
        typingText.textContent = "";
      }
    }

    function createDataStreams() {
      const container = dataStreamContainerRef.current;
      if (!container) return;
      container.innerHTML = "";

      const count = 20;
      for (let i = 0; i < count; i++) {
        const stream = document.createElement("div");
        stream.className = "stream-col";
        stream.style.left = `${Math.random() * 100}%`;
        stream.style.animationDuration = `${Math.random() * 3 + 2}s`;
        stream.style.animationDelay = `${Math.random() * 5}s`;
        stream.style.opacity = Math.random() * 0.15;
        container.appendChild(stream);
      }
    }

    function createParticles() {
      const container = particleContainerRef.current;
      if (!container) return;

      particleInterval = setInterval(() => {
        if (document.hidden || !isMounted) return;
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 4 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = "50%";
        p.style.top = "50%";
        p.style.setProperty("--x", `${(Math.random() - 0.5) * 300}px`);
        p.style.setProperty("--y", `${(Math.random() - 0.5) * 300}px`);
        container.appendChild(p);

        setTimeout(() => {
          if (container.contains(p)) {
            p.remove();
          }
        }, 4000);
      }, 500);
    }

    runTerminal();
    createDataStreams();
    createParticles();

    return () => {
      isMounted = false;
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <main class="min-h-screen pt-32 flex flex-col items-center justify-center relative px-margin-mobile md:px-margin-desktop z-10">
      <div
        ref={dataStreamContainerRef}
        id="data-stream-container"
        class="absolute inset-0 pointer-events-none overflow-hidden z-0"
      ></div>

      <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center z-10 relative">
        <div class="space-y-stack-lg">
          <div class="inline-block px-3 py-1 bg-error-container/20 border border-error/30 rounded-full">
            <span class="font-technical-sm text-technical-sm text-error uppercase tracking-tighter flex items-center gap-2">
              <span
                class="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
              Critical Exception Detected
            </span>
          </div>

          <h1 class="font-headline-xl text-headline-xl text-primary flex flex-col">
            <span class="glitch-text font-technical-sm opacity-50 tracking-[0.2em] mb-2 uppercase">
              System Error
            </span>
            <span class="glitch-main">404 // Path Disconnected</span>
          </h1>

          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            The resource you are looking for has been moved, deleted, or never
            existed in this repository.
            <span class="text-primary/70">
              {" "}
              Verify your navigation parameters and try again.
            </span>
          </p>

          <div class="flex flex-col sm:flex-row gap-gutter pt-stack-md">
            {/* If using preact-router, consider importing { Link } and replacing <a> with <Link> */}
            <a
              class="btn-scanner bg-[#39FF14] text-black px-10 py-4 font-label-caps text-label-caps text-center hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all flex items-center justify-center gap-2"
              href="/"
            >
              <span class="material-symbols-outlined">terminal</span>
              Return to Home
            </a>

            <button
              onClick={() => {
                route('/contact')
              
              }}
              class="border border-[#00F0FF] text-[#00F0FF] px-10 py-4 font-label-caps text-label-caps text-center hover:bg-[#00F0FF]/10 transition-all flex items-center justify-center gap-2"

            >
              Ping Support
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>

        <div class="relative group" id="terminal-wrapper">
          <div
            ref={particleContainerRef}
            class="absolute inset-0 pointer-events-none overflow-visible"
            id="particle-container"
          ></div>
          <div class="absolute -top-16 -left-16 w-32 h-32 opacity-20 pointer-events-none">
            <div class="w-full h-full border border-primary/40 rounded-full animate-ping"></div>
          </div>

          <div class="bg-[#040A14] border border-[#00F0FF]/20 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm relative">
            <div class="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant/20">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-error/40"></div>
                <div class="w-3 h-3 rounded-full bg-secondary/40"></div>
                <div class="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
              <div class="font-technical-xs text-technical-xs text-on-surface-variant/60 lowercase tracking-widest">
                bash — session: error_handler
              </div>
            </div>

            <div
              class="p-6 font-technical-sm text-technical-sm space-y-2 min-h-[300px]"
              id="terminal-body"
            >
              <div
                ref={terminalOutputRef}
                class="space-y-2"
                id="terminal-output"
              ></div>
              <div
                ref={cursorLineRef}
                class="flex items-center text-primary"
                id="terminal-cursor-line"
                style={{ display: "none" }}
              >
                <span class="text-secondary">$</span>
                <span
                  ref={typingTextRef}
                  class="ml-2"
                  id="current-typing-text"
                ></span>
                <span class="terminal-cursor"></span>
              </div>
            </div>
          </div>

          <div class="absolute -right-4 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-20"></div>
          <div class="absolute -left-4 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-20"></div>
        </div>
      </div>
    </main>
  );
};

export default Default;
