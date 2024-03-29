import Head from 'next/head'

import useIntersection from '../hooks/useIntersection'

export default function Home() {
  useIntersection()

  return (
    <div className='dark:text-white'>
      <Head>
        <title>Home</title>
      </Head>
      <div className='mt-[10vh] sm:mt-0 h-[60vh] flex flex-col sm:justify-center'>
        <div>
          <h1 className='mb-5 font-light opacity-0 animate-[fadeInUpAbs.5s_ease-in-out_0.5s_1_normal_forwards] text-sm xl:text-xl'>Hi,</h1>
          <h1 className='opacity-0 font-light animate-[fadeInUpAbs.5s_ease-in-out_0.8s_1_normal_forwards] xl:text-2xl'>My name is James</h1>
        </div>
        <div className='hidden sm:block w-full h-[10vh]'></div>
      </div>
    </div>
  )
}