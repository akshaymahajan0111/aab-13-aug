import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { home } from 'virtual:content';

const siteUrl = 'https://76he8kimy2.preview.c4.test-airoapp.ai';

export default function HomePage() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const greeting = home.greetings[greetingIndex];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Hello World',
        url: `${siteUrl}/`,
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Hello World',
        url: `${siteUrl}/`,
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        name: 'Hello World — A Small Bright Start',
        url: `${siteUrl}/`,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-13',
        dateModified: '2026-08-13',
      },
    ],
  };

  const nextGreeting = () => {
    setGreetingIndex((current) => (current + 1) % home.greetings.length);
  };

  return (
    <>
      <Helmet>
        <title>Hello World — A Small Bright Start</title>
        <meta name="description" content="A small, bright hello world moment." />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content="Hello World — A Small Bright Start" />
        <meta property="og:description" content="A small, bright hello world moment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello World — A Small Bright Start" />
        <meta name="twitter:description" content="A small, bright hello world moment." />
        <meta name="twitter:image" content={`${siteUrl}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="relative flex min-h-[100dvh] overflow-hidden bg-background px-6 py-6 text-foreground sm:px-10 sm:py-9 lg:px-16 lg:py-12">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border-[28px] border-accent sm:-right-16 sm:top-16 sm:h-96 sm:w-96 sm:border-[38px] lg:-right-10 lg:top-10 lg:h-[32rem] lg:w-[32rem] lg:border-[52px]"
          animate={shouldReduceMotion ? undefined : { rotate: [0, 4, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute right-[18%] top-[18%] h-3 w-3 rounded-full bg-primary"
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 flex w-full flex-col">
          <header className="flex items-start justify-between" aria-label="Brand">
            <img
              src="/airo-assets/images/logo/horizontal"
              alt={home.brand.alt}
              width={180}
              height={80}
              loading="eager"
              fetchPriority="high"
              className="block h-auto max-h-10 w-auto max-w-[10rem] object-contain sm:max-h-12 sm:max-w-[12rem]"
            />
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>Today is a good day</span>
            </div>
          </header>

          <section className="relative flex flex-1 items-center py-20 sm:py-24" aria-labelledby="greeting-heading">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-medium tracking-[0.16em] text-muted-foreground">
                {home.detail}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={greeting.headline}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.48, ease: 'easeOut' }}
                >
                  <h1 id="greeting-heading" className="max-w-3xl font-heading text-[clamp(4.25rem,13vw,10.5rem)] leading-[0.86] tracking-[-0.065em] text-foreground">
                    {greeting.headline}
                  </h1>
                  <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    {greeting.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              <Button
                type="button"
                variant="outline"
                onClick={nextGreeting}
                className="mt-10 h-11 rounded-full border-foreground bg-transparent px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background focus-visible:ring-primary"
              >
                {home.button}
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </section>

          <footer className="flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{home.footer}</p>
            <p className="font-medium">Hello World / 2026</p>
          </footer>
        </div>
      </main>
    </>
  );
}
