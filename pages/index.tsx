import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>David C Brown | Personal Site</title>
        <meta name="description" content="Welcome to the personal site of David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">David C Brown</h1>
        <div className="text-lg text-primary font-medium mb-6">Fractional CTO & Senior Software Engineer</div>
        <p className="text-lg mb-8 text-dark text-center max-w-xl">
          With over <span className="font-semibold text-highlight">25,000+ hours</span> of engineering experience, I’ve helped launch <span className="font-semibold text-primary">6 products</span> from idea to production and contributed to <span className="font-semibold text-primary">7 startups</span> at every stage.
          <span className="block mt-4">
            I specialize in turning vision into scalable, production-ready technology. My expertise spans full-stack development, product strategy, and technical leadership.
          </span>
          <span className="block mt-4">
            Now, I’m repositioning my career as a <span className="font-semibold text-highlight">Fractional CTO</span> in the <span className="font-semibold text-primary">PropTech industry</span>—leveraging deep experience in the investment side of commercial multifamily and mortgage notes. I help founders and teams accelerate product delivery, make critical technical decisions, and build high-performing engineering organizations.
          </span>
        </p>
        <a
          href="/contact"
          className="px-6 py-2 rounded font-semibold shadow bg-highlight text-accent2"
        >
          Get in Touch
        </a>
        {/* ...existing code... */}
      </main>
    </>
  )
}
