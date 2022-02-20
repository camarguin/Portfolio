import React from 'react';
import Fullpage from '../components/Fullpage';
import Footer from '../components/Footer/Footer';
import { HomepageContainer } from '../styles/home';

export default function Home() {
  // console.log(repositories)
  return (
    <HomepageContainer>
      <Fullpage />
      <Footer />
    </HomepageContainer>
  )
}

// export async function getStaticProps(context) {
//   const res = await fetch('https://api.github.com/users/camarguin/repos')
//   const repositories = await res.json()

//   if (!repositories) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { repositories },
//   }
// }