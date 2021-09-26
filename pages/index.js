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
      <label>Been here before?</label>
      <Link href="/quiz">
        <button>Start Quiz</button>
      </Link>
      <label>First time here?</label>
      <Link href="/guidedTour">
        <button>Take A Tour</button>
      </Link>
    </>
  )
}
