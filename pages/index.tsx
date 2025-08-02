import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>David C Brown | Personal Site</title>
        <meta name="description" content="Learn more about David C Brown, Fractional CTO, Senior Software Engineer, Tech Lead, and Strategic Advisor." />
        <link rel="canonical" href="https://davidcbrown.io/" />
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center ">
        {/* Profile Image */}
        <img
          src="/profile_pic.jpeg"
          alt="David C Brown Profile"
          className="w-32 h-32 rounded-full mb-6 shadow-lg object-cover"
        />
        {/* Hero Section */}
        <h1 className="text-4xl font-bold mb-2 text-primary">David C Brown</h1>
        {/* LinkedIn */}
        <div className="text-sm text-dark text-center max-w-2xl mb-4">

          <span className="block mt-2">
            <a
              href="https://linkedin.com/in/davidbrownucf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View my LinkedIn profile
            </a>
          </span>
        </div>
        <div className="text-base text-dark text-center max-w-xl mb-6">
          Technical Leadership for Growing Companies&nbsp;|&nbsp;Strategic technologist aligning product, engineering &amp; business growth
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-accent2 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">25,000+</span>
            <span className="text-dark text-sm">Engineering Hours</span>
          </div>
          <div className="bg-accent2 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">6</span>
            <span className="text-dark text-sm">Products Launched</span>
          </div>
          <div className="bg-accent2 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">7</span>
            <span className="text-dark text-sm">Startups Impacted</span>
          </div>

        </div>
        {/* Fractional CTO Summary */}
        {/* About Summary */}
        <div className="text-base text-dark max-w-2xl mb-6 text-center">
          I'm a growth-oriented Senior Software Engineer with <span className="font-semibold text-highlight">25,000+ hours</span> building and scaling web applications across <span className="font-semibold text-primary">7 startups</span> and <span className="font-semibold text-primary">6 products</span> from idea to production.<br />
          My approach goes beyond shipping code: I drive outcomes by aligning technology strategy with business goals, product roadmaps, and long-term scalability.
          <br /><br />
          With expertise in technical execution and strategic planning, I've led high-impact initiatives from architecture decisions to production deployment, while mentoring engineering teams and partnering with founders, product leaders, and business stakeholders.
          <br /><br />
          As a commercial multifamily real estate investor with mortgage note investing experience, I bring market perspective to complex technology challenges, particularly in regulated environments with sensitive financial data and transaction-heavy workflows.
        </div>
        <div>
        <div className="text-base text-dark max-w-2xl mb-6 text-center">
          I specialize in turning vision into scalable, production-ready technology. My expertise spans full-stack development, product strategy, and technical leadership.<br /><br />
          Now, I’m repositioning my career as a <span className="text-highlight font-semibold">Fractional CTO</span> in the PropTech industry—leveraging deep experience in the investment side of commercial multifamily and mortgage notes. I help founders and teams accelerate product delivery, make critical technical decisions, and build high-performing engineering organizations.
        </div>

        {/* Technical & Strategic Leadership */}
        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Technical & Strategic Leadership:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Technology Strategy & Roadmapping | Team Scaling | Architecture Planning</li>
            <li>JavaScript | TypeScript | Ruby on Rails | Node.js | Next.js | tRPC</li>
            <li>React | Vue | Nuxt | Angular | GraphQL | REST APIs | Financial Data Systems</li>
            <li>Systems Design | Security Implementation | Compliance | Vendor Evaluation</li>
          </ul>
        </div>
        {/* Leadership & Strategic Wins */}
        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Leadership & Strategic Wins:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Architected scalable systems supporting 10x user growth across multiple startups</li>
            <li>Led technical decision-making for platform modernization and team scaling</li>
            <li>Designed secure financial data processing with regulatory compliance</li>
            <li>Built automated workflows boosting team velocity by 40%</li>
            <li>Partnered with C-suite on technology roadmaps aligned with business growth</li>
          </ul>
        </div>
        {/* Strategic Focus Areas */}
        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Strategic Focus Areas:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Technology strategy for scaling companies with complex data requirements</li>
            <li>Engineering team structure and technical hiring strategies</li>
            <li>Architecture decisions for regulated industries and financial workflows</li>
            <li>Technical due diligence and platform evaluation</li>
          </ul>
        </div>
        {/* Industry Expertise */}
        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Industry Expertise:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Real estate investment</li>
            <li>Financial technology</li>
            <li>Regulatory compliance</li>
            <li>Data-intensive workflows</li>
          </ul>
        </div>
        {/* Education */}
        <div className="text-base text-dark max-w-2xl mb-6 text-center">
          <span className="font-semibold text-primary">Education:</span> B.S, Information Technology — University of Central Florida
        </div>
          </div>
        {/* Contact Button */}
        <div className="flex justify-center mb-8">
          <a
            href="/contact"
            className="px-6 py-2 rounded font-semibold shadow bg-highlight text-accent2"
            >
            Get in Touch
          </a>
        </div>
      </main>
    </>
  )
}
