import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | David C Brown</title>
        <meta name="description" content="Learn more about David C Brown, Senior Software Engineer, Fractional CTO, and Tech Lead." />
        <link rel="canonical" href="https://davidcbrown.io/about" />
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-primary">About Me</h1>
        <div className="text-lg text-dark text-center max-w-2xl mb-6">
          <span className="font-semibold text-primary">Senior Software Engineer | Fractional CTO | Tech Lead</span>
          <br />
          <span className="block mt-2">
            <a
              href="https://linkedin.com/in/davidbrownucf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent1 underline"
            >
              View my LinkedIn profile
            </a>
          </span>
        </div>
        <div className="text-base text-dark max-w-2xl mb-6 text-center">
          I'm a growth-oriented Senior Software Engineer with <span className="font-semibold text-highlight">25,000+ hours</span> building and scaling web applications across <span className="font-semibold text-primary">7 startups</span> and <span className="font-semibold text-primary">6 products</span> from 0 to production.<br />
          My approach goes beyond shipping code: I drive outcomes by aligning technology strategy with business goals, product roadmaps, and long-term scalability.
          <br /><br />
          With expertise in technical execution and strategic planning, I've led high-impact initiatives from architecture decisions to production deployment, while mentoring engineering teams and partnering with founders, product leaders, and business stakeholders.
          <br /><br />
          As a commercial multifamily real estate investor with mortgage note investing experience, I bring market perspective to complex technology challenges, particularly in regulated environments with sensitive financial data and transaction-heavy workflows.
        </div>
        <div>

        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Technical & Strategic Leadership:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Technology Strategy & Roadmapping | Team Scaling | Architecture Planning</li>
            <li>JavaScript | TypeScript | Ruby on Rails | Node.js | Next.js | tRPC</li>
            <li>React | Vue | Angular | GraphQL | REST APIs | Financial Data Systems</li>
            <li>Systems Design | Security Implementation | Compliance | Vendor Evaluation</li>
          </ul>
        </div>
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
        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Strategic Focus Areas:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Technology strategy for scaling companies with complex data requirements</li>
            <li>Engineering team structure and technical hiring strategies</li>
            <li>Architecture decisions for regulated industries and financial workflows</li>
            <li>Technical due diligence and platform evaluation</li>
          </ul>
        </div>
        <div className="text-base text-dark max-w-2xl mb-6 text-left">
          <span className="font-semibold text-primary">Industry Expertise:</span>
          <ul className="list-disc list-inside mt-2">
            <li>Real estate investment</li>
            <li>Financial technology</li>
            <li>Regulatory compliance</li>
            <li>Data-intensive workflows</li>
          </ul>
        </div>
        <div className="text-base text-dark max-w-2xl mb-6 text-center">
          <span className="font-semibold text-primary">Education:</span> B.S, Information Technology — University of Central Florida
        </div>
          </div>
        <div className="flex justify-center">
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
