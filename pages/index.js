import Head from 'next/head'

import useIntersection from '../hooks/useIntersection'

export default function Home() {
  useIntersection()

  return (
    <div className='dark:text-white'>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1 className='text-3xl mb-10 opacity-0 animate-[fadeInBounceAbs_.5s_ease-in-out_0.3s_1_normal_forwards]'>Hi, My name is James</h1>
      </div>
    </div>
  )
}
