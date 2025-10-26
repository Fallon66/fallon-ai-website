export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Person Schema for Charlotte */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Charlotte Fallon Smith",
        "alternateName": "Charlotte Fallon",
        "jobTitle": "AI Strategist & Systems Builder",
        "description": "8-figure e-commerce co-founder (exited 2020). Fractional CMO/COO. Neurodivergent founder (ADHD, autistic, dyslexic) building custom AI systems for overwhelmed businesses.",
        "url": "https://fallon-ai-website.vercel.app/about",
        "sameAs": [
          "https://www.linkedin.com/in/charlotte-fallon",
          "https://github.com/Fallon66"
        ],
        "knowsAbout": [
          "AI Automation",
          "Custom AI Systems",
          "E-Commerce Strategy",
          "Fractional CMO Services",
          "Neurodivergent Business Strategy",
          "Bootstrapped Business Growth"
        ]
      })}} />

      {/* Hero Section with Charlotte's Photo */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fallon-lavender/5 to-fallon-teal/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm Charlotte
              </h1>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl font-semibold text-fallon-teal">
                  ADHD, autistic, dyslexic. I built AI systems to survive my own chaos.
                </p>
                <p>
                  8-figure e-commerce co-founder (exited 2020). Fractional CMO/COO. AI since 2015.
                </p>
                <p className="text-gray-900 font-semibold">
                  Now I build them for overwhelmed founders and businesses drowning in repetitive tasks.
                </p>
                <p className="text-sm text-gray-600">
                  UK-based, serving worldwide
                </p>
              </div>
            </div>

            {/* Charlotte's Photo Placeholder */}
            <div className="order-first md:order-last">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-fallon-teal/20 to-fallon-coral/20 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🐙</div>
                    <p className="text-gray-600 font-semibold">Charlotte's Photo</p>
                    <p className="text-sm text-gray-500">Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Octopus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why an Octopus?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-fallon-lavender/10 to-fallon-teal/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-gray-900">
                Octopuses have 9 brains. One central brain, and one in each arm.
              </p>

              <p>
                They think differently. They multitask in ways humans can't comprehend.
                They're alien intelligence on Earth.
              </p>

              <p className="text-fallon-teal font-semibold text-xl">
                Sound familiar to anyone juggling 17 things at once?
              </p>

              <p>
                My ADHD brain is 9 tabs open at once. Autism means I see patterns others miss.
                Dyslexia taught me to think sideways.
              </p>

              <p className="text-gray-900 font-semibold">
                I don't think in straight lines. And I don't build AI systems in straight lines either.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Quality Control Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-fallon-lavender/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Quality Control Team
            </h2>
            <p className="text-xl text-gray-600">
              The real bosses around here
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Blue */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-fallon-teal/20 to-fallon-lavender/20 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🐕</div>
                    <p className="text-xs text-gray-500">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Blue</h3>
              <p className="text-sm text-fallon-coral font-semibold text-center">Chief Nap Officer</p>
            </div>

            {/* Stan */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-fallon-coral/20 to-fallon-teal/20 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🐕</div>
                    <p className="text-xs text-gray-500">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Stan</h3>
              <p className="text-sm text-fallon-lavender font-semibold text-center">Chief Fireside Officer</p>
            </div>

            {/* Billy */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-fallon-lavender/20 to-fallon-coral/20 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🐕</div>
                    <p className="text-xs text-gray-500">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Billy</h3>
              <p className="text-sm text-fallon-teal font-semibold text-center">Senior Advisor, Treats Division</p>
            </div>

            {/* Piper */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-fallon-teal/20 to-fallon-coral/20 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🐕</div>
                    <p className="text-xs text-gray-500">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Piper</h3>
              <p className="text-sm text-fallon-lavender font-semibold text-center">Head of Security & Squirrel Patrol</p>
            </div>

            {/* Lyla */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-fallon-coral/20 to-fallon-lavender/20 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🐕</div>
                    <p className="text-xs text-gray-500">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Lyla</h3>
              <p className="text-sm text-fallon-coral font-semibold text-center">Director of Chaos Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guinea Pig Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fallon-coral/10 to-fallon-lavender/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Guinea Pig Methodology
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-fallon-teal">
                I don't sell systems I haven't tested on myself first.
              </p>

              <p>
                The email system? I used it for 5 days before telling anyone about it.
              </p>

              <p>
                The vector database? I indexed 2,499 of my own Obsidian files before recommending it.
              </p>

              <p>
                The lead gen MVP? I built it for my own chaos before offering it to clients.
              </p>

              <p className="text-gray-900 font-semibold">
                I'm the guinea pig. If it works for my neurodivergent brain, it'll work for anyone drowning in repetitive tasks.
              </p>

              <p>
                That's why I test everything on myself first—then offer it as paid services
                only when I know it actually works. No untested promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building in Public */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Building in Public
            </h2>
          </div>

          <div className="bg-gradient-to-br from-fallon-teal/10 to-fallon-coral/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I document everything. And I mean <em>everything.</em>
              </p>

              <p>
                <strong className="text-fallon-teal">90+ session docs.</strong> Every build. Every mistake.
                Every "oh crap, that didn't work" moment.
              </p>

              <p>
                All on GitHub. Public. Open. Because I believe in showing the work, not just the wins.
              </p>

              <p>
                I'm not here to be a guru. I'm here to build systems that work, share what I learn,
                and help overwhelmed founders and businesses stop drowning in chaos.
              </p>

              <p className="text-2xl font-bold text-gray-900 text-center mt-8">
                That's the octopus way. 🐙
              </p>

              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-4 font-semibold">Follow the journey:</p>
                <div className="flex gap-6 justify-center">
                  <span className="text-gray-600">
                    LinkedIn
                  </span>
                  <a
                    href="https://github.com/Fallon66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fallon-teal hover:text-fallon-coral font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early AI Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fallon-lavender/10 to-fallon-teal/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              I've Been Doing AI Since Before It Was Cool
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-fallon-coral">2015.</strong> That's when I started using AI.
              </p>

              <p>
                Zapier for automation. Monkey Learn for text analysis. Jasper before anyone knew what it was.
              </p>

              <p>
                Way before ChatGPT. Way before everyone became an "AI expert."
              </p>

              <p>
                MCP servers. Vector databases. Advanced automation. Claude Code mastery.
                I don't just use AI—I build systems with it.
              </p>

              <p className="text-gray-900 font-semibold">
                But I'm not here to brag. I'm here to build systems that save you from the chaos I used to live in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Want to See What AI Can Do for Your Chaos?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Free 30-minute discovery call. No pressure. Just see if AI can solve your chaos.
          </p>
          <a
            href="https://forms.gle/bzZKhWNCaG8xsL768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fallon-teal to-fallon-coral rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Book Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
}
