import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>MealDotMatch Next</title>
      </Head>

      <Nav />
      <span>Been here before?</span>
      <Link href="/quiz">
        <button>Start Quiz</button>
      </Link>

      <span>First time here?</span>
      <Link href="/guidedTour">
        <button>Take A Tour</button>
      </Link>
    </>
  )
}
