import emailerPreview from '../assets/emailer-preview.png';

const EmailerShowcase = () => {
  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        {/* Text side */}
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase mb-3">
            PRODUCTION EMAILERS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            High‑converting HTML email templates for real users
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            I design and code responsive emailers that render consistently across Gmail, Outlook,
            Apple Mail and mobile clients. Each template is built with bullet‑proof HTML tables,
            inline styles and tested in real production campaigns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 tracking-wide mb-1">
                DELIVERY
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Transactional &amp; marketing journeys
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Welcome, product, reminder and offer campaigns.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 tracking-wide mb-1">
                QUALITY
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Cross‑client &amp; device tested
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Tested on desktop &amp; mobile, light &amp; dark modes.
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Responsive layout using table‑based structure and inline styles.</li>
            <li>• Optimised image usage, fallbacks and CTA placement for higher clicks.</li>
            <li>• Reusable content blocks for fast campaign creation.</li>
          </ul>
        </div>

        {/* Image side */}
        <div className="relative">
          <div className="absolute -top-6 -right-4 w-20 h-20 rounded-full bg-sky-400/30 blur-2xl" />
          <div className="absolute -bottom-10 -left-6 w-24 h-24 rounded-full bg-indigo-400/30 blur-2xl" />

          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden max-w-sm mx-auto lg:max-w-full">
            {/* Top bar to mimic email client */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="h-6 w-40 rounded-full bg-slate-200" />
              <div className="h-6 w-10 rounded-full bg-slate-200" />
            </div>

            {/* Screenshot */}
            <div className="bg-slate-900">
              <img
                src={emailerPreview}
                alt="Production emailer preview"
                className="w-full max-h-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailerShowcase;

