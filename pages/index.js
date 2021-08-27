import React from 'react'
import Fullpage from '../components/Fullpage'
import { HomepageContainer } from '../styles/home'

export default function Home({ repositories }) {
  console.log(repositories)
  return (
    <HomepageContainer>
      <Fullpage />
    </HomepageContainer>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://api.github.com/users/camarguin/repos')
  const repositories = await res.json()

  if (!repositories) {
    return {
      notFound: true,
    }
  }

  return {
    props: { repositories },
  }
}