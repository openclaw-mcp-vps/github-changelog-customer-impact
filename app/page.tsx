export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          Product Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Turn GitHub Commits into{" "}
          <span className="text-[#58a6ff]">Customer-Facing Changelogs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your repo, let AI filter the noise, and publish polished release notes your customers actually care about — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to connect. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {[
            "GitHub OAuth",
            "AI Commit Analysis",
            "Marketing-Friendly Copy",
            "One-Click Publish",
            "Impact Descriptions",
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { step: "1", title: "Connect GitHub", desc: "Authorize via OAuth and select the repos you want to track." },
            { step: "2", title: "AI Analyzes Commits", desc: "Our AI reads your commit history and extracts customer-relevant changes." },
            { step: "3", title: "Publish Changelog", desc: "Get a polished, marketing-friendly changelog with impact descriptions ready to share." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-xl mb-2">{step}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$18</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited GitHub repos",
              "AI-powered commit analysis",
              "Marketing-friendly changelog copy",
              "Customer impact descriptions",
              "Public changelog page",
              "Email digest for subscribers",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Start for $18/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which GitHub repos are supported?",
              a: "Any public or private repo you own or have admin access to. Connect via GitHub OAuth and select the repos you want to track.",
            },
            {
              q: "How does the AI decide what's customer-facing?",
              a: "Our AI is trained to distinguish user-facing features, bug fixes, and improvements from internal refactors, dependency bumps, and dev tooling changes.",
            },
            {
              q: "Can I edit the generated changelog before publishing?",
              a: "Yes. Every generated changelog is fully editable before you publish. You stay in control of what your customers see.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  )
}
