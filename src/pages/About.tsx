export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fallon-lavender/5 via-white to-fallon-teal/5">
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

      {/* Hero Hook */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🐙</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Charlotte
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Former therapist. Built an 8-figure e-commerce business. Bootstrapped it. Exited it.
            <br />
            <span className="text-fallon-teal font-semibold">Now I build AI systems for neurodivergent brains like mine.</span>
          </p>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Email Mountain (And How I Climbed It)
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-fallon-coral">20,000 emails.</strong>
              </p>

              <p>
                That's how many were sitting in my inbox. Not a typo. Twenty. Thousand.
              </p>

              <p>
                I'm ADHD, autistic, and dyslexic. Email is my kryptonite. Every message felt urgent.
                Every notification pulled me in 17 directions. I'd spend hours drowning in my inbox
                and still have nothing done.
              </p>

              <p className="text-2xl font-bold text-fallon-teal">
                Then I built an AI system to do it for me.
              </p>

              <p>
                5 days later: <strong>1 email left.</strong>
              </p>

              <p>
                99.5% reduction. Not by "being more organized" or "using a better system."
                By automating the entire thing with AI.
              </p>

              <p className="text-gray-900 font-semibold">
                That's when I realized: if AI can save me from email hell, what else could it do?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Octopus? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fallon-lavender/10 to-fallon-coral/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🐙</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why an Octopus?
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Octopuses have <strong>9 brains.</strong> One central brain, and one in each arm.
              </p>

              <p>
                They think differently. They multitask in ways humans can't comprehend.
                They're alien intelligence on Earth.
              </p>

              <p className="text-fallon-teal font-semibold">
                Sound familiar, neurodivergent friends?
              </p>

              <p>
                My ADHD brain is 9 tabs open at once. Autism means I see patterns others miss.
                Dyslexia taught me to think sideways.
              </p>

              <p>
                I don't think like neurotypical people. And I don't build AI systems like them either.
              </p>

              <p className="text-gray-900 font-semibold">
                The octopus is my spirit animal. Alien intelligence. Multitasking mastery. Neurodivergent AF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Dogs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet the Quality Control Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blue */}
            <div className="bg-gradient-to-br from-fallon-teal/20 to-fallon-lavender/20 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🐕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Blue</h3>
              <p className="text-sm text-fallon-coral font-semibold mb-3">Chief Nap Officer</p>
              <p className="text-gray-700">
                Blue's job is simple: if Charlotte works too long, demand cuddles.
                Work-life balance enforcer. Professional couch warmer.
              </p>
            </div>

            {/* Stan */}
            <div className="bg-gradient-to-br from-fallon-coral/20 to-fallon-teal/20 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🐕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Stan</h3>
              <p className="text-sm text-fallon-lavender font-semibold mb-3">Italian Greyhound, Anxiety Specialist</p>
              <p className="text-gray-700">
                Stan understands overwhelm. He also tests all the hypoallergenic dog food.
                Sensitive stomach = food researcher extraordinaire.
              </p>
            </div>

            {/* Billy */}
            <div className="bg-gradient-to-br from-fallon-lavender/20 to-fallon-coral/20 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🐕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Billy</h3>
              <p className="text-sm text-fallon-teal font-semibold mb-3">Senior Advisor, Treats Division</p>
              <p className="text-gray-700">
                Billy knows what he wants and when he wants it. No nonsense. Direct communicator.
                Teaches me clarity.
              </p>
            </div>

            {/* Piper */}
            <div className="bg-gradient-to-br from-fallon-teal/20 to-fallon-coral/20 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🐕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Piper</h3>
              <p className="text-sm text-fallon-lavender font-semibold mb-3">Head of Security & Squirrel Patrol</p>
              <p className="text-gray-700">
                Piper spots problems before they happen. Always alert. Never off duty.
                The vigilance I wish my brain had.
              </p>
            </div>

            {/* Lyla */}
            <div className="bg-gradient-to-br from-fallon-coral/20 to-fallon-lavender/20 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🐕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lyla</h3>
              <p className="text-sm text-fallon-coral font-semibold mb-3">Director of Chaos Management</p>
              <p className="text-gray-700">
                Lyla brings the energy. Boundless enthusiasm. Reminds me that chaos isn't always bad—
                sometimes it's just creativity waiting to happen.
              </p>
            </div>

            {/* All 5 */}
            <div className="bg-gradient-to-br from-fallon-lavender/20 to-fallon-teal/20 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🛏️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Squad</h3>
              <p className="text-sm text-fallon-teal font-semibold mb-3">Eco Bed Testing Department</p>
              <p className="text-gray-700">
                All 5 test my partner's ePAW eco dog beds. If they approve, you know it's quality.
                Toughest critics in the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guinea Pig Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fallon-coral/10 to-fallon-lavender/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-6xl mb-6 text-center">🧪</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              The Guinea Pig Methodology
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
                I'm the guinea pig. If it survives my ADHD brain, it'll work for yours.
              </p>

              <p>
                That's why I'm running <strong className="text-fallon-coral">10 free pilot programs</strong> right now.
                Not selling. Testing. Building. Proving it works.
              </p>

              <p>
                Because I'd rather give you something that actually transforms your workflow than
                charge you for something pretty that doesn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building in Public */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-fallon-teal/20 to-fallon-coral/20 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-6xl mb-6 text-center">📖</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Building in Public
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
                and help people with brains like mine stop drowning in chaos.
              </p>

              <p className="text-2xl font-bold text-gray-900 text-center mt-8">
                That's the octopus way. 🐙
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early AI Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fallon-lavender/10 to-fallon-teal/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              I've Been Doing AI Since Before It Was Cool
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
                Now? I'm in the <strong className="text-fallon-teal">top 5% of AI users globally.</strong>
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
          <div className="text-7xl mb-6">🐙</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Want to See What AI Can Do for Your Chaos?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            I'm running 10 free pilot programs. Testing systems. Building in public.
            No charge. Just proving this works.
          </p>
          <a
            href="https://forms.gle/bzZKhWNCaG8xsL768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fallon-teal to-fallon-coral rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Join the Waitlist
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Pilots are full right now, but I'll let you know when spots open up.
          </p>
        </div>
      </section>
    </div>
  );
}
