export default function Footer() {

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className='col-span-full pointer-events-auto dark:text-white'>
      <div className='flex'>
        <h1>
          Footer
        </h1>
        <button className='mx-20' onClick={scrollTop} >Back to Top</button>
      </div>
    </div>
  )
}