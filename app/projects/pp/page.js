'use client'

import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Background from '../../../components/Nav/Background'
import Layout from '../../../components/Nav/Layout'
import Header from '../../../components/Nav/Header'
import Navigation from '../../../components/Nav/Navigation'
import PinballPrice from '../../../components/Projects/PinballPrice'

ReactGA.initialize("G-3QVK5N1Q3E")

export default function PinballPricePage() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/projects/pp" })
  }, [])

  return (
    <>
      <Background />
      <Layout>
        <Header />
        <Navigation />
        <PinballPrice />
      </Layout>
    </>
  )
}
