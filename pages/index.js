import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MealDotMatch Next</title>
      </Head>
      <Nav />
      <Link href="/quiz">Start Quiz</Link>
    </div>
  )
}
