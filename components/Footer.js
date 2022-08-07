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
    <div className='dark:text-white'>
      <h1 className='mb-10'>Footer</h1>
      <button className='pointer-events-auto navButton relative' onClick={scrollTop} >Back to Top</button>
    </div>
  )
}