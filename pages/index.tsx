import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import CursorCircle from '@/components/cursorCircle'
import Hero from '@/components/hero'
import KeyFeatures from '@/components/keyFeatures'
import Cta from '@/components/cta'
import HowItWorks from '@/components/howItWorks'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dot. - your personal AI assistent</title>
        <meta name="description" content="Dot. - your personal AI assistent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className}`}>
        <Hero/>
        <KeyFeatures/>
        <HowItWorks/>
        <Cta/>
      </main>
      <CursorCircle />
    </>
  )
}
