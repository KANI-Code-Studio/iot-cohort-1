const ContactForm = () => {
  return (
    <div class="bg-[#02060d] border border-outline-variant/30 rounded-lg flex flex-col transition-all duration-300 hover:border-primary-container/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.03)] lg:col-span-2 overflow-hidden shadow-2xl">
      <div class="bg-surface-container-lowest border-b border-outline-variant/30 px-4 py-3 flex items-center justify-between">
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-outline-variant/40"></div>
          <div class="w-3 h-3 rounded-full bg-outline-variant/40"></div>
          <div class="w-3 h-3 rounded-full bg-outline-variant/40"></div>
        </div>
        <span class="font-technical-xs text-on-surface-variant/70 tracking-wider">
          bash - init_contact.sh
        </span>
        <span class="material-symbols-outlined text-outline-variant/50 text-sm">
          terminal
        </span>
      </div>
      <div class="p-stack-lg flex flex-col gap-stack-md">
        <form class="flex flex-col gap-stack-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div class="flex flex-col gap-stack-sm">
              <label class="font-label-caps text-label-caps text-primary-container/70 uppercase">
                Full Name
              </label>
              <div class="terminal-input-wrap">
                <input
                  class="w-full bg-transparent border-0 border-b border-outline-variant/50 text-primary p-2 font-technical-sm terminal-input focus:border-primary-container focus:ring-0 transition-all placeholder:text-outline-variant/30"
                  placeholder="Enter your designation"
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-col gap-stack-sm">
              <label class="font-label-caps text-label-caps text-primary-container/70 uppercase">
                Email Address
              </label>
              <div class="terminal-input-wrap">
                <input
                  class="w-full bg-transparent border-0 border-b border-outline-variant/50 text-primary p-2 font-technical-sm terminal-input focus:border-primary-container focus:ring-0 transition-all placeholder:text-outline-variant/30"
                  placeholder="user@domain.com"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-stack-sm">
            <label class="font-label-caps text-label-caps text-primary-container/70 uppercase">
              Subject Inquiry
            </label>
            <div class="terminal-input-wrap">
              <select class="w-full bg-transparent border-0 border-b border-outline-variant/50 text-primary p-2 font-technical-sm terminal-select focus:border-primary-container focus:ring-0 transition-all">
                <option class="bg-surface">-- Select Parameter --</option>
                <option class="bg-surface">Curriculum Details</option>
                <option class="bg-surface">Enrollment Process</option>
                <option class="bg-surface">Technical Support</option>
                <option class="bg-surface">Other</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-stack-sm">
            <label class="font-label-caps text-label-caps text-primary-container/70 uppercase">
              Message Payload
            </label>
            <div class="terminal-input-wrap !top-0">
              <textarea
                class="w-full bg-[#040A14]/50 border border-outline-variant/30 text-primary p-4 pl-8 font-technical-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 focus:outline-none transition-all placeholder:text-outline-variant/30 rounded-md resize-y"
                placeholder="Enter your message details here..."
                rows="5"
              ></textarea>
              <span class="absolute left-3 top-4 text-primary-container/50 font-technical-sm">
                &gt;
              </span>
            </div>
          </div>
          <div class="mt-stack-sm flex justify-end">
            <button
              class="group bg-primary-container/5 border border-primary-container/50 text-primary-container font-label-caps text-label-caps px-8 py-3 hover:bg-primary-container hover:text-[#02060d] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 uppercase tracking-widest flex items-center gap-3 rounded-sm"
              type="button"
            >
              Execute Send
              <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
