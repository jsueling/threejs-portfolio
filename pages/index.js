import Head from 'next/head'

import useIntersection from '../hooks/useIntersection'

export default function Home() {
  useIntersection()

  return (
    <div className='dark:text-white'>
      <Head>
        <title>Home</title>
      </Head>
      <div className='h-[60vh] flex items-center'>
        <div>
          <h1 className='text-xl mb-5 opacity-0 animate-[fadeInUpAbs.5s_ease-in-out_0.5s_1_normal_forwards]'>Hi,</h1>
          <h1 className='text-2xl opacity-0 animate-[fadeInUpAbs.5s_ease-in-out_0.8s_1_normal_forwards]'>My name is James</h1>
        </div>
      </div>
    </div>
  )
}
