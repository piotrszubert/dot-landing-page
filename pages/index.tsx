import Head from 'next/head'
import Hero from '@/components/hero'
import KeyFeatures from '@/components/keyFeatures'
import Cta from '@/components/cta'
import HowItWorks from '@/components/howItWorks'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dot. - your personal AI assistent</title>
        <meta name="description" content="Dot. - your personal AI assistent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero/>
        <KeyFeatures/>
        <HowItWorks/>
        <Cta/>
      </Layout>
    </>
  )
}
